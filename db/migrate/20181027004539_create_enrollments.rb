class CreateEnrollments < ActiveRecord::Migration[5.2]
  def change
    create_table :enrollments do |t|
      t.references :schedule
      t.references :section
      t.timestamps
    end
  end
end
