class Petstore < ApplicationRecord
    belongs_to :user
    has_many :petinfo
    has_many :order
end