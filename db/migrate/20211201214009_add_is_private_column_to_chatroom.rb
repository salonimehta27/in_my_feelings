class AddIsPrivateColumnToChatroom < ActiveRecord::Migration[6.1]
  def change
    add_column :chatrooms, :is_private, :boolean, :default=> false
  end
end
