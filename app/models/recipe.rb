class Recipe < ApplicationRecord
  belongs_to :category
  has_many :materials, dependent: :destroy
  has_many :how_tos, dependent: :destroy
  accepts_nested_attributes_for :materials, :how_tos
end
