require "rails_helper"

describe Emoji do
  it "is valid with correct param" do
    emoji = build(:emoji)
    expect(emoji).to be_valid
  end
end
