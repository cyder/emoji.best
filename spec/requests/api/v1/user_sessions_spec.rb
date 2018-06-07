require "rails_helper"

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
  end

  context "with invalid params" do
    let(:params) { nil }
    it "should be return error code 0" do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/param")
      expect(body).to be_json_eql(%("Bad Parameter")).at_path("errors/param/0/error")
    end
  end

  context "with not found email" do
    let(:email) { "invalid_email" }

    it "should be return error code 1" do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/email")
      expect(body).to be_json_eql(%("invalid")).at_path("errors/email/0/error")
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
