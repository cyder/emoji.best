require "rails_helper"

describe "POST /api/v1/emojis" do
  let(:user) { create(:user) }
  let(:access_token) { create(:access_token, user: user) }
  let(:headers) { { "Authorization" => access_token.token } }
  let(:filepath) { Rails.root.join("spec", "fixtures", "images", "indian.png") }
  let(:image) { Rack::Test::UploadedFile.new(filepath) }
  let(:name) { "name" }
  let(:description) { "description" }
  let(:params) { { emoji: { name: name, description: description, image: image } } }

  it "returns a emoji", autodoc: true do
    is_expected.to eq 200
    body = response.body
    expect(body).to be_json_eql(%("#{name}")).at_path("emoji/name")
    expect(body).to be_json_eql(user.id).at_path("emoji/user/id")
  end

  it { expect { subject }.to change(Emoji, :count).by(1) }

  context "with invalid params" do
    let(:image) { nil }

    it "returns a invalid email error" do
      is_expected.to eq 400
      body = response.body
      expect(body).to have_json_path("errors/image")
      expect(body).to be_json_eql(%("blank")).at_path("errors/image/0/error")
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
