window.QUIZ_TITLE = "第4章2節 確認問題 セットB(pandas)";

window.QUESTIONS = [
  {
    type: "choice",
    question:
      'pd.DataFrame([[10, "a", True], [20, "b", False], [30, "c", False], [40, "d", True]]) を実行したとき、各列(0列目, 1列目, 2列目)のdtypeの組み合わせとして正しいものはどれですか?',
    choices: [
      "0列目はint64、1列目はobject、2列目はbool",
      "すべてobject型になる",
      "0列目はobject、1列目はint64、2列目はbool",
      "すべてint64型になる",
    ],
    answerIndex: 0,
    explanation:
      "pandasは列ごとに値の内容からdtypeを自動推定します。整数だけの列はint64、文字列だけの列はobject、真偽値だけの列はboolになります。",
  },
  {
    type: "choice",
    question:
      "25行4列のDataFrame dfに対して df.head() を引数なしで実行すると、何行表示されますか?",
    choices: ["5行", "10行", "1行", "25行すべて"],
    answerIndex: 0,
    explanation:
      "head()は引数を省略するとデフォルトで先頭5行を表示します。",
  },
  {
    type: "text",
    question:
      "25行4列のDataFrame dfに対して df.shape を実行した結果を、丸括弧とカンマを含めてそのまま入力してください(例: (3, 2))。",
    answer: ["(25, 4)"],
    explanation:
      "shapeは(行数, 列数)のタプルを返します。25行4列なので(25, 4)になります。",
  },
  {
    type: "choice",
    question:
      "3行2列のDataFrame dfに対して df.index = [\"01\", \"02\", \"03\"]、df.columns = [\"A\", \"B\"] を実行すると何が起きますか?",
    choices: [
      "行のラベルが\"01\",\"02\",\"03\"に、列のラベルが\"A\",\"B\"に置き換わる(データの値自体は変化しない)",
      "指定したラベルの行・列が新しく追加される",
      "既存の行・列がすべて削除され、空のDataFrameになる",
      "行数・列数と個数が一致していてもエラーになる",
    ],
    answerIndex: 0,
    explanation:
      "indexやcolumns属性への代入は、行数・列数と一致する長さのリストであれば、ラベルだけを置き換えます。中身のデータは変わりません。",
  },
  {
    type: "choice",
    question: "df.loc[:, :] を実行するとどうなりますか?",
    choices: [
      "すべての行・すべての列を選択した、dfと同じ内容のDataFrameが返る",
      "先頭の行と先頭の列だけが返る",
      "何も選択されず空のDataFrameが返る",
      "エラーになる(コロンを2つ指定することはできない)",
    ],
    answerIndex: 0,
    explanation:
      ".locの1つ目のコロンは全行、2つ目のコロンは全列を意味するため、df.loc[:, :]はdf全体と同じ内容を返します。",
  },
  {
    type: "choice",
    question:
      "columns=[\"A\",\"B\",\"C\"], index=[\"1行目\",\"2行目\",\"3行目\",\"4行目\"] のDataFrame dfに対して df.loc[\"1行目\", :] を実行すると、戻り値の型はどれになりますか?",
    choices: ["Series", "DataFrame", "ndarray", "dict"],
    answerIndex: 0,
    explanation:
      ".locで単一の行ラベルを指定すると、その行の値を1つのSeriesとして取り出します(indexが元の列名になります)。",
  },
  {
    type: "choice",
    question:
      "同じdfに対して df.loc[[\"1行目\", \"3行目\"], :] を実行すると、戻り値の型はどれになりますか?",
    choices: ["DataFrame", "Series", "ndarray", "tuple"],
    answerIndex: 0,
    explanation:
      "行ラベルをリストで(単一の値ではなく)指定すると、複数行分のデータを保持したDataFrameとして返されます。",
  },
  {
    type: "text",
    question:
      "df = pd.DataFrame(np.arange(12).reshape((4, 3))) を実行したとき、df.iloc[2, 2] の値はいくつになりますか?半角数字で答えてください。",
    answer: ["8"],
    explanation:
      "0〜11を4行3列に並べると、3行目(位置インデックス2)は[6, 7, 8]になります。その3列目(位置インデックス2)の値は8です。",
  },
  {
    type: "choice",
    question:
      "df.iloc[1:, 1] のように、行を範囲スライス・列を単一の整数位置で指定した場合、戻り値の型はどれになりますか?",
    choices: ["Series", "DataFrame", "スカラー値(単一の数値)", "ndarray"],
    answerIndex: 0,
    explanation:
      "列を単一の位置(整数1つ)で指定すると、行が複数あってもその1列分のデータがSeriesとして返されます。",
  },
  {
    type: "choice",
    question: "pd.read_html(url) の戻り値の型として正しいものはどれですか?",
    choices: [
      "ページ内の各テーブルに対応するDataFrameのリスト",
      "1つのDataFrame(ページ内の全テーブルが自動的に結合されたもの)",
      "1つの文字列(HTML全体)",
      "辞書(テーブルのタイトルをキーとする)",
    ],
    answerIndex: 0,
    explanation:
      "read_html()はページ内に含まれる複数の<table>要素をそれぞれDataFrameに変換し、それらをまとめたリストを返します。",
  },
  {
    type: "text",
    question:
      "tables = pd.read_html(url, flavor=\"html5lib\") で得たリストに対して df = tables[4] を実行したとき、type(df) が返す型名を英単語で答えてください(例: list)。",
    answer: ["DataFrame"],
    explanation:
      "tablesはDataFrameのリストなので、その要素であるtables[4]は1つのDataFrameです。",
  },
  {
    type: "choice",
    question:
      "日時型(datetime64[ns])の列を含むDataFrameを to_csv() で保存し、それを read_csv() で読み込みなおした場合の注意点として正しいものはどれですか?",
    choices: [
      "CSVはテキスト形式であるため、保存前は日時型だった列も、そのまま読み込むと文字列(object型)として扱われてしまう",
      "日時型の列は自動的に元の型のまま復元される",
      "CSVには日時型の列を保存できず、エラーになる",
      "日時型の列だけがint64に変換されて保存される",
    ],
    answerIndex: 0,
    explanation:
      "CSVはテキストベースの形式なので型情報を保持しません。再読み込みの際は自動ではdatetime型と推定されず、parse_datesなどを明示的に指定しない限りobject型(文字列)として読み込まれます。",
  },
  {
    type: "choice",
    question:
      "df.query(\"歩数 >= 10000 and 摂取カロリー <= 1800\") のように日本語の列名をそのまま条件式の中で使えるのはなぜですか?",
    choices: [
      "queryメソッドが文字列を式として評価し、列名をその式の中の変数のように扱うため",
      "queryメソッドの前に列名をすべて英数字に変換する処理が自動的に行われるため",
      "日本語の列名は特別扱いされ、実際にはインデックス番号で参照されているため",
      "queryメソッドは文字列の中身を見ておらず、常にすべての行を返すため",
    ],
    answerIndex: 0,
    explanation:
      "query()は渡された文字列を式として解釈し、DataFrameの列名をその式中の変数名のように扱って評価します。",
  },
  {
    type: "choice",
    question:
      'read_csv()で読み込んだ直後(pd.to_datetime()などで変換する前)の"日付"列(\"2024-11-01\"のような文字列が入っている)のdtypeはどれですか?',
    choices: ["object", "datetime64[ns]", "int64", "float64"],
    answerIndex: 0,
    explanation:
      "CSVから読み込んだ日付は特に指定しない限り単なる文字列として扱われ、dtypeはobjectになります。datetime64[ns]にするにはpd.to_datetime()などで明示的に変換する必要があります。",
  },
  {
    type: "choice",
    question:
      "次のexercise_judge関数を使って、値がちょうど3.0のときの区分はどれになりますか?",
    code:
      "def exercise_judge(ex):\n" +
      "    if ex <= 3.0:\n" +
      "        return \"Low\"\n" +
      "    elif 3.0 < ex <= 6.0:\n" +
      "        return \"Mid\"\n" +
      "    else:\n" +
      "        return \"High\"",
    choices: ["Low", "Mid", "High", "エラーになる"],
    answerIndex: 0,
    explanation:
      "最初の条件ex <= 3.0が3.0のとき真になるため、3.0ちょうどはLowに分類されます。",
  },
  {
    type: "choice",
    question: "同じexercise_judge関数で、値がちょうど6.0のときの区分はどれになりますか?",
    choices: ["Mid", "Low", "High", "エラーになる"],
    answerIndex: 0,
    explanation:
      "ex <= 3.0(6.0は満たさない)の次に評価される3.0 < ex <= 6.0は、6.0ちょうどのとき真になるためMidに分類されます。",
  },
  {
    type: "choice",
    question:
      '"運動指数"列がLow/Mid/Highの3種類の値を持つとき、pd.get_dummies(df["運動指数"], prefix="運動") で作られる列名はどれですか?',
    choices: [
      "運動_High, 運動_Low, 運動_Mid",
      "運動指数_High, 運動指数_Low, 運動指数_Mid",
      "High, Low, Mid",
      "運動_1, 運動_2, 運動_3",
    ],
    answerIndex: 0,
    explanation:
      "get_dummies()の列名はprefixで指定した文字列とカテゴリ名をアンダースコアでつないだものになります。カテゴリはLow, Mid, Highの3種類なので運動_Low, 運動_Mid, 運動_Highの3列が(アルファベット順に)作られます。",
  },
  {
    type: "text",
    question:
      "pd.date_range(start=\"2025-04-01\", end=\"2025-04-30\")(freqを省略した場合のデフォルトは日次です)を実行すると、生成される日付は何個になりますか?半角数字で答えてください。",
    answer: ["30"],
    explanation:
      "startとendの両方を含めて日次で生成するため、4月1日から4月30日までの30個の日付が生成されます(4月は30日まであります)。",
  },
  {
    type: "choice",
    question:
      'df.loc[:, "乱数値"].resample("ME").mean() と df.groupby(pd.Grouper(freq="ME")).mean() の関係について正しい記述はどれですか?',
    choices: [
      "どちらも月末を基準に月ごとへグループ化して平均を計算しており、実質的に同じ結果になる",
      "resample()は日ごと、Grouperは年ごとにグループ化するため結果が異なる",
      "resample()は列の追加、Grouperは行の削除を行うためまったく別の処理である",
      "resample()はSeriesには使えず、Grouperしか使えない",
    ],
    answerIndex: 0,
    explanation:
      "resample()は時系列データを指定した頻度でグループ化する簡便なメソッドで、groupby(pd.Grouper(freq=...))と同じように月末(\"ME\")などの単位でグループ化し、集計結果は一致します。",
  },
  {
    type: "choice",
    question:
      "同じインデックス(日付)を持つ2つのDataFrame df と df_moved に対して pd.concat([df, df_moved], axis=1) を実行すると、どうなりますか?",
    choices: [
      "インデックスの値がそろっている行同士で、それぞれの列を横に並べて結合する",
      "dfの下にdf_movedの行を積み重ねて縦に結合する",
      "インデックスが完全に一致していないとエラーになり、結合できない",
      "2つのDataFrameのうち行数が多い方だけが残る",
    ],
    answerIndex: 0,
    explanation:
      "axis=1は列方向の結合です。インデックスが一致する行同士が横に並べられ、それぞれのDataFrameの列がすべて含まれる1つのDataFrameになります。",
  },
  {
    type: "text",
    question:
      '11月分のデータ(歩数, 摂取カロリー, 歩数/カロリー, 運動指数, 運動_High, 運動_Low, 運動_Midの7列を持つ)と、12月分のデータ(歩数, 摂取カロリーの2列だけを持つ)を pd.concat(..., axis=0, sort=True) で縦に結合したとき、12月分の行で値がNaNになる列はいくつありますか?半角数字で答えてください。',
    answer: ["5"],
    explanation:
      "12月分のDataFrameには歩数/カロリー, 運動指数, 運動_High, 運動_Low, 運動_Midの5列が存在しないため、結合後にこれらの列に対応する12月分の行はすべてNaNになります。",
  },
  {
    type: "choice",
    question:
      "pd.concat([df1, df2], axis=0, sort=True) の sort=True を指定した場合、結合後の列の並び順はどうなりますか?",
    choices: [
      "結合後の列名がアルファベット(辞書)順に並び替えられる",
      "df1の列順がそのまま維持される",
      "df2の列順がそのまま維持される",
      "列の並び順はランダムになる",
    ],
    answerIndex: 0,
    explanation:
      "sort=Trueを指定すると、結合後に現れる列(2つのDataFrameの列の和集合)がソートされた順序で並べられます。",
  },
  {
    type: "choice",
    question:
      "Seriesに対してs.mode()を実行すると、どのような統計量が返されますか?",
    choices: [
      "最頻値(データの中で最も多く出現する値)",
      "平均値",
      "中央値",
      "最大値と最小値の差(範囲)",
    ],
    answerIndex: 0,
    explanation:
      "mode()はデータの中で最も出現回数が多い値(最頻値)を返します。最頻値が複数ある場合は複数の値が返されます。",
  },
  {
    type: "text",
    question:
      "あるSeries sに対して s.std()(デフォルトのddof=1)と s.std(ddof=0) を計算したとき、値がばらついているデータであれば、どちらの方が大きい値になりますか? \"ddof=1\" または \"ddof=0\" で答えてください。",
    answer: ["ddof=1"],
    explanation:
      "ddof=1(標本標準偏差)は分散の計算でデータ数から1を引いた値(n-1)で割るため、n で割るddof=0(母標準偏差)よりも割る数が小さくなり、結果として大きい値になります。",
  },
  {
    type: "choice",
    question:
      'df.loc[df.loc[:, "摂取カロリー"] == 2300, :].count() を実行した結果に関する記述として正しいものはどれですか?',
    choices: [
      "摂取カロリーが2300の行に絞り込んだうえで、各列ごとに欠損値ではない要素の個数を数える",
      "摂取カロリーが2300である行の個数だけを1つの数値として返す",
      "DataFrame全体の行数を返す(絞り込みは無視される)",
      "エラーになる(count()はSeriesにしか使えない)",
    ],
    answerIndex: 0,
    explanation:
      "count()はDataFrameに対して実行すると、列ごとに欠損値でない値の個数を数えます。絞り込んだ行にNaNがなければ、各列の結果はすべて絞り込み後の行数と一致します。",
  },
  {
    type: "choice",
    question: "df.describe() の結果に表示される25%や75%の行が意味するものはどれですか?",
    choices: [
      "四分位数(パーセンタイル)。50%の行は中央値(median)と一致する",
      "欠損値の割合",
      "そのパーセンタイルに該当する行番号",
      "他の統計量と無関係な単なる連番",
    ],
    answerIndex: 0,
    explanation:
      "describe()の25%, 50%, 75%は四分位数(パーセンタイル値)を表し、50%の値は中央値(median)と一致します。",
  },
  {
    type: "choice",
    question: "df.corr(numeric_only=True) が返す相関係数の値の範囲として正しいものはどれですか?",
    choices: [
      "-1以上1以下(-1に近いほど強い負の相関、1に近いほど強い正の相関)",
      "0以上100以下のパーセンテージ",
      "0以上1以下のみ",
      "値の範囲に制限はない",
    ],
    answerIndex: 0,
    explanation:
      "相関係数は必ず-1から1の範囲に収まり、1に近いほど強い正の相関、-1に近いほど強い負の相関、0に近いほど相関が弱いことを示します。",
  },
  {
    type: "choice",
    question:
      "df.loc[:, [\"歩数\", \"摂取カロリー\"]].values を実行すると、戻り値の型はどれになりますか?",
    choices: [
      "NumPyのndarray",
      "元のDataFrameと同じDataFrame",
      "Pythonのリストのリスト",
      "文字列",
    ],
    answerIndex: 0,
    explanation:
      "DataFrame(やその一部の列)に対してvalues属性を参照すると、中身の値がNumPyのndarrayとして取得できます。",
  },
  {
    type: "choice",
    question:
      "\"歩数\"と\"摂取カロリー\"の2列にそれぞれ欠損値があるDataFrame dfに対して df.fillna(df.mean()) を実行した場合の記述として正しいものはどれですか?",
    choices: [
      "各列ごとに、その列自身の(欠損値を除いた)平均値を使って、その列のNaNを埋める(列によって埋める値は異なる)",
      "DataFrame全体の1つの平均値を計算し、すべての列のNaNをその同じ値で埋める",
      "NaNではなく0ですべて置き換えられる",
      "エラーになり実行できない",
    ],
    answerIndex: 0,
    explanation:
      "df.mean()は列ごとの平均値を持つSeriesを返します。fillna()にSeriesを渡すと、対応する列ごとにその値でNaNが埋められるため、列によって使われる平均値は異なります。",
  },
  {
    type: "choice",
    question:
      "欠損値を「直前の有効な値」で埋めたい場合と、「各列の平均値」で埋めたい場合に、それぞれ使うべきメソッドの組み合わせとして正しいものはどれですか?",
    choices: [
      "直前の値で埋める場合はffill()、列ごとの平均で埋める場合はfillna(df.mean())",
      "直前の値で埋める場合はfillna(df.mean())、列ごとの平均で埋める場合はffill()",
      "どちらの場合もdropna()を使う",
      "どちらの場合もbfill()を使う",
    ],
    answerIndex: 0,
    explanation:
      "ffill()は直前の有効な値でNaNを埋める前方補完のメソッドです。列ごとの平均で埋めたい場合は、各列の平均を持つSeriesをfillna()に渡します。",
  },
];
