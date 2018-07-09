describe SearchLog do
  it "is valid with correct param" do
    search_log = build(:search_log)
    expect(search_log).to be_valid
  end
end
