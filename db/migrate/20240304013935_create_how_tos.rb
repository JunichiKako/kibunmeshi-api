class CreateHowTos < ActiveRecord::Migration[7.1]
  def change
    create_table :how_tos do |t|
      t.integer :index
      t.string :text
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
