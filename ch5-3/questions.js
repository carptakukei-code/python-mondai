window.QUIZ_TITLE = "第5章3節 確認問題(画像処理)";

window.QUESTIONS = [
  {
    type: "choice",
    question:
      'from PIL import Image; img = Image.open("photo.jpg") のとき、type(img) の結果として正しいものはどれですか?',
    choices: [
      "PIL.JpegImagePlugin.JpegImageFile",
      "PIL.PngImagePlugin.PngImageFile",
      "numpy.ndarray",
      "PIL.Image.Image",
    ],
    answerIndex: 0,
    explanation:
      "Image.open()はファイルの拡張子・内容に応じた専用のImageサブクラスを返します。.jpgファイルの場合はJpegImagePlugin.JpegImageFileになります(.pngならPngImagePlugin.PngImageFile)。",
  },
  {
    type: "choice",
    question:
      "幅1024ピクセル、高さ768ピクセルの画像をImage.open()で開いたとき、img.size の結果はどれですか?",
    choices: ["(1024, 768)", "(768, 1024)", "1024 x 768", "[1024, 768, 3]"],
    answerIndex: 0,
    explanation:
      "PillowのImage.sizeは(width, height)の順のタプルを返します。高さが先に来るnumpy配列のshapeと順序が逆になる点に注意が必要です。",
  },
  {
    type: "choice",
    question:
      'img = Image.open("banner.png") のとき、print(img.format) の結果として正しいものはどれですか?',
    choices: ["PNG", "JPEG", "RGBA", "L"],
    answerIndex: 0,
    explanation:
      "formatは画像ファイルの形式(拡張子に対応するもの)を表す属性で、.pngファイルを開いた場合は\"PNG\"になります。modeとは異なり、色情報(RGBAなど)ではなくファイル形式を表す点に注意してください。",
  },
  {
    type: "choice",
    question:
      "アルファチャンネル(透過情報)を持たない、色情報だけのカラー画像を開いたときの img.mode として正しいものはどれですか?",
    choices: ["RGB", "RGBA", "L", "CMYK"],
    answerIndex: 0,
    explanation:
      "RGBは赤・緑・青の3チャンネルを持つ色情報のみのモードです。RGBAはさらに透過度(A)を含む4チャンネル、Lは8ビットのグレースケール(1チャンネル)です。",
  },
  {
    type: "choice",
    question: "img.convert(\"L\") を実行した結果に関する記述として正しいものはどれですか?",
    choices: [
      "各画素を0〜255の明るさ1チャンネルで表す8ビットグレースケール画像に変換した新しいImageオブジェクトが返り、元のimgオブジェクト自体は変化しない",
      "元のimgオブジェクトの中身が直接書き換わり、変換後は同じ変数からもとの画像が参照できなくなる",
      "画像のサイズ(width, height)が半分になる",
      "ファイルが自動的に上書き保存される",
    ],
    answerIndex: 0,
    explanation:
      "convert()は変換結果を新しいImageオブジェクトとして返すメソッドで、呼び出し元のimg自体は変化しません。\"L\"は8ビットグレースケールを表すモードです。",
  },
  {
    type: "choice",
    question:
      "img.resize(size=(300, 150)) の動作に関する記述として正しいものはどれですか?",
    choices: [
      "元画像の縦横比に関係なく、指定した(300, 150)のサイズに強制的に変形される(縦横比が変わり画像が歪むことがある)",
      "指定サイズはあくまで目安で、縦横比を保つように自動的に調整されたサイズになる",
      "指定サイズが元画像より大きい場合のみ拡大され、小さい場合は何もしない",
      "常に正方形にトリミングされてからリサイズされる",
    ],
    answerIndex: 0,
    explanation:
      "resize()は指定したサイズに強制的にリサンプリングするため、元の縦横比と異なるサイズを指定すると画像が引き伸ばされたり潰れたりして歪みます。縦横比を保ちたい場合は呼び出し側で比率を計算する必要があります。",
  },
  {
    type: "choice",
    question:
      "resize()実行時にresample=Image.Resampling.NEARESTを指定した場合の特徴として正しいものはどれですか?",
    choices: [
      "最近傍の画素値をそのまま使うため、処理は高速だが輪郭がギザギザ(ブロック状)になりやすい",
      "周囲の画素を滑らかに補間するため、他のどの方式よりも高品質な結果になる",
      "画像のアルファチャンネルだけを再計算する",
      "画像のサイズを変更せず、画素値だけを平均化する",
    ],
    answerIndex: 0,
    explanation:
      "NEAREST(最近傍補間)は最も近い1つの画素の値をそのまま採用する方式で、計算は速い一方、拡大縮小時にジャギー(ブロック状の粗さ)が出やすくなります。",
  },
  {
    type: "choice",
    question:
      "img.rotate(20) (expand引数を指定しない場合)の動作として正しいものはどれですか?",
    choices: [
      "画像の外形サイズ(width, height)は元のまま変わらず、回転によって元の四隅からはみ出した部分は失われる(切り取られる)",
      "画像の外形サイズが自動的に回転後の内容全体を収めるサイズに拡大される",
      "画像は回転せず、警告が出るだけで元の画像がそのまま返る",
      "回転角度に応じて自動的に画像がクロップされ、正方形になる",
    ],
    answerIndex: 0,
    explanation:
      "expand=Trueを指定しない場合、キャンバスのサイズは元の画像サイズのまま固定されるため、回転によって元の範囲からはみ出した部分は表示されなくなります。全体を収めたい場合はexpand=Trueを指定します。",
  },
  {
    type: "choice",
    question:
      "img.crop((left, top, right, bottom)) の引数の意味として正しいものはどれですか?",
    choices: [
      "(left, top)が切り出す領域の左上の座標、(right, bottom)が右下の座標を表す",
      "(left, top)が幅と高さ、(right, bottom)が中心座標を表す",
      "4つの値はすべて同じ意味で、切り出す正方形の1辺の長さの候補を表す",
      "(left, top, right, bottom)は左から順に上・下・左・右の座標を表す",
    ],
    answerIndex: 0,
    explanation:
      "crop()には(left, top, right, bottom)の4つの座標を渡し、左上の座標(left, top)から右下の座標(right, bottom)までの矩形領域が切り出されます。",
  },
  {
    type: "choice",
    question:
      "img.crop((50, 100, 350, 400)) を実行して得られる画像のサイズ(width, height)はどれですか?",
    choices: ["(300, 300)", "(350, 400)", "(400, 300)", "(50, 100)"],
    answerIndex: 0,
    explanation:
      "幅はright - left = 350 - 50 = 300、高さはbottom - top = 400 - 100 = 300となり、サイズは(300, 300)になります。",
  },
  {
    type: "choice",
    question:
      "サイズが(800, 450)(width, height)のRGBA画像をnum_img = np.array(img)でnumpy配列に変換したとき、num_img.shape はどれになりますか?",
    choices: ["(450, 800, 4)", "(800, 450, 4)", "(450, 800)", "(4, 450, 800)"],
    answerIndex: 0,
    explanation:
      "numpy配列に変換すると、shapeは(height, width, channels)の順になります。PillowのImage.sizeが(width, height)の順であることと順序が逆転する点が重要です。RGBAなのでチャンネル数は4です。",
  },
  {
    type: "choice",
    question:
      "サイズが(200, 200)でモードが\"L\"(グレースケール)の画像をnp.array()で変換したとき、shapeはどれになりますか?",
    choices: [
      "(200, 200) (チャンネルの軸を持たない2次元配列)",
      "(200, 200, 1) (チャンネル軸を持つ3次元配列)",
      "(1, 200, 200)",
      "(200,)",
    ],
    answerIndex: 0,
    explanation:
      "\"L\"モードは1チャンネルのグレースケールで、numpy配列に変換してもチャンネル軸は追加されず、(height, width)の2次元配列になります。",
  },
  {
    type: "choice",
    question:
      "num_img.shape が (450, 800, 4) のとき、上から10行目・左から300列目の画素を取得する正しい書き方はどれですか?",
    choices: [
      "num_img[10, 300]",
      "num_img[300, 10]",
      "num_img[10][300][4]",
      "num_img.at(10, 300)",
    ],
    answerIndex: 0,
    explanation:
      "numpy配列のインデックスは(行, 列, チャンネル)の順で、行は縦方向(y座標)、列は横方向(x座標)に対応します。したがって10行目・300列目はnum_img[10, 300]で取得できます。",
  },
  {
    type: "choice",
    question:
      "RGBA画像のある画素の値が array([255, 255, 255, 255], dtype=uint8) だったとき、この画素の状態として正しい説明はどれですか?",
    choices: [
      "不透明(完全に透けていない)な白色の画素",
      "完全に透明な白色の画素",
      "不透明な黒色の画素",
      "半透明のグレーの画素",
    ],
    answerIndex: 0,
    explanation:
      "先頭の3つ(255,255,255)はR,G,Bすべて最大値なので白、4つ目のアルファ値255は最大(不透明)を意味します。アルファが0だと完全に透明になります。",
  },
  {
    type: "choice",
    question:
      'p = Path("figures"); imgs = list(p.glob("circle/*.jpg")) を実行したとき、imgsの各要素の型として正しいものはどれですか?',
    choices: [
      "Path系のオブジェクト(例: PosixPath や WindowsPath)",
      "単純な文字列(str)",
      "PIL.Image.Imageオブジェクト",
      "bytes型のオブジェクト",
    ],
    answerIndex: 0,
    explanation:
      "Path.glob()はマッチしたパスをPathオブジェクト(OSに応じてPosixPathやWindowsPath)のジェネレーターとして返すため、list()で囲むとPathオブジェクトのリストになります。",
  },
  {
    type: "text",
    question:
      "1辺150ピクセルの正方形グレースケール画像(モード\"L\")を np.array(img).flatten() した場合、配列の要素数はいくつになりますか?半角数字で答えてください。",
    answer: ["22500"],
    explanation:
      "グレースケールなのでチャンネル数は1です。150 x 150 x 1 = 22500になります。",
  },
  {
    type: "text",
    question:
      "縦横100ピクセルのRGB画像(3チャンネル)を np.array(img).flatten() した場合、配列の要素数はいくつになりますか?半角数字で答えてください。",
    answer: ["30000"],
    explanation:
      "RGBは3チャンネルなので、100 x 100 x 3 = 30000になります。",
  },
  {
    type: "text",
    question:
      "画像データが20000枚あり、train_test_split(X, y, test_size=0.9, random_state=123) で分割した場合、学習用(train)に割り当てられる枚数はいくつですか?半角数字で答えてください。",
    answer: ["2000"],
    explanation:
      "test_sizeはテスト用データの割合を表すため、学習用の割合は1 - 0.9 = 0.1になります。20000 x 0.1 = 2000枚が学習用に割り当てられます。",
  },
  {
    type: "choice",
    question:
      "train_test_split()のrandom_state引数を指定する目的として正しいものはどれですか?",
    choices: [
      "分割時のシャッフルを固定し、同じ引数で何度実行しても同じ分割結果を再現できるようにするため",
      "学習用とテスト用の比率を自動的に最適化するため",
      "分割処理を並列化して高速化するため",
      "画像データを自動的に正規化するため",
    ],
    answerIndex: 0,
    explanation:
      "random_stateは内部の乱数生成に使うシード値で、同じ値を指定すれば毎回同じ分割結果が再現されます。NumPyのdefault_rng(seed)と同様の考え方です。",
  },
  {
    type: "choice",
    question:
      "RandomForestClassifierのfit(X, y)にXとして渡す各サンプル(1枚の画像分のデータ)は、どのような形である必要がありますか?",
    choices: [
      "画素値を1次元に並べたベクトル(flatten済みの配列)である必要がある",
      "元の(height, width, channels)の形をした3次元配列のままでよい",
      "PIL.Image.Imageオブジェクトのままでよい",
      "画像ファイルのパス文字列でよい",
    ],
    answerIndex: 0,
    explanation:
      "scikit-learnの多くの分類器は各サンプルを1次元の特徴量ベクトルとして受け取る想定のため、2次元・3次元の画像データはflatten()して1次元に変換してから渡す必要があります。",
  },
  {
    type: "choice",
    question:
      "元画像のサイズが(400, 300)(width, height)のとき、img.rotate(90, expand=True).size の結果はどれですか?",
    choices: ["(300, 400)", "(400, 300)", "(400, 400)", "(300, 300)"],
    answerIndex: 0,
    explanation:
      "90度回転では画像の横と縦がそのまま入れ替わります。expand=Trueで全体を収めるサイズになるため、元の(width, height)=(400, 300)は(300, 400)になります。",
  },
  {
    type: "choice",
    question:
      "元画像の幅が800ピクセルしかないとき、img.crop((100, 50, 900, 500)) のように画像の範囲を超える座標を指定するとどうなりますか?",
    choices: [
      "エラーにはならず、指定した座標の差(この場合は幅900-100=800、高さ500-50=450)のサイズの画像が返り、元画像の外側に相当する部分は黒や透明などで埋められる",
      "自動的に元画像の右端(800)に座標がクリップされてからクロップされる",
      "IndexErrorなどの例外が発生してプログラムが停止する",
      "何も切り出されず、元画像がそのまま返る",
    ],
    answerIndex: 0,
    explanation:
      "crop()は指定した座標が元画像の範囲外でもエラーにはならず、座標の差分だけのサイズの画像を返します。範囲外の部分には画素データが存在しないため、黒(またはモードに応じた値)で埋められます。",
  },
  {
    type: "choice",
    question:
      "img.crop((30, 60, 430, 260)) を実行して得られる画像のサイズ(width, height)はどれですか?",
    choices: ["(400, 200)", "(430, 260)", "(200, 400)", "(370, 200)"],
    answerIndex: 0,
    explanation:
      "幅は430 - 30 = 400、高さは260 - 60 = 200なので、サイズは(400, 200)になります。",
  },
  {
    type: "choice",
    question:
      "Image.sizeとnp.array(img).shapeの関係についての説明として正しいものはどれですか?",
    choices: [
      "img.sizeは(width, height)の順、np.array(img).shapeは(height, width, channels)の順で、widthとheightの並び順が逆になっている",
      "img.sizeとnp.array(img).shapeはまったく同じ順序・同じ値になる",
      "img.sizeはピクセル数の合計を1つの整数で返し、shapeはタプルを返す",
      "np.array(img).shapeにはwidthやheightの情報は一切含まれない",
    ],
    answerIndex: 0,
    explanation:
      "Pillowの座標系は(width, height)の順ですが、numpy配列に変換すると(height, width, channels)の順になります。この順序の違いを混同しやすいので注意が必要です。",
  },
  {
    type: "choice",
    question: "img.show() を実行したときの動作として正しいものはどれですか?",
    choices: [
      "OSの標準的な画像ビューアが起動し、画像が別ウィンドウで表示される。img自体の画素データは変化しない",
      "Jupyter Notebookのセル出力の中に画像が直接埋め込まれて表示される",
      "画像データがファイルとして上書き保存される",
      "画像がグレースケールに変換されてから表示される",
    ],
    answerIndex: 0,
    explanation:
      "show()は一時ファイルを作成し、OS標準の画像ビューアアプリケーションで画像を開くメソッドです。Imageオブジェクト自体の中身は変更されません。",
  },
  {
    type: "choice",
    question:
      "グレースケール(モード\"L\")の2次元numpy配列をax.imshow(gray_array)でそのまま表示した場合の注意点として正しいものはどれですか?",
    choices: [
      "cmap引数を指定しない場合、matplotlibのデフォルトのカラーマップ(グレースケールではない色付き)で表示されることがあるため、白黒で表示したい場合はcmap=\"gray\"のように明示的に指定する必要がある",
      "2次元配列は自動的に必ずグレースケールで表示されるため、追加の設定は一切不要である",
      "2次元配列はimshow()にそのまま渡すとエラーになり、必ず3次元に変換しなければならない",
      "imshow()はグレースケール画像の表示に対応していない",
    ],
    answerIndex: 0,
    explanation:
      "imshow()は2次元配列を受け取ると、デフォルトのカラーマップ(例えばviridisなど)で疑似カラー表示することがあります。意図した白黒表示にするにはcmap=\"gray\"を指定する必要があります。",
  },
  {
    type: "choice",
    question:
      "PNG形式とJPEG形式の違いに関する説明として正しいものはどれですか?",
    choices: [
      "PNGはアルファチャンネル(透過情報)を保持できるが、JPEGは透過情報を持てない",
      "JPEGはアルファチャンネルを保持できるが、PNGは透過情報を持てない",
      "両方とも透過情報を保持できる点で違いはない",
      "両方とも透過情報を保持できない",
    ],
    answerIndex: 0,
    explanation:
      "PNGはRGBAのようにアルファチャンネルを保持できる形式ですが、JPEGは非可逆圧縮の形式でアルファチャンネルをサポートしておらず、常にRGB(またはグレースケール)になります。",
  },
  {
    type: "choice",
    question:
      "img.convert(\"L\")で得られる画像の各画素値の範囲として正しいものはどれですか?",
    choices: [
      "0(黒)から255(白)までの明るさを表す整数値",
      "0.0から1.0までの浮動小数点数",
      "-128から127までの整数値",
      "0または1の2値のみ",
    ],
    answerIndex: 0,
    explanation:
      "\"L\"モードは8ビットのグレースケールで、各画素は0(黒)から255(白)までの256段階の明るさを整数で表します。",
  },
  {
    type: "text",
    question:
      "元画像のサイズが(600, 900)(width, height)のとき、img.rotate(90, expand=True).size の幅(width)の値はいくつになりますか?半角数字で答えてください。",
    answer: ["900"],
    explanation:
      "90度回転すると幅と高さが入れ替わるため、新しいサイズは(900, 600)になります。よって幅は900です。",
  },
  {
    type: "choice",
    question:
      "resize()とcrop()の違いに関する説明として正しいものはどれですか?",
    choices: [
      "resize()は画像全体の内容を保ったまま画素を補間して拡大・縮小するのに対し、crop()は指定した領域だけを画素値を変えずに切り出す(拡大縮小は行わない)",
      "resize()もcrop()も、どちらも画像の一部分だけを切り出す処理である",
      "resize()は画像の一部を切り出す処理で、crop()は画像全体を拡大・縮小する処理である",
      "resize()とcrop()はまったく同じ結果を返す、名前が違うだけの同じメソッドである",
    ],
    answerIndex: 0,
    explanation:
      "resize()は画像全体を指定サイズに合わせて補間しながら拡大・縮小しますが、crop()は指定した矩形領域をそのままの画素値で切り出すだけで、拡大・縮小は行いません。",
  },
];
