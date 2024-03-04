class HowTo < ApplicationRecord
  belongs_to :recipe, dependent: :destroy
end
