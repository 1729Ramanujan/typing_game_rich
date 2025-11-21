// ポケモンの名前、画像、ステータスを保存する場所
var bulbasaurTemplate = {
    name: "フシギダネ",
    maxhp: 100,
    a: 40,
    d: 40,
    s: 45,
    img: "./img/pokemon/bulbasaur.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "かたくなる", action: (user, opponent) => harden(user, opponent) },
        { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
        { name: "ひっかく", action: (user, opponent) => scratch(user, opponent) }
    ]
};
var serperiorTemplate = {
    name: "ジャローダ",
    maxhp: 160,
    a: 70,
    d: 70,
    s: 113,
    img: "./img/pokemon/serperior.png",
    moves: [
        { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "リーフブレード", action: (user, opponent) => leafblade(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var greninjaTemplate = {
    name: "ゲッコウガ",
    maxhp: 150,
    a: 120,
    d: 50,
    s: 122,
    img: "./img/pokemon/greninja.png",
    moves: [
        { name: "みずしゅりけん", action: (user, opponent) => watershuriken(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "ハイドロポンプ", action: (user, opponent) => hydropump(user, opponent) },
        { name: "みずでっぽう", action: (user, opponent) => watergun(user, opponent) }
    ]
};
var charmanderTemplate = {
    name: "ヒトカゲ",
    maxhp: 90,
    a: 60,
    d: 110,
    s: 65,
    img: "./img/pokemon/charmander.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "ひっかく", action: (user, opponent) => scratch(user, opponent) },
        { name: "ひのこ", action: (user, opponent) => ember(user, opponent) },
        { name: "きりさく", action: (user, opponent) => slash(user, opponent) }
    ]
};
var squirtleTemplate = {
    name: "ゼニガメ",
    maxhp: 135,
    a: 43,
    d: 35,
    s: 43,
    img: "./img/pokemon/squirtle.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "かたくなる", action: (user, opponent) => harden(user, opponent) },
        { name: "アクアリング", action: (user, opponent) => aquaring(user, opponent) },
        { name: "みずでっぽう", action: (user, opponent) => watergun(user, opponent) }
    ]
};
var venusaurTemplate = {
    name: "フシギバナ",
    maxhp: 170,
    a: 80,
    d: 70,
    s: 80,
    img: "./img/pokemon/venusaur.png",
    moves: [
        { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
        { name: "じしん", action: (user, opponent) => earthquake(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var darkraiTemplate = {
    name: "ダークライ",
    maxhp: 130,
    a: 110,
    d: 70,
    s: 125,
    img: "./img/pokemon/darkrai.png",
    moves: [
        { name: "あくのはどう", action: (user, opponent) => darkpulse(user, opponent) },
        { name: "シャドークロー", action: (user, opponent) => shadowclaw(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "ゴーストダイブ", action: (user, opponent) => phantomforce(user, opponent) }
    ]
};
var dialgaTemplate = {
    name: "ディアルガ",
    maxhp: 170,
    a: 134,
    d: 68,
    s: 90,
    img: "./img/pokemon/dialga.png",
    moves: [
        { name: "ときのほうこう", action: (user, opponent) => roaroftime(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "あくうせつだん", action: (user, opponent) => spacialrend(user, opponent) },
        { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) }
    ]
};
var rayquazaTemplate = {
    name: "レックウザ",
    maxhp: 200,
    a: 132,
    d: 56,
    s: 95,
    img: "./img/pokemon/rayquaza.png",
    moves: [
        { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) },
        { name: "ガリョウテンセイ", action: (user, opponent) => dragonascent(user, opponent) },
        { name: "りゅうのまい", action: (user, opponent) => dragondance(user, opponent) },
        { name: "りゅうせいぐん", action: (user, opponent) => dracometeor(user, opponent) }
    ]
};
var sceptileTemplate = {
    name: "ジュカイン",
    maxhp: 145,
    a: 103,
    d: 40,
    s: 120,
    img: "./img/pokemon/sceptile.png",
    moves: [
        { name: "リーフブレード", action: (user, opponent) => leafblade(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var hydreigonTemplate = {
    name: "サザンドラ",
    maxhp: 145,
    a: 108,
    d: 76,
    s: 98,
    img: "./img/pokemon/hydreigon.png",
    moves: [
        { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) },
        { name: "りゅうのまい", action: (user, opponent) => dragondance(user, opponent) },
        { name: "りゅうせいぐん", action: (user, opponent) => dracometeor(user, opponent) },
        { name: "シャドークロー", action: (user, opponent) => shadowclaw(user, opponent) }
    ]
};
var zacianTemplate = {
    name: "ザシアン",
    maxhp: 90,
    a: 140,
    d: 40,
    s: 148,
    img: "./img/pokemon/zacian.png",
    moves: [
        { name: "きょじゅうざん", action: (user, opponent) => behemothblade(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "かみつく", action: (user, opponent) => bite(user, opponent) },
        { name: "きりさく", action: (user, opponent) => slash(user, opponent) }
    ]
};


// ここからは技のデータを保存する場所
function damagecalculation(user, opp, damage) {
    opp.hp -= Math.floor((22 * damage * user.a / opp.d / 50) + 2);
    if (opp.hp <= 0) {
        opp.hp = 0;
    }
}
function healcalculation(user, opp, ratio) {
    user.hp += Math.floor(user.maxhp * ratio);
    if (user.hp >= user.maxhp) {
        user.hp = user.maxhp;
    }
}
// 空の関数
function empty(user, opp) {

}
// アクアリング
function aquaring(user, opp) {
    healcalculation(user, opp, 0.2);
    $(".explanation").text(user.name + "のアクアリング！");
}

// あくうせつだん
function spacialrend(user, opp) {
    damagecalculation(user, opp, 100);
    $(".explanation").text(user.name + "のあくうせつだん！");
    document.getElementById("bgm_attack").play();
}

// あくのはどう
function darkpulse(user, opp) {
    damagecalculation(user, opp, 80);
    $(".explanation").text(user.name + "のあくのはどう！");
    document.getElementById("bgm_attack").play();
}

// かたくなる
function harden(user, opp) {
    user.d = user.d * 1.5;
    $(".explanation").text(user.name + "のかたくなる！");
    setTimeout(() => {
        $(".explanation").text(user.name + "のぼうぎょがあがった！");
    }, 1000);
}

// かみつく
function bite(user, opp) {
    damagecalculation(user, opp, 60);
    $(".explanation").text(user.name + "のかみつく！");
    document.getElementById("bgm_attack").play();
}

// ガリョウテンセイ
function dragonascent(user, opp) {
    damagecalculation(user, opp, 120);
    $(".explanation").text(user.name + "のガリョウテンセイ！！！");
    document.getElementById("bgm_attack").play();
}

// きりさく
function slash(user, opp) {
    damagecalculation(user, opp, 70);
    $(".explanation").text(user.name + "のきりさく！");
    document.getElementById("bgm_attack").play();
}

// きょじゅうざん
function behemothblade(user, opp) {
    damagecalculation(user, opp, 100);
    $(".explanation").text(user.name + "のきょじゅうざん！！！");
    document.getElementById("bgm_attack").play();
}

// こうごうせい
function synthesis(user, opp) {
    healcalculation(user, opp, 0.25);
    $(".explanation").text(user.name + "のこうごうせい！");
    document.getElementById("bgm_attack").play();
}

// ゴーストダイブ
function phantomforce(user, opp) {
    damagecalculation(user, opp, 90);
    $(".explanation").text(user.name + "のゴーストダイブ！");
    document.getElementById("bgm_attack").play();
}

// シャドークロー
function shadowclaw(user, opp) {
    damagecalculation(user, opp, 70);
    $(".explanation").text(user.name + "のシャドークロー！");
    document.getElementById("bgm_attack").play();
}

// じしん
function earthquake(user, opp) {
    damagecalculation(user, opp, 100);
    $(".explanation").text(user.name + "のじしん！");
    document.getElementById("bgm_attack").play();
}

// ソーラービーム
function solarbeam(user, opp) {
    damagecalculation(user, opp, 50);
    $(".explanation").text(user.name + "のソーラービーム！");
    document.getElementById("bgm_attack").play();
}

// たいあたり
function tackle(user, opp) {
    damagecalculation(user, opp, 30);
    $(".explanation").text(user.name + "のたいあたり！");
    document.getElementById("bgm_attack").play();
}

// つるぎのまい
function swoardsdance(user, opp) {
    user.a = user.a * 1.5;
    $(".explanation").text(user.name + "のつるぎのまい！");
    document.getElementById("bgm_swoarddance").play();
    setTimeout(() => {
        $(".explanation").text(user.name + "のこうげきがあがった！");
    }, 500);
}

// つるのむち
function vinewhip(user, opp) {
    damagecalculation(user, opp, 45);
    $(".explanation").text(user.name + "のつるのむち！");
    document.getElementById("bgm_attack").play();
}

// ときのほうこう
function roaroftime(user, opp) {
    damagecalculation(user, opp, 130);
    $(".explanation").text(user.name + "のときのほうこう！");
    document.getElementById("bgm_attack").play();
    flashImage();
}

// ドラゴンクロー
function dragonclaw(user, opp) {
    damagecalculation(user, opp, 80);
    $(".explanation").text(user.name + "のドラゴンクロー！");
    document.getElementById("bgm_attack").play();
}

// ハイドロポンプ
function hydropump(user, opp) {
    damagecalculation(user, opp, 100);
    $(".explanation").text(user.name + "のハイドロポンプ！");
    document.getElementById("bgm_attack").play();
}

// ひっかく
function scratch(user, opp) {
    damagecalculation(user, opp, 35);
    $(".explanation").text(user.name + "のひっかく！");
    document.getElementById("bgm_attack").play();
}

// ひのこ
function ember(user, opp) {
    damagecalculation(user, opp, 40);
    $(".explanation").text(user.name + "のひのこ！");
    document.getElementById("bgm_attack").play();
}

// みずしゅりけん
function watershuriken(user, opp) {
    damagecalculation(user, opp, 75);
    $(".explanation").text(user.name + "のみずしゅりけん！");
    document.getElementById("bgm_attack").play();
}

// みずでっぽう
function watergun(user, opp) {
    damagecalculation(user, opp, 40);
    $(".explanation").text(user.name + "のみずでっぽう！");
    document.getElementById("bgm_attack").play();
}

// リーフストーム
function leafstorm(user, opp) {
    damagecalculation(user, opp, 60);
    $(".explanation").text(user.name + "のリーフストーム！");
    document.getElementById("bgm_attack").play();
}

// リーフブレード
function leafblade(user, opp) {
    damagecalculation(user, opp, 90);
    $(".explanation").text(user.name + "のリーフブレード！");
    document.getElementById("bgm_attack").play();
}

// りゅうせいぐん
function dracometeor(user, opp) {
    damagecalculation(user, opp, 130);
    $(".explanation").text(user.name + "のりゅうせいぐん！");
    document.getElementById("bgm_attack").play();
}

// りゅうのまい
function dragondance(user, opp) {
    user.a = user.a * 1.33;
    user.d = user.d * 1.33;
    $(".explanation").text(user.name + "のりゅうのまい！");
    setTimeout(() => {
        $(".explanation").text(user.name + "のこうげきとぼうぎょがすこしあがった！");
    }, 1000);
    document.getElementById("bgm_dragondance").play();
}
