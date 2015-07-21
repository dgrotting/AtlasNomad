class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer  :country_id
      t.string   :desc
      t.string   :url

      t.timestamps null: false
    end
  end
end
