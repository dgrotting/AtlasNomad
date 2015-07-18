class Country < ActiveRecord::Base
	has_many :warnings
	has_many :cities
end
