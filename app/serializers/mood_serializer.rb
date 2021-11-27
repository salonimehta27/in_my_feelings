class MoodSerializer < ActiveModel::Serializer
  attributes :id, :mood_name, :mood_body
end
