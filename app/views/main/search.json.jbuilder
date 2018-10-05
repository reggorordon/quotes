json.quotes do
  json.array!(@quotes) do |quote|
    json.text quote.text
    json.author quote.author
  end
end
