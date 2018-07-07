class TmpEmojiUploader < CarrierWave::Uploader::Base
  def store_dir
    "uploads/tmp/"
  end

  def extension_whitelist
    %w[jpg jpeg gif png]
  end

  def filename
    "#{SecureRandom.uuid}.#{file.extension}" if original_filename
  end
end
