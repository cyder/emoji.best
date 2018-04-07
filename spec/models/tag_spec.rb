require "rails_helper"

describe Tag do
  it "is valid with correct param" do
    tag = build(:tag)
    expect(tag).to be_valid
  end
end
