class Post < ApplicationRecord
  belongs_to :user

  validate :user_id, presence: true
  validates :body, length: {minimum: 0, maximum: 142}
end
