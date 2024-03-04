class CreateMaterials < ActiveRecord::Migration[7.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :quantity
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
