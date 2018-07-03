require "rails_helper"

describe "POST /api/v1/emojis/:emoji_id/tags" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }
  let(:emoji) { create(:emoji) }
  let(:emoji_id) { emoji.id }
  let(:name) { "tag_name" }
  let(:params) { { tag: { name: name } } }

  context "with valid params" do
    it "returns a tag", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["tag"]["name"]).to eq name
      expect(json["tag"]["emoji"]["id"]).to eq emoji_id
    end

    it { expect { subject }.to change(Tag, :count).by(1) }
  end

  context "with invalid name" do
    let(:name) { nil }

    it "returns a invalid name error" do
      is_expected.to eq 400
      json = JSON.parse(response.body)
      expect(json["errors"]["name"][0]["error"]).to eq "blank"
    end
  end

  context "with invalid emoji" do
    let(:emoji_id) { "invalid" }

    it "returns a invalid name error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }

    it "return a error" do
      is_expected.to eq 403
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end
end

describe "DELETE /api/v1/emojis/:emoji_id/tags/:id" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }
  let(:emoji) { create(:emoji) }
  let(:tag) { build(:tag, emoji: emoji) }
  let(:emoji_id) { emoji.id }
  let(:id) { tag.id }

  before { tag.save! }

  context "with valid params" do
    it "returns a emoij", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["emoji"]["id"]).to eq emoji_id
    end

    it { expect { subject }.to change(Tag, :count).by(-1) }
  end

  context "with invalid tag" do
    let(:id) { "invalid" }

    it "returns a invalid name error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end

  context "with invalid emoji" do
    let(:emoji_id) { "invalid" }

    it "returns a invalid name error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }

    it "return a error" do
      is_expected.to eq 403
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end
end
