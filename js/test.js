var start = document.getElementById("start");
var game = document.getElementById("game");
var result = document.getElementById("result");
var bonus = document.getElementById("bonus");

var startbutton1 = document.querySelector(".startbutton1");
var startbutton2 = document.querySelector(".startbutton2");
var retrybutton = document.querySelector(".retrybutton");
var bonusstage = document.querySelector(".bonusstage");

var currentquestion = "";
var finalscore = 0;
var timer = Number($(".timer").text());

var questions = [];

document.getElementById("bgm_pokemon_battle").volume = 0.35;

// 画面を表示させるように設定する関数
function showscreen(screen) {
    // 最初に全てのbgmは止める
    document.getElementById("bgm_start").pause();
    document.getElementById("bgm_game").pause();
    document.getElementById("bgm_result").pause();
    document.getElementById("bgm_pokemon_battle").pause();

    // もし音楽が流れているなら、音楽の最初に戻る様に設定
    document.getElementById("bgm_start").currentTime = 0;
    document.getElementById("bgm_game").currentTime = 0;
    document.getElementById("bgm_result").currentTime = 0;
    document.getElementById("bgm_pokemon_battle").currentTime = 0;

    // 全ての画面からactiveを取り除いて非表示にしている
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    // 最初に入力されてるscreenに.activeを追加する→表示させたいやつだけが表示する様になる
    setTimeout(() => {
        screen.classList.add("active");
    }, 1000);
    // どの画面にいるのかに応じて背景の画像とbgmを変更している！
    if (screen.id === "start") {
        document.body.style.backgroundImage = "url('img/background1.png')";
        document.getElementById("bgm_start").play();
    }
    if (screen.id === "game") {
        document.body.style.backgroundImage = "url('img/background2.png')";
        document.getElementById("bgm_game").play();
    }
    if (screen.id === "result") {
        document.body.style.backgroundImage = "url('img/background3.png')";
        document.getElementById("bgm_result").play();
    }
    if (screen.id === "bonus") {
        document.body.style.backgroundImage = "url('img/background4.jpeg')";
        document.getElementById("bgm_pokemon_battle").play();
    }
}

// タイムボーナスのゲージのパーセンテージを上げる関数
var gaging = 0;
function setgauge(percent) {
    document.querySelector(".gaugecontent").style.width = gaging + percent + "%";
    gaging = gaging + percent;
}

// メガシンカゲージのパーセンテージを操作する関数
var gaging1 = 0;
function setgauge1(percent) {
    document.querySelector(".gaugecontent1").style.width = gaging1 + percent + "%";
    gaging1 = gaging1 + percent;
}

// メガシンカ時の3段階の画像エフェクトをつける関数
function flashImage() {
    // ３枚の画像をhtmlからインポート
    const img1 = document.getElementById("flashImage1");
    const img2 = document.getElementById("flashImage2");
    const img3 = document.getElementById("flashImage3");
    // まず一枚目を表示させる
    img1.classList.add("show");
    // ０.5秒後に消す
    setTimeout(() => img1.classList.remove("show"), 500);
    // ２枚目の表示、削除
    setTimeout(() => img2.classList.add("show"), 500);
    setTimeout(() => img2.classList.remove("show"), 1000);
    // ３枚目の表示、削除
    setTimeout(() => img3.classList.add("show"), 1000);
    setTimeout(() => img3.classList.remove("show"), 1500);
}

