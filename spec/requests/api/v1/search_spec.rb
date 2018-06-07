require "rails_helper"

describe "GET /api/v1/search" do
  let(:emojis) { [normal_emoji, downloaded_emoji, tagged_emoji, keyword_emoji] }
  let(:normal_emoji) { build(:emoji, name: "normal emoji") }
  let(:downloaded_emoji) { build(:emoji, name: "downloaded emoji") }
  let(:tagged_emoji) { build(:emoji, name: "taggedemoji") }
  let(:keyword_emoji) { build(:emoji, name: "keyword emoji") }
  let(:download_log) { build(:download_log, emoji: downloaded_emoji) }
  let(:tag) { build(:tag, emoji: tagged_emoji) }

  before do
    emojis.each(&:save)
    tag.save
    download_log.save
  end

  context "without params" do
    it "returns all emojis", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("emojis")
      expect(body).to be_json_eql(emojis.size).at_path("total")
    end
  end

  context "with keyword" do
    let(:params) { { keyword: "keyword" } }

    it "returns a keyword_emoji", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to be_json_eql(keyword_emoji.id).at_path("emojis/0/id")
      expect(body).to be_json_eql(%("#{keyword_emoji.name}")).at_path("emojis/0/name")
    end
  end

  context "with new order" do
    let(:params) { { order: "new" } }

    it "returns a newst emoji", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to be_json_eql(emojis.last.id).at_path("emojis/0/id")
      expect(body).to be_json_eql(%("#{emojis.last.name}")).at_path("emojis/0/name")
    end
  end

  context "with popular order" do
    let(:params) { { order: "popular" } }

    it "returns a downloaded_emoji", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to be_json_eql(downloaded_emoji.id).at_path("emojis/0/id")
      expect(body).to be_json_eql(%("#{downloaded_emoji.name}")).at_path("emojis/0/name")
    end
  end
end
