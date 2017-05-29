class User < ApplicationRecord
  has_many :posts

  validate :username, presence: true, uniqueness: true
end
