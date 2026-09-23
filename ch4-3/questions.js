window.QUIZ_TITLE = "第4章3節 確認問題(Matplotlib)";

window.QUESTIONS = [
  {
    type: "choice",
    question:
      "pyplotインターフェース(MATLABスタイル)とオブジェクト指向インターフェースの違いに関する記述として正しいものはどれですか?",
    choices: [
      "pyplotインターフェースはplt.plot()やplt.title()のように暗黙のカレントFigure/Axesを操作するのに対し、オブジェクト指向インターフェースはfig, ax = plt.subplots()で明示的に取得したFigure/Axesオブジェクトのメソッドを呼び出す",
      "オブジェクト指向インターフェースはグラフを1つしか描画できず、複数のサブプロットを扱えるのはpyplotインターフェースだけである",
      "pyplotインターフェースとオブジェクト指向インターフェースでは、生成できるグラフの種類が異なる",
      "オブジェクト指向インターフェースはmatplotlibの古いバージョンでのみ使われ、現在は非推奨である",
    ],
    answerIndex: 0,
    explanation:
      "pyplotインターフェースは内部で管理されているカレントのFigure/Axesに対して暗黙的に描画しますが、オブジェクト指向インターフェースはfig, axを明示的に取得し、そのメソッド(ax.plot()やax.set_title()など)を呼び出して描画します。複数のグラフを扱う際は見通しが良くなります。",
  },
  {
    type: "choice",
    question: "fig, axes = plt.subplots(3) を実行すると、どのようなサブプロットが配置されますか?",
    choices: [
      "3行1列(縦に3つ並ぶ)のサブプロットが配置され、axesは要素数3の1次元配列になる",
      "1行3列(横に3つ並ぶ)のサブプロットが配置される",
      "3行3列(合計9個)のサブプロットが配置される",
      "サブプロットは1つだけ生成され、3は無視される",
    ],
    answerIndex: 0,
    explanation:
      "plt.subplots(n)のように整数を1つだけ渡すと、それはnrows(行数)として扱われ、n行1列のサブプロットが縦に配置されます。",
  },
  {
    type: "text",
    question:
      "fig, axes = plt.subplots(2, 3) を実行したとき、axesに含まれるAxesオブジェクトの総数はいくつになりますか?半角数字で答えてください。",
    answer: ["6"],
    explanation:
      "plt.subplots(nrows, ncols)は2行3列、合計2×3=6個のサブプロット(Axesオブジェクト)を生成し、axesはその形状(2,3)の2次元配列になります。",
  },
  {
    type: "choice",
    question:
      "plt.subplots(nrows=3) と plt.subplots(3) の結果に関する記述として正しいものはどれですか?",
    choices: [
      "どちらも同じで、3行1列のサブプロットが生成される",
      "plt.subplots(3)はエラーになる(nrowsは必ずキーワード引数で指定する必要がある)",
      "plt.subplots(nrows=3)は3列、plt.subplots(3)は3行になり結果が異なる",
      "plt.subplots(3)は3個のFigureを生成する",
    ],
    answerIndex: 0,
    explanation:
      "subplots()の第1引数はnrowsに対応するため、位置引数で3を渡してもnrows=3を渡しても同じ結果(3行1列)になります。",
  },
  {
    type: "choice",
    question:
      "fig.suptitle(\"全体のタイトル\") と ax.set_title(\"個別のタイトル\") の違いとして正しいものはどれですか?",
    choices: [
      "suptitle()はFigure全体(複数のサブプロットをまとめた図)に対するタイトルを設定し、set_title()は個々のAxes(サブプロット)ごとのタイトルを設定する",
      "suptitle()もset_title()もまったく同じ場所にタイトルを表示する",
      "set_title()はFigure全体、suptitle()は個々のAxesに対して使う",
      "suptitle()は1つのFigureにつき複数回呼び出して積み重ねて表示できる",
    ],
    answerIndex: 0,
    explanation:
      "suptitle()はFigure(図全体)の上部に1つだけ表示される全体タイトルを設定し、set_title()は各Axes(サブプロット)ごとに個別のタイトルを設定します。",
  },
  {
    type: "text",
    question:
      'ax.legend(loc="...") で、凡例をグラフの左上に表示したい場合、locに指定する文字列を英語で入力してください。',
    answer: ["upper left"],
    explanation:
      'locには"best"や"lower right"のように位置を表す文字列を指定でき、左上を指定する場合は"upper left"を使います。',
  },
  {
    type: "choice",
    question:
      'fig.savefig("chart.png") と fig.savefig("chart.svg") の違いとして正しいものはどれですか?',
    choices: [
      "pngはビットマップ(ラスタ)形式で拡大すると画質が粗くなるのに対し、svgはベクタ形式で拡大しても画質が劣化しない",
      "pngは拡大しても劣化しないベクタ形式で、svgはラスタ形式である",
      "どちらも同じベクタ形式で、拡張子が違うだけで中身は同じである",
      "savefig()はpng形式でしか保存できず、svgを指定するとエラーになる",
    ],
    answerIndex: 0,
    explanation:
      "pngは画素(ピクセル)で構成されるラスタ画像形式のため拡大すると粗くなりますが、svgは図形情報を保持するベクタ形式のため、どれだけ拡大してもきれいに表示できます。",
  },
  {
    type: "choice",
    question:
      'ax.plot(x, y, color=(0.2, 0.4, 0.6, 0.5)) のように色をタプルで指定する場合、各要素(RGBA)の値の範囲として正しいものはどれですか?',
    choices: [
      "0.0から1.0の範囲のfloat",
      "0から255の範囲のint",
      "0から100の範囲のパーセント値",
      "-1.0から1.0の範囲のfloat",
    ],
    answerIndex: 0,
    explanation:
      "matplotlibでRGBA値をタプルで指定する場合、各成分は0.0(なし)から1.0(最大)までのfloatで表します。0〜255の整数で指定したい場合は別途正規化が必要です。",
  },
  {
    type: "choice",
    question: "ax.bar(x, y, color=\"aqua\", edgecolor=\"black\") のedgecolor引数は何を指定するものですか?",
    choices: [
      "棒の輪郭線(枠線)の色",
      "棒の塗りつぶしの色",
      "背景色",
      "凡例の文字色",
    ],
    answerIndex: 0,
    explanation:
      "colorは棒の塗りつぶし色を、edgecolorは棒の輪郭線(枠線)の色を指定します。この例では塗りつぶしがaqua、枠線が黒になります。",
  },
  {
    type: "choice",
    question: 'ax.plot(x, y, linestyle="-.") のように指定したとき、線のスタイルはどれになりますか?',
    choices: ["一点鎖線", "破線", "点線", "実線"],
    answerIndex: 0,
    explanation:
      'linestyleの主な指定は"-"が実線、"--"が破線、"-."が一点鎖線、":"が点線です。',
  },
  {
    type: "choice",
    question:
      "次のコードのように、fontdictと個別のキーワード引数sizeの両方でフォントサイズを指定した場合、実際に適用されるサイズはどれになりますか?",
    code:
      'fontdict = {"family": "fantasy", "size": 20, "weight": "normal"}\n' +
      'ax.set_title("グラフタイトル", fontdict=fontdict, size=40)',
    choices: [
      "40(個別のキーワード引数が優先される)",
      "20(fontdictの値が優先される)",
      "エラーになり、どちらも適用されない",
      "20と40の平均である30",
    ],
    answerIndex: 0,
    explanation:
      "fontdictで指定した値はデフォルトの設定として使われますが、同名の個別キーワード引数(この場合size=40)を追加で指定すると、そちらの値で上書きされます。",
  },
  {
    type: "choice",
    question:
      'matplotlib.style.use("ggplot") のようにスタイルを指定した場合、その効果が及ぶ範囲として正しいものはどれですか?',
    choices: [
      "以降に作成するすべてのFigure・Axesの見た目(グローバルな設定)に影響する",
      "use()を呼び出した直後に存在する1つのAxesだけに影響する",
      "現在開いているすべてのFigureのうち、最初に作成されたものだけに影響する",
      "影響範囲はなく、グラフを保存するときのファイル形式だけが変わる",
    ],
    answerIndex: 0,
    explanation:
      "style.use()はグローバルな設定を変更するため、それ以降に作成されるすべてのグラフの見た目(色使いやグリッドの有無など)に影響します。",
  },
  {
    type: "choice",
    question: "matplotlib.style.available を確認する主な目的は何ですか?",
    choices: [
      "利用可能な組み込みスタイル名の一覧を確認するため",
      "現在インストールされているフォントの一覧を確認するため",
      "利用可能なグラフの種類(bar, plotなど)の一覧を確認するため",
      "保存できるファイル形式の一覧を確認するため",
    ],
    answerIndex: 0,
    explanation:
      'matplotlib.style.availableは、matplotlib.style.use()で指定できる組み込みスタイル名("ggplot"や"classic"など)の一覧を返します。',
  },
  {
    type: "choice",
    question:
      "ax.set_title(\"日本語のタイトル\") のように日本語を設定したグラフを表示すると、文字が四角い箱(いわゆる豆腐)で表示されてしまうことがあります。この主な原因はどれですか?",
    choices: [
      "現在使用しているフォントが日本語の文字(グリフ)のデータを含んでいないため",
      "matplotlibが日本語の文字列を受け付けないため(常にエラーになる)",
      "日本語の文字コードがUTF-8でないため",
      "タイトルの文字数が多すぎるため",
    ],
    answerIndex: 0,
    explanation:
      "デフォルトで使われる欧文フォントには日本語のグリフ(字形データ)が含まれていないため、該当する文字が表示できず豆腐のような四角として描画されてしまいます。",
  },
  {
    type: "choice",
    question:
      "matplotlibで日本語の文字化けを解消するために設定するとよいものはどれですか?",
    choices: [
      "matplotlib.rcParams[\"font.family\"] に、ヒラギノ角ゴシックや游ゴシックなど日本語グリフを含むフォント名を設定する",
      "matplotlib.rcParams[\"font.size\"] を大きくする",
      "グラフのdpi(解像度)を上げる",
      "matplotlib.style.use(\"classic\")を呼び出す",
    ],
    answerIndex: 0,
    explanation:
      "font.familyに日本語グリフを含むフォント(macOSなら「Hiragino Sans」、Windowsなら「Yu Gothic」など)を指定することで、日本語が正しく表示されるようになります。",
  },
  {
    type: "text",
    question: "pandasのDataFrame(例: df)に対して df.plot() をそのまま(引数なしで)呼び出すと、デフォルトでは何のグラフが描画されますか?日本語で答えてください。",
    answer: ["折れ線グラフ", "折れ線"],
    explanation:
      "DataFrame.plot()は特に指定がない場合、各列を1つの系列として折れ線グラフ(line plot)を描画します。",
  },
  {
    type: "choice",
    question: "df.plot.bar(stacked=True) を実行すると、どのようなグラフが描画されますか?",
    choices: [
      "各行について、複数の列の値を積み上げた棒グラフ",
      "各行の値を横に並べた(積み上げない)棒グラフ",
      "各列の平均値だけを表示する棒グラフ",
      "折れ線グラフとの組み合わせグラフ",
    ],
    answerIndex: 0,
    explanation:
      "stacked=Trueを指定すると、各行(インデックス)ごとに複数列の値が積み上げられた棒グラフになります。",
  },
  {
    type: "choice",
    question:
      "1つのAxesに対してax.plot(x, y1)、ax.plot(x, y2)のようにlabel引数を指定せずに2回描画し、その後ax.legend()を呼び出すとどうなりますか?",
    choices: [
      "凡例の枠は表示されるが、各系列にlabelを指定していないため意味のあるラベルが表示されない",
      "自動的にy1、y2という変数名がラベルとして表示される",
      "legend()を呼び出した時点でエラーになる",
      "2つの線が自動的に1本の線に統合されて表示される",
    ],
    answerIndex: 0,
    explanation:
      "legend()は各描画呼び出しに指定されたlabel引数の値を凡例に使います。label引数を指定していない場合、変数名は使われず、意味のあるラベルは表示されません(空欄や自動生成された名前になります)。系列ごとにlabelを指定する必要があります。",
  },
  {
    type: "choice",
    question:
      "棒グラフを2系列並べて表示するために、ax.bar(x, y1, width=0.4)と、xの各要素に0.4を足したx2を使ってax.bar(x2, y2, width=0.4)を重ねて描画する目的は何ですか?",
    choices: [
      "2系列の棒が重ならないように少しずらして、隣り合わせに並べたグループ化棒グラフにするため",
      "2系列の棒を完全に重ねて表示するため",
      "2系列の棒の色を自動的に変えるため",
      "積み上げ棒グラフにするため",
    ],
    answerIndex: 0,
    explanation:
      "同じxの位置に棒を描画すると重なってしまうため、幅(width)の分だけxをずらした位置に2系列目を描画することで、隣り合った(グループ化された)棒グラフになります。",
  },
  {
    type: "text",
    question:
      "y1 = [8, 4, 2], y2 = [6, 5, 9] の2系列を積み上げ棒グラフにするため、3系列目y3の棒を描画する ax.bar(x, y3, bottom=???) に渡すリストの1番目(先頭)の要素の値はいくつになりますか?半角数字で答えてください。",
    answer: ["14"],
    explanation:
      "積み上げ棒グラフでは、後から重ねる系列のbottom引数にそれ以前の系列の値の合計を指定します。y1とy2の1番目の要素はそれぞれ8と6なので、8+6=14がbottomの1番目の値になります。",
  },
  {
    type: "text",
    question: 'ax.scatter(x, y, marker="^") のmarker="^"はどのような形の点を描画しますか?日本語で答えてください。',
    answer: ["上向き三角", "上向きの三角形", "上向きの三角"],
    explanation:
      "matplotlibのマーカー指定では、\"^\"は上向きの三角形、\"v\"は下向きの三角形を表します。",
  },
  {
    type: "text",
    question:
      "n, bins, patches = ax.hist(x, bins=25) を実行したとき、binsの配列に含まれる要素数はいくつになりますか?半角数字で答えてください。",
    answer: ["26"],
    explanation:
      "binsはヒストグラムの各階級の境界値(区切り)の配列です。階級(ビン)の数が25個であれば、その両端を含む境界値の数はビンの数+1、つまり26個になります。",
  },
  {
    type: "choice",
    question:
      "ax.hist(x, bins=10) を ax.hist(x, bins=25) に変更してビンの数を増やすと、ヒストグラムの見た目はどのように変化する傾向がありますか?",
    choices: [
      "階級がより細かく分割されるため、棒の本数が増え、1本あたりの棒の幅は狭くなる",
      "階級が粗くなり、棒の本数が減る",
      "ヒストグラムの形状は変わらず、色だけが変わる",
      "縦軸(度数)のスケールだけが変わり、横軸は変わらない",
    ],
    answerIndex: 0,
    explanation:
      "ビンの数を増やすとデータの範囲がより細かい区間に分割されるため、棒の本数が増え、それぞれの棒の幅(区間の幅)は狭くなります。",
  },
  {
    type: "choice",
    question: 'ax.hist(x, orientation="horizontal") を指定すると、ヒストグラムはどのように描画されますか?',
    choices: [
      "度数(件数)を横軸、値の範囲を縦軸にとった横向きのヒストグラムになる",
      "通常どおり、値の範囲を横軸、度数を縦軸にとった縦向きのヒストグラムになる",
      "円グラフに変換される",
      "orientationという引数は存在せずエラーになる",
    ],
    answerIndex: 0,
    explanation:
      'orientation="horizontal"を指定すると、通常縦軸だった度数が横軸に、横軸だった値の範囲が縦軸に入れ替わり、棒が横向きに描画されます。',
  },
  {
    type: "choice",
    question:
      "ax.hist((x0, x1, x2), label=labels, stacked=True) のように複数のデータ系列を渡してstacked=Trueを指定すると、どのようなヒストグラムになりますか?",
    choices: [
      "各ビン(階級)ごとに、x0・x1・x2の度数を積み上げて表示する",
      "各ビンごとに、x0・x1・x2の棒を横に並べて表示する(積み上げない)",
      "x0・x1・x2の平均値を1本のヒストグラムにまとめて表示する",
      "3つの独立したヒストグラムが別々のFigureとして表示される",
    ],
    answerIndex: 0,
    explanation:
      "stacked=Trueを指定すると、同じビンに属する複数系列の度数が積み重ねられた状態で表示されます。",
  },
  {
    type: "choice",
    question: "ax.boxplot((x0, x1, x2), tick_labels=labels, vert=False) のvert=Falseはどのような効果がありますか?",
    choices: [
      "箱ひげ図を横向き(水平方向)に描画する",
      "箱ひげ図を非表示にする",
      "外れ値の表示を無効にする",
      "複数のデータを1つの箱にまとめる",
    ],
    answerIndex: 0,
    explanation:
      "vert(vertical)は箱ひげ図を縦向きに描画するかどうかを指定するオプションで、Falseにすると横向きに描画されます。",
  },
  {
    type: "choice",
    question:
      'ax.pie(x, labels=labels, startangle=90, counterclock=False) のstartangle=90とcounterclock=Falseの組み合わせが意味することとして正しいものはどれですか?',
    choices: [
      "12時の位置(真上)を開始位置とし、そこから時計回りに扇形を描画していく",
      "3時の位置を開始位置とし、そこから反時計回りに扇形を描画していく",
      "9時の位置を開始位置とし、時計回りに描画していく",
      "開始位置や回転方向には影響せず、色の配色だけが変わる",
    ],
    answerIndex: 0,
    explanation:
      "startangle=90は開始角度を90度(真上、12時の位置)に設定し、counterclock=Falseにすることで、デフォルトの反時計回りではなく時計回りに描画されるようになります。",
  },
  {
    type: "choice",
    question:
      'labels = ["curry", "toast", "salad"] のとき、ax.pie(x, labels=labels, explode=[0, 0.2, 0]) を実行すると、どのような効果がありますか?',
    choices: [
      "2番目のlabel(\"toast\")に対応する扇形だけが中心から少し切り離されて(浮き出して)描画される",
      "1番目のlabel(\"curry\")に対応する扇形だけが切り離される",
      "すべての扇形が均等に切り離される",
      "explodeを指定すると円グラフ自体が描画されなくなる",
    ],
    answerIndex: 0,
    explanation:
      "explodeにはlabelsと対応する数値のリストを渡し、0より大きい値を指定した要素(この場合はインデックス1の\"toast\")に対応する扇形だけが中心から切り離されて表示されます。",
  },
  {
    type: "choice",
    question: 'ax.pie(x, labels=labels, autopct="%1.2f%%") を指定すると、各扇形にはどのような表示が追加されますか?',
    choices: [
      "その扇形が占める割合(パーセンテージ)が小数点以下2桁まで表示される",
      "その扇形に対応する数値(元のxの値)がそのまま表示される",
      "その扇形のラベル文字列が2回繰り返して表示される",
      "何も追加表示されない(autopctは無視される)",
    ],
    answerIndex: 0,
    explanation:
      'autopctは各扇形に割合を自動表示するための書式文字列です。"%1.2f%%"は小数点以下2桁までのパーセント表記を意味します。',
  },
  {
    type: "choice",
    question:
      "1つのAxesに対してax.bar(x1, y1)とax.plot(x2, y2)を両方呼び出すと、どのような図になりますか?",
    choices: [
      "同じ座標系(Axes)の上に、棒グラフと折れ線グラフが重ねて描画される",
      "エラーになり、どちらか一方しか描画されない",
      "自動的に2つのサブプロットに分かれて描画される",
      "棒グラフの上に折れ線グラフが上書きされ、棒グラフは消える",
    ],
    answerIndex: 0,
    explanation:
      "同じAxesオブジェクトに対して複数の描画メソッドを呼び出すと、それらは同じ座標系の上に重ねて描画されます。異なる種類のグラフを組み合わせることも可能です。",
  },
];
