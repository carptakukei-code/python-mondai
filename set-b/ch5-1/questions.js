window.QUIZ_TITLE = "第5章1節 確認問題 セットB(Webスクレイピング)";

window.QUESTIONS = [
  {
    type: "choice",
    question: "HTTPステータスコード404の一般的な意味はどれですか?",
    choices: [
      "指定したページ(リソース)が見つからない",
      "アクセスが禁止されている",
      "サーバー内部でエラーが発生した",
      "リクエストが正常に成功した",
    ],
    answerIndex: 0,
    explanation:
      "404 Not Foundは、リクエストされたURLに対応するリソースがサーバー上に見つからないことを示します。",
  },
  {
    type: "choice",
    question: "HTTPステータスコード500の一般的な意味はどれですか?",
    choices: [
      "サーバー内部でエラーが発生した",
      "リクエストが正常に成功した",
      "指定したページが見つからない",
      "クライアント側のリクエストに誤りがある",
    ],
    answerIndex: 0,
    explanation:
      "500 Internal Server Errorは、サーバー側で処理中に予期しないエラーが発生したことを示します。",
  },
  {
    type: "choice",
    question: "HTTPステータスコードが300番台(3xx)であることが一般的に示すものはどれですか?",
    choices: [
      "別のURLへのリダイレクトが必要であること",
      "リクエストが正常に成功したこと",
      "クライアント側のリクエストに誤りがあること",
      "サーバー内部でエラーが発生したこと",
    ],
    answerIndex: 0,
    explanation:
      "300番台のステータスコードはリダイレクトを表し、301(恒久的な移動)や302(一時的な移動)などが含まれます。",
  },
  {
    type: "choice",
    question: "requestsのResponseオブジェクトが持つraise_for_status()メソッドの役割はどれですか?",
    choices: [
      "ステータスコードが4xxまたは5xx(エラー系)の場合にHTTPErrorを送出する",
      "ステータスコードを常に200に上書きする",
      "レスポンスの文字コードを自動的に修正する",
      "リクエストを自動的に再送信する",
    ],
    answerIndex: 0,
    explanation:
      "raise_for_status()はレスポンスがエラーを示すステータスコード(4xx・5xx)だった場合に例外を送出し、成功時(2xxなど)は何もしません。",
  },
  {
    type: "choice",
    question:
      "requests.get(url, timeout=5) のように timeout引数を指定する主な目的はどれですか?",
    choices: [
      "サーバーからの応答がない場合に、指定した秒数で待機をあきらめて例外を発生させ、処理が無限に止まるのを防ぐ",
      "1秒あたりに送信できるリクエスト数を制限する",
      "取得したHTMLの文字コードを指定する",
      "リクエストの再試行回数を指定する",
    ],
    answerIndex: 0,
    explanation:
      "timeoutは応答を待つ最大時間を指定するパラメータです。指定しないと、相手サーバーが応答しない場合にプログラムが無期限に停止してしまう可能性があります。",
  },
  {
    type: "choice",
    question:
      "requests.get(url, headers={\"User-Agent\": \"...\"}) のようにUser-Agentヘッダーを明示的に指定することがある理由として最も適切なものはどれですか?",
    choices: [
      "サイトによっては、requestsが送るデフォルトのUser-Agentからのアクセスを検知してブロックする場合があるため、ブラウザからのアクセスに近い値を設定することがある",
      "User-Agentを設定しないとHTTP通信自体ができないため",
      "User-Agentの値によって取得できるHTMLの文字コードが変わるため",
      "User-Agentを設定するとrobots.txtの制限を無視できるため",
    ],
    answerIndex: 0,
    explanation:
      "一部のWebサイトは、プログラムによる自動アクセスを制限するためにUser-Agentを確認しており、デフォルトのUser-Agentだとブロックされることがあります。ただしrobots.txtの制限を無視してよい理由にはなりません。",
  },
  {
    type: "choice",
    question: "soup = BeautifulSoup(html, \"html.parser\") のとき、type(soup.title) の結果はどれですか?",
    choices: [
      "<class 'bs4.element.Tag'>",
      "<class 'str'>",
      "<class 'NoneType'>",
      "<class 'bs4.BeautifulSoup'>",
    ],
    answerIndex: 0,
    explanation:
      "soup.titleは文字列ではなく、<title>タグ全体を表すTagオブジェクトを返します。テキスト部分だけが欲しい場合は.textを使います。",
  },
  {
    type: "choice",
    question:
      "soup.h2.a[\"href\"] という書き方が表している処理として正しいものはどれですか?",
    choices: [
      "最初に見つかった<h2>タグの中から、さらに最初に見つかった<a>タグを取り出し、そのhref属性の値を取得する",
      "ドキュメント全体から<h2>タグと<a>タグをそれぞれ独立に検索し、両方のhref属性をまとめて取得する",
      "<h2>タグ自身のhref属性を取得する",
      "エラーになる(タグを連続してアクセスすることはできない)",
    ],
    answerIndex: 0,
    explanation:
      "BeautifulSoupのTagオブジェクトはドット(.)でネストした子孫タグに連続してアクセスでき、soup.h2.aは最初のh2タグの中の最初のaタグを表します。",
  },
  {
    type: "choice",
    question:
      "soup.select(\"div.list > div.inner\") と soup.select(\"div.list div.inner\")(スペース区切り)の違いとして正しいものはどれですか?",
    choices: [
      "\">\"を使うと直接の子要素であるdiv.innerだけに絞り込まれるが、スペース区切りだと孫要素以下も含めたすべての子孫のdiv.innerが対象になる",
      "\">\"を使うとすべての子孫が対象になり、スペース区切りだと直接の子要素だけに絞り込まれる(記述が逆)",
      "両者はまったく同じ結果になる",
      "\">\"はCSSセレクターとして無効な記法であり、エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "CSSセレクターにおいて\">\"は直接の子要素を表す子結合子、スペースは深さを問わないすべての子孫を表す子孫結合子です。",
  },
  {
    type: "choice",
    question:
      'div.find("img")["src"] という処理が行っていることとして正しいものはどれですか?',
    choices: [
      "divの中から最初に見つかった<img>タグを取得し、そのsrc属性の値(画像のURL)を取り出す",
      "divの中のすべての<img>タグのリストを取得する",
      "divタグ自身のsrc属性を取得する",
      "画像ファイルの中身(バイナリデータ)を直接取得する",
    ],
    answerIndex: 0,
    explanation:
      "find(\"img\")はdivの中から最初の<img>タグを探し、[\"src\"]でそのタグのsrc属性の値を取り出します。",
  },
  {
    type: "choice",
    question:
      "あるspanタグに対して span.parent と書いたとき、取得できるものはどれですか?",
    choices: [
      "そのspanタグを直接囲んでいる、1つ上の階層のタグ",
      "そのspanタグの中に含まれるすべての子タグ",
      "そのspanタグと同じ階層にある次のタグ",
      "ドキュメント全体を表すBeautifulSoupオブジェクト",
    ],
    answerIndex: 0,
    explanation:
      "parentプロパティは、そのタグを直接包んでいる親タグ(1つ上の階層の要素)を返します。",
  },
  {
    type: "text",
    question:
      'urllib.parse.urljoin("https://example.jp/shop/items/10", "../about.html") の結果を、クォートなしで入力してください。',
    answer: ["https://example.jp/shop/about.html"],
    explanation:
      'ベースURLの末尾"10"はファイルとして扱われ、そのディレクトリは"/shop/items/"です。相対パス"../about.html"はそこから1つ上の階層"/shop/"に移動して"about.html"を指すため、結果は"https://example.jp/shop/about.html"になります。',
  },
  {
    type: "choice",
    question:
      'BeautifulSoup(html, "html.parser") の第2引数 "html.parser" が表しているものはどれですか?',
    choices: [
      "HTMLを解析するために使用するパーサー(解析エンジン)の指定で、Python標準ライブラリに含まれるパーサーを使うことを意味する",
      "取得するHTMLの文字コードの指定",
      "検索対象にするHTMLタグの種類の指定",
      "リクエストを送信する際のUser-Agentの指定",
    ],
    answerIndex: 0,
    explanation:
      '"html.parser"はPython標準ライブラリに含まれるHTMLパーサーです。他にlxmlやhtml5libなど、別途インストールが必要な外部パーサーを指定することもできます。',
  },
  {
    type: "choice",
    question:
      "df.to_csv(\"books.csv\", index=False) のように index=False を指定する目的はどれですか?",
    choices: [
      "DataFrameの行番号(インデックス)を、出力するCSVファイルの列として含めないようにする",
      "CSVファイルのヘッダー行(列名)を出力しないようにする",
      "文字コードをShift-JISに変換する",
      "CSVの区切り文字をタブに変更する",
    ],
    answerIndex: 0,
    explanation:
      "index=Falseを指定しない場合、DataFrameの行番号がCSVの先頭列として書き出されます。行番号が不要な場合はindex=Falseを指定します。",
  },
  {
    type: "text",
    question:
      'price_s = "1,480円(送料込み)" のとき、次の処理を行った結果を半角数字で入力してください: price = int(price_s.replace(",", "").split("円")[0])',
    answer: ["1480"],
    explanation:
      'まずカンマを取り除いて"1480円(送料込み)"にし、"円"で分割した先頭要素"1480"を整数に変換すると1480になります。',
  },
  {
    type: "choice",
    question: 'datetime.strptime("2025/09/01", "%Y/%m/%d") の結果はどれですか?',
    choices: [
      "datetime.datetime(2025, 9, 1, 0, 0)",
      "datetime.datetime(2025, 1, 9, 0, 0)",
      "datetime.date(2025, 9, 1)",
      "エラーになる(区切り文字が\"/\"だと解析できない)",
    ],
    answerIndex: 0,
    explanation:
      "書式文字列の区切り文字\"/\"を対象文字列の区切り文字と一致させれば、%Y/%m/%dで年・月・日をそれぞれ正しく解析できます。",
  },
  {
    type: "choice",
    question:
      "あるサイトのrobots.txtに次のように書かれていた場合の意味として正しいものはどれですか?\nUser-agent: *\nDisallow: /admin/",
    choices: [
      "すべてのクローラーに対して、/admin/ 以下のパスへのアクセスを控えるよう求めている",
      "/admin/ 以下のパスにだけ、すべてのクローラーのアクセスを許可している",
      "管理者(admin)というユーザーだけがサイト全体にアクセスできる",
      "このファイルはスクレイピングとは無関係の設定である",
    ],
    answerIndex: 0,
    explanation:
      "User-agent: *はすべてのクローラーを対象とし、Disallow: /admin/はそのパス以下へのアクセスを控えるよう求める記述です。強制力はありませんが、尊重することが望ましいマナーとされています。",
  },
  {
    type: "choice",
    question:
      "Tagオブジェクトのget_text()メソッドと.textプロパティの関係として正しいものはどれですか?",
    choices: [
      ".textはget_text()を引数なしで呼び出した場合とほぼ同じ結果になるが、get_text()はseparatorやstripなどの引数を指定してテキストの取り出し方を細かく制御できる",
      ".textの方がget_text()より多くの引数を指定できる",
      "get_text()は常に空文字列を返す",
      ".textとget_text()はまったく別の要素を対象にする",
    ],
    answerIndex: 0,
    explanation:
      ".textプロパティはget_text()を引数なしで呼んだときの簡易版にあたり、get_text(separator=\" \", strip=True)のように引数を指定することでテキスト間の区切り方や前後の空白除去を制御できます。",
  },
  {
    type: "choice",
    question:
      "soup.find_all(\"a\", limit=3) の効果として正しいものはどれですか?",
    choices: [
      "ドキュメント全体を検索する前に、一致する<a>タグが3個見つかった時点で検索を打ち切り、その3個をリストで返す",
      "ドキュメント中の<a>タグの総数が3個以下の場合のみ結果を返す",
      "最後に見つかった3個の<a>タグを返す",
      "limitは無効な引数であり、エラーになる",
    ],
    answerIndex: 0,
    explanation:
      "limit引数を指定すると、find_all()は指定した件数に達した時点で検索を打ち切ります。soup.find_all(\"a\")[:3]と近い結果が得られますが、全件を探索しない分効率的です。",
  },
  {
    type: "choice",
    question:
      "CSSセレクターにおいて、id属性が\"main\"の要素を選択する記法として正しいものはどれですか?",
    choices: [
      "soup.select(\"#main\")",
      "soup.select(\".main\")",
      "soup.select(\"main\")",
      "soup.select(\"@main\")",
    ],
    answerIndex: 0,
    explanation:
      "CSSセレクターでは\"#\"がid属性、\".\"がclass属性を表します。タグ名のみを書いた場合はタグの種類での検索になります。",
  },
  {
    type: "choice",
    question:
      'soup.find("div", attrs={"class": "price"}) という書き方について正しい説明はどれですか?',
    choices: [
      "soup.find(\"div\", class_=\"price\") とほぼ同じ意味で、attrs辞書を使って属性を指定する別の書き方である",
      "class_を使う場合と異なり、class属性以外は指定できない特殊な記法である",
      "構文として無効であり、必ずエラーになる",
      "id属性を検索するための専用の書き方である",
    ],
    answerIndex: 0,
    explanation:
      "attrs引数に辞書で属性名と値を指定する書き方は、class_=\"price\"のような専用引数を使う書き方と同様の検索結果になります。classのようなPythonの予約語と衝突する属性名を扱う際の代替手段として使われます。",
  },
  {
    type: "choice",
    question: "requests.get()とrequests.post()の主な違いとして正しいものはどれですか?",
    choices: [
      "get()は指定したURLからデータを取得するのに使い、post()はフォームの送信などサーバーにデータを送るのに使う",
      "get()はHTMLしか取得できないが、post()は画像も取得できる",
      "get()は常に失敗し、post()だけが正常に動作する",
      "post()はBeautifulSoupと組み合わせて使うことができない",
    ],
    answerIndex: 0,
    explanation:
      "GETは指定したリソースを取得するためのHTTPメソッド、POSTはフォーム送信などサーバーにデータを送信するためのHTTPメソッドです。用途に応じて使い分けます。",
  },
  {
    type: "choice",
    question: 'soup.find_all("a", href=True) を実行すると、どのようなタグが取得されますか?',
    choices: [
      "href属性を実際に持っている<a>タグだけ",
      "href属性を持たない<a>タグだけ",
      "すべての<a>タグ(hrefの有無を問わない)",
      "<a>タグ以外もすべて含めたすべてのタグ",
    ],
    answerIndex: 0,
    explanation:
      "属性名に対してTrueを指定すると、その属性を実際に持っているタグだけに絞り込んで検索できます。",
  },
  {
    type: "text",
    question:
      "atags = soup.find_all(\"a\") の結果、atagsの要素数が58個だったとき、for atag in atags[10:20]: の処理を実行すると、ループは何回繰り返されますか?半角数字で答えてください。",
    answer: ["10"],
    explanation:
      "atags[10:20]はインデックス10から19までの10個の要素を取り出すスライスです。元の要素数が58個で十分にあるため、10回のループになります。",
  },
  {
    type: "choice",
    question:
      "次のコードのように、HTML文字列を1行ずつ調べて特定のタグを含む行だけを出力する処理の目的として正しいものはどれですか?",
    code:
      'text = r.text\n' +
      'for line in text.split("\\n"):\n' +
      '    if "<h2>" in line:\n' +
      '        print(line.strip())',
    choices: [
      "HTMLソース全体の中から、<h2>タグを含む行だけを簡易的に絞り込んで確認するため",
      "HTMLを正しく解析してタグ構造をすべて復元するため",
      "<h2>タグの数を自動的に数えて返すため",
      "文字コードの変換を行うため",
    ],
    answerIndex: 0,
    explanation:
      "この処理はHTMLをきちんと解析しているわけではなく、単に行ごとの文字列に対して特定の文字列(\"<h2>\")が含まれるかを調べているだけの簡易的な確認方法です。正確な解析にはBeautifulSoupなどのパーサーを使う必要があります。",
  },
  {
    type: "choice",
    question:
      "BASE_URLと各書籍の相対パスbook[\"url\"]に対してurljoin(BASE_URL, book[\"url\"])を使う利点として正しいものはどれですか?",
    choices: [
      "一覧ページ内に相対パスの形で書かれているリンクを、詳細ページに再度アクセスできる完全な絶対URLに変換できる",
      "book[\"url\"]の文字列を短く圧縮できる",
      "リクエストの送信回数を自動的に減らせる",
      "取得したHTMLの文字コードを自動的に修正できる",
    ],
    answerIndex: 0,
    explanation:
      "HTML中のリンクはしばしば相対パスで書かれているため、ベースとなるURLと組み合わせてurljoin()で絶対URLに変換することで、そのURLに直接アクセスできるようになります。",
  },
  {
    type: "choice",
    question:
      "dt_text in LABELS のように、取得した項目名がLABELS辞書に存在するかどうかを確認してから値を保存している理由として最も適切なものはどれですか?",
    choices: [
      "書籍によって掲載されている項目が異なる場合があるため、あらかじめ決めておいた必要な項目だけを選んで取得するため",
      "LABELSに存在しない項目名は必ずエラーになるため、それを防ぐため",
      "処理速度を上げるためであり、結果には影響しない",
      "日本語の文字化けを防ぐため",
    ],
    answerIndex: 0,
    explanation:
      "書籍ページによっては項目の種類や順序が異なることがあるため、LABELSに登録されている項目名のときだけ辞書に値を保存することで、必要な情報だけを一貫した形で集められます。",
  },
  {
    type: "choice",
    question:
      "dl.find_all(\"dt\")の結果に対してtry/exceptを使わずに直接.find_all()や属性アクセスを連鎖させるコードを書いた場合に起こりうるリスクとして正しいものはどれですか?",
    choices: [
      "該当するタグがページに存在せずfind()の結果がNoneになった場合、その後に続けて属性やメソッドを呼び出すとAttributeErrorが発生する",
      "存在しないタグを探そうとした時点で必ずプログラムがフリーズする",
      "Noneに対してメソッドを呼び出しても常に空文字列が返るだけで、エラーにはならない",
      "BeautifulSoupが自動的にダミーのタグを作成してくれるため問題は起こらない",
    ],
    answerIndex: 0,
    explanation:
      "find()は一致する要素がない場合Noneを返します。Noneに対して.textや[\"href\"]のような属性・メソッド呼び出しを行うとAttributeErrorが発生するため、実際のコードでは存在チェックが必要になることがあります。",
  },
  {
    type: "choice",
    question:
      "複数ページにわたる一覧から詳細ページを何度も取得するスクレイピングにおいて、time.sleep()を挟む以外の負荷軽減策として適切なものはどれですか?",
    choices: [
      "一度取得したページの内容をローカルに保存しておき、同じページに再度アクセスする必要が生じたときはキャッシュを再利用する",
      "常に複数のスレッドやプロセスを使って同時に大量のリクエストを送る",
      "リクエストヘッダーをすべて空にする",
      "BeautifulSoupのパーサーを使わずに解析することでサーバー負荷を減らす",
    ],
    answerIndex: 0,
    explanation:
      "取得済みのページをキャッシュしておき、必要なときに再利用することで、同じ内容を得るための重複したリクエストを減らし、サーバーへの負荷を抑えることができます。",
  },
  {
    type: "choice",
    question:
      "r.encoding をもとにデコードしたr.textが文字化けしてしまう場合、r.apparent_encoding を使うことで得られる情報として正しいものはどれですか?",
    choices: [
      "レスポンスの内容(バイト列)そのものから推測された、実際の文字コードの候補",
      "サーバーが送信してきたHTTPヘッダーそのままの文字コード(r.encodingと必ず同じ値)",
      "リクエストを送信したときに使われた文字コード",
      "常に'utf-8'という固定値",
    ],
    answerIndex: 0,
    explanation:
      "r.encodingは主にHTTPヘッダーの情報をもとに設定されますが、ヘッダーの情報が不正確な場合があります。r.apparent_encodingはレスポンス本文の内容そのものを解析して文字コードを推測するため、r.encodingが誤っている場合の手がかりになります。",
  },
];
