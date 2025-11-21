var bulbasaurTemplate = {
    name: "フシギダネ",
    maxhp: 20,
    a: 10,
    d: 10,
    img: "./img/bulbasaur.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "こうごうせい", action: (user, opponent) => synthesis(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};

var charmanderTemplate = {
    name: "ヒトカゲ",
    maxhp: 20,
    a: 10,
    d: 10,
    img: "./img/charmander.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "こうごうせい", action: (user, opponent) => synthesis(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var squirtleTemplate = {
    name: "ゼニガメ",
    maxhp: 20,
    a: 8,
    d: 15,
    img: "./img/squirtle.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "かたくなる", action: (user, opponent) => harden(user, opponent) },
        { name: "アクアリング", action: (user, opponent) => aquaring(user, opponent) },
        { name: "みずでっぽう", action: (user, opponent) => watergun(user, opponent) }
    ]
};
var venusaurTemplate = {
    name: "フシギバナ",
    maxhp: 30,
    a: 20,
    d: 15,
    img: "./img/venusaur.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
function tackle(user, opponent) {
    opponent.hp -= user.a * 2 - opponent.d;
    if (opponent.hp <= 0) {
        opponent.hp = 0;
    }
    $(".explanation").text(user.name + "のたいあたり！");
}
function solarbeam(user, opponent) {
    opponent.hp -= user.a * 2 - opponent.d;
    if (opponent.hp <= 0) {
        opponent.hp = 0;
    }
    $(".explanation").text(user.name + "のソーラービーム！");
}
function watergun(user, opponent) {
    opponent.hp -= user.a * 1.5 - opponent.d;
    if (opponent.hp <= 0) {
        opponent.hp = 0;
    }
    $(".explanation").text(user.name + "のみずでっぽう！");
}
function swoardsdance(user, opponent) {
    user.a = user.a * 2;
    $(".explanation").text(user.name + "のつるぎのまい！");
    setTimeout(() => {
        $(".explanation").text(user.name + "のこうげきがあがった！");
    }, 1000)
}
function synthesis(user, opponent) {
    user.hp = user.hp + 5;
    $(".explanation").text(user.name + "のこうごうせい！");
}
function aquaring(user, opponent) {
    user.hp = user.hp + 10;
    $(".explanation").text(user.name + "のアクアリング！");
}
function harden(user, opponent) {
    user.d = user.d * 2;
    $(".explanation").text(user.name + "のかたくなる！");
    setTimeout(() => {
        $(".explanation").text(user.name + "のぼうぎょがあがった！");
    }, 1000)
}
function leafstorm(user, opponent) {
    opponent.hp -= user.a * 3 - opponent.d * 2;
    if (opponent.hp <= 0) {
        opponent.hp = 0;
    }
    $(".explanation").text(user.name + "のリーフストーム！");
}