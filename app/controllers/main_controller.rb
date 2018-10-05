class MainController < ApplicationController

  before_action :force_json, only: :search

  def index; end

  def search
    @quotes = Quote.ransack(text_or_author_cont: params[:q]).result(distinct: true).limit(5)
  end

  private

  def force_json
    request.format = :json
  end
end