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
    a: 10,
    d: 10,
    img: "./img/squirtle.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "こうごうせい", action: (user, opponent) => synthesis(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var venusaurTemplate = {
    name: "フシギダネ",
    maxhp: 30,
    a: 10,
    d: 10,
    img: "./img/venusaur.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "こうごうせい", action: (user, opponent) => synthesis(user, opponent) },
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