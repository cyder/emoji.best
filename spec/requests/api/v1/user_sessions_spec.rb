require "rails_helper"

describe "GET /api/v1/users/check" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }

  context "with valid access token" do
    it "return return a user", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["user"]["id"]).to eq user.id
      expect(json["user"]["name"]).to eq user.name
    end
  end

  context "with invalid access token" do
    let(:headers) { { "Authorization" => "invalid" } }

    it "return return a user" do
      is_expected.to eq 403
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }

    it "return return a user" do
      is_expected.to eq 403
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end
end

describe "POST /api/v1/users/sign_in" do
  let(:user) { build(:user) }
  let(:params) { { user: { email: email, password: password } } }
  let(:email) { user.email }
  let(:password) { user.password }

  context "with valid params" do
    before { create(:user, email: email) }

    it "should be able to sign in", autodoc: true do
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

    it { expect { subject }.to change(AccessToken, :count).by(1) }
  end

  context "with invalid params" do
    let(:params) { nil }
    it "should be return error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end

  context "with not found email" do
    let(:email) { "invalid_email" }

    it "should be return 404 error" do
      is_expected.to eq 404
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end

  context "with password incorrect" do
    before { create(:user, email: email) }
    let(:password) { "invalid_password" }

    it "should be return error code 2" do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/password")
      expect(body).to be_json_eql(%("incorrect")).at_path("errors/password/0/error")
    end
  end
end

describe "DELETE /api/v1/users/sign_out" do
  let(:user) { build(:user) }
  let(:access_token) { build(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }

  before { access_token.save }

  context "with valid params" do
    it "should be able to sign out", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("user/id")
      expect(body).to be_json_eql(%("#{user.email}")).at_path("user/email")
    end

    it { expect { subject }.to change(AccessToken, :count).by(-1) }
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }
    it "return a error" do
      is_expected.to eq 403
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end

  context "with invalid token" do
    let(:headers) { { "Authorization" => "invalid token" } }
    it "return a error" do
      is_expected.to eq 403
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end
end
