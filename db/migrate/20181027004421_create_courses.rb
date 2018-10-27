class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string  :title
      t.string  :number
      t.string  :credits
      t.text    :description
      t.text    :restrictions
      t.text    :prereqs
      t.text    :crosslisted
      t.text    :comments
      t.integer :term
      t.integer :year
      t.integer :yr_term
      t.integer :min_enroll
      t.integer :min_start
      t.integer :max_start

      t.references :department
      t.timestamps
    end
  end
end
