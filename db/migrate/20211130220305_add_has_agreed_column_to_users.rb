class AddHasAgreedColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column(:users,:has_agreed,:boolean)
  end
end
