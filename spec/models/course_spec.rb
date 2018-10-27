require 'rails_helper'

RSpec.describe Course, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

# == Schema Information
#
# Table name: courses
#
#  id            :bigint(8)        not null, primary key
#  comments      :text
#  credits       :string
#  crosslisted   :text
#  description   :text
#  max_start     :integer
#  min_enroll    :integer
#  min_start     :integer
#  number        :string
#  prereqs       :text
#  restrictions  :text
#  term          :integer
#  title         :string
#  year          :integer
#  yr_term       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  department_id :bigint(8)
#
# Indexes
#
#  index_courses_on_department_id  (department_id)
#
