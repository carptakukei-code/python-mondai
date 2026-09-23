window.QUIZ_TITLE = "第4章1節 確認問題(NumPy)";

window.QUESTIONS = [
  {
    type: "choice",
    question:
      "np.array([[1, 2], [3, 4], [5, 6]]).shape の結果はどれですか?",
    choices: ["(3, 2)", "(2, 3)", "(6,)", "(3,)"],
    answerIndex: 0,
    explanation:
      "3行2列の2次元配列なので、shapeは(行数, 列数)=(3, 2)になります。",
  },
  {
    type: "choice",
    question: "次のコードを実行すると、c1はどうなりますか?",
    code: "c1 = np.arange(12)\nc1 = c1.reshape((3, 4))\nc1",
    choices: [
      "array([[0,1,2,3],\n       [4,5,6,7],\n       [8,9,10,11]])",
      "array([[0,1,2],\n       [3,4,5],\n       [6,7,8],\n       [9,10,11]])",
      "array([[0,4,8],\n       [1,5,9],\n       [2,6,10],\n       [3,7,11]])",
      "array([0,1,2,3,4,5,6,7,8,9,10,11])",
    ],
    answerIndex: 0,
    explanation:
      "np.arange(12)は0〜11の1次元配列で、reshape((3, 4))は要素の並び順(行優先/C order)を保ったまま3行4列に並べ替えます。",
  },
  {
    type: "choice",
    question:
      "ndarrayのravel()とflatten()の違いとして正しい記述はどれですか?",
    choices: [
      "flatten()は常に新しいコピーを返すが、ravel()は可能な限り元データを共有するビューを返す",
      "ravel()は常に新しいコピーを返すが、flatten()は可能な限り元データを共有するビューを返す",
      "両方とも常にコピーを返す",
      "両方とも常にビューを返す",
    ],
    answerIndex: 0,
    explanation:
      "flatten()は必ず独立したコピーを返しますが、ravel()は配列がメモリ上で連続している場合、元の配列とデータを共有するビューを返すことがあります。",
  },
  {
    type: "text",
    question:
      "次のコードを順に実行したあと、arr[0, 0] の値はどうなりますか?半角数字で答えてください。",
    code:
      "arr = np.arange(6).reshape((2, 3))\n" +
      "v = arr.ravel()\n" +
      "v[0] = 99",
    answer: ["99"],
    explanation:
      "ravel()は元の配列とデータを共有するビューを返すため、vの要素を書き換えるとarrにも反映され、arr[0, 0]は99になります。",
  },
  {
    type: "choice",
    question:
      "上の続きで、さらに次のコードを実行しました。arr[0, 1] はどうなりますか?",
    code: "w = arr.flatten()\nw[1] = 100",
    choices: [
      "変化しない(1のまま)",
      "100になる",
      "99になる",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "flatten()は独立したコピーを返すため、wを書き換えてもarrには影響しません。",
  },
  {
    type: "choice",
    question:
      "d = np.array([100, 200], dtype=np.int16) のとき、d.astype(np.float32) のdtypeはどれですか?",
    choices: ["float32", "int16", "float64", "int32"],
    answerIndex: 0,
    explanation:
      "astype()は指定した型に変換した新しい配列を返します。np.float32を指定しているのでdtypeはfloat32になります。",
  },
  {
    type: "choice",
    question:
      "a = np.array([10, 20, 30, 40, 50]) のとき、a[1:-1] の結果はどれですか?",
    choices: [
      "array([20, 30, 40])",
      "array([10, 20, 30, 40])",
      "array([20, 30, 40, 50])",
      "array([10, 50])",
    ],
    answerIndex: 0,
    explanation:
      "a[1:-1]はインデックス1から最後の要素の手前まで(インデックス4は含まない)を取り出すため、20, 30, 40が対象になります。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[1,2,3],[4,5,6],[7,8,9]]) のとき、b[:, [0, 2]] の結果はどれですか?",
    choices: [
      "array([[1,3],\n       [4,6],\n       [7,9]])",
      "array([[1,2],\n       [4,5],\n       [7,8]])",
      "array([1,3,4,6,7,9])",
      "array([[1,2,3],\n       [7,8,9]])",
    ],
    answerIndex: 0,
    explanation:
      "[0, 2]というリストを列インデックスに指定するファンシーインデックスにより、全行から0列目と2列目だけを取り出せます。",
  },
  {
    type: "choice",
    question:
      "次のコードを実行したあと、py_listとnp_arrはそれぞれどうなりますか?",
    code:
      "py_list = [10, 20]\n" +
      "py_list2 = py_list[:]\n" +
      "py_list2[0] = 99\n\n" +
      "np_arr = np.array([10, 20])\n" +
      "np_arr2 = np_arr[:]\n" +
      "np_arr2[0] = 99",
    choices: [
      "py_list は [10, 20] のまま変わらないが、np_arr は array([99, 20]) に変わる",
      "py_list も np_arr も変わらない",
      "py_list は [99, 20] に変わるが、np_arr は array([10, 20]) のまま変わらない",
      "py_list も np_arr も [99, 20] に変わる",
    ],
    answerIndex: 0,
    explanation:
      "Pythonのリストのスライス[:]は新しいリスト(コピー)を作りますが、ndarrayの基本的なスライスはビュー(元データと共有)を返すため、np_arr2への変更が元のnp_arrにも反映されます。",
  },
  {
    type: "choice",
    question: "np.arange(2, 20, 3) の結果はどれですか?",
    choices: [
      "array([2, 5, 8, 11, 14, 17])",
      "array([2, 5, 8, 11, 14, 17, 20])",
      "array([3, 6, 9, 12, 15, 18])",
      "array([2, 4, 6, 8, 10, 12, 14, 16, 18])",
    ],
    answerIndex: 0,
    explanation:
      "np.arange(start, stop, step)はstartからstop未満まで、step間隔で値を生成します。2から始めて3ずつ増やすと20を超える手前の17までが対象です。",
  },
  {
    type: "choice",
    question:
      "rng = np.random.default_rng(42) のように同じseed値を指定して乱数生成器を作り直した場合、rng.integers(1, 100)などで得られる乱数の系列はどうなりますか?",
    choices: [
      "何度作り直しても同じ系列の乱数が再現される",
      "seedを指定しても毎回異なる系列になる",
      "エラーになり乱数が生成できない",
      "常に同じ1つの数値しか返さなくなる",
    ],
    answerIndex: 0,
    explanation:
      "default_rng()に同じseed値を渡すと、内部の状態が同じになるため、そこから生成される乱数の系列は毎回同じものが再現されます(再現性の確保に利用されます)。",
  },
  {
    type: "choice",
    question: "np.zeros((2, 4)) の結果はどれですか?",
    choices: [
      "要素がすべて0.0の2行4列の配列",
      "要素がすべて1.0の2行4列の配列",
      "要素がすべて0.0の4行2列の配列",
      "空の(要素数0の)配列",
    ],
    answerIndex: 0,
    explanation:
      "np.zeros(shape)は指定した形状の、すべての要素が0.0(浮動小数点数)の配列を作成します。",
  },
  {
    type: "choice",
    question: "np.eye(4) の [1, 3] 番目の要素(0始まりのインデックス)の値はどれですか?",
    choices: ["0.0", "1.0", "4.0", "エラーになる"],
    answerIndex: 0,
    explanation:
      "np.eye(4)は4x4の単位行列で、行と列のインデックスが一致する対角成分だけが1.0、それ以外は0.0です。[1, 3]は行と列が異なるため0.0です。",
  },
  {
    type: "choice",
    question: "np.full((3, 2), 9) の結果はどれですか?",
    choices: [
      "要素がすべて9の3行2列の配列",
      "要素がすべて9の2行3列の配列",
      "0から9までの連番が入った配列",
      "対角成分だけが9の配列",
    ],
    answerIndex: 0,
    explanation:
      "np.full(shape, fill_value)は指定した形状の配列を、すべて指定した値で埋めて作成します。",
  },
  {
    type: "choice",
    question: "np.nan == np.nan の結果はどれですか?",
    choices: ["False", "True", "nan", "エラーになる"],
    answerIndex: 0,
    explanation:
      "NaN(Not a Number)はIEEE 754の仕様により、自分自身と比較しても等しいと判定されないため、np.nan == np.nanはFalseになります。",
  },
  {
    type: "choice",
    question: "np.linspace(0, 10, 5) の結果はどれですか?",
    choices: [
      "array([0., 2.5, 5., 7.5, 10.])",
      "array([0., 2., 4., 6., 8.])",
      "array([2., 4., 6., 8., 10.])",
      "array([0., 2.5, 5., 7.5])",
    ],
    answerIndex: 0,
    explanation:
      "linspace(start, stop, num)はstartからstopまで(両端を含む)を等間隔にnum個に分割します。間隔は(10-0)/(5-1)=2.5です。",
  },
  {
    type: "choice",
    question: "l = np.array([5, 8, 3, 10, 10]) のとき、np.diff(l) の結果はどれですか?",
    choices: [
      "array([3, -5, 7, 0])",
      "array([3, -5, 7])",
      "array([5, 8, 3, 10, 10])",
      "array([-3, 5, -7, 0])",
    ],
    answerIndex: 0,
    explanation:
      "diff()は隣り合う要素の差(後ろ-前)を計算します。8-5=3, 3-8=-5, 10-3=7, 10-10=0です。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[1,2],[3,4]]), b1 = np.array([[5],[6]]) のとき、np.concatenate([b, b1], axis=1) の結果はどれですか?",
    choices: [
      "array([[1,2,5],\n       [3,4,6]])",
      "array([[1,2],\n       [3,4],\n       [5],\n       [6]])",
      "array([[1,2,5,6],\n       [3,4,5,6]])",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "axis=1は列方向(横方向)への結合です。両方とも行数が2で一致しているため、bの右にb1の列を連結できます。",
  },
  {
    type: "choice",
    question:
      "np.vstack と np.hstack の違いに関する記述として正しいものはどれですか?",
    choices: [
      "vstackは配列を縦(行方向)に積み重ね、hstackは横(列方向)に連結する",
      "vstackは配列を横(列方向)に連結し、hstackは縦(行方向)に積み重ねる",
      "どちらも同じ結果になり、違いはない",
      "vstackは1次元配列専用、hstackは2次元配列専用である",
    ],
    answerIndex: 0,
    explanation:
      "vstack(vertical stack)は行を追加するように縦に積み重ね、hstack(horizontal stack)は列を追加するように横に連結します。",
  },
  {
    type: "choice",
    question:
      "b3 = np.array([[1,2,9],[3,4,9],[7,8,9]]) のとき、first, second = np.hsplit(b3, [2]) を実行すると、secondはどれになりますか?",
    choices: [
      "array([[9],\n       [9],\n       [9]])",
      "array([[1,2],\n       [3,4],\n       [7,8]])",
      "array([9, 9, 9])",
      "array([[7,8,9]])",
    ],
    answerIndex: 0,
    explanation:
      "hsplit(arr, [2])は列インデックス2の位置で列方向に分割します。firstは0〜1列目、secondは2列目以降(この場合は2列目のみ)になります。",
  },
  {
    type: "choice",
    question: "b.shape が (2, 3) のとき、b.T.shape はどれになりますか?",
    choices: ["(3, 2)", "(2, 3)", "(6,)", "(3, 3)"],
    answerIndex: 0,
    explanation:
      "T属性(転置)は行と列を入れ替えるため、(2, 3)は(3, 2)になります。",
  },
  {
    type: "choice",
    question:
      "a = np.array([10, 20, 30]) のとき、a[:, np.newaxis] の結果はどれですか?",
    choices: [
      "array([[10],\n       [20],\n       [30]]) (shapeは(3, 1))",
      "array([[10, 20, 30]]) (shapeは(1, 3))",
      "array([10, 20, 30]) (shapeは(3,)のまま)",
      "エラーになる(1次元配列にnp.newaxisは使えない)",
    ],
    answerIndex: 0,
    explanation:
      "np.newaxisを列の位置に指定すると新しい軸が追加され、1次元配列を(3, 1)の2次元の縦ベクトルに変換できます。",
  },
  {
    type: "choice",
    question:
      "m = np.arange(0, 3), n = np.arange(5, 8) のとき、xx, yy = np.meshgrid(m, n) を実行すると、yyの結果はどれですか?",
    choices: [
      "array([[5,5,5],\n       [6,6,6],\n       [7,7,7]])",
      "array([[0,1,2],\n       [0,1,2],\n       [0,1,2]])",
      "array([[5,6,7],\n       [5,6,7],\n       [5,6,7]])",
      "array([5,6,7])",
    ],
    answerIndex: 0,
    explanation:
      "meshgrid(m, n)の2つ目の戻り値yyは、nの各値がその行全体に広がった格子を作ります。nは5,6,7の3つなので、行ごとに5,6,7で埋まった3行3列の配列になります。",
  },
  {
    type: "choice",
    question:
      "a = np.arange(3), a1 = a[:, np.newaxis] のとき、a + a1 の結果はどれですか?",
    choices: [
      "array([[0,1,2],\n       [1,2,3],\n       [2,3,4]])",
      "array([0,1,2,1,2,3,2,3,4])",
      "array([[0,0,0],\n       [1,1,1],\n       [2,2,2]])",
      "エラーになる(形状が合わない)",
    ],
    answerIndex: 0,
    explanation:
      "shapeが(3,)のaと(3,1)のa1は、ブロードキャストにより(3,3)の形に拡張されて加算されます。a1の各行の値(0,1,2)がaの各要素に加算されます。",
  },
  {
    type: "choice",
    question:
      "shapeが(2, 3)のbと、shapeが(3, 2)のdがあるとき、次のうちエラーになる演算はどれですか?",
    choices: [
      "b * d (要素ごとの積)",
      "b @ d (行列積)",
      "d @ b (行列積)",
      "b.T @ d (転置してからの行列積)",
    ],
    answerIndex: 0,
    explanation:
      "要素ごとの演算(*)はブロードキャスト可能な形状同士でしか計算できませんが、(2,3)と(3,2)はブロードキャストできないためエラーになります。一方@(行列積)は内側の次元(3)が一致していれば計算できます。",
  },
  {
    type: "choice",
    question:
      "np.log(np.array([0, 1, np.e])) の結果はどれですか?(np.eは自然対数の底)",
    choices: [
      "array([-inf, 0., 1.]) (0の対数で警告が出る)",
      "array([0., 1., 2.])",
      "array([nan, 0., 1.])",
      "エラーになり計算が中断される",
    ],
    answerIndex: 0,
    explanation:
      "log(0)は数学的に定義されずNumPyでは-infとなり、RuntimeWarningが出ますが処理は継続されます。log(1)=0、log(e)=1です。",
  },
  {
    type: "text",
    question:
      "b = np.array([[-3,-2,-1],[0,1,2]]) のとき、np.count_nonzero(b > 0) の結果を半角数字で答えてください。",
    answer: ["2"],
    explanation:
      "b > 0はブール配列になり、Trueなのは値が1と2の2箇所だけです。count_nonzero()はTrueの個数(非ゼロの個数)を数えます。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[-3,-2,-1],[0,1,2]]) のとき、np.any(b > 1) と np.all(b > 1) の組み合わせとして正しいものはどれですか?",
    choices: [
      "np.any(b > 1)はTrue、np.all(b > 1)はFalse",
      "np.any(b > 1)はFalse、np.all(b > 1)はTrue",
      "両方ともTrue",
      "両方ともFalse",
    ],
    answerIndex: 0,
    explanation:
      "1より大きい要素は2の1つだけ存在するため、いずれか1つでも条件を満たせばTrueを返すany()はTrue、すべての要素が条件を満たす必要があるall()はFalseになります。",
  },
  {
    type: "choice",
    question:
      "x = np.array([1.0, 2.0]), y = np.array([1.01, 2.01]) のとき、np.allclose(x, y) と np.allclose(x, y, atol=0.1) の組み合わせとして正しいものはどれですか?(デフォルトの許容誤差atolは非常に小さい値です)",
    choices: [
      "np.allclose(x, y)はFalse、atol=0.1を指定するとTrue",
      "np.allclose(x, y)はTrue、atol=0.1を指定するとFalse",
      "どちらもTrue",
      "どちらもFalse",
    ],
    answerIndex: 0,
    explanation:
      "xとyの差は0.01で、デフォルトの許容誤差(atolは1e-08程度)より大きいためFalseになりますが、atol=0.1のように許容誤差を緩めると差が許容範囲内に収まりTrueになります。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[-3,-2,-1],[0,1,2]]) のとき、b[b > 0] の結果はどれですか?",
    choices: [
      "array([1, 2])",
      "array([[0,1,2]])",
      "array([-3,-2,-1,0,1,2])",
      "array([True, True])",
    ],
    answerIndex: 0,
    explanation:
      "ブールインデックスは条件を満たす要素だけを取り出し、1次元の配列として返します。条件b > 0を満たすのは1と2です。",
  },
];