// boostmode(つまりはメガシンカ)の状態であるかどうかを判定する変数
var boostmode = false;
// 問題と打ち込まれた文字列が一致しているかどうかを判定してくれる関数
function checkanswer() {
    var answer = $(".answer").val();
    var question = $(".question").text();
    // 別枠で保存したcurrentquestionと答えが一致しているかどうか
    if (answer === currentquestion) {
        document.getElementById("bgm_right").play();
        var score = Number($(".score").text());
        // タイムボーナスのゲージを貯める
        setgauge(currentquestion.length * 5)
        // メガシンカゲージを貯める
        setgauge1(currentquestion.length * 3)
        // メガシンカしているかどうかでどのくらいスコアがカントされるかを判定
        if (boostmode === true) {
            score += currentquestion.length * 5;
        } else {
            score += currentquestion.length;
        }
        currentquestion = randomword(questions);
        $(".answer").val("");
        $(".score").text(score);
        $(".question").text(currentquestion);
        finalscore = score;
    }
    if (gaging >= 100) {
        document.querySelector(".gaugecontent").style.width = 0 + "%";
        gaging = 0;
        timer = timer + 5;
        $(".timer").text(timer);
    }
    if (gaging1 >= 100) {
        document.querySelector(".gaugecontent1").style.width = gaging1 - 100 + "%";
        gaging1 = gaging1 - 100;
        timer = timer + 2
        boostmode = true;
        $(".fever").html("フィーバー！");
        flashImage();
        setTimeout(() => {
            boostmode = false;
            $(".fever").html("");
        }, 12000)
    }
}

function gamestart() {
    // リトライを変更した時に一度disableされているからそれを解除
    $(".answer").prop("disabled", false);
    // リトライ時に非表示にした解答欄を再表示
    $(".answer").show();
    document.querySelector(".gaugecontent").style.width = 0 + "%";
    gaging = 0;
    const input = document.querySelector(".answer");
    $(".score").text(0);
    $(".timer").text(0);
    input.value = "";
    input.dispatchEvent(new Event("input"));
    // 前回のスコアを残さない様にする
    finalscore = 0;
    // 一度外付けのcurentquestionに問題を保存して、html上でも反映する様に設定
    currentquestion = randomword(questions);
    $(".question").text(currentquestion);
    // タイマーの機能をつける部分
    timer = 30;
    var countdown = setInterval(() => {
        timer--;
        $(".timer").text(timer);
        if (timer < 1) {
            document.getElementById("bgm_game").pause();
            clearInterval(countdown);
            $(".question").text("時間ぎれ！！！");
            $(".answer").val("");
            $(".answer").prop("disabled", true);  // 入力禁止
            $(".answer").hide();                  // 見た目も消す
            $(".resultscore").text(finalscore);
            currentquestion = "fjshdfkjalhfdlaf";
            gaging1 = 0;
            document.querySelector(".gaugecontent1").style.width = 0 + "%";
            var bonus = document.querySelector(".bonusstage");
            if (finalscore >= 50) {
                bonus.classList.add("show");
            }
            $(".fever").html("");
            setTimeout(() => {
                showscreen(result);
            }, 1000);
        }
    }, 1000);
}



// かんたんのスタートボタンを押した時に反応
startbutton1.addEventListener("click", () => {
    // questionsの中のリストがかんたんなもののリストになる
    questions = ["ポケモン", "ピカチュウ", "イーブイ", "フシギダネ", "ヒトカゲ", "ゼニガメ", "ゲンガー", "カイリュー", "ミニリュウ", "プリン", "ニャース", "ケーシィ", "ユンゲラー", "リザードン", "カメックス", "フシギバナ", "コイキング", "ギャラドス", "ミュウツー", "ミュウ", "ルギア",
        "ホウオウ", "ラティオス", "ラティアス", "ジラーチ", "デオキシス", "グラードン", "カイオーガ", "レックウザ", "デンリュウ", "バシャーモ", "ジュカイン", "ラグラージ", "ルカリオ", "ガブリアス", "モクロー", "ニャビー", "アシマリ", "サトシ", "タケシ", "カスミ", "シロナ", "ダンデ",
        "エーテルファウンデーション", "ジムバッジ", "ポケモンセンター", "ポケモンストア", "マサゴタウン", "ハナダシティ", "タマムシシティ", "ニビシティ", "クチバシティ", "ポケモンリーグ", "タマゴ", "バトル", "なかま", "こうげき", "ぼうぎょ", "すばやさ", "たいりょく", "とくこう", "とくぼう",
        "じゅうでん", "なみのり", "かみなり", "かえんほうしゃ", "はかいこうせん", "そらをとぶ", "じしん", "れいとうビーム", "ねむる", "どくどく", "かげぶんしん", "まもる", "でんこうせっか", "つばさでうつ", "すいとる", "りゅうのいかり", "てんきよほう", "つよさ", "げんき", "なかよし", "モンスターボール",
        "スーパーボール", "ハイパーボール", "マスターボール", "むしよけスプレー", "いいキズぐすり", "げんきのかけら", "かいふくのくすり", "わざマシン", "いあいぎり", "そらをとぶ", "かいりき", "ロケット団", "ムサシ", "コジロウ", "ニャース", "オーキド博士", "ポケモン図鑑", "シンオウ地方", "ガラル地方", "パルデア地方",
        "カントー地方", "ジョウト地方", "ホウエン地方", "イッシュ地方", "ポケモンバトル", "レベルアップ", "進化", "メガシンカ", "Zワザ", "ダイマックス", "テラスタル"];
    // ゲームスクリーンに移動（関数利用）
    showscreen(game);
    // ゲームの判定をする関数を動かし始める
    gamestart();
    document.querySelector(".answer").focus();
    document.getElementById("button_push").play();
});

