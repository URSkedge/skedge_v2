class Instructor < ApplicationRecord

  validates :name, presence: true, uniqueness: true

  has_many :courses

end

# == Schema Information
#
# Table name: instructors
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
