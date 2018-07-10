class EmojiUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  version :large do
    process create_square_version: 512
  end

  version :thumb, from_version: :large do
    process resize_to_limit: [256, 256]
  end

  version :slack, from_version: :large do
    process resize_to_limit: [128, 128]
  end

  def create_square_version(max)
    image = MiniMagick::Image.open(current_path)
    width = image[:width]
    height = image[:height]
    length = [width, height, max].min
    resize_to_fill(length, length)
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
