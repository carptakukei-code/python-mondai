window.QUIZ_TITLE = "第4章1節 確認問題 セットB(NumPy)";

window.QUESTIONS = [
  {
    type: "choice",
    question: "np.array([1, 2, 3.5]) のdtypeはどれになりますか?",
    choices: ["float64", "int64", "object", "int32"],
    answerIndex: 0,
    explanation:
      "配列の要素にint(1, 2)とfloat(3.5)が混在している場合、NumPyはより表現力の高いfloat64に自動的にそろえます(型の昇格)。",
  },
  {
    type: "choice",
    question: "np.zeros((2, 3, 4)).shape の結果はどれですか?",
    choices: ["(2, 3, 4)", "(2, 3)", "(24,)", "(4, 3, 2)"],
    answerIndex: 0,
    explanation:
      "np.zeros(shape)はshapeにタプルで指定した形状そのままの配列を作成します。3次元のタプルを渡せば3次元配列になります。",
  },
  {
    type: "choice",
    question: "次のコードを実行すると、結果はどれになりますか?",
    code: "np.arange(20).reshape((4, 5))",
    choices: [
      "array([[0,1,2,3,4],\n       [5,6,7,8,9],\n       [10,11,12,13,14],\n       [15,16,17,18,19]])",
      "array([[0,4,8,12,16],\n       [1,5,9,13,17],\n       [2,6,10,14,18],\n       [3,7,11,15,19]])",
      "array([[0,1,2,3],\n       [4,5,6,7],\n       [8,9,10,11],\n       [12,13,14,15],\n       [16,17,18,19]])",
      "array([0,1,2,...,19])のまま1次元",
    ],
    answerIndex: 0,
    explanation:
      "np.arange(20)は0〜19の1次元配列で、reshape((4, 5))は要素の並び順(行優先)を保ったまま4行5列に並べ替えます。",
  },
  {
    type: "choice",
    question:
      "次のコードを実行したあと、a と a2 はそれぞれどうなりますか?",
    code:
      "a = np.array([1, 2, 3])\n" +
      "a1 = a\n" +
      "a2 = a.copy()\n" +
      "a1[0] = 99",
    choices: [
      "a は array([99, 2, 3]) に変わるが、a2 は array([1, 2, 3]) のまま変わらない",
      "a も a2 も変わらない",
      "a は変わらないが、a2 は array([99, 2, 3]) に変わる",
      "a も a2 も array([99, 2, 3]) に変わる",
    ],
    answerIndex: 0,
    explanation:
      "a1 = a は同じ配列を指す別名(参照)であるため、a1を書き換えるとaにも反映されます。一方a.copy()は独立したコピーを作るため、a1への変更はa2に影響しません。",
  },
  {
    type: "text",
    question:
      "d = np.array([1, 2], dtype=np.int8) のとき、d.itemsize(1要素あたりのバイト数)はいくつですか?半角数字で答えてください。",
    answer: ["1"],
    explanation:
      "int8は8ビット=1バイトの整数型なので、itemsizeは1になります。",
  },
  {
    type: "choice",
    question: "np.arange(10, 0, -2) の結果はどれですか?",
    choices: [
      "array([10, 8, 6, 4, 2])",
      "array([10, 8, 6, 4, 2, 0])",
      "array([0, 2, 4, 6, 8, 10])",
      "array([8, 6, 4, 2])",
    ],
    answerIndex: 0,
    explanation:
      "step(この場合-2)が負の場合、startから始めてstopより大きい間、値を減らしながら生成します。10から2ずつ減らし、0を含まない手前の2まで生成されます。",
  },
  {
    type: "choice",
    question:
      "rng = np.random.default_rng(1) のとき、rng.integers(0, 5, size=(2, 3)) の実行結果に関する記述として正しいものはどれですか?",
    choices: [
      "shapeが(2, 3)の配列になり、各要素は0以上5未満の整数になる",
      "shapeが(2, 3)の配列になり、各要素は0以上5以下の整数になる",
      "shapeが(3, 2)の配列になる",
      "5個の整数からなる1次元配列になる",
    ],
    answerIndex: 0,
    explanation:
      "sizeで指定した形状(2, 3)の配列が生成されます。integers(low, high)はlow以上high未満(highを含まない)の範囲で整数を生成します。",
  },
  {
    type: "choice",
    question: "np.eye(5) の全要素の合計値はいくつですか?",
    choices: ["5", "25", "1", "0"],
    answerIndex: 0,
    explanation:
      "np.eye(5)は5x5の単位行列で、対角成分の5個だけが1.0、それ以外は0.0です。合計すると1.0が5個分で5になります。",
  },
  {
    type: "choice",
    question: "np.full((2, 2), 2.5) の結果はどれですか?",
    choices: [
      "array([[2.5, 2.5],\n       [2.5, 2.5]])",
      "array([[2, 2],\n       [2, 2]])",
      "array([[2.5, 0.],\n       [0., 2.5]])",
      "array([2.5, 2.5])",
    ],
    answerIndex: 0,
    explanation:
      "np.full(shape, fill_value)は指定した形状のすべての要素を、指定した値(2.5)で埋めます。",
  },
  {
    type: "choice",
    question:
      "np.array([1, np.nan, 3]).sum() の結果はどれですか?",
    choices: [
      "nan",
      "4",
      "4.0",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "NaN(欠損値)を含む配列に対して通常のsum()を使うと、NaNが伝播して結果全体がnanになります。NaNを無視して合計したい場合はnp.nansum()を使う必要があります。",
  },
  {
    type: "choice",
    question:
      "np.linspace(0, 10, 5, endpoint=False) の結果はどれですか?",
    choices: [
      "array([0., 2., 4., 6., 8.])",
      "array([0., 2.5, 5., 7.5, 10.])",
      "array([2., 4., 6., 8., 10.])",
      "array([0., 2., 4., 6.])",
    ],
    answerIndex: 0,
    explanation:
      "endpoint=Falseを指定すると終端の値(10)を含まずに等間隔に分割します。この場合は(10-0)/5=2間隔で0, 2, 4, 6, 8が生成されます。",
  },
  {
    type: "choice",
    question:
      "l = [1, 4, 9, 16, 25] のとき、np.diff(l, 2)(2階差分)の結果はどれですか?",
    choices: [
      "array([2, 2, 2])",
      "array([3, 5, 7, 9])",
      "array([2, 2, 2, 2])",
      "array([1, 4, 9, 16, 25])",
    ],
    answerIndex: 0,
    explanation:
      "1階差分はnp.diff(l)=[3, 5, 7, 9]です。2階差分はさらにその差分をとったもので、[5-3, 7-5, 9-7]=[2, 2, 2]になります。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[1,2],[3,4]]), b2 = np.array([[5,6]]) のとき、np.concatenate([b, b2], axis=0) の結果はどれですか?",
    choices: [
      "array([[1,2],\n       [3,4],\n       [5,6]])",
      "array([[1,2,5,6],\n       [3,4,5,6]])",
      "array([[1,2,5],\n       [3,4,6]])",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "axis=0は行方向(縦)への結合です。どちらも列数が2で一致しているため、bの下にb2の行を連結できます。",
  },
  {
    type: "choice",
    question:
      "a = np.array([1, 2]), b = np.array([3, 4, 5]) のとき、np.hstack([a, b]) の結果はどれですか?",
    choices: [
      "array([1, 2, 3, 4, 5])",
      "エラーになる(要素数が異なるため)",
      "array([[1, 2], [3, 4, 5]])",
      "array([4, 6])",
    ],
    answerIndex: 0,
    explanation:
      "1次元配列同士のhstackは単純に要素を連結します。2次元配列と違って行数をそろえる必要がないため、要素数が異なっても連結できます。",
  },
  {
    type: "text",
    question:
      "a = np.array([1, 2, 3]) のとき、a.T.shape の結果を、丸括弧とカンマを含めてそのまま入力してください(例: (2, 3))。",
    answer: ["(3,)"],
    explanation:
      "1次元配列に対してT(転置)を行っても形状は変化しません。転置が意味を持つのは2次元以上の配列に対してです。",
  },
  {
    type: "choice",
    question:
      "a = np.array([1, 2, 3]) のとき、a[np.newaxis, :] の結果はどれですか?",
    choices: [
      "array([[1, 2, 3]]) (shapeは(1, 3))",
      "array([[1], [2], [3]]) (shapeは(3, 1))",
      "array([1, 2, 3]) (shapeは(3,)のまま)",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "np.newaxisを行の位置(先頭)に指定すると、1次元配列は(1, 3)の横ベクトル(1行3列)になります。",
  },
  {
    type: "choice",
    question:
      "m = np.arange(0, 3), n = np.arange(5, 8) のとき、xx, yy = np.meshgrid(m, n) を実行すると、xxの結果はどれですか?",
    choices: [
      "array([[0,1,2],\n       [0,1,2],\n       [0,1,2]])",
      "array([[5,5,5],\n       [6,6,6],\n       [7,7,7]])",
      "array([0,1,2])",
      "array([[0,1,2],\n       [3,4,5],\n       [6,7,8]])",
    ],
    answerIndex: 0,
    explanation:
      "meshgrid(m, n)の1つ目の戻り値xxは、mの値がそれぞれの行に繰り返し並んだ格子になります。mは0,1,2の3つなので、各行が[0,1,2]になった3行3列の配列になります。",
  },
  {
    type: "choice",
    question:
      "shapeが(3,)の配列とshapeが(4,)の配列を加算しようとするとどうなりますか?",
    choices: [
      "ブロードキャストできず、ValueErrorが発生する",
      "自動的に短い方に0が補われて計算される",
      "長い方の末尾が切り捨てられて計算される",
      "問題なく(3,)の配列として計算される",
    ],
    answerIndex: 0,
    explanation:
      "ブロードキャストは末尾の次元同士が一致するか、どちらかが1である必要があります。(3,)と(4,)はどちらの条件も満たさないため、演算しようとするとValueErrorが発生します。",
  },
  {
    type: "choice",
    question: "np.cos(np.pi) の結果に最も近い値はどれですか?",
    choices: ["-1.0", "1.0", "0.0", "3.14"],
    answerIndex: 0,
    explanation:
      "cos(π)は数学的に-1です。浮動小数点演算によるごくわずかな誤差はありますが、結果はほぼ-1.0になります。",
  },
  {
    type: "choice",
    question:
      "c = np.array([1, 5, 3, 9, 2]) のとき、c[c > 3] の結果はどれですか?",
    choices: [
      "array([5, 9])",
      "array([1, 3, 2])",
      "array([True, False, False, True, False])",
      "array([1, 5, 3, 9, 2])",
    ],
    answerIndex: 0,
    explanation:
      "c > 3はブール配列になり、3より大きい値である5と9だけがブールインデックスによって取り出されます。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[1,2,3],[4,5,6]]) のとき、b.sum(axis=0) と b.sum(axis=1) の組み合わせとして正しいものはどれですか?",
    choices: [
      "axis=0は array([5, 7, 9])、axis=1は array([6, 15])",
      "axis=0は array([6, 15])、axis=1は array([5, 7, 9])",
      "どちらも array([21])",
      "axis=0は array([1,2,3,4,5,6])、axis=1も同じ",
    ],
    answerIndex: 0,
    explanation:
      "axis=0は列方向(縦)に合計するため各列の和(1+4, 2+5, 3+6)=[5,7,9]、axis=1は行方向(横)に合計するため各行の和(1+2+3, 4+5+6)=[6,15]になります。",
  },
  {
    type: "text",
    question:
      "a = np.array([1, 2, 3]), b = np.array([4, 5, 6]) のとき、np.dot(a, b) の結果を半角数字で答えてください。",
    answer: ["32"],
    explanation:
      "1次元配列同士のdot()は内積を計算します。1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32です。",
  },
  {
    type: "choice",
    question:
      "np.allclose(a, b, atol=..., rtol=...) における rtol(相対許容誤差)の役割として正しいものはどれですか?",
    choices: [
      "比較する値の大きさに比例した許容誤差を加える(値が大きいほど許容される差も大きくなる)",
      "常に絶対値で固定された許容誤差だけを使う",
      "rtolを指定すると必ずatolの設定が無視される",
      "rtolは配列の形状を揃えるためのパラメータである",
    ],
    answerIndex: 0,
    explanation:
      "allcloseの判定は |a - b| <= atol + rtol * |b| という式で行われます。rtolは比較対象の値の大きさに比例して許容誤差を広げるためのパラメータです。",
  },
  {
    type: "text",
    question:
      "d = np.array([2, -1, 0, 5, -3]) のとき、np.count_nonzero(d < 0) の結果を半角数字で答えてください。",
    answer: ["2"],
    explanation:
      "d < 0を満たすのは-1と-3の2つです。count_nonzero()はTrueの個数を数えます。",
  },
  {
    type: "choice",
    question:
      "次のコードを実行すると、arrはどうなりますか?",
    code: "arr = np.array([1, -2, 3, -4, 5])\narr[arr < 0] = 0",
    choices: [
      "array([1, 0, 3, 0, 5])",
      "array([1, -2, 3, -4, 5]) (変化しない)",
      "array([0, 0, 0, 0, 0])",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "ブールインデックスは値の取得だけでなく代入にも使えます。arr < 0を満たす要素(-2と-4)がすべて0に置き換わります。",
  },
  {
    type: "choice",
    question:
      "np.array([10, 20, 30, 40, 50])[::2] の結果はどれですか?",
    choices: [
      "array([10, 30, 50])",
      "array([20, 40])",
      "array([50, 40, 30, 20, 10])",
      "array([10, 20, 30, 40, 50])",
    ],
    answerIndex: 0,
    explanation:
      "[::2]は先頭から2つおきに要素を取り出すスライスです。インデックス0, 2, 4の要素である10, 30, 50が取り出されます。",
  },
  {
    type: "choice",
    question:
      "np.array([10, 20, 30, 40, 50])[::-1] の結果はどれですか?",
    choices: [
      "array([50, 40, 30, 20, 10])",
      "array([10, 20, 30, 40, 50])",
      "array([50, 10])",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "step(3つ目の値)に-1を指定すると、配列全体を逆順に取り出します。",
  },
  {
    type: "choice",
    question:
      "b = np.array([[1,2,3],[4,5,6],[7,8,9]]) のとき、b[1:, :2] の結果はどれですか?",
    choices: [
      "array([[4,5],\n       [7,8]])",
      "array([[1,2],\n       [4,5]])",
      "array([[4,5,6],\n       [7,8,9]])",
      "array([[2,3],\n       [5,6],\n       [8,9]])",
    ],
    answerIndex: 0,
    explanation:
      "b[1:, :2]は行についてはインデックス1以降(2, 3行目)、列についてはインデックス0, 1(先頭2列)を取り出します。",
  },
  {
    type: "choice",
    question:
      "np.array([1, 2], dtype=np.int8) と np.array([1, 2], dtype=np.int64) を比較したとき、int8にする主なメリットとして正しいものはどれですか?",
    choices: [
      "1要素あたりのメモリ使用量を減らせる(ただし表現できる値の範囲は狭くなる)",
      "計算結果の精度が常に高くなる",
      "より大きな数値まで扱えるようになる",
      "float型への変換が不要になる",
    ],
    answerIndex: 0,
    explanation:
      "int8は8ビット(1バイト)、int64は64ビット(8バイト)を1要素に使います。int8はメモリ使用量を抑えられますが、表現できる値の範囲は-128〜127と狭くなります。",
  },
  {
    type: "choice",
    question:
      "x = np.array([127], dtype=np.int8) のとき、x + 1 の結果はどれですか?(int8で表現できる値の範囲は-128〜127です)",
    choices: [
      "array([-128], dtype=int8) (オーバーフローして符号が反転する)",
      "array([128], dtype=int8)",
      "array([128], dtype=int16)に自動的に拡張される",
      "OverflowErrorが発生してプログラムが停止する",
    ],
    answerIndex: 0,
    explanation:
      "int8で表現できる最大値は127です。127に1を加えると表現範囲を超えるため、Pythonの通常の整数のように自動拡張されず、オーバーフローして最小値の-128に折り返されます(実行時にRuntimeWarningが出ます)。",
  },
];
