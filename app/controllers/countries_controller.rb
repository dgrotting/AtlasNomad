class CountriesController < ApplicationController

  def show
  end

  def index
    @country = Country.where(code: params[:code]).first
    @warnings = @country.warnings
    render partial: "info", layout: false, locals: {country: @country, warnings: @warnings}
  end
end
