require "rails_helper"

describe "POST /api/v1/users" do
  let(:user) { build(:user) }
  let(:params) { { user: { email: email, name: name, password: password, password_confirmation: password_confirmation } } }
  let(:headers) { { "Content-Type" => "application/json" } }
  let(:email) { user.email }
  let(:name) { user.name }
  let(:password) { user.password }
  let(:password_confirmation) { password }

  context "with valid params" do
    it "returns a user", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("user/id")
      expect(body).to be_json_eql(%("#{user.email}")).at_path("user/email")
    end

    it "return access token" do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("access_token")
    end

    it { expect { subject }.to change(User, :count).by(1) }
  end

  context "with invalid email" do
    let(:email) { "invalid_email" }

    it "returns a invalid email error", autodoc: true do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/email")
      expect(body).to be_json_eql(%("invalid")).at_path("errors/email/0/error")
    end
  end

  context "with used email address" do
    before { create(:user, email: email) }

    it "returns a token email error", autodoc: true do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/email")
      expect(body).to be_json_eql(%("taken")).at_path("errors/email/0/error")
    end
  end

  context "with easy password" do
    let(:password) { "easy" }

    it "returns a too_short password error", autodoc: true do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/password")
      expect(body).to be_json_eql(%("too_short")).at_path("errors/password/0/error")
    end
  end

  context "without match passwords" do
    let(:password_confirmation) { "invalid_password" }

    it "returns a confirmation password error", autodoc: true do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/password_confirmation")
      expect(body).to be_json_eql(%("confirmation")).at_path("errors/password_confirmation/0/error")
    end
  end
end

describe "GET /api/v1/users/:id" do
  let(:user) { create(:user) }
  let(:emoji) { build(:emoji, user: user) }
  let(:id) { user.id }

  before { emoji.save }

  context "with valid user id" do
    it "return a user profile", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to be_json_eql(user.id).at_path("user/id")
      expect(body).to_not have_json_path("user/email")
    end

    it "return uploaded emojis" do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("user/upload_emojis")
      expect(body).to be_json_eql(emoji.id).at_path("user/upload_emojis/0/id")
    end
  end

  context "with invalid user id" do
    let(:id) { "invalid" }
    it "return a error" do
      is_expected.to eq 404
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end
end

describe "GET /api/v1/users/profile" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }

  context "with valid token" do
    it "return my profile", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to be_json_eql(user.id).at_path("user/id")
      expect(body).to be_json_eql(%("#{user.email}")).at_path("user/email")
    end
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }
    it "return a error" do
      is_expected.to eq 403
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end
end
