class CreateLead < ActiveRecord::Migration[5.2]
  def change
    create_table :leads do |t|
      t.string :email
      t.timestamps
      t.index :email, unique: true
    end
  end
end
