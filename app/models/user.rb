class User < ApplicationRecord
    has_one :petstore
    has_many :order
    has_secure_password
end