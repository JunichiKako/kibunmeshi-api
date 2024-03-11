# カテゴリを作成
assari = Category.find_or_create_by!(name: "あっさり")
sappari = Category.find_or_create_by!(name: "さっぱり")
gattusri = Category.find_or_create_by!(name: "ガッツリ")
papatto = Category.find_or_create_by!(name: "ぱぱっと")

# レシピの追加または更新
[
  {
    title: "オニオングラタンスープ",
    thumbnail_url: "https://kibunmeshi.s3.ap-northeast-1.amazonaws.com/%E3%82%AA%E3%83%8B%E3%82%AA%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%BC%E3%83%97.webp",
    category_id: gattusri.id,
    materials_attributes: [
      { name: "玉ねぎ", quantity: "2～3個" },
      { name: "にんにく", quantity: "１かけ" },
      { name: "バゲット（フランスパン）", quantity: "1/3程度" },
      { name: "ピザチーズ", quantity: "適量" },
      { name: "バター、コンソメ", quantity: "適量" },
    ],
    how_tos_attributes: [
      { index: 1, text: "
      【下ごしらえ】（2人分） ※このレシピは1時間ぐらいかかるので、時間がある時推奨。 ・玉ねぎをスライスしていきます。その後はフライパンにバターを溶かし中火で少し焦げ目がつくまでひたすらに30分ほど炒めていきます。（目安は、玉ねぎの白を感じなくなるくらい） ・バゲットはスライスしておく。" },
      { index: 2, text: "【調理】 ①水を400mlをl加え、コンソメを大さじ２を入れ沸かし、その後にニンニクを下したもの　　と胡椒を加える。味が濃ければ、水を足す。 ②スープを耐熱皿に移し、その上にバゲットとチーズをのせ、 　オーブントースターでチーズに焼き目が付くまで焼く。 （加熱はオーブントースターの強さによるので、10分ほど加熱して様子を見てください。）" }
    ]
  },
  {
    title: "豚ニラチヂミ",
    thumbnail_url: "https://kibunmeshi.s3.ap-northeast-1.amazonaws.com/%E3%83%81%E3%83%82%E3%83%9F.webp",
    category_id: sappari.id,
    materials_attributes: [
      { name: "豚バラ", quantity: "200g" },
      { name: "にら", quantity: "１束" },
      { name: "卵", quantity: "2個" },
      { name: "玉ねぎ", quantity: "1/4個" },
      { name: "ポン酢", quantity: "お好みのもの" },
    ],
    how_tos_attributes: [
      { index: 1, text: "【下ごしらえ】（2人分） チヂミ生地を作ります。 ・卵：2個 ・小麦粉：100ｇ ・片栗粉：60ｇ ・しょうゆ：大さじ2 ・水：120ｍｌ ・ごま油：適宜 ・塩：少々 ・玉ねぎは少し太めの薄切りに、ニラは5cmほどに切り、生地の中に入れ、混ぜる。" },
      { index: 2, text: "【調理】 ①フライパンに油を引き、油が温まる前に生地を入れ、中火で熱する。 ②その上で豚肉を引き、塩胡椒で豚肉に味を付ける。 ③生地がフライパンの中で、動くようになってきたら 　ひっくり返し、カリカリになるまで焼いていく。 ④完成したら、切り分け、ポン酢で食べる。" }
    ]
  },
  {
    title: "高菜としらすのチャーハン",
    thumbnail_url: "https://kibunmeshi.s3.ap-northeast-1.amazonaws.com/%E9%AB%98%E8%8F%9C%E3%81%A8%E3%81%97%E3%82%89%E3%81%99%E3%81%AE%E3%83%81%E3%83%A3%E3%83%BC%E3%83%8F%E3%83%B3.webp",
    category_id: papatto.id,
    materials_attributes: [
      { name: "高菜", quantity: "30～50g" },
      { name: "しらす", quantity: "30～50g" },
      { name: "ネギ", quantity: "少々" },
      { name: "卵", quantity: "1個" },
      { name: "ご飯", quantity: "150g" },
      { name: "塩胡椒、醤油", quantity: "少々" },
    ],
    how_tos_attributes: [
      { index: 1, text: "【下ごしらえ】（2人分） ・ボウルにご飯に盛り、そこに卵を割り入れ、卵かけご飯をつくる。 ・高菜は大きいものなら、細かく刻む。ネギも細かく刻む。" },
      { index: 2, text: "【調理】 ①フライパンにごま油を熱し、高菜を入れて熱する。漬けもののいい匂いがしてきたら、 ご飯を加え、熱する。 ②少し焼き目がついたら、塩・胡椒を加え、混ぜ合わしたら、しらすを加え、焼き炒める。 ③最後に、ネギを加え、完成。" }
    ]
  },
  {
    title: "にんにく香る納豆パスタ",
    thumbnail_url: "https://kibunmeshi.s3.ap-northeast-1.amazonaws.com/%E7%B4%8D%E8%B1%86%E3%83%91%E3%82%B9%E3%82%BF.webp",
    category_id: assari.id,
    materials_attributes: [
      { name: "納豆", quantity: "2パック" },
      { name: "オクラ（なければ、小松菜などでも可）", quantity: "5本" },
      { name: "ニンニク", quantity: "2かけ" },
      { name: "鷹の爪、塩", quantity: "適量" },
      { name: "パスタ", quantity: "200g" },
    ],
    how_tos_attributes: [
      { index: 1, text: "【下ごしらえ】（2人分） ※パスタを茹でるために、お湯（塩は１％）を沸かしておく間に下記の下ごしらえをする。 ・ニンニクは皮を剝き、半分に切り、中の芽を取りだす。 ・納豆は、付属のタレと辛子を入れ、混ぜておく。 ・オクラは、ガクとヘタを取り、塩をまぶし板ずりをして小口切りにする。" },
      { index: 2, text: "【調理】 ①フライパンにオリーブオイルとニンニクを入れ、弱火からじっくり火を入れていき、 　ニンニクが柔らかくなったら、フォークでつぶす。その後は鷹の爪を入れ、弱火で保温する。 ②パスタは茹で時間の1分前に、ゆで汁からフライパンに上げ、 　オクラを加え、少し火をあげ、オイルとあえる。その後は、納豆を加え馴染ませたら完成。" }
    ]
  }
].each do |recipe_data|
  recipe = Recipe.find_or_initialize_by(title: recipe_data[:title])
  recipe.update!(recipe_data)
end

puts "Seeds data processed!"
