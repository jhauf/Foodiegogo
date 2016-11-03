class User < ActiveRecord::Base

validates :username, :password_digest, :session_token, :fname, :lname, presence: true
validates :password, length: {minimum: 6, allow_nil: true}

has_many :campaigns

attr_reader :password
after_initialize :ensure_session_token


def password=(password)
  @password = password
  self.password_digest= BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def ensure_session_token
  self.session_token ||= SecureRandom.urlsafe_base64(16)
end

def reset_session_token
  self.session_token = SecureRandom.urlsafe_base64(16)
  self.save
  self.session_token
end

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  user && user.is_password?(password) ? user : nil
end

end
