class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.integer :status
      t.string  :building
      t.string  :room
      t.string  :days
      t.string  :instructors
      t.integer :start_time
      t.integer :end_time
      t.integer :sec_enroll
      t.integer :sec_cap
      t.integer :tot_enroll
      t.integer :tot_cap
      t.integer :crn
      t.integer :section_type
      t.string  :abc_section
      t.string  :abc_week

      t.references :course

      t.timestamps
    end
  end
end
