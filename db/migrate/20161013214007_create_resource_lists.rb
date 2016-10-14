class CreateResourceLists < ActiveRecord::Migration[5.0]
  def change
    create_table :resource_lists do |t|
      t.string :name, null: false
      t.references :trip

      t.timestamps
    end
  end
end
