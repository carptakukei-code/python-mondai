window.QUIZ_TITLE = "第5章1節 確認問題(Webスクレイピング)";

window.QUESTIONS = [
  {
    type: "choice",
    question:
      'r = requests.get("https://example-books.jp/") を実行し、r.status_code が 200 だった場合、これは何を意味しますか?',
    choices: [
      "リクエストが正常に成功したことを示す",
      "ページが見つからなかったことを示す",
      "サーバー側でエラーが発生したことを示す",
      "別のURLへのリダイレクトが必要なことを示す",
    ],
    answerIndex: 0,
    explanation:
      "HTTPステータスコード200番台は成功を表します。200は「リクエストが正常に処理された」ことを意味します。",
  },
  {
    type: "choice",
    question:
      "r = requests.get(url) としたとき、type(r) の結果はどれですか?",
    choices: [
      "<class 'requests.models.Response'>",
      "<class 'str'>",
      "<class 'bytes'>",
      "<class 'bs4.BeautifulSoup'>",
    ],
    answerIndex: 0,
    explanation:
      "requests.get()はrequests.models.Responseオブジェクトを返します。取得したHTML文字列はr.textなどでこのオブジェクトから取り出します。",
  },
  {
    type: "choice",
    question: "requestsのResponseオブジェクトのr.textとr.contentの違いとして正しいものはどれですか?",
    choices: [
      "r.textはデコード済みの文字列(str)、r.contentはデコードされていないバイト列(bytes)",
      "r.textはバイト列(bytes)、r.contentはデコード済みの文字列(str)",
      "どちらも同じバイト列を返す",
      "r.textはHTTPヘッダー情報、r.contentは本文",
    ],
    answerIndex: 0,
    explanation:
      "r.contentはレスポンスボディの生のバイト列で、r.textはr.encodingに基づいて文字列にデコードしたものです。",
  },
  {
    type: "choice",
    question: "HTTPステータスコード403の一般的な意味はどれですか?",
    choices: [
      "アクセスが禁止されている(権限がない)",
      "指定したページが存在しない",
      "サーバー内部でエラーが発生した",
      "リクエストが正常に成功した",
    ],
    answerIndex: 0,
    explanation:
      "403 Forbiddenは、サーバーがリクエストを理解したものの、アクセス権限がないなどの理由で処理を拒否したことを示します。",
  },
  {
    type: "choice",
    question:
      "1つのHTMLページに<h2>タグが5個含まれているとき、soup = BeautifulSoup(html, \"html.parser\") として soup.h2 を実行するとどうなりますか?",
    choices: [
      "最初に見つかった1個目の<h2>タグだけが返る",
      "5個の<h2>タグすべてがリストとして返る",
      "最後に見つかった5個目の<h2>タグが返る",
      "エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "soup.タグ名のようにアクセスすると、ドキュメント内で最初に見つかったそのタグ1つだけが返ります。すべて取得したい場合はfind_all()を使う必要があります。",
  },
  {
    type: "choice",
    question:
      "取得したタグに指定した属性が存在しない可能性がある場合、KeyErrorを発生させずに安全に属性値を取得する方法はどれですか?",
    choices: [
      "tag.get(\"href\") を使う(存在しない場合はNoneが返る)",
      "tag[\"href\"] を使う(存在しない場合もエラーにならない)",
      "tag.href を使う(常に安全)",
      "安全に取得する方法はなく、try/exceptを使うしかない",
    ],
    answerIndex: 0,
    explanation:
      "tag[\"href\"]は属性が存在しない場合にKeyErrorを送出しますが、tag.get(\"href\")は属性がなければ例外を出さずにNoneを返します。",
  },
  {
    type: "choice",
    question: "BeautifulSoupのfind()とfind_all()の違いとして正しいものはどれですか?",
    choices: [
      "find()は条件に一致する最初の1つのタグ(またはNone)を返し、find_all()は一致するすべてのタグのリストを返す",
      "find()はすべてのタグのリストを返し、find_all()は最初の1つだけを返す",
      "find()とfind_all()はまったく同じ結果を返す",
      "find_all()は常に文字列のリストを返す",
    ],
    answerIndex: 0,
    explanation:
      "find()は最初にマッチした要素(見つからなければNone)、find_all()はマッチしたすべての要素をリストで返します。",
  },
  {
    type: "text",
    question:
      '次のHTML断片をBeautifulSoupで解析してaタグを取得しました。atag.text の結果を、クォートなしでそのまま入力してください。',
    code: '<a href="/detail/42">サンプル商品</a>',
    answer: ["サンプル商品"],
    explanation:
      ".textプロパティはタグの開始と終了の間にあるテキスト内容(子孫のテキストも含む)を返します。",
  },
  {
    type: "choice",
    question:
      'HTMLのclass属性で絞り込んで検索したい場合、soup.find("div", ...) の書き方として正しいものはどれですか?(classはPythonの予約語であるため)',
    choices: [
      'soup.find("div", class_="price")',
      'soup.find("div", class="price")',
      'soup.find("div", cls="price")',
      'soup.find("div", attrs.class="price")',
    ],
    answerIndex: 0,
    explanation:
      "classはPythonの予約語(制御構文で使われる単語)のため、BeautifulSoupでは末尾にアンダースコアを付けたclass_という引数名で検索します。",
  },
  {
    type: "choice",
    question:
      'soup.select("div.list div.inner") を実行し、該当する要素が1つも見つからなかった場合、戻り値はどれになりますか?',
    choices: ["空のリスト []", "None", "エラー(例外)が発生する", "空の文字列 ''"],
    answerIndex: 0,
    explanation:
      "select()はCSSセレクターに一致する要素をリストで返すメソッドで、一致するものがなくても例外にはならず、空のリストが返ります。",
  },
  {
    type: "choice",
    question: "BeautifulSoupのselect_one()とselect()の違いとして正しいものはどれですか?",
    choices: [
      "select_one()は一致する最初の1要素(またはNone)を返し、select()は一致するすべての要素のリストを返す",
      "select_one()はリストを返し、select()は1要素だけを返す",
      "select_one()はCSSセレクターを使えないが、select()は使える",
      "両者に違いはない",
    ],
    answerIndex: 0,
    explanation:
      "select_one()はfind()に近く最初の1要素(またはNone)、select()はfind_all()に近くすべての一致要素のリストを返します。",
  },
  {
    type: "text",
    question:
      'day = "2025.06.15発売" のとき、day.removesuffix("発売") の結果を、クォートなしで入力してください。',
    answer: ["2025.06.15"],
    explanation:
      "removesuffix()は文字列が指定した接尾辞で終わっている場合にその部分を取り除きます。",
  },
  {
    type: "choice",
    question:
      'datetime.strptime("2025.06.15", "%Y.%m.%d") の結果はどれですか?',
    choices: [
      "datetime.datetime(2025, 6, 15, 0, 0)",
      "datetime.datetime(2025, 15, 6, 0, 0)",
      "datetime.date(2025, 6, 15)",
      "'2025-06-15'という文字列",
    ],
    answerIndex: 0,
    explanation:
      "%Yが年、%mが月、%dが日に対応するため、書式通りに解析すると2025年6月15日のdatetimeオブジェクトになります。時刻の指定がないため0時0分になります。",
  },
  {
    type: "text",
    question:
      'price_s = "2,980円" のとき、次の処理を行った結果を半角数字で入力してください: price = int(price_s.split("円")[0].replace(",", ""))',
    answer: ["2980"],
    explanation:
      '"円"で分割して先頭部分"2,980"を取り出し、カンマを取り除いて"2980"にしたうえでintに変換すると整数2980になります。',
  },
  {
    type: "text",
    question:
      'urllib.parse.urljoin("https://example-books.jp/product/10", "/product/detail/99") の結果を、クォートなしで入力してください。',
    answer: ["https://example-books.jp/product/detail/99"],
    explanation:
      "相対パスが\"/\"で始まる場合、urljoin()はベースURLのスキームとホスト名だけを引き継ぎ、パス全体を相対パスで置き換えます。",
  },
  {
    type: "choice",
    question:
      'urllib.parse.urljoin("https://example-books.jp/list/page1.html", "detail.html") の結果はどれですか?',
    choices: [
      "https://example-books.jp/list/detail.html",
      "https://example-books.jp/detail.html",
      "detail.html",
      "https://example-books.jp/list/page1.html/detail.html",
    ],
    answerIndex: 0,
    explanation:
      '"/"で始まらない相対パスは、ベースURLの最後のディレクトリ("/list/")を基準にして解決されるため、page1.htmlと同じディレクトリのdetail.htmlを指します。',
  },
  {
    type: "choice",
    question:
      "スクレイピングのループ処理内でtime.sleep(1)のように待機を入れる主な目的はどれですか?",
    choices: [
      "アクセス先のサーバーに負荷をかけすぎないよう、リクエストの間隔をあける(礼儀・マナーの観点)",
      "Pythonの実行速度を向上させるため",
      "取得したデータを自動的にキャッシュするため",
      "文字化けを防ぐため",
    ],
    answerIndex: 0,
    explanation:
      "短時間に大量のリクエストを送るとサーバーに負荷をかけたり、アクセス制限(BAN)を受けたりする可能性があるため、適度な間隔をあけるのがマナーとされています。",
  },
  {
    type: "choice",
    question: "Webサイトのrobots.txtファイルの役割として正しいものはどれですか?",
    choices: [
      "サイト運営者がクローラー(ロボット)に対して、アクセスしてよい範囲などの方針を示すファイル",
      "サイトのCSSデザインを定義するファイル",
      "訪問者のログイン情報を保存するファイル",
      "サイトの検索エンジン向けの広告設定ファイル",
    ],
    answerIndex: 0,
    explanation:
      "robots.txtはクローラーに対してアクセスを許可・禁止する範囲などを示す標準的な取り決めのファイルで、スクレイピングを行う際は内容を確認し尊重することが望ましいとされています。",
  },
  {
    type: "choice",
    question:
      "スクレイピングを行う際の一般的なマナーとして適切でないものはどれですか?",
    choices: [
      "同じサーバーに対して間隔を空けずに大量の並列リクエストを送り、できるだけ高速に取得する",
      "対象サイトの利用規約やrobots.txtを事前に確認する",
      "リクエストの間隔を空ける(sleepを入れる)",
      "取得したデータの利用範囲(再配布・商用利用の可否など)を確認する",
    ],
    answerIndex: 0,
    explanation:
      "短時間に大量の並列リクエストを送る行為はサーバーに過度な負荷をかけ、アクセス制限や法的な問題につながる可能性があるため避けるべきです。",
  },
  {
    type: "choice",
    question: "requests.Session()を使う利点として正しいものはどれですか?",
    choices: [
      "複数のリクエスト間でCookieやTCP接続を再利用でき、連続アクセスの効率化やログイン状態の維持がしやすい",
      "HTMLの解析速度が自動的に速くなる",
      "文字コードの判定を自動的に完璧に行えるようになる",
      "robots.txtの内容を自動的に守るようになる",
    ],
    answerIndex: 0,
    explanation:
      "Session()オブジェクトを使うと、Cookieを保持したまま複数回リクエストを送ったり、コネクションを使い回すことで効率的に通信できます。",
  },
  {
    type: "choice",
    question:
      "取得したページの日本語が文字化けして表示される場合に確認すべきこととして最も適切なものはどれですか?",
    choices: [
      "r.encodingがページの実際の文字コード(charset)と一致しているか確認し、必要であれば明示的に設定し直す",
      "BeautifulSoupのバージョンを毎回最新にする",
      "requests.get()の代わりに必ずrequests.post()を使う",
      "文字化けはPythonの仕様上避けられないので対処法はない",
    ],
    answerIndex: 0,
    explanation:
      "requestsはHTTPヘッダーなどから文字コードを推測してr.encodingを設定しますが、推測が誤っていると文字化けが起きます。その場合はr.encodingを正しい値(例: \"utf-8\")に設定し直すことで解消できることがあります。",
  },
  {
    type: "choice",
    question:
      "requestsとBeautifulSoupの組み合わせによる静的なスクレイピングでは取得が難しいケースとして正しいものはどれですか?",
    choices: [
      "ページ読み込み後にJavaScriptが動的にDOMを書き換えて表示するコンテンツ",
      "HTMLファイルの<title>タグの内容",
      "HTMLファイルの<h2>タグの内容",
      "リンク(aタグ)のhref属性の値",
    ],
    answerIndex: 0,
    explanation:
      "requests.get()はサーバーから返された最初のHTMLしか取得できないため、JavaScriptの実行によって後から追加・変更される内容は含まれません。そのような場合はSeleniumなどブラウザを操作するツールが必要になります。",
  },
  {
    type: "choice",
    question:
      "スクレイピングで取得したデータの利用に関する記述として正しいものはどれですか?",
    choices: [
      "取得したデータの著作権はサイト運営者に帰属することが多く、再配布や商用利用が利用規約で禁止されている場合があるため事前の確認が必要",
      "インターネット上で取得できるデータはすべて自由に再配布・商用利用してよい",
      "スクレイピングして取得したデータには著作権の概念が一切適用されない",
      "個人が趣味で行う場合は利用規約を確認する必要はない",
    ],
    answerIndex: 0,
    explanation:
      "Webサイトのコンテンツには著作権が存在することが一般的で、利用規約によって再配布や商用利用が制限されている場合があります。スクレイピングの可否や利用条件は事前に確認する必要があります。",
  },
  {
    type: "text",
    question:
      'span.text が "3,278円(税込)" だったとき、次の処理を行った結果を半角数字で入力してください: price = int(span.text.split("円")[0].replace(",", ""))',
    answer: ["3278"],
    explanation:
      '"円"で分割すると先頭要素は"3,278"になり、カンマを取り除いて整数に変換すると3278になります。',
  },
  {
    type: "choice",
    question: "atags = soup.find_all(\"a\") としたとき、atags[:3] は何を表しますか?",
    choices: [
      "ドキュメント中で最初に見つかった3個のaタグからなるリスト",
      "ドキュメント中のaタグの総数",
      "最後に見つかった3個のaタグからなるリスト",
      "3番目に見つかったaタグ1つだけ",
    ],
    answerIndex: 0,
    explanation:
      "find_all()はマッチした順にタグを格納したリストを返すため、スライス[:3]は先頭から3個の要素(最初に見つかった3個のaタグ)を取り出します。",
  },
  {
    type: "choice",
    question:
      'Python 3.12より前のバージョンで、f"リンク: {atag["href"]}" のようにf-string内部でも外側と同じ種類のクォート(ダブルクォート)をネストして書くとどうなりますか?',
    choices: [
      "SyntaxError(構文エラー)になる",
      "問題なく動作し、hrefの値が埋め込まれる",
      "文字列の中に{}がそのまま残る",
      "自動的にシングルクォートに変換されて実行される",
    ],
    answerIndex: 0,
    explanation:
      "Python 3.12より前は、f-string内で外側と同じ種類のクォートを再利用することができず構文エラーになります。Python 3.12でPEP 701が導入され、この制限が緩和されて同じ種類のクォートのネストが可能になりました。",
  },
  {
    type: "choice",
    question:
      'div.find("span", class_="date").text.strip() のように、取得したテキストに対して最後に.strip()を呼んでいる目的はどれですか?',
    choices: [
      "テキストの前後にある余分な空白や改行文字を取り除くため",
      "テキストをすべて大文字に変換するため",
      "テキストの中の数字だけを取り出すため",
      "テキストをHTMLエスケープするため",
    ],
    answerIndex: 0,
    explanation:
      "strip()は文字列の先頭と末尾にある空白文字(スペースや改行など)を取り除くメソッドで、HTMLの整形上生じる余分な空白を除去するためによく使われます。",
  },
  {
    type: "choice",
    question:
      "dt_list = dl.find_all(\"dt\")、dd_list = dl.find_all(\"dd\") のように取得した2つのリストに対して zip(dt_list, dd_list) を使う目的はどれですか?",
    choices: [
      "<dt>タグ(項目名)と<dd>タグ(値)を同じ順番でペアにして、対応関係を保ったまま同時に取り出すため",
      "2つのリストの要素数を比較して、多い方だけを残すため",
      "2つのリストをアルファベット順に並び替えるため",
      "2つのリストを1つの文字列に連結するため",
    ],
    answerIndex: 0,
    explanation:
      "zip()は複数のイテラブルから同じ位置の要素を組にして取り出せるため、項目名と値が交互に並ぶ<dt><dd>構造から対応するペアを順番に取得するのに適しています。",
  },
  {
    type: "choice",
    question:
      '{"ISBN": "isbn", "ページ数": "page"} のように、HTML上の日本語ラベルをキーとし、Pythonの辞書に保存する際のキー名を値とする対応表を用意する主な目的はどれですか?',
    choices: [
      "サイトごとに表記が異なりうる日本語のラベルを、プログラム内で扱いやすい統一的な英語のキー名に変換するため",
      "日本語のラベルをそのままでは辞書のキーにできないため",
      "HTMLの表示速度を上げるため",
      "文字コードの変換を自動的に行うため",
    ],
    answerIndex: 0,
    explanation:
      "日本語の文字列もPythonの辞書のキーとして使うこと自体は可能ですが、後続の処理で扱いやすいよう、決まった英語のキー名にマッピングして統一的にデータを整形しています。",
  },
  {
    type: "choice",
    question:
      "スクレイピングで集めた書籍情報のリストをpandasのDataFrameに変換する利点として正しいものはどれですか?",
    choices: [
      "表形式で扱えるようになり、フィルタリング・集計・CSV出力など後続のデータ分析処理につなげやすくなる",
      "HTMLの解析速度が自動的に速くなる",
      "requestsのタイムアウトが自動的に発生しなくなる",
      "文字化けが自動的にすべて解消される",
    ],
    answerIndex: 0,
    explanation:
      "辞書のリストをpd.DataFrame()に渡すことで表形式のデータになり、pandasが提供する豊富な集計・加工・出力機能を使えるようになります。",
  },
];
