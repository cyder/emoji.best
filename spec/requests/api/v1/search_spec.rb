require "rails_helper"

describe "GET /api/v1/search" do
  let(:emoji) { build(:emoji) }

  context "with valid params" do
    before { emoji.save }
    it "returns a emojis", autodoc: true do
      is_expected.to eq 200
      body = response.body
      expect(body).to have_json_path("emojis")
      expect(body).to be_json_eql(%("#{emoji.name}")).at_path("emojis/0/name")
    end
  end
end
