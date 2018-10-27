require 'rails_helper'

RSpec.describe Schedule, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
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
