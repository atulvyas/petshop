class Petinfo < ApplicationRecord
     belongs_to :petscategory
     belongs_to :petstore
     has_one_attached :image
     has_many :orderitem
     has_many :order, through: :orderitem
end