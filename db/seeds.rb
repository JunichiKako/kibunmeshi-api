

# カテゴリを作成
assari = Category.find_or_create_by!(name: "あっさり")
sappari = Category.find_or_create_by!(name: "さっぱり")

# レシピと関連データのシードデータ
Recipe.create!([
  {
    title: "チョコレートケーキ",
    thumbnail_url: "https://kibunmeshi.s3.ap-northeast-1.amazonaws.com/%E3%82%AA%E3%83%8B%E3%82%AA%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%BC%E3%83%97.webp",
    category: assari,
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
    thumbnail_url: "https://kibunmeshi.s3.ap-northeast-1.amazonaws.com/%E3%83%81%E3%83%82%E3%83%9F.webp",
    category: sappari,
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
