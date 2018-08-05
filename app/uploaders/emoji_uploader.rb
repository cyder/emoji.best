class EmojiUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  version :large do
    process resize_to_limit: [512, 512]
  end

  version :thumb do
    process resize_to_limit: [256, 256]
  end

  version :slack, from_version: :thumb do
    process resize_to_limit: [128, 128]
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
