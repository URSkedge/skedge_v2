class Section < ApplicationRecord

  module Status
    Open = 0
    Closed = 1
    Cancelled = 2
  end

  module Type
    Course = 0
    Lab = 1
    Recitation = 2
    LabLecture = 3
    Workshop = 4
  end

  belongs_to :course

  validates :crn, presence: true, uniqueness: true
  validates :course_id, presence: true

  def hour(start_or_end)
    send(:"#{start_or_end}_time").to_s.rjust(4,"0")[0..1].to_i #first two, accounting for 3-digits, ie, "940"
  end

  def minutes(start_or_end)
    send(:"#{start_or_end}_time").to_s[-2..-1].to_i #last 2
  end

  def time_in_hours(start_or_end)
    hour(start_or_end)+minutes(start_or_end)/60.0
  end

  def duration
    time_in_hours(:end) - time_in_hours(:start)
  end

  def cap
    (sec_cap == 999 ? nil : sec_cap) || tot_cap
  end

  def enroll
    [(sec_enroll || 0), (tot_enroll || 0)].max
  end

  def no_cap?
    cap == 0 || cap == nil || cap == 999
  end

  def time_tba?
    days == "TBA"
  end

end

# == Schema Information
#
# Table name: sections
#
#  id           :bigint(8)        not null, primary key
#  abc_section  :string
#  abc_week     :string
#  building     :string
#  crn          :integer
#  days         :string
#  end_time     :integer
#  instructors  :string
#  room         :string
#  sec_cap      :integer
#  sec_enroll   :integer
#  section_type :integer
#  start_time   :integer
#  status       :integer
#  tot_cap      :integer
#  tot_enroll   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  course_id    :bigint(8)
#
# Indexes
#
#  index_sections_on_course_id  (course_id)
#
