require "rails_helper"

describe "GET /api/v1/emojis/:id/download" do
  let(:id) { create(:emoji).id }

  context "with valid params" do
    it "returns image file", autodoc: true do
      is_expected.to eq 200
      header = response.header
      expect(header["Content-Type"]).to eq "image/png"
    end

    it { expect { subject }.to change(DownloadLog, :count).by(1) }
  end

  context "with invalid params" do
    let(:id) { -1 }

    it "returns 404 error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end
end

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

  context "with access token" do
    let(:user) { create(:user) }
    let(:access_token) { create(:access_token, user: user) }
    let(:headers) { { "Authorization" => access_token.token } }

    it { expect { subject }.to change(DownloadLog, :count).by(emojis.size) }
    it { expect { subject }.to change(user.download_logs, :count).by(emojis.size) }
  end
end
