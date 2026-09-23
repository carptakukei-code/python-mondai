window.QUIZ_TITLE = "第2章 確認問題 セットB(Pythonの文法・標準ライブラリ)";

window.QUESTIONS = [
  {
    type: "choice",
    question: "次のコードを実行すると、何が出力されますか?",
    code:
      'for n in [3, 6, 9, 12]:\n' +
      '    if n % 4 == 0:\n' +
      '        print("A")\n' +
      '    elif n % 3 == 0:\n' +
      '        print("B")\n' +
      '    else:\n' +
      '        print("C")\n' +
      'print("Done")',
    choices: [
      "B\nB\nB\nA\nDone",
      "A\nB\nB\nB\nDone",
      "B\nB\nA\nB\nDone",
      "B\nB\nB\nA",
    ],
    answerIndex: 0,
    explanation:
      "3, 6, 9は4の倍数ではないが3の倍数なのでB。12は4の倍数なのでA。forループが終わったあとに必ずprint(\"Done\")が実行されます。",
  },
  {
    type: "choice",
    question:
      "次のコードを実行すると、何が出力されますか? (1つ目のifにはelseがない点に注意してください)",
    code:
      'x = 7\n' +
      'if x % 2 == 0:\n' +
      '    print("even")\n' +
      'if x % 5 == 0:\n' +
      '    print("div5")\n' +
      'else:\n' +
      '    print("not div5")',
    choices: [
      "not div5",
      "even\nnot div5",
      "even",
      "何も出力されない",
    ],
    answerIndex: 0,
    explanation:
      "x=7は2の倍数ではないため1つ目のifは何も出力しません(elseがないのでそのまま次に進みます)。7は5の倍数でもないため、2つ目のif/elseはelse節が実行され\"not div5\"だけが出力されます。",
  },
  {
    type: "choice",
    question:
      "次のうち、PEP 8スタイルガイドに準拠しているかをチェックするツールとして紹介されていないものはどれですか?",
    choices: ["pycodestyle", "Ruff", "NumPy", "flake8"],
    answerIndex: 2,
    explanation:
      "NumPyは数値計算用のライブラリであり、コーディングスタイルをチェックするツールではありません。pycodestyle、flake8、RuffはいずれもPEP 8準拠をチェックするための静的解析ツールです。",
  },
  {
    type: "text",
    question:
      "次のコードを実行すると、コンソールに何と表示されますか?(日本語でそのまま入力してください)",
    code:
      'd = {"a": 1, "b": 2}\n' +
      'try:\n' +
      '    d["c"]\n' +
      'except KeyError:\n' +
      '    print("キーが存在しません")',
    answer: ["キーが存在しません"],
    explanation:
      "辞書dにはキー\"c\"が存在しないため、d[\"c\"]はKeyErrorを送出し、except節が実行されます。",
  },
  {
    type: "choice",
    question: "次のコードを実行すると、どうなりますか?",
    code:
      'd = {"x": 1}\n' +
      'try:\n' +
      '    d["y"]\n' +
      'except TypeError:\n' +
      '    print("型エラーです")',
    choices: [
      "型エラーです、と表示される",
      "KeyError例外が発生し、except節で捕捉されずにプログラムが異常終了する",
      "何も表示されずに正常終了する",
      "Noneが表示される",
    ],
    answerIndex: 1,
    explanation:
      "存在しないキー\"y\"へのアクセスはKeyErrorを送出しますが、except節はTypeErrorしか捕捉しないため、この例外は捕まらずそのまま伝播します。",
  },
  {
    type: "choice",
    question:
      'nums = [3, 8, 15] のとき、[str(n) for n in nums] の結果はどれですか?',
    choices: [
      "['3', '8', '15']",
      "[3, 8, 15]",
      "'3815'",
      "[('3',), ('8',), ('15',)]",
    ],
    answerIndex: 0,
    explanation:
      "str(n)は各数値を文字列に変換します。リスト内包表記により、文字列に変換された要素からなる新しいリストが作られます。",
  },
  {
    type: "text",
    question:
      "空の{}を変数に代入したとき、type({})の結果を英単語で答えてください(例: list)。",
    answer: ["dict"],
    explanation:
      "{}は空のセットではなく空の辞書(dict)を作ります。空のセットを作りたい場合はset()を使う必要があります。",
  },
  {
    type: "choice",
    question:
      "nums = [4, 7, 10, 13, 16] のとき、{n: n**2 for n in nums if n % 2 == 0} の結果はどれですか?",
    choices: [
      "{4: 16, 10: 100, 16: 256}",
      "{4: 16, 7: 49, 10: 100, 13: 169, 16: 256}",
      "{7: 49, 13: 169}",
      "[16, 100, 256]",
    ],
    answerIndex: 0,
    explanation:
      "条件n % 2 == 0を満たす偶数は4, 10, 16です。それぞれの2乗を値とする辞書が生成されます。",
  },
  {
    type: "choice",
    question: "次のネストしたリスト内包表記を実行すると、結果はどれになりますか?",
    code: "[[(p, q*q) for q in range(4) if q % 2 == 1] for p in range(2)]",
    choices: [
      "[[(0, 1), (0, 9)], [(1, 1), (1, 9)]]",
      "[[(0, 0), (0, 4)], [(1, 0), (1, 4)]]",
      "[(0, 1), (0, 9), (1, 1), (1, 9)]",
      "[[(0, 1), (1, 1)], [(0, 9), (1, 9)]]",
    ],
    answerIndex: 0,
    explanation:
      "内側の内包表記はrange(4)のうち奇数(1, 3)についてqの2乗を求め、(0,1),(0,9)のようなペアを作ります。外側のpは0と1の2通りなので、それぞれについてこのリストが作られます。",
  },
  {
    type: "choice",
    question:
      "g = (x for x in range(5)) のとき、len(g) を実行するとどうなりますか?",
    choices: [
      "TypeErrorが発生する(ジェネレーターはlen()に対応していない)",
      "5が返る",
      "0が返る",
      "エラーにならず空文字列が返る",
    ],
    answerIndex: 0,
    explanation:
      "ジェネレーターは要素数をあらかじめ持っていないため、len()を呼び出すとTypeErrorが発生します。要素数を知るには全要素を消費して数える必要があります。",
  },
  {
    type: "choice",
    question:
      "g = (n for n in range(3)) のとき、list(g)を実行して[0, 1, 2]を得たあと、続けてもう一度list(g)を実行するとどうなりますか?",
    choices: [
      "空のリスト[]が返る(ジェネレーターは一度使い切ると再利用できない)",
      "再び[0, 1, 2]が返る",
      "エラーになる",
      "Noneが返る",
    ],
    answerIndex: 0,
    explanation:
      "ジェネレーターは一度要素を消費すると内部状態がリセットされないため、既に使い切ったジェネレーターに対して再度list()を呼んでも空のリストが返るだけです。",
  },
  {
    type: "text",
    question:
      "次のコードを実行したあと、f.closed の結果はどうなりますか?True または False で(先頭を大文字にして)答えてください。",
    code: 'with open("note.txt", "w", encoding="utf-8") as f:\n    f.write("Hi\\n")',
    answer: ["True"],
    explanation:
      "with文のブロックを抜けると、ファイルは自動的にクローズされます。そのためf.closedはTrueになります。",
  },
  {
    type: "choice",
    question: "次のコードを順番に実行すると、dataの中身はどれになりますか?",
    code:
      'with open("log.txt", "w", encoding="utf-8") as f:\n' +
      '    f.write("first\\n")\n\n' +
      'with open("log.txt", "a", encoding="utf-8") as f:\n' +
      '    f.write("second\\n")\n\n' +
      'with open("log.txt", encoding="utf-8") as f:\n' +
      '    data = f.read()',
    choices: [
      "'first\\nsecond\\n'",
      "'second\\n'",
      "'first\\n'",
      "'secondfirst\\n'",
    ],
    answerIndex: 0,
    explanation:
      '"w"モードで最初に\"first\\n\"を書き込み、続けて\"a\"(追記)モードで\"second\\n\"を末尾に追加しているため、ファイルの内容は\"first\\nsecond\\n\"になります。',
  },
  {
    type: "choice",
    question:
      's = "Data Science" のとき、s.lower()の文字数は元のsの文字数と比べてどうなりますか?',
    choices: [
      "変わらない(大文字・小文字の変換は文字数に影響しない)",
      "必ず短くなる",
      "必ず長くなる",
      "スペースの分だけ短くなる",
    ],
    answerIndex: 0,
    explanation:
      "lower()は各文字を小文字に変換するだけで、文字の数自体は変化しません。",
  },
  {
    type: "text",
    question:
      's = "aaaa" のとき、s.replace("a", "b", 2) の結果を、クォートなしで入力してください。',
    answer: ["bbaa"],
    explanation:
      "replace()の第3引数は置換する最大回数を指定します。先頭から2個の\"a\"だけが\"b\"に置き換わるため、\"bbaa\"になります。",
  },
  {
    type: "choice",
    question: 's = "a:b:c:d" のとき、s.split(":", 1) の結果はどれですか?',
    choices: [
      "['a', 'b:c:d']",
      "['a', 'b', 'c', 'd']",
      "['a:b:c:d']",
      "['a', 'b', 'c:d']",
    ],
    answerIndex: 0,
    explanation:
      "split()の第2引数maxsplitは分割する最大回数を指定します。1を指定すると最初の1箇所だけで分割され、残りはそのまま2つ目の要素になります。",
  },
  {
    type: "text",
    question:
      's = "**hello**" のとき、s.strip("*") の結果を、クォートなしで入力してください。',
    answer: ["hello"],
    explanation:
      "strip()に文字を指定すると、空白ではなくその文字(の集合)を先頭と末尾から取り除きます。両端の\"*\"が取り除かれ\"hello\"になります。",
  },
  {
    type: "choice",
    question:
      'fname = "archive.tar.gz" のとき、fname.endswith(".gz") の結果はどれですか?',
    choices: ["True", "False", "エラーになる", "'.gz'"],
    answerIndex: 0,
    explanation:
      '"archive.tar.gz"は".gz"で終わっているため、endswith(".gz")はTrueを返します。',
  },
  {
    type: "text",
    question:
      's = "test_report.csv" のとき、s.removeprefix("test_") の結果を、クォートなしで入力してください。',
    answer: ["report.csv"],
    explanation:
      'sは実際に"test_"から始まっているため、removeprefix()はその接頭辞を取り除き"report.csv"を返します。',
  },
  {
    type: "choice",
    question: '"-15".isdigit() の結果はどれですか?',
    choices: ["False", "True", "エラーになる", "-15"],
    answerIndex: 0,
    explanation:
      "isdigit()は文字列がすべて数字の文字だけで構成されている場合にTrueを返しますが、マイナス記号(-)は数字ではないためFalseになります。",
  },
  {
    type: "text",
    question:
      '", ".join(["red", "green", "blue"]) の結果を、クォートなしで入力してください。',
    answer: ["red, green, blue"],
    explanation:
      'join()は呼び出した文字列(", ")を区切り文字として、リスト内の要素を連結します。',
  },
  {
    type: "choice",
    question:
      'name, lang = "misaki", "ruby" のとき、f"{name.upper()}は{lang.title()}が得意です" の結果はどれですか?',
    choices: [
      "'MISAKIはRubyが得意です'",
      "'misakiはrubyが得意です'",
      "'Misakiはrubyが得意です'",
      "'MISAKIはRUBYが得意です'",
    ],
    answerIndex: 0,
    explanation:
      "f-stringの中では変数に対してメソッドを呼び出せます。name.upper()は\"MISAKI\"、lang.title()は\"Ruby\"になります。",
  },
  {
    type: "choice",
    question:
      'prog = re.compile("(P(yth|l)|Z)o[pn]e?") のとき、"Zope" と "Perl" のそれぞれについて prog.search() を実行した結果として正しいものはどれですか?',
    choices: [
      "\"Zope\"にはマッチするが、\"Perl\"にはマッチしない",
      "\"Perl\"にはマッチするが、\"Zope\"にはマッチしない",
      "両方ともマッチする",
      "どちらもマッチしない",
    ],
    answerIndex: 0,
    explanation:
      '"Zope"は Z + o + p + e のようにパターンに一致しますが、"Perl"はPの後に"yth"または"l"が続く必要があるのに対し実際は"e"が続くため、どこを探してもマッチしません。',
  },
  {
    type: "text",
    question:
      'logging.basicConfig(format="%(asctime)s:%(levelname)s:%(message)s") と設定した状態でlogging.error("Disk full")を実行した場合、出力に含まれる%(levelname)sの部分の文字列を、大文字の英単語で答えてください。',
    answer: ["ERROR"],
    explanation:
      "%(levelname)sにはログの重大度を表す大文字のレベル名が入ります。logging.error()を呼び出しているのでレベル名は\"ERROR\"になります。",
  },
  {
    type: "choice",
    question:
      "datetime.now() と date.today() の戻り値の型の違いに関する記述として正しいものはどれですか?",
    choices: [
      "datetime.now()は時刻情報を含むdatetimeオブジェクトを返し、date.today()は日付のみのdateオブジェクトを返す",
      "datetime.now()もdate.today()も同じdateオブジェクトを返す",
      "date.today()の方が時刻情報を含み、datetime.now()は日付のみを返す",
      "どちらも文字列を返す",
    ],
    answerIndex: 0,
    explanation:
      "datetime.now()は年月日に加えて時分秒まで含むdatetimeオブジェクトを返しますが、date.today()は時刻を持たない日付だけのdateオブジェクトを返します。",
  },
  {
    type: "text",
    question:
      "date(2025, 7, 4).isoformat() の結果を、クォートなしで入力してください。",
    answer: ["2025-07-04"],
    explanation:
      "isoformat()は日付をYYYY-MM-DD形式の文字列に変換します。",
  },
  {
    type: "choice",
    question:
      "date(2025, 6, 15) - date(2025, 3, 1) の結果はどれですか?(2025年は平年です)",
    choices: [
      "timedelta(days=106)",
      "timedelta(days=96)",
      "timedelta(days=105)",
      "timedelta(days=115)",
    ],
    answerIndex: 0,
    explanation:
      "3月1日は年始から数えて60日目、6月15日は166日目にあたるため、その差は166-60=106日になります。",
  },
  {
    type: "choice",
    question:
      "次のコードを実行したとき、restored == original と restored is original の組み合わせとして正しいものはどれですか?",
    code:
      "original = [1, 2, 3]\n" +
      "data = pickle.dumps(original)\n" +
      "restored = pickle.loads(data)",
    choices: [
      "restored == original はTrue(値が等しい)、restored is original はFalse(別オブジェクト)",
      "両方ともTrue(同じオブジェクトが復元される)",
      "両方ともFalse",
      "restored == original はFalse、restored is original はTrue",
    ],
    answerIndex: 0,
    explanation:
      "pickleによる直列化・復元は元のオブジェクトと同じ値を持つ新しいオブジェクトを作り出すため、==による値の比較はTrueになりますが、isによる同一性の比較はFalse(別のオブジェクト)になります。",
  },
  {
    type: "choice",
    question:
      '次のファイル名のうち、Path(".").glob("*.txt") で取得されるものはどれですか? ["notes.txt", "notes.txt.bak", "readme.md", "summary.TXT"]',
    choices: [
      "notes.txt のみ",
      "notes.txt と summary.TXT の2つ",
      "notes.txt, notes.txt.bak, summary.TXT の3つ",
      "4つすべて",
    ],
    answerIndex: 0,
    explanation:
      '"*.txt"パターンは末尾が".txt"(小文字)であるものにマッチします。notes.txt.bakは末尾が".bak"、readme.mdは".md"、summary.TXTは大文字の".TXT"のため対象外で、notes.txtのみが該当します。',
  },
  {
    type: "choice",
    question:
      'base = Path("projects") のとき、p = base / "2025" / "summary.csv" として作成したpについて、p.name と p.suffix の組み合わせとして正しいものはどれですか?',
    choices: [
      "p.name は 'summary.csv'、p.suffix は '.csv'",
      "p.name は 'projects'、p.suffix は '.csv'",
      "p.name は 'summary'、p.suffix は 'csv'",
      "p.name も p.suffix も 'summary.csv'",
    ],
    answerIndex: 0,
    explanation:
      "nameはパスの最後の要素(ファイル名部分)全体を、suffixはその拡張子(ドットを含む)を返します。最後の要素は\"summary.csv\"で、その拡張子は\".csv\"です。",
  },
];
