require "rails_helper"

describe Emoji do
  context "with valid params" do
    it "is valid with correct param" do
      emoji = build(:emoji)
      expect(emoji).to be_valid
    end
  end

  context "without description" do
    it "is valid with correct param" do
      emoji = build(:emoji, description: nil)
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

  describe "find_with_logging" do
    let(:emoji) { create(:emoji) }

    context "without user token" do
      subject { Emoji.find_with_logging!(emoji.id) }
      it { expect { subject }.to change(DownloadLog, :count).by(1) }
    end

    context "with user token" do
      let(:user) { create(:user) }
      subject { Emoji.find_with_logging!(emoji.id, user) }
      it { expect { subject }.to change(user.download_logs, :count).by(1) }
    end
  end
end
