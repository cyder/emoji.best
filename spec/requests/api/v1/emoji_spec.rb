require "rails_helper"

describe "POST /api/v1/emojis" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }
  let(:image) { "http://cyder.jp/images/twitter-white.png" }
  let(:name) { "name" }
  let(:description) { "description" }
  let(:params) { { emoji: { name: name, description: description, image: image } } }

  context "with valid params" do
    it "returns a emoji", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["emoji"]["name"]).to eq name
      expect(json["emoji"]["user"]["id"]).to eq user.id
    end

    it { expect { subject }.to change(Emoji, :count).by(1) }
  end

  context "with invalid params" do
    let(:image) { nil }

    it "returns a invalid email error" do
      is_expected.to eq 400
      json = JSON.parse(response.body)
      expect(json["errors"]["image"]).to be_present
      expect(json["errors"]["image"][0]["error"]).to eq "blank"
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

describe "GET /api/v1/emojis/:id" do
  context "with valid id" do
    let(:emoji) { create(:emoji) }
    let(:id) { emoji.id }

    it "returns a emoji", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["emoji"]["id"]).to eq id
      expect(json["emoji"]["name"]).to eq emoji.name
    end
  end

  context "with invalid id" do
    let(:id) { -1 }

    it "returns a 404 error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end
end

describe "POST /api/v1/emojis/upload" do
  let(:access_token) { create(:access_token, user: create(:user)) }
  let(:headers) { { "Authorization" => access_token.token } }
  let(:filepath) { Rails.root.join("spec", "fixtures", "images", "indian.png") }
  let(:image) { Rack::Test::UploadedFile.new(filepath) }
  let(:params) { { image: image } }

  context "with valid image" do
    it "returns a url", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["url"]).to be_present
    end
  end

  context "with invalid image" do
    let(:params) { { image: "invalid" } }

    it "returns a url" do
      is_expected.to eq 400
      json = JSON.parse(response.body)
      expect(json["errors"]["image"]).to be_present
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

describe "PATCH /api/v1/emojis/:id" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:id) { create(:emoji, user: user).id }
  let(:headers) { { "Authorization" => access_token.token } }
  let(:name) { "changed_name" }
  let(:description) { "changed_description" }
  let(:params) { { emoji: { name: name, description: description } } }

  context "with valid params" do
    it "returns a emoji", autodoc: true do
      is_expected.to eq 200
      json = JSON.parse(response.body)
      expect(json["emoji"]["id"]).to eq id
      expect(json["emoji"]["name"]).to eq name
    end
  end

  context "with invalid params" do
    let(:params) { { emoji: { name: nil } } }

    it "returns a invalid name error" do
      is_expected.to eq 400
      json = JSON.parse(response.body)
      expect(json["errors"]["name"]).to be_present
      expect(json["errors"]["name"][0]["error"]).to eq "blank"
    end
  end

  context "with invalid id" do
    let(:id) { -1 }

    it "returns a 404 error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end

  context "with not my emoji id" do
    let(:id) { create(:emoji).id }

    it "returns a 404 error" do
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

describe "DELETE /api/v1/emojis/:id" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:emoji) { build(:emoji, user: user) }
  let(:id) { emoji.id }
  let(:headers) { { "Authorization" => access_token.token } }

  before { emoji.save }

  context "with valid params" do
    it "returns a 200", autodoc: true do
      is_expected.to eq 200
    end

    it { expect { subject }.to change(Emoji, :count).by(-1) }
  end

  context "with invalid id" do
    let(:id) { -1 }

    it "returns a 404 error" do
      is_expected.to eq 404
      json = JSON.parse(response.body)
      expect(json["errors"]["error"]).to be_present
    end
  end

  context "with not my emoji id" do
    let(:id) { create(:emoji).id }

    it "returns a 404 error" do
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
