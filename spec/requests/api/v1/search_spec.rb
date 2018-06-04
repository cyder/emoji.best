require "rails_helper"

describe "GET /api/v1/search" do
  let(:emoji) { build(:emoji) }
  let(:download_log) { build(:download_log) }
  let(:tag) { build(:tag) }
  let(:new) { "new" }
  let(:popular) { "popular" }
  let(:keyword) { "tag_name" }

  context "with valid params" do
    let(:params) { { order: new, num: 10, keyword: keyword } }
    before do
      download_log.save
      emoji.save
      tag.save
    end

    it "returns a emojis", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("emojis")
      expect(body).to be_json_eql(%("#{emoji.name}")).at_path("emojis/0/name")
    end
  end
end
