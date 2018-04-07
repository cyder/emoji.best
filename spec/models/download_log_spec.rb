require "rails_helper"

describe DownloadLog do
  it "is valid with correct param" do
    download_log = build(:download_log)
    expect(download_log).to be_valid
  end
end
