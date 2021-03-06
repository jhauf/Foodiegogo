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

ActiveRecord::Schema.define(version: 20161110191208) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_contributions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "campaigns", force: :cascade do |t|
    t.string  "name",          null: false
    t.integer "goal_amt",      null: false
    t.integer "current_amt"
    t.text    "description",   null: false
    t.date    "end_date",      null: false
    t.string  "picture_url"
    t.integer "campaigner_id"
    t.string  "video_url"
    t.string  "category"
  end

  create_table "contributions", force: :cascade do |t|
    t.date    "date",           null: false
    t.integer "donation_amt",   null: false
    t.integer "campaign_id",    null: false
    t.integer "contributor_id", null: false
    t.integer "perk_id"
  end

  add_index "contributions", ["campaign_id"], name: "index_contributions_on_campaign_id", using: :btree
  add_index "contributions", ["contributor_id"], name: "index_contributions_on_contributor_id", using: :btree
  add_index "contributions", ["perk_id"], name: "index_contributions_on_perk_id", using: :btree

  create_table "perks", force: :cascade do |t|
    t.string  "name",            null: false
    t.integer "donation_amt",    null: false
    t.string  "description"
    t.integer "campaign_id"
    t.integer "contribution_id"
  end

  add_index "perks", ["campaign_id"], name: "index_perks_on_campaign_id", using: :btree
  add_index "perks", ["contribution_id"], name: "index_perks_on_contribution_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "picture_url"
    t.text     "description"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
