require "rails_helper"

describe "POST /api/v1/users" do
  let(:user) { build(:user) }
  let(:params) { { user: { email: email, name: name, password: password, password_confirm: password_confirm } } }
  let(:email) { user.email }
  let(:name) { user.name }
  let(:password) { user.password }
  let(:password_confirm) { user.password }

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
