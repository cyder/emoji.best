require "rails_helper"

describe User do
  it "is valid with correct param" do
    user = build(:user)
    expect(user).to be_valid
  end
end
