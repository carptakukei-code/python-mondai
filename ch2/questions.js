window.QUIZ_TITLE = "第2章 確認問題(Pythonの文法・標準ライブラリ)";

window.QUESTIONS = [
  {
    type: "choice",
    question: "次のコードを実行すると、何が出力されますか?",
    code:
      'for i in range(7):\n' +
      '    if i % 4 == 0:\n' +
      '        print("apple")\n' +
      '    elif i % 2 == 0:\n' +
      '        print("banana")\n' +
      '    else:\n' +
      '        print("cherry")',
    choices: [
      "apple, cherry, banana, cherry, apple, cherry, banana",
      "apple, banana, cherry, apple, banana, cherry, apple",
      "apple, cherry, cherry, banana, apple, cherry, banana",
      "cherry, banana, apple, cherry, banana, apple, cherry",
    ],
    answerIndex: 0,
    explanation:
      "i=0,4は4の倍数でapple。1,3,5は4の倍数でも2の倍数でもないのでcherry。2,6は2の倍数(4の倍数ではない)でbananaになります。",
  },
  {
    type: "choice",
    question:
      "次のコードを実行すると、何が出力されますか? (elifではなく独立したifとif/elseになっている点に注意してください)",
    code:
      'x = 6\n' +
      'if x % 2 == 0:\n' +
      '    print("even")\n' +
      'if x % 3 == 0:\n' +
      '    print("multiple of 3")\n' +
      'else:\n' +
      '    print("not multiple of 3")',
    choices: [
      "even\nmultiple of 3",
      "even",
      "even\nnot multiple of 3",
      "multiple of 3",
    ],
    answerIndex: 0,
    explanation:
      "2つのif文は独立しているため、両方の条件が個別に評価されます。x=6は2の倍数なのでevenが出力され、続けて3の倍数でもあるのでmultiple of 3も出力されます(elifと違い両方実行される点に注意)。",
  },
  {
    type: "choice",
    question:
      "sys, os, re の3つのモジュールをインポートするとき、PEP 8に準拠した書き方はどれですか?",
    choices: [
      "import sys, os, re",
      "import sys\nimport os\nimport re",
      "import sys; import os; import re",
      "from sys, os, re import *",
    ],
    answerIndex: 1,
    explanation:
      "PEP 8ではモジュールごとに行を分けてimportすることが推奨されており、1行にカンマで複数モジュールを並べる書き方は避けるべきとされています。",
  },
  {
    type: "text",
    question:
      "次のコードを実行すると、コンソールに何と表示されますか?(日本語でそのまま入力してください)",
    code:
      'try:\n' +
      '    lst = [1, 2, 3]\n' +
      '    lst[5]\n' +
      'except IndexError:\n' +
      '    print("存在しない添字です")',
    answer: ["存在しない添字です"],
    explanation:
      "要素数3のリストに対してlst[5]は範囲外アクセスとなりIndexErrorが発生するため、except節が実行されます。",
  },
  {
    type: "choice",
    question: "次のコードを実行すると、どうなりますか?",
    code:
      'try:\n' +
      '    10 / 0\n' +
      'except ValueError:\n' +
      '    print("エラーです")',
    choices: [
      "エラーです、と表示される",
      "ZeroDivisionError例外が発生し、except節で捕捉されずにプログラムが異常終了する",
      "何も表示されずに正常終了する",
      "0が表示される",
    ],
    answerIndex: 1,
    explanation:
      "10 / 0はZeroDivisionErrorを送出しますが、except節はValueErrorしか捕捉しないため、この例外は捕まらずそのまま伝播してプログラムが終了します。",
  },
  {
    type: "choice",
    question:
      'words = ["kiwi", "fig", "mango", "date"] のとき、[len(w) for w in words] の結果はどれですか?',
    choices: ["[4, 3, 5, 4]", "[3, 4, 5, 4]", "[4, 3, 4, 5]", "['kiwi', 'fig', 'mango', 'date']"],
    answerIndex: 0,
    explanation:
      "各単語の文字数はkiwi=4, fig=3, mango=5, date=4です。リスト内包表記は元の順序を保ったまま結果を並べます。",
  },
  {
    type: "text",
    question:
      'words = ["kiwi", "fig", "mango", "date"] のとき、{len(w) for w in words} を実行してできるセットの要素数はいくつですか?半角数字で答えてください。',
    answer: ["3"],
    explanation:
      "各単語の文字数は4, 3, 5, 4です。セットは重複を許さないため、2つある4は1つにまとめられ、結果は{3, 4, 5}の3要素になります。",
  },
  {
    type: "choice",
    question:
      'words = ["kiwi", "fig", "mango", "date"] のとき、{w: len(w) for w in words} の結果として正しいものはどれですか?',
    choices: [
      "{'kiwi': 4, 'fig': 3, 'mango': 5, 'date': 4}",
      "{4: 'kiwi', 3: 'fig', 5: 'mango', 4: 'date'}",
      "{'kiwi', 'fig', 'mango', 'date'}",
      "[4, 3, 5, 4]",
    ],
    answerIndex: 0,
    explanation:
      "key: valueの形の内包表記は辞書内包表記になり、各単語をキー、その文字数を値とする辞書が生成されます。",
  },
  {
    type: "choice",
    question:
      "次のネストしたリスト内包表記を実行すると、結果はどれになりますか?",
    code: "[[(b, a*a) for a in range(8) if a % 3 == 0] for b in range(2)]",
    choices: [
      "[[(0, 0), (0, 9), (0, 36)], [(1, 0), (1, 9), (1, 36)]]",
      "[[(0, 0), (0, 3), (0, 6)], [(1, 0), (1, 3), (1, 6)]]",
      "[(0, 0), (0, 9), (0, 36), (1, 0), (1, 9), (1, 36)]",
      "[[(0, 0), (1, 9)], [(0, 36), (1, 0)]]",
    ],
    answerIndex: 0,
    explanation:
      "内側の内包表記はrange(8)のうち3の倍数(0, 3, 6)についてaの2乗を求め、それぞれ(0,0),(0,9),(0,36)を作ります。外側のbは0と1の2通りなので、そのペアがbごとにリスト化されます。",
  },
  {
    type: "choice",
    question:
      "[x for x in range(10**6)] と (x for x in range(10**6)) の違いに関する記述として正しいものはどれですか?",
    choices: [
      "リストは生成した時点で全要素をメモリ上に確保するが、ジェネレーターは要素が必要になった時点で1つずつ生成するため、生成直後のメモリ使用量が少ない",
      "ジェネレーターの方が生成した時点で全要素をメモリ上に確保する",
      "どちらも生成した時点で全要素を計算し、メモリ使用量に差はない",
      "リストは一度しか要素を取り出せないが、ジェネレーターは何度でも取り出せる",
    ],
    answerIndex: 0,
    explanation:
      "リスト内包表記は生成時にすべての要素を計算してメモリに保持しますが、ジェネレーター式は遅延評価され、next()などで要素が要求されるたびに計算されるため省メモリです。",
  },
  {
    type: "choice",
    question:
      "g = (n**3 for n in range(5)) と定義したあと、next(g)を2回呼び出しました。続けてlist(g)を実行すると結果はどれになりますか?",
    choices: ["[8, 27, 64]", "[0, 1, 8, 27, 64]", "[1, 8, 27, 64]", "[27, 64]"],
    answerIndex: 0,
    explanation:
      "range(5)はn=0,1,2,3,4で、n**3は0,1,8,27,64です。next(g)を2回呼ぶとn=0とn=1の分(0と1)が消費されるため、残りのlist(g)はn=2,3,4の8, 27, 64になります。",
  },
  {
    type: "choice",
    question:
      "g = (n for n in range(2)) のとき、next(g)を3回連続で呼び出すと3回目はどうなりますか?",
    choices: [
      "StopIteration例外が発生する",
      "Noneが返る",
      "0が返り、最初から繰り返される",
      "2が返る",
    ],
    answerIndex: 0,
    explanation:
      "range(2)は0と1の2個の値しか生成しないため、1回目・2回目のnext(g)でそれぞれ0, 1が返り、3回目を呼ぶと要素が尽きているのでStopIteration例外が発生します。",
  },
  {
    type: "choice",
    question:
      'open()のモード指定のうち、"x"モードの説明として正しいものはどれですか?',
    choices: [
      "指定したファイルが既に存在する場合、FileExistsErrorを発生させて書き込みを拒否する(排他的作成モード)",
      "指定したファイルが既に存在する場合、内容を上書きする",
      "指定したファイルが既に存在する場合、末尾に追記する",
      "ファイルが存在しなくても読み込みを試みる",
    ],
    answerIndex: 0,
    explanation:
      '"x"モードは排他的作成モードで、ファイルが既に存在するとFileExistsErrorが発生します。上書きしたい場合は"w"、追記したい場合は"a"を使います。',
  },
  {
    type: "choice",
    question:
      "次のコードを順番に実行すると、dataの中身はどれになりますか?",
    code:
      'with open("memo.txt", "w", encoding="utf-8") as f:\n' +
      '    f.write("Python\\n")\n' +
      '    f.write("Ruby\\n")\n\n' +
      'with open("memo.txt", encoding="utf-8") as f:\n' +
      '    data = f.readlines()',
    choices: [
      "['Python\\n', 'Ruby\\n']",
      "'Python\\nRuby\\n'",
      "['Python', 'Ruby']",
      "['Python\\nRuby\\n']",
    ],
    answerIndex: 0,
    explanation:
      "readlines()は改行文字を含んだまま1行ずつを要素とするリストを返すため、['Python\\n', 'Ruby\\n']になります。改行を含まないリストにしたい場合はsplitlines()などを使います。",
  },
  {
    type: "choice",
    question: 's = "GOOD MORNING" のとき、s.title() の結果はどれですか?',
    choices: ["'Good Morning'", "'good morning'", "'GOOD Morning'", "'Good MORNING'"],
    answerIndex: 0,
    explanation:
      "title()は単語ごとに先頭の文字だけを大文字にし、残りを小文字にします。",
  },
  {
    type: "text",
    question:
      's = "banana bread" のとき、s.replace("an", "AN") の結果を、クォートなしでそのまま入力してください。',
    answer: ["bANANa bread"],
    explanation:
      '"banana"の中には"an"が連続して2箇所(位置1-2と3-4)含まれており、両方とも"AN"に置き換えられるため"bANANa"になります。replace()は非重複で左から順にすべて置換します。',
  },
  {
    type: "text",
    question:
      's = "2025-04-01" のとき、s.split("-")[1] の結果を、クォートなしで入力してください。',
    answer: ["04"],
    explanation:
      's.split("-")は["2025", "04", "01"]を返すため、インデックス1の要素は"04"です。',
  },
  {
    type: "choice",
    question:
      'fname = "chart.svg" のとき、fname.endswith(("png", "jpg", "gif")) の結果はどれですか?',
    choices: ["True", "False", "エラーになる", "'svg'"],
    answerIndex: 1,
    explanation:
      '"chart.svg"は"png", "jpg", "gif"のいずれの拡張子でも終わっていないため、endswith()はFalseを返します。',
  },
  {
    type: "text",
    question:
      's = "report_final.csv" のとき、s.removeprefix("final") の結果を、クォートなしで入力してください。',
    answer: ["report_final.csv"],
    explanation:
      'removeprefix()は文字列が指定した接頭辞で実際に始まっている場合のみ削除します。sは"final"ではなく"report_"から始まっているため、変化せずそのまま返されます。',
  },
  {
    type: "choice",
    question: '"12.5".isdigit() の結果はどれですか?',
    choices: ["True", "False", "エラーになる", "1.0"],
    answerIndex: 1,
    explanation:
      "isdigit()は文字列がすべて数字の文字だけで構成されている場合にTrueを返しますが、小数点(.)は数字ではないためFalseになります。",
  },
  {
    type: "choice",
    question:
      'city, pop = "Sapporo", 1973000 のとき、f"{city}の人口は{pop:,}人です" の結果はどれですか?',
    choices: [
      "'Sapporoの人口は1,973,000人です'",
      "'Sapporoの人口は1973000人です'",
      "'Sapporoの人口は197,3000人です'",
      "'Sapporoの人口は1,973000人です'",
    ],
    answerIndex: 0,
    explanation:
      "書式指定子:,は数値を3桁ごとにカンマ区切りで表示します。1973000は1,973,000と表示されます。",
  },
  {
    type: "choice",
    question: 'value = 7 のとき、f"{value*2=}" の結果はどれですか?',
    choices: [
      "'value*2=14'",
      "'14=14'",
      "'value=14'",
      "'value*2=7'",
    ],
    answerIndex: 0,
    explanation:
      "末尾に=を付けるデバッグ用のf-string記法は、書いた式の文字列表現(value*2)と、その式を評価した値(14)を=でつないで出力します。",
  },
  {
    type: "choice",
    question:
      'pattern = re.compile(r"\\d{3}-\\d{4}") のとき、pattern.fullmatch("123-45678") の結果はどれですか?',
    choices: [
      "Matchオブジェクトを返す",
      "None を返す",
      "例外(エラー)が発生する",
      "'123-4567'を返す",
    ],
    answerIndex: 1,
    explanation:
      "fullmatch()は文字列全体がパターンと一致する場合のみマッチします。パターンは3桁-4桁(計8文字)を要求しますが、対象文字列は9文字あり末尾に余分な\"8\"があるため全体一致とはならずNoneが返ります。",
  },
  {
    type: "choice",
    question:
      'pattern = re.compile(r"\\d+") のとき、pattern.match("abc123") の結果はどれですか?',
    choices: [
      "Matchオブジェクトを返す('123'にマッチする)",
      "None を返す",
      "例外(エラー)が発生する",
      "空文字列を返す",
    ],
    answerIndex: 1,
    explanation:
      "match()は文字列の先頭位置からのみマッチを試みます。\"abc123\"は先頭が数字ではないため、途中に\"123\"があってもmatch()はNoneを返します(search()なら見つかります)。",
  },
  {
    type: "choice",
    question:
      "logging.basicConfig(level=logging.WARNING, ...) と設定した場合、debug/info/warning/error/criticalのうち実際にログ出力されるのはどれですか?",
    choices: [
      "warning, error, critical",
      "debug, info, warning, error, critical(すべて)",
      "error, criticalのみ",
      "debug, infoのみ",
    ],
    answerIndex: 0,
    explanation:
      "ログレベルはDEBUG < INFO < WARNING < ERROR < CRITICALの順です。level=WARNINGに設定するとWARNING以上のレベルだけが出力され、DEBUGとINFOは出力されません。",
  },
  {
    type: "choice",
    question:
      'datetime.strptime("2025年12月25日", "%Y年%m月%d日") の結果はどれですか?',
    choices: [
      "datetime.datetime(2025, 12, 25, 0, 0)",
      "datetime.datetime(2025, 25, 12, 0, 0)",
      "datetime.date(2025, 12, 25)",
      "'2025-12-25'",
    ],
    answerIndex: 0,
    explanation:
      "strptime()は書式文字列に従って文字列を解析します。%Yが年、%mが月、%dが日に対応するため、2025年12月25日に一致するdatetimeオブジェクトが生成されます(時刻指定がないため0時0分になります)。",
  },
  {
    type: "choice",
    question:
      "date(2025, 1, 1) + timedelta(days=40) の結果はどれですか?(2025年は平年で、1月は31日まであります)",
    choices: [
      "date(2025, 2, 10)",
      "date(2025, 2, 9)",
      "date(2025, 2, 1)",
      "date(2025, 1, 41)",
    ],
    answerIndex: 0,
    explanation:
      "1月1日を1日目とすると、1月は31日まであるので1月1日+30日で1月31日、さらに10日進めると2月10日になります(合計40日後)。",
  },
  {
    type: "choice",
    question:
      "pickle.dump(obj, f) を実行するとき、fはどのモードで開いたファイルオブジェクトである必要がありますか?",
    choices: ["'wb'(バイナリ書き込みモード)", "'w'(テキスト書き込みモード)", "'rb'(バイナリ読み込みモード)", "'a'(テキスト追記モード)"],
    answerIndex: 0,
    explanation:
      "pickleはPythonオブジェクトをバイト列に直列化するため、書き込み先のファイルはバイナリ書き込みモード'wb'で開く必要があります。テキストモード'w'で開くとエラーになります。",
  },
  {
    type: "choice",
    question:
      'p = Path("/data") のとき、p / "2025" / "report.csv" の結果として正しいものはどれですか?',
    choices: [
      "PosixPath('/data/2025/report.csv')",
      "PosixPath('/data\\2025\\report.csv')",
      "'/data/2025/report.csv'という文字列",
      "PosixPath('/data')のみ(変化しない)",
    ],
    answerIndex: 0,
    explanation:
      "pathlibでは/演算子を使ってパスの要素を連結でき、Pathオブジェクト同士(または文字列)をつなげて新しいPathオブジェクトを作成できます。",
  },
  {
    type: "choice",
    question:
      '次のファイル名のうち、Path(".").glob("*.csv") で取得されるものはどれですか? ["data.csv", "report.txt", "archive.csv.bak", "summary.csv"]',
    choices: [
      "data.csv と summary.csv",
      "data.csv, summary.csv, archive.csv.bak の3つ",
      "すべてのファイル",
      "report.txt のみ",
    ],
    answerIndex: 0,
    explanation:
      '"*.csv"パターンはファイル名の末尾が".csv"であるものにマッチします。archive.csv.bakは末尾が".bak"なので対象外、report.txtも対象外で、data.csvとsummary.csvの2つが該当します。',
  },
];
