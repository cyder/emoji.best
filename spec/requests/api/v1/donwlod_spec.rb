require "rails_helper"

describe "GET /api/v1/download" do
  let(:emoji1) { create(:emoji, name: "emoji1") }
  let(:emoji2) { create(:emoji, name: "emoji2") }
  let(:emojis) { [emoji1.id, emoji2.id] }
  let(:params) { { emojis: emojis } }

  context "with valid params" do
    it "returns zip file", autodoc: true do
      is_expected.to eq 200
      header = response.header
      expect(header["Content-Type"]).to eq "application/zip"
    end

    it { expect { subject }.to change(DownloadLog, :count).by(emojis.size) }
  end

  context "with same name emojis" do
    let(:name) { "same_name_emoji" }
    let(:emoji1) { create(:emoji, name: name) }
    let(:emoji2) { create(:emoji, name: name) }

    it "returns zip file" do
      is_expected.to eq 200
      header = response.header
      expect(header["Content-Type"]).to eq "application/zip"
    end
  end
end
