class Country < ActiveRecord::Base
	has_many :warnings
	has_many :cities
	has_many :destinations
	has_many :images
end
