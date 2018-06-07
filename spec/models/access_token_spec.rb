require "rails_helper"

describe AccessToken do
  let(:access_token) { build(:access_token) }

  it { expect(access_token).to be_valid }
  it { expect { access_token.save }.to change{ access_token.token } }
  it { expect { access_token.save }.to change{ access_token.expires_at } }
end
