window.QUIZ_TITLE = "第4章4節 確認問題 セットB(scikit-learn)";

window.QUESTIONS = [
  {
    type: "choice",
    question:
      'df = pd.DataFrame({"P": [1, np.nan, 3, np.nan, 5], "Q": [np.nan, 2, 3, 4, 5]}) のとき、df.isnull().sum() の結果として正しいものはどれですか?',
    choices: [
      "P列が2、Q列が1",
      "P列が1、Q列が2",
      "P列もQ列も0",
      "P列が5、Q列が5",
    ],
    answerIndex: 0,
    explanation:
      "isnull()は各要素が欠損値かどうかをTrue/Falseで表し、sum()で列ごとにTrueの個数(欠損値の個数)を集計します。Pはインデックス1と3が欠損で2個、Qはインデックス0が欠損で1個です。",
  },
  {
    type: "text",
    question:
      "同じdf(P列とQ列を持つ5行のDataFrame、上の問題と同じデータ)に対してdf.dropna(axis=0)を実行すると、残る行は何行になりますか?半角数字で答えてください。",
    answer: ["2"],
    explanation:
      "各行を見ると、インデックス0(Qが欠損)、1(Pが欠損)、3(Pが欠損)の3行が欠損値を含み削除されます。欠損のないインデックス2と4の2行だけが残ります。",
  },
  {
    type: "choice",
    question:
      'df2 = pd.DataFrame({"A": [2, np.nan, 8, 10]}) のとき、SimpleImputer(strategy="mean")でfit_transformした場合、欠損値の位置に補完される値に最も近いものはどれですか?',
    choices: ["6.67", "5.0", "6.0", "20.0"],
    answerIndex: 0,
    explanation:
      "strategy=\"mean\"は欠損値を除いた値の平均で補完します。2, 8, 10の平均は(2+8+10)/3=6.666...で、小数第2位までなら6.67です。",
  },
  {
    type: "choice",
    question:
      'OneHotEncoderをColumnTransformerと組み合わせて使う際、remainder="passthrough"を指定する目的として正しいものはどれですか?',
    choices: [
      "One-hotエンコードの対象に指定していない残りの列を、変換せずにそのまま出力に含める",
      "残りの列をすべて削除する",
      "残りの列も強制的にOne-hotエンコードする",
      "変換中に発生したエラーを無視する",
    ],
    answerIndex: 0,
    explanation:
      'remainder="passthrough"は、ColumnTransformerで変換対象に指定していない列を変換せずそのまま結果に含める設定です。デフォルト("drop")では対象外の列は出力から除かれてしまいます。',
  },
  {
    type: "text",
    question:
      "カテゴリ変数の列に4種類のカテゴリ(\"north\", \"south\", \"east\", \"west\")が含まれている場合、OneHotEncoderで変換すると、この列は何列に展開されますか?半角数字で答えてください。",
    answer: ["4"],
    explanation:
      "OneHotEncoderはカテゴリの種類数と同じ数の列(各カテゴリに対応する0/1の列)を作成します。4種類のカテゴリなら4列になります。",
  },
  {
    type: "choice",
    question:
      'le = LabelEncoder(); le.fit(["a", "b", "c"]) のあと、le.classes_ は array([\'a\', \'b\', \'c\']) でした。このとき、le.transform(["c", "a"]) の結果はどれですか?',
    choices: [
      "array([2, 0])",
      "array([0, 2])",
      "array(['c', 'a'])",
      "array([1, 0])",
    ],
    answerIndex: 0,
    explanation:
      "classes_の並び順(アルファベット順)がそのままエンコードする整数に対応します。a=0, b=1, c=2なので、\"c\"は2、\"a\"は0に変換されます。",
  },
  {
    type: "text",
    question:
      "上と同じle(classes_が['a', 'b', 'c'])に対して、le.inverse_transform([2, 1, 0]) を実行した結果を、カンマとスペースで区切ってクォートなしで入力してください(例: a, b, c)。",
    answer: ["c, b, a"],
    explanation:
      "inverse_transform()は整数を元のカテゴリ値に戻します。classes_[2]='c'、classes_[1]='b'、classes_[0]='a'なので、結果は['c', 'b', 'a']になります。",
  },
  {
    type: "choice",
    question:
      "ある列の値が [2, 4, 6, 8] のとき、StandardScalerで変換した場合の8に対応する変換後の値に最も近いものはどれですか?",
    choices: ["1.34", "1.50", "1.00", "2.24"],
    answerIndex: 0,
    explanation:
      "平均は5、標準偏差(標本ではなく母集団の式)はsqrt(((2-5)^2+(4-5)^2+(6-5)^2+(8-5)^2)/4)=sqrt(5)≒2.236です。(8-5)/2.236≒1.34になります。",
  },
  {
    type: "text",
    question:
      "ある列の値が [0, 5, 10] のとき、MinMaxScaler(feature_range=(-1, 1))で5を変換した結果を数値で答えてください。",
    answer: ["0"],
    explanation:
      "feature_range=(-1, 1)の場合、変換式は -1 + (x-最小値)/(最大値-最小値) * (1-(-1)) です。(5-0)/(10-0)=0.5なので、-1 + 0.5*2 = 0になります。",
  },
  {
    type: "choice",
    question:
      "iris = load_iris() で読み込んだ後の iris.data と iris.target の関係として正しい記述はどれですか?",
    choices: [
      "iris.dataは各サンプルの特徴量(説明変数)からなる2次元配列、iris.targetは各サンプルのクラスラベル(目的変数)からなる1次元配列である",
      "iris.dataがクラスラベル、iris.targetが特徴量である(記述が逆)",
      "iris.dataとiris.targetはまったく同じ内容である",
      "iris.targetは特徴量の名前の一覧を表す文字列のリストである",
    ],
    answerIndex: 0,
    explanation:
      "scikit-learnの組み込みデータセットでは、dataが説明変数(特徴量)の配列、targetが目的変数(クラスラベルなど)の配列という命名規則になっています。",
  },
  {
    type: "text",
    question:
      "200件のデータに対して train_test_split(X, y, test_size=0.2, random_state=0) を実行した場合、X_test.shape[0](テストデータの件数)はいくつになりますか?半角数字で答えてください。",
    answer: ["40"],
    explanation:
      "test_size=0.2はテストデータの割合が20%であることを意味するため、200×0.2=40件になります。",
  },
  {
    type: "choice",
    question:
      "SVCのkernelパラメータに\"linear\"ではなく\"rbf\"(動径基底関数カーネル)を指定する主な理由として正しいものはどれですか?",
    choices: [
      "直線(超平面)では分離できない非線形な決定境界を学習できるようにするため",
      "学習にかかる計算時間を必ず短縮するため",
      "常に過学習を防げるようにするため",
      "出力を確率値に変換するため",
    ],
    answerIndex: 0,
    explanation:
      "rbfカーネルはデータを高次元空間に写像することで、直線では分離できない複雑な(非線形な)決定境界を学習できるようにします。",
  },
  {
    type: "choice",
    question: "SVCのdecision_function(X)が返す値の説明として正しいものはどれですか?",
    choices: [
      "各サンプルが決定境界からどれだけ離れているかを表す符号付きの値であり、クラスラベルそのものではない",
      "各サンプルのクラスラベル(0または1)そのものを返す",
      "各クラスに属する確率(0〜1)を返す",
      "学習にかかった時間を返す",
    ],
    answerIndex: 0,
    explanation:
      "decision_function()は決定境界からの符号付き距離(マージンに対する位置関係)を返します。正負でどちらのクラス側にあるかが分かり、絶対値が大きいほど境界から離れていることを意味します。",
  },
  {
    type: "choice",
    question: "DecisionTreeClassifierのfeature_importances_属性が表すものはどれですか?",
    choices: [
      "各特徴量が分類の予測にどれだけ貢献したかを表す重要度のスコア(合計すると1になるよう正規化されている)",
      "各特徴量の平均値",
      "木の深さ",
      "テストデータに対する正解率",
    ],
    answerIndex: 0,
    explanation:
      "feature_importances_は、各特徴量が木の分岐(不純度の減少)にどれだけ貢献したかを表すスコアで、全特徴量の合計が1になるように正規化されています。",
  },
  {
    type: "choice",
    question:
      "RandomForestClassifierのn_estimatorsを100から500のように大幅に増やした場合の一般的な影響として正しいものはどれですか?",
    choices: [
      "学習・予測にかかる計算時間は増えるが、性能の向上は次第に頭打ちになる傾向がある",
      "計算時間は変わらず、性能は必ず線形に向上し続ける",
      "計算時間は短くなる",
      "必ず過学習が悪化し、精度が下がり続ける",
    ],
    answerIndex: 0,
    explanation:
      "木の本数を増やすほど学習・予測の計算コストは増加しますが、ある程度の本数を超えると性能の向上は緩やかになり、頭打ちになる傾向があります。",
  },
  {
    type: "choice",
    question: "LinearRegressionをfitさせたあとのlr.coef_属性が表すものはどれですか?",
    choices: [
      "各説明変数に対応する回帰係数(その変数が1増えたときに目的変数がどれだけ変化するかを示す値)",
      "モデルの正解率",
      "学習に使ったサンプル数",
      "予測値そのもの",
    ],
    answerIndex: 0,
    explanation:
      "coef_は線形回帰モデルにおける各説明変数の係数で、その変数が1単位増加したときに目的変数がどれだけ変化するかを表します(切片はintercept_に格納されます)。",
  },
  {
    type: "choice",
    question:
      "予測値を横軸、実績値を縦軸にした散布図に、傾き1・切片0の点線(y=xの直線)を重ねて描画する目的として正しいものはどれですか?",
    choices: [
      "予測が完全に正確であれば全ての点がこの直線上に乗るはずであり、直線からのズレの大きさで予測誤差を視覚的に確認するため",
      "この直線が決定境界を表すため",
      "外れ値を自動的に除去するため",
      "回帰係数の値をそのままグラフに表示するため",
    ],
    answerIndex: 0,
    explanation:
      "予測値と実績値が完全に一致していれば、すべての点はy=xの直線上に乗ります。直線からのズレが大きいほど予測の誤差が大きいことを視覚的に把握できます。",
  },
  {
    type: "choice",
    question: "PCAのexplained_variance_ratio_属性が表すものはどれですか?",
    choices: [
      "各主成分が元のデータ全体の分散のうち、どれだけの割合を説明しているかを表す値",
      "各主成分に対応する元の特徴量の名前",
      "主成分分析にかかった計算時間",
      "クラスタの数",
    ],
    answerIndex: 0,
    explanation:
      "explained_variance_ratio_は、各主成分が元データの分散全体のうちどれだけの割合を説明できているかを示す値です。通常、第1主成分が最も大きな値を持ちます。",
  },
  {
    type: "choice",
    question:
      "2つの特徴量からなるデータに対してPCA(n_components=1)を適用した場合の記述として正しいものはどれですか?",
    choices: [
      "分散が最大になる1つの方向(第1主成分)だけにデータを射影するため、元の情報の一部(第2主成分が持っていた情報)は失われる",
      "情報を一切失わずに元の2次元のデータをそのまま保持できる",
      "特徴量の数がそのまま2のまま変わらない",
      "分類のための決定境界を自動的に学習する",
    ],
    answerIndex: 0,
    explanation:
      "PCAで主成分数を元の次元数より減らすと、分散の小さい方向(この場合は第2主成分)の情報が失われる、情報の損失を伴う次元削減になります。",
  },
  {
    type: "choice",
    question:
      "classification_reportの出力に含まれるsupport列が表す内容として正しいものはどれですか?",
    choices: [
      "そのクラスに属する実際のサンプル数(正解ラベル側の件数)",
      "モデルがそのクラスと予測した件数",
      "誤分類された件数",
      "学習に使ったデータ全体の件数",
    ],
    answerIndex: 0,
    explanation:
      "support列は、テストデータ(正解ラベル)の中でそのクラスに実際に属していたサンプル数を表します。予測件数ではありません。",
  },
  {
    type: "choice",
    question:
      'cross_val_score(svc, X, y, cv=10, scoring="precision") のように scoring="precision" を指定する目的として正しいものはどれですか?',
    choices: [
      "各分割での評価指標として、正解率(accuracy)ではなく適合率(precision)を使うことを指定するため",
      "交差検証の分割数を指定するため",
      "学習に使うモデルの種類を指定するため",
      "常に評価結果を10倍にするため",
    ],
    answerIndex: 0,
    explanation:
      "scoringパラメータは交差検証で使う評価指標を指定します。指定しない場合のデフォルトは多くの分類器でaccuracyですが、\"precision\"を指定すると適合率で評価されます。",
  },
  {
    type: "choice",
    question:
      "ROC曲線において、分類のしきい値を下げて陽性と判定しやすくしていくと、一般的にfpr(偽陽性率)とtpr(真陽性率)はどうなりますか?",
    choices: [
      "どちらも単調に増加していく(0付近から始まり1に向かって増えていく)",
      "どちらも単調に減少していく",
      "fprだけが増加し、tprは変化しない",
      "tprだけが減少し、fprは変化しない",
    ],
    answerIndex: 0,
    explanation:
      "しきい値を下げるほど陽性と判定されるサンプルが増えるため、真陽性・偽陽性のどちらも増加し、fprとtprはともに単調に増加していきます。",
  },
  {
    type: "choice",
    question: "あるモデルのroc_auc_scoreが0.85だった場合の解釈として正しいものはどれですか?",
    choices: [
      "ランダムな予測(AUC=0.5)よりも明らかに識別性能が高く、かなり良い分類性能といえる",
      "ランダムな予測とほとんど変わらない性能である",
      "必ず過学習を起こしている",
      "回帰タスクの評価指標として使われた値である",
    ],
    answerIndex: 0,
    explanation:
      "AUCは0.5がランダムな予測、1.0に近いほど良い性能を意味します。0.85はランダムより明らかに優れており、比較的良好な分類性能を示します。",
  },
  {
    type: "text",
    question:
      'GridSearchCV(clf, param_grid={"max_depth": [3, 4, 5], "min_samples_split": [2, 4]}, cv=5) を実行した場合、交差検証のために学習(fit)が行われる回数の合計はいくつになりますか?半角数字で答えてください。',
    answer: ["30"],
    explanation:
      "パラメータの組み合わせはmax_depthの3通り×min_samples_splitの2通り=6通りです。それぞれについてcv=5分割の交差検証を行うため、6×5=30回の学習が行われます。",
  },
  {
    type: "choice",
    question:
      "KMeansのfit_predict(X)によって得られるクラスタ番号(0, 1, 2など)に関する記述として正しいものはどれですか?",
    choices: [
      "クラスタ番号は単なる識別用のラベルであり、番号の大小自体に意味はなく、正解の分類ラベルと同じ番号になる保証もない",
      "クラスタ番号は常に元の正解ラベルと完全に一致する",
      "番号が小さいクラスタほど、必ずデータ数が多い",
      "クラスタ番号は各クラスタの中心座標の値そのものである",
    ],
    answerIndex: 0,
    explanation:
      "KMeansは教師なし学習であり、正解ラベルを使わずにグループ分けを行うため、割り振られる番号(0, 1, 2...)と実際のクラス番号が一致する保証はありません。",
  },
  {
    type: "choice",
    question: "KMeansのinertia_属性が表すものはどれですか?",
    choices: [
      "各データ点と、それが所属するクラスタの中心との距離の2乗和(クラスタ内誤差平方和)",
      "クラスタの個数",
      "学習にかかった時間",
      "各クラスタの中心座標そのもの",
    ],
    answerIndex: 0,
    explanation:
      "inertia_は、各データ点と所属クラスタの中心との距離の2乗を全データについて合計した値(クラスタ内誤差平方和)で、値が小さいほど各クラスタがまとまっていることを意味します。",
  },
  {
    type: "choice",
    question:
      'AgglomerativeClusteringでlinkage="single"を指定した場合の、2つのクラスタ間の距離の定義として正しいものはどれですか?',
    choices: [
      "2つのクラスタに属するデータ点の組み合わせの中で、最も近い(距離が最小となる)組の距離",
      "2つのクラスタに属するすべてのデータ点の組み合わせの中で、最も離れている(距離が最大となる)組の距離",
      "2つのクラスタの重心同士の距離",
      "2つのクラスタに属するデータ点間の距離の平均",
    ],
    answerIndex: 0,
    explanation:
      '"single"(単連結法)は2つのクラスタの中で最も近いデータ点同士の距離をクラスタ間距離とします。最も遠い点同士を使う方法は"complete"(完全連結法)です。',
  },
  {
    type: "choice",
    question: "OneHotEncoderの変換結果に関する記述として正しいものはどれですか?",
    choices: [
      "設定やバージョンによっては疎行列(sparse matrix)形式で返されることがあり、通常のNumPy配列として扱うには.toarray()などで密行列に変換する必要がある場合がある",
      "変換結果は常に元の文字列のままの配列として返される",
      "変換結果は必ず元のDataFrameそのものを直接書き換える",
      "変換結果は必ず1列だけの配列になる",
    ],
    answerIndex: 0,
    explanation:
      "OneHotEncoderはカテゴリ数が多いと0が大部分を占める疎な行列になりやすいため、デフォルトやバージョンによっては疎行列形式で結果を返すことがあり、必要に応じて.toarray()で密な配列に変換します。",
  },
  {
    type: "choice",
    question: "次のうち、教師なし学習に分類されるものはどれですか?",
    choices: [
      "KMeansによるクラスタリング",
      "SVCによる分類",
      "LinearRegressionによる回帰",
      "DecisionTreeClassifierによる分類",
    ],
    answerIndex: 0,
    explanation:
      "KMeansは正解ラベルを使わずにデータの構造だけからグループ分けを行う教師なし学習です。SVC、LinearRegression、DecisionTreeClassifierはいずれも正解ラベル(または目的変数)を使って学習する教師あり学習です。",
  },
  {
    type: "choice",
    question: "次のうち、回帰タスクの評価に使うのに適した指標はどれですか?",
    choices: [
      "決定係数(R²)や平均二乗誤差(MSE)",
      "適合率(precision)",
      "混同行列",
      "ROC曲線",
    ],
    answerIndex: 0,
    explanation:
      "適合率、混同行列、ROC曲線はいずれもクラスラベルを予測する分類タスクの評価に使われる指標です。回帰タスクでは連続値の予測誤差を測る決定係数(R²)や平均二乗誤差(MSE)などが使われます。",
  },
];
