require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

# == Schema Information
#
# Table name: users
#
#  id               :bigint(8)        not null, primary key
#  friend_count     :integer
#  public_sharing   :boolean          default(TRUE)
#  secret           :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  fb_id            :string
#  last_schedule_id :integer
#
