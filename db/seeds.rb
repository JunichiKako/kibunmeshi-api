

# カテゴリを作成
dessert = Category.find_or_create_by!(name: "デザート")
main_dish = Category.find_or_create_by!(name: "主食")

# レシピと関連データのシードデータ
Recipe.create!([
  {
    title: "チョコレートケーキ",
    thumbnail_url: "/path/to/chocolate_cake.jpg",
    category: dessert,
    materials_attributes: [
      { name: "砂糖", quantity: "100g" },
      { name: "小麦粉", quantity: "200g" }
    ],
    how_tos_attributes: [
      { index: 1, text: "ボウルに砂糖と小麦粉を入れる。" },
      { index: 2, text: "よく混ぜて焼く。" }
    ]
  },
  {
    title: "スパゲッティカルボナーラ",
    thumbnail_url: "/path/to/carbonara.jpg",
    category: main_dish,
    materials_attributes: [
      { name: "パスタ", quantity: "200g" },
      { name: "ベーコン", quantity: "100g" }
    ],
    how_tos_attributes: [
      { index: 1, text: "パスタを茹でる。" },
      { index: 2, text: "フライパンでベーコンを炒める。" }
    ]
  }
])

puts "Seeds data created!"
