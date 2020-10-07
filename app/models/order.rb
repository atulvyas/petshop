class Order < ApplicationRecord
    belongs_to :orderstate
    belongs_to :user
    belongs_to :petstore
    has_many :orderitem
    has_many :petinfo, through: :orderitem
end