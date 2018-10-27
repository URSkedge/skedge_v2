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

ActiveRecord::Schema.define(version: 2018_10_27_004906) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "courses", force: :cascade do |t|
    t.string "title"
    t.string "number"
    t.string "credits"
    t.text "description"
    t.text "restrictions"
    t.text "prereqs"
    t.text "crosslisted"
    t.text "comments"
    t.integer "term"
    t.integer "year"
    t.integer "yr_term"
    t.integer "min_enroll"
    t.integer "min_start"
    t.integer "max_start"
    t.bigint "department_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_courses_on_department_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.string "short"
    t.integer "school"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "enrollments", force: :cascade do |t|
    t.bigint "schedule_id"
    t.bigint "section_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["schedule_id"], name: "index_enrollments_on_schedule_id"
    t.index ["section_id"], name: "index_enrollments_on_section_id"
  end

  create_table "instructors", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schedules", force: :cascade do |t|
    t.string "rid"
    t.integer "yr_term"
    t.integer "term"
    t.integer "year"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_schedules_on_user_id"
  end

  create_table "sections", force: :cascade do |t|
    t.integer "status"
    t.string "building"
    t.string "room"
    t.string "days"
    t.string "instructors"
    t.integer "start_time"
    t.integer "end_time"
    t.integer "sec_enroll"
    t.integer "sec_cap"
    t.integer "tot_enroll"
    t.integer "tot_cap"
    t.integer "crn"
    t.integer "section_type"
    t.string "abc_section"
    t.string "abc_week"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_sections_on_course_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "secret"
    t.integer "last_schedule_id"
    t.string "fb_id"
    t.boolean "public_sharing", default: true
    t.integer "friend_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
