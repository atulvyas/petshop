class Orderitem < ApplicationRecord
    belongs_to :order
    belongs_to :petinfo
end