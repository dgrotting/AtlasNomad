class DestinationsController < ApplicationController

  def show
  end

  def index
    @country = Country.where(code: params[:code]).first
    @warnings = @country.warnings
    @images = @country.images
    @destinations = @country.destinations
    render partial: "destinations", layout: false, locals: {destinations: @destinations, warnings: @warnings, images: @images}
  end
end
