# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150719224129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.integer  "country_id"
    t.string   "name"
    t.string   "lat"
    t.string   "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countries", force: :cascade do |t|
    t.string   "name"
    t.string   "official_name"
    t.string   "code"
    t.string   "flag"
    t.string   "passport_validity"
    t.string   "passport_pages"
    t.string   "tourist_visa"
    t.string   "vaccinations"
    t.string   "entry_currency"
    t.string   "exit_currency"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "destinations", force: :cascade do |t|
    t.integer  "country_id"
    t.string   "name"
    t.string   "desc"
    t.string   "pic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "warnings", force: :cascade do |t|
    t.integer  "country_id"
    t.string   "warning_type"
    t.string   "date"
    t.string   "location"
    t.string   "warning_link"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

end
