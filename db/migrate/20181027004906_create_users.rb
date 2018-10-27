class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string  :secret
      t.integer :last_schedule_id
      t.string  :fb_id
      t.boolean :public_sharing,   default: true
      t.integer :friend_count
      t.timestamps
    end
  end
end
