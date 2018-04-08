require "rails_helper"

describe "POST /api/v1/users" do
  let(:user) { build(:user) }
  let(:params) { { user: { email: email, name: name, password: password, password_confirmation: password_confirmation } } }
  let(:email) { user.email }
  let(:name) { user.name }
  let(:password) { user.password }
  let(:password_confirmation) { password }

  context "with invalid email" do
    let(:email) { nil }
    it "returns a error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to be_json_eql(%("Failed")).at_path("result")
      expect(body).to be_json_eql(0).at_path("error/code")
    end
  end

  context "with used email address" do
    before { user.save }

    it "returns a error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to be_json_eql(%("Failed")).at_path("result")
      expect(body).to be_json_eql(1).at_path("error/code")
    end
  end

  context "with easy password" do
    let(:password) { "aaa" }

    it "returns a error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to be_json_eql(%("Failed")).at_path("result")
      expect(body).to be_json_eql(2).at_path("error/code")
    end
  end

  context "without match passwords" do
    let(:password_confirmation) { "invalid_password" }
    it "returns a error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to be_json_eql(%("Failed")).at_path("result")
      expect(body).to be_json_eql(3).at_path("error/code")
    end
  end

  context "with valid params" do
    it "returns a user" do
      is_expected.to eq 200
      body = response.body
      expect(body).to be_json_eql(%("Success")).at_path("result")
      expect(body).to be_json_eql(%("#{user.email}")).at_path("user/email")
    end

    it { expect { subject }.to change(User, :count).by(1) }
  end
end