// むずかしいのスタートボタンを押した時に反応
startbutton2.addEventListener("click", () => {
    questions = ["エーテルファウンデーション", "エレクトロフィールド", "ポケモンセンターレディ", "ポケモンバトルレボリューション", "モンスターボールプラス", "ポケモンだいすきクラブ", "ポケットモンスタースペシャル", "ドラゴンタイプのわざマシン", "ダイマックスアドベンチャー", "マスタードのしれん",
        "ガラルチャンピオントーナメント", "ザ・ワイルドエリアニュース", "ポケモントレーナーズスクール", "アルセウスフォンアップグレード", "スペシャルアタックフォルム", "サンムーンアローラチャンピオン", "エンペルトのハイドロカノン", "ゲンガーのシャドーボール", "カイオーガのしおふき", "グラードンのだんがいのつるぎ",
        "レシラムとゼクロムのきずな", "ソード＆シールドエキスパンション", "チャンピオンダンデのリザードン", "アローラポケモンリーグけっせん", "カントージムリーダーリレー", "フシギバナのソーラービーム", "ラプラスのフリーズドライ", "ギャラドスのりゅうのいかり", "ガブリアスのじしん", "ジュラルドンのダイアーク",
        "ミュウツーのサイコブレイク", "ルギアのエアロブラスト", "ホウオウのせいなるほのお", "ラティオスとラティアスのひみつ", "レックウザのガリョウテンセイ", "ゼクロムのクロスサンダー", "ディアルガのときのほうこう", "パルキアのあくうせつだん", "ギラティナのシャドーダイブ", "キュレムのこごえるせかい",
        "ゲッコウガのきりさく", "バシャーモのブレイズキック", "デンリュウのほうでん", "アシレーヌのうたかたのアリア", "ニンフィアのムーンフォース", "ルカリオのはどうだん", "ゼラオラのプラズマフィスト", "カプ・コケコのしぜんのいかり", "ウォロとのさいごのバトル", "シロナのガブリアスせんとう",
        "アカギとのやりなおしバトル", "ロケット団ムサシとコジロウ", "サトシのピカチュウの10まんボルト", "博士からもらえるポケモンずかん", "ポケモンコンテストライブステージ", "ポケモンレンジャーバトルミッション", "ポケモンオブザイヤーしんがた", "マスターボールチャレンジミッション", "ダイマックスわざのこうか",
        "テラスタルオーブのかがやき"];
    showscreen(game);
    gamestart();
    document.getElementById("button_push").play();
});

// 最初に開いた時にスタート画面に戻ってくるように設定
window.onload = () => {
    showscreen(start);
};

// 最初にクリックされたらbgmが流れるように設定
window.addEventListener("click", function initAudio() {
    //  クリック時の再生
    document.getElementById("bgm_start").play();
    // クリックに応じて何回も再生されたらやばいので、一度だけ実行する
    window.removeEventListener("click", initAudio);
});


// リトライボタンを押したら最初の画面に戻る様に設定
retrybutton.addEventListener("click", () => {
    showscreen(start);
});

function randomword(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// タイピングしている時に変換中かどうかを判定する
var composing = false;
$(".answer").on("compositionstart", function () {
    composing = true;
});
$(".answer").on("compositionend", function () {
    composing = false;
    checkanswer();
});




