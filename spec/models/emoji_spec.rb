require "rails_helper"

describe Emoji do
  context "with valid params" do
    it "is valid with correct param" do
      emoji = build(:emoji)
      expect(emoji).to be_valid
    end
  end

  it "is invalid with ひらがな name" do
    emoji = build(:emoji, name: "えもじ")
    expect(emoji).to_not be_valid
  end

  it "is replace space" do
    emoji = build(:emoji, name: "sample emoji")
    emoji.valid?
    expect(emoji.name).to eq("sample_emoji")
  end
end
