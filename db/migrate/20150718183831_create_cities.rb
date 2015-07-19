class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
    	t.integer  :country_id
      t.string   :name
      t.string   :lat
      t.string   :long

      t.timestamps null: false
    end
  end
end
