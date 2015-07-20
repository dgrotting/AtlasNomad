class CountriesController < ApplicationController

  def show
  end

  def index
    @country = Country.where(code: params[:code]).first
    render partial: "info", layout: false, locals: {country: @country}
  end
end
