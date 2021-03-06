if Rails.env.production?
  CarrierWave.configure do |config|
    config.fog_provider = "fog/aws"
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],
      aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
      region: ENV["AWS_REGION"],
    }
    config.fog_public = true
    config.fog_directory = ENV["AWS_S3_BUCKET"]
    config.asset_host = ENV["AWS_CLOUD_FRONT"]
    config.storage = :fog
    config.cache_storage = :fog
  end
else
  CarrierWave.configure do |config|
    config.storage = :file
    config.asset_host = "http://localhost:3000"
  end
end
