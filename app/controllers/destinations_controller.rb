class DestinationsController < ApplicationController

  def show
  end

  def index
    p "*sdflsdfosdfliuashdfliauhilahliuhglirgh"
    @country = Country.where(code: params[:code]).first
    @warnings = @country.warnings
    @destinations = @country.destinations
    render partial: "destinations", layout: false, locals: {destinations: @destinations, warnings: @warnings}
  end
end
