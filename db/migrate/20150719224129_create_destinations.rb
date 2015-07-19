class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.integer  :country_id
      t.string   :name
      t.string   :desc
      t.string   :pic

      t.timestamps null: false
    end
  end
end
