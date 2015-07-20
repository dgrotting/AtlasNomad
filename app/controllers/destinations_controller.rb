class DestinationsController < ApplicationController

  def show
  end

  def index
    p "*sdflsdfosdfliuashdfliauhilahliuhglirgh"
    @country = Country.where(code: params[:code]).first
    @destinations = @country.destinations
    render partial: "destinations", layout: false, locals: {destinations: @destinations}
  end
end
