require "rails_helper"

describe "POST /api/v1/users" do
  let(:user) { build(:user) }
  let(:params) { { user: { email: email, name: name, password: password } } }
  let(:email) { user.email }
  let(:name) { user.name }
  let(:password) { user.password }

  context "with valid params" do
    it "returns a user" do
      is_expected.to eq 200
      body = response.body
      p body
    end
  end
end
