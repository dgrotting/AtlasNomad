class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string   :name
      t.string   :official_name
      t.string   :code
      t.string   :flag
      t.string   :passport_validity
      t.string   :passport_pages
      t.string   :tourist_visa
      t.string   :vaccinations
      t.string   :entry_currency
      t.string   :exit_currency
      t.string   :climate
      t.string   :terrain
      t.string   :nat_res
      t.string   :languages
      t.string   :religions
      t.string   :capital
      t.string   :volts
      t.string   :sockets
      t.boolean  :need_converter
      t.string   :ppp

      t.timestamps null: false
    end
  end
end