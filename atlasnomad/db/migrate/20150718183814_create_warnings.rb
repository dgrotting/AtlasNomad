class CreateWarnings < ActiveRecord::Migration
  def change
    create_table :warnings do |t|
    	t.integer  :country_id
      t.string   :type
      t.string   :date
      t.string   :location
      t.string   :warning_link

      t.timestamps null: false
    end
  end
end
