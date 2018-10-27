class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.string  :rid
      t.integer :yr_term
      t.integer :term
      t.integer :year

      t.references :user
      t.timestamps
    end
  end
end
