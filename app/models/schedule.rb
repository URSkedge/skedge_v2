class Schedule < ApplicationRecord

  validates :rid, uniqueness: true
  validates :yr_term, uniqueness: { scope: :user_id }, presence: true

  belongs_to :user
  has_many :enrollments
  has_many :sections, through: :enrollments

  before_create :assign_rid

  def assign_rid
    if self.rid.nil?
      begin
        r = (rand(9000)+1000).to_s #don't allow leading 0's
      end while Schedule.find_by(rid:r)
      self.rid = r
    end
  end

  def sections_description
    sections.map do |s|
      "#{s.course.department.short} #{s.course.number}"
    end.join(", ")
  end

  def total_credits
    sections.inject(0) do |sum, s|
      if s.section_type == Section::Type::Course
        sum + s.course.credits.to_i
      else
        sum
      end
    end
  end

  def description
    "#{Course::FormatTerm[term]} #{year}"
  end

end

# == Schema Information
#
# Table name: schedules
#
#  id         :bigint(8)        not null, primary key
#  rid        :string
#  term       :integer
#  year       :integer
#  yr_term    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint(8)
#
# Indexes
#
#  index_schedules_on_user_id  (user_id)
#
