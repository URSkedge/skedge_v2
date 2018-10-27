require 'rails_helper'

RSpec.describe Section, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
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
