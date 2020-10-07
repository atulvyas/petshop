# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_06_135727) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "orderitems", force: :cascade do |t|
    t.integer "petinfo_id"
    t.integer "order_id"
    t.integer "quantity"
    t.integer "price_inr"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id"
    t.integer "petstore_id"
    t.integer "orderstate_id"
    t.string "address"
    t.integer "pincode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orderstates", force: :cascade do |t|
    t.string "order_status"
  end

  create_table "petinfos", force: :cascade do |t|
    t.integer "petscategory_id"
    t.integer "petstore_id"
    t.string "image_url"
    t.integer "price_inr"
    t.integer "height_infeet"
    t.integer "weight_inkg"
    t.integer "age"
    t.string "gender"
    t.string "breed_type"
    t.string "medical_certificate"
    t.text "precautions"
    t.text "description"
    t.text "other_stuff"
  end

  create_table "pets", force: :cascade do |t|
    t.integer "petscategory_id"
    t.integer "petstore_id"
    t.string "image_url"
    t.integer "price_inr"
    t.integer "height_infeet"
    t.integer "weight_inkg"
    t.integer "age"
    t.string "gender"
    t.string "breed_type"
    t.string "medical_certificate"
    t.text "precautions"
    t.text "description"
    t.text "other_stuff"
  end

  create_table "petscategories", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "petstores", force: :cascade do |t|
    t.string "shop_name"
    t.string "street"
    t.string "locality"
    t.string "city"
    t.string "state"
    t.integer "pincode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.integer "contact"
    t.boolean "is_admin", default: false
    t.boolean "has_store", default: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
