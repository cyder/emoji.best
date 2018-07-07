if Rails.env.production?
  CarrierWave.configure do |config|
    config.storage = :fog
  end
else
  CarrierWave.configure do |config|
    config.storage = :file
    config.asset_host = 'http://localhost:3000'
  end
end
