class EmojiUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  version :thumb do
    process resize_to_limit: [256, 256]
  end

  version :slack, from_version: :thumb do
    process resize_to_limit: [128, 128]
  end

  version :ogp, from_version: :thumb do
    process resize_to_fit: [200, 200]
    process resize_and_pad: [200, 200, "#ffffff"]
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{model.id}/#{(version_name || "original")}"
  end

  def full_filename(for_file)
    model.new_record? ? super(for_file) : for_file
  end

  def extension_whitelist
    %w[jpg jpeg gif png]
  end

  def filename
    "#{model.name}.#{file.extension}" if original_filename
  end
end
