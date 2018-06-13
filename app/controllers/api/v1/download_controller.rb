class Api::V1::DownloadController < ApplicationController
  ZIP_FILENAME = "emojis.zip".freeze

  def index
    zip_filepath = Rails.root.join("public", "uploads", "zip", "#{SecureRandom.uuid}.zip")
    Zip::File.open(zip_filepath, Zip::File::CREATE) do |zipfile|
      params[:emojis].each do |id|
        file = Emoji.find(id).image.slack.file
        zipfile.add(file.basename, file.path)
      end
    end
    send_file(zip_filepath, filename: ZIP_FILENAME)
  end
end
