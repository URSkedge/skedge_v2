class Department < ApplicationRecord

  module School
    ASE = 1
    Simon = 2
    Eastman = 6
  end

  FormatSchool = {1 => "Arts, Sciences, and Engineering", 2 => "Simon", 6 => "Eastman"}

  has_many :courses

  validates :short, :name, presence: true, uniqueness: true


  def self.find_by_short(short)
    short.upcase!
    # Some special cases
    short = "MTH" if short == "MATH"
    short = "CSC" if short == "CS"
    short = "PHY" if short == "PHYSICS"
    Department.find_by(short: short)
  end

end

# == Schema Information
#
# Table name: departments
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  school     :integer
#  short      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
