window.QUIZ_TITLE = "第4章2節 確認問題(pandas)";

window.QUESTIONS = [
  {
    type: "choice",
    question: "pd.Series([5, 12, 8, 20]) を実行したとき、このSeriesのindexはどれになりますか?",
    choices: [
      "RangeIndex(start=0, stop=4, step=1) (0, 1, 2, 3)",
      "RangeIndex(start=1, stop=5, step=1) (1, 2, 3, 4)",
      "値そのもの(5, 12, 8, 20)がindexになる",
      "indexは付与されない",
    ],
    answerIndex: 0,
    explanation:
      "indexを指定せずにSeriesを作成すると、0から始まる連番のRangeIndexが自動的に付与されます。",
  },
  {
    type: "choice",
    question:
      "df = pd.DataFrame(np.arange(30).reshape((10, 3))) を実行したあと、df.tail() で表示される行のインデックスラベルはどれですか?(引数なしのtail()はデフォルト設定で呼び出しています)",
    choices: ["5, 6, 7, 8, 9", "0, 1, 2, 3, 4", "6, 7, 8, 9", "25, 26, 27, 28, 29"],
    answerIndex: 0,
    explanation:
      "tail()は引数を省略すると末尾5行を返します。10行のDataFrameなのでインデックス5〜9の行が対象です。",
  },
  {
    type: "choice",
    question:
      "3行のDataFrame dfに対して df.index = [\"a\", \"b\"] のように、行数と異なる長さのリストを代入するとどうなりますか?",
    choices: [
      "ValueError(長さが一致しないというエラー)が発生する",
      "余った行のindexはNaNになる",
      "指定した2つの値が3行に繰り返し使われる",
      "何も起きず、元のindexのまま変わらない",
    ],
    answerIndex: 0,
    explanation:
      "df.indexやdf.columnsへの代入は、現在の行数・列数と完全に一致する長さのリストでなければならず、一致しない場合はValueErrorになります。",
  },
  {
    type: "choice",
    question:
      "df に列 \"個数\" があるとき、df[\"個数\"] と df[[\"個数\"]] の型の違いとして正しいものはどれですか?",
    choices: [
      "df[\"個数\"]はSeries、df[[\"個数\"]]はDataFrame",
      "df[\"個数\"]はDataFrame、df[[\"個数\"]]はSeries",
      "どちらもSeriesになる",
      "どちらもDataFrameになる",
    ],
    answerIndex: 0,
    explanation:
      "角かっこに列名を1つだけ書くとSeriesが返り、角かっこの中にさらにリストで列名を渡すと、1列だけでもDataFrameとして返されます。",
  },
  {
    type: "choice",
    question:
      "index が [\"1行目\", \"2行目\", \"3行目\", \"4行目\", \"5行目\"] のDataFrame dfに対して df[:2] を実行すると、どの行が返りますか?",
    choices: [
      "\"1行目\"と\"2行目\"(先頭から2行、位置ベースのスライス)",
      "\"2行目\"のみ",
      "すべての行",
      "エラーになる(ラベルindexには位置スライスは使えない)",
    ],
    answerIndex: 0,
    explanation:
      "df[:2]のような角かっこでのスライスは、indexのラベルに関わらず位置(先頭から2つ)で行を取り出します。",
  },
  {
    type: "choice",
    question:
      "同じdfに対して df.loc[\"2行目\":\"4行目\"] を実行すると、どの行が返りますか?",
    choices: [
      "\"2行目\", \"3行目\", \"4行目\"(終端のラベルを含む)",
      "\"2行目\", \"3行目\"(終端のラベルを含まない)",
      "\"2行目\"のみ",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      ".locによるラベルスライスは、Pythonの通常のスライスと異なり終端のラベルも含めて取り出します。そのため\"4行目\"も結果に含まれます。",
  },
  {
    type: "text",
    question:
      "次のコードを実行すると、df.iloc[-1, -1] の値はいくつになりますか?半角数字で答えてください。",
    code:
      'df = pd.DataFrame(np.arange(20).reshape((5, 4)),\n' +
      '                  columns=["W", "X", "Y", "Z"])',
    answer: ["19"],
    explanation:
      "np.arange(20).reshape((5,4))は0〜19を5行4列に並べたものです。iloc[-1, -1]は最終行・最終列を位置指定で取得するため、値は19です。",
  },
  {
    type: "choice",
    question:
      "セミコロン区切り(;)のCSVファイルを読み込みたいとき、read_csv()に指定する引数として正しいものはどれですか?",
    choices: [
      'pd.read_csv("data.csv", sep=";")',
      'pd.read_csv("data.csv", delimiter=",")',
      'pd.read_csv("data.csv", header=";")',
      'pd.read_csv("data.csv", index_col=";")',
    ],
    answerIndex: 0,
    explanation:
      "read_csv()は区切り文字をsep(またはdelimiter)引数で指定できます。デフォルトはカンマなので、セミコロン区切りの場合はsep=\";\"を指定します。",
  },
  {
    type: "choice",
    question:
      'pd.read_csv("data.csv", index_col="日付", parse_dates=True) のように読み込んだ場合の説明として正しいものはどれですか?',
    choices: [
      '"日付"列がDatetimeIndex型のindexになり、通常の列としては存在しなくなる',
      '"日付"列は通常の列として残り、別にRangeIndexのindexが付与される',
      "すべての列がdatetime型に変換される",
      "エラーになる(index_colとparse_datesは同時に指定できない)",
    ],
    answerIndex: 0,
    explanation:
      "index_colで指定した列がDataFrameのindexとして使われるようになり、通常の列からは取り除かれます。parse_dates=Trueにより、そのindexは日付型(DatetimeIndex)として解釈されます。",
  },
  {
    type: "choice",
    question:
      "to_csv()とto_pickle()の違いに関する記述として正しいものはどれですか?",
    choices: [
      "to_pickleはDataFrameのdtypeやindexの型を保持したまま保存できるが、to_csvはテキスト形式で保存するため、再読み込み時にdtypeが変わることがある",
      "to_csvの方がdtypeを完全に保持でき、to_pickleは保持できない",
      "どちらも保存後のデータに違いはない",
      "to_pickleは人間が中身を直接読めるテキスト形式である",
    ],
    answerIndex: 0,
    explanation:
      "pickle形式はPythonオブジェクトをそのままバイナリ化するため、dtypeやindexの型(DatetimeIndexなど)も完全に保持されます。CSVはテキスト形式なので、読み込み時に型を推定し直す必要があります。",
  },
  {
    type: "choice",
    question:
      "次のDataFrameに対して df.loc[df[\"来店者数\"] >= 100, \"曜日\"] を実行すると、どの曜日が返りますか?",
    code:
      'df = pd.DataFrame({\n' +
      '    "曜日": ["月", "火", "水", "木", "金"],\n' +
      '    "来店者数": [42, 68, 130, 95, 150],\n' +
      '    "売上": [12000, 15400, 26000, 19800, 31000],\n' +
      '})',
    choices: ["水, 金", "水, 木, 金", "月, 火", "金のみ"],
    answerIndex: 0,
    explanation:
      "来店者数が100以上なのは水(130)と金(150)です。ブールインデックスで該当する行の\"曜日\"列だけを取り出しています。",
  },
  {
    type: "choice",
    question:
      "同じDataFrameに対して df.query(\"来店者数 >= 100 and 売上 <= 30000\") を実行すると、どの曜日の行が返りますか?",
    choices: ["水のみ", "水, 金", "木, 金", "該当する行はない"],
    answerIndex: 0,
    explanation:
      "来店者数が100以上なのは水(130)と金(150)ですが、売上が30000以下という条件も満たすのは水(26000)だけです。金は売上が31000で条件を満たしません。",
  },
  {
    type: "text",
    question:
      "上のDataFrameで、df.dtypes を確認したとき、\"売上\"列のdtypeは何になりますか?英小文字と数字でそのまま入力してください(例: int64)。",
    answer: ["int64"],
    explanation:
      "売上列の値はすべて整数(12000, 15400, ...)なので、dtypeは自動的にint64と推定されます。",
  },
  {
    type: "choice",
    question:
      'df["日付"]が"2025-05-01"のような文字列の列であるとき、df["date"] = df["日付"].apply(pd.to_datetime) を実行した後の df["date"] のdtypeはどれですか?',
    choices: ["datetime64[ns]", "object", "int64", "str"],
    answerIndex: 0,
    explanation:
      "pd.to_datetime()は文字列を日時型に変換する関数で、apply()で各要素に適用すると、結果の列はdatetime64[ns]型になります。",
  },
  {
    type: "choice",
    question:
      'df["売上"]がint64型のとき、df["売上"] = df["売上"].astype(np.float32) を実行した後、df.dtypesの"売上"はどれになりますか?',
    choices: ["float32", "int64のまま変わらない", "float64", "object"],
    answerIndex: 0,
    explanation:
      "astype()は指定した型に変換した新しい列(Series)を返すため、np.float32を指定するとdtypeはfloat32になります。",
  },
  {
    type: "choice",
    question:
      'df = df.set_index("曜日") を実行したあと(dropを指定しないデフォルトの場合)、"曜日"列に関する記述として正しいものはどれですか?',
    choices: [
      "\"曜日\"はDataFrameのindexになり、通常の列としては存在しなくなる",
      "\"曜日\"は通常の列として残り、indexにもコピーされる",
      "\"曜日\"列は削除され、indexは変化しない",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "set_index()はデフォルトでdrop=Trueの動作をするため、指定した列はindexに変換され、元の列としては取り除かれます。",
  },
  {
    type: "text",
    question:
      "先ほどのDataFrame(月火水木金、来店者数42,68,130,95,150)に対して df.sort_values(by=\"来店者数\", ascending=False).head(1) を実行すると、どの曜日が最初に表示されますか?",
    answer: ["金"],
    explanation:
      "来店者数を降順に並べ替えると、最も多い150(金)が先頭になります。",
  },
  {
    type: "choice",
    question:
      'df = df.drop("売上", axis=1) を実行すると何が起きますか?',
    choices: [
      "\"売上\"列が削除された新しいDataFrameが返る(元のdfへの再代入で反映される)",
      "\"売上\"の値だけがすべて0になる",
      "\"売上\"を含む行がすべて削除される",
      "axis=1を指定するとエラーになる",
    ],
    answerIndex: 0,
    explanation:
      "drop()のaxis=1は列方向の削除を意味します。指定した列が取り除かれたDataFrameが返るため、再代入することで元のdfから列が削除された状態になります。",
  },
  {
    type: "text",
    question:
      "客単価(売上 ÷ 来店者数)を計算し、200以下ならLow、200より大きく250以下ならMid、250より大きいならHighと分類する関数を作りました。水曜日(来店者数130、売上26000)の区分はどれになりますか? Low/Mid/Highのいずれかで答えてください。",
    answer: ["Low"],
    explanation:
      "水曜日の客単価は26000 ÷ 130 = 200.0ちょうどです。「200以下ならLow」という条件に一致するため、境界値である200.0はLowに分類されます。",
  },
  {
    type: "choice",
    question:
      '区分列(Low/Mid/Highの3種類の値を持つ)に対して pd.get_dummies(df["区分"], prefix="区分") を実行すると、新しく何列作られますか?',
    choices: [
      "3列(区分_High, 区分_Low, 区分_Midがそれぞれブール値の列として)",
      "1列(区分という名前のまま)",
      "2列(Highかどうか、Lowかどうかの2択)",
      "5列(元のDataFrameの行数と同じ数)",
    ],
    answerIndex: 0,
    explanation:
      "get_dummies()はカテゴリごとに1つの列を作るワンホットエンコーディングです。ユニークな値がLow/Mid/Highの3種類なので3列作られ、各行は該当する列だけTrueになります。",
  },
  {
    type: "text",
    question:
      "pd.date_range(start=\"2025-06-01\", periods=10) を実行したとき(freqを省略した場合のデフォルトは日次です)、生成される最後の日付はいつですか? YYYY-MM-DD形式で答えてください。",
    answer: ["2025-06-10"],
    explanation:
      "date_range()はfreqを省略すると1日ごと(D)の間隔になります。2025-06-01から数えて10個目の日付は2025-06-10です。",
  },
  {
    type: "choice",
    question:
      'df.groupby(pd.Grouper(freq="ME")).mean() のfreq="ME"の意味として正しいものはどれですか?',
    choices: [
      "各月ごとにグループ化し、各グループのラベルはその月の最終日(月末日)になる",
      "各月ごとにグループ化し、各グループのラベルはその月の1日になる",
      "毎分(minute)ごとにグループ化する",
      "各年ごとにグループ化する",
    ],
    answerIndex: 0,
    explanation:
      '"ME"はMonth End(月末)を意味する頻度エイリアスで、月ごとにデータをまとめ、各グループの代表日として月末の日付が使われます。',
  },
  {
    type: "text",
    question:
      'pd.date_range(start="2025-01-01", end="2025-12-31", freq="W-SAT") で生成される日付は、すべて何曜日になりますか?漢字1文字(例: 日)で答えてください。',
    answer: ["土"],
    explanation:
      '"W-SAT"は「土曜日を週の終わりとする週次」を意味する頻度エイリアスで、生成される日付はすべて土曜日になります。',
  },
  {
    type: "choice",
    question:
      "dropna()をデフォルトの設定(引数なし)で実行した場合の動作として正しいものはどれですか?",
    choices: [
      "列のいずれか1つでもNaNがある行をすべて削除する(how=\"any\"相当)",
      "すべての列がNaNである行だけを削除する(how=\"all\"相当)",
      "NaNをすべて0に置き換える",
      "NaNがある列(行ではなく)を削除する",
    ],
    answerIndex: 0,
    explanation:
      "dropna()のデフォルトはhow=\"any\"で、行の中に1つでもNaNが含まれていればその行全体を削除します。すべての値がNaNの行だけを消したい場合はhow=\"all\"を指定します。",
  },
  {
    type: "choice",
    question:
      "Series([10, NaN, NaN, 40, 50])に対して ffill() を実行すると、2番目・3番目の要素(NaNだった部分)はどうなりますか?",
    choices: [
      "どちらも10になる(直前の有効な値が連続するNaNすべてに伝播する)",
      "2番目は10、3番目は40になる",
      "どちらも0になる",
      "どちらもNaNのまま変わらない",
    ],
    answerIndex: 0,
    explanation:
      "ffill()(前方補完)は、NaNをその直前にある最後の有効な値で埋めます。連続するNaNであっても、同じ直前の値(この場合は10)がすべてに使われます。",
  },
  {
    type: "choice",
    question:
      "Series([10, NaN, 30]) に対して s.fillna(s.mean()) を実行すると、結果はどれになりますか?",
    choices: [
      "[10, 20, 30] (NaN以外の値の平均20で埋められる)",
      "[10, 0, 30]",
      "[10, 13.33, 30]",
      "[10, NaN, 30] (変化しない)",
    ],
    answerIndex: 0,
    explanation:
      "mean()はデフォルトでNaNを除外して平均を計算します。10と30の平均は20なので、fillna(s.mean())によってNaNの部分が20で埋められます。",
  },
  {
    type: "choice",
    question:
      "同じ列構成を持つ2つのDataFrame(片方が11月分、もう片方が12月分のデータ)を、日付順に上下に積み重ねて1つにまとめたい場合、pd.concat()のどの引数を指定するべきですか?",
    choices: ["axis=0", "axis=1", "axis=2", "join=\"outer\"だけで十分でaxisの指定は不要"],
    answerIndex: 0,
    explanation:
      "axis=0(デフォルト)は行方向への結合で、行を積み重ねてDataFrameを縦に連結します。列方向に並べたい場合はaxis=1を使います。",
  },
  {
    type: "choice",
    question:
      "列構成が完全には一致しない2つのDataFrame(片方には\"区分\"列があるが、もう片方にはない)をpd.concat()でaxis=0結合すると、\"区分\"列を持たない側の行はどうなりますか?",
    choices: [
      "\"区分\"列にNaNが入る",
      "エラーになり結合できない",
      "\"区分\"列の値は自動的に\"不明\"という文字列になる",
      "\"区分\"列を持たない側のDataFrame全体が無視される",
    ],
    answerIndex: 0,
    explanation:
      "concat()は列の和集合を取るため、片方のDataFrameにしか存在しない列については、その列を持たない側の行にNaNが入ります。",
  },
  {
    type: "choice",
    question:
      "Series([10, 20, 30]) に対して s.std() (デフォルト、ddof=1)と s.std(ddof=0) を計算すると、どちらが正しい組み合わせですか?",
    choices: [
      "s.std()は10.0、s.std(ddof=0)は約8.16",
      "s.std()は約8.16、s.std(ddof=0)は10.0",
      "どちらも10.0で同じ",
      "どちらも約8.16で同じ",
    ],
    answerIndex: 0,
    explanation:
      "平均20からの偏差の2乗和は(-10)^2+0^2+10^2=200です。ddof=1(標本標準偏差)では200/(3-1)=100の平方根で10.0、ddof=0(母標準偏差)では200/3≈66.67の平方根で約8.16になります。",
  },
  {
    type: "choice",
    question:
      "数値列(来店者数, 売上など)と文字列の列(区分など)が混在するDataFrameに対して df.describe() を引数なしで実行すると、どうなりますか?",
    choices: [
      "デフォルトでは数値列だけが対象になり、区分のような文字列列は集計結果から除外される",
      "すべての列(文字列列を含む)が対象になり、文字列列にも平均や標準偏差が表示される",
      "文字列列があるとエラーになり、実行できない",
      "文字列列だけが対象になり、数値列は除外される",
    ],
    answerIndex: 0,
    explanation:
      "describe()はデフォルトでは数値型の列だけを要約統計量の対象にします。文字列(object型)の列も含めたい場合はinclude=\"all\"を指定する必要があります。",
  },
];
