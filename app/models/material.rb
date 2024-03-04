class Material < ApplicationRecord
  belongs_to :recipe, dependent: :destroy
end
