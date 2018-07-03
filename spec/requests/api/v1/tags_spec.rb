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
      body = response.body
      expect(body).to be_json_eql(%("#{name}")).at_path("tag/name")
      expect(body).to be_json_eql(emoji_id).at_path("tag/emoji/id")
    end

    it { expect { subject }.to change(Tag, :count).by(1) }
  end

  context "with invalid name" do
    let(:name) { nil }

    it "returns a invalid name error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/name")
      expect(body).to be_json_eql(%("blank")).at_path("errors/name/0/error")
    end
  end

  context "with invalid emoji" do
    let(:emoji_id) { "invalid" }

    it "returns a invalid name error" do
      is_expected.to eq 404
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }

    it "return a error" do
      is_expected.to eq 403
      body = response.body
      expect(body).to have_json_path("errors/error")
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
      body = response.body
      expect(body).to be_json_eql(emoji_id).at_path("emoji/id")
    end

    it { expect { subject }.to change(Tag, :count).by(-1) }
  end

  context "with invalid tag" do
    let(:id) { "invalid" }

    it "returns a invalid name error" do
      is_expected.to eq 404
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end

  context "with invalid emoji" do
    let(:emoji_id) { "invalid" }

    it "returns a invalid name error" do
      is_expected.to eq 404
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end

  context "without access token" do
    let(:headers) { { "Authorization" => nil } }

    it "return a error" do
      is_expected.to eq 403
      body = response.body
      expect(body).to have_json_path("errors/error")
    end
  end
end
