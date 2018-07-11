require "rails_helper"

describe User do
  it "is valid with correct param" do
    user = build(:user)
    expect(user).to be_valid
  end

  context "with sns" do
    let(:user) { build(:user_with_twitter) }
    before { user.save validate: false }

    it "can be updated." do
      user.update(name: "updated name")
      expect(user).to be_valid
    end
  end
end
