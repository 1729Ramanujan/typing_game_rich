function disableButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`move${i}`).classList.add("hidden");
    }

}

function enableButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`move${i}`).classList.remove("hidden");
    }

}

bonusstage.addEventListener("click", () => {
    showscreen(bonus);
    battlestart();
});

function updateHP(user, opp) {
    document.querySelector(".hpcontentuser").style.width = user.hp / user.maxhp * 100 + "%";
    document.querySelector(".hpcontentopp").style.width = opp.hp / opp.maxhp * 100 + "%";
    $(".hpnumberuser").text(user.hp + "/" + user.maxhp);
    $(".hpnumberopp").text(opp.hp + "/" + opp.maxhp);
    $(".friend").text(user.name);
    $(".enemy").text(opp.name);
}

var opp_party = [
    duplicate(darkraiTemplate),
    duplicate(dialgaTemplate),
    duplicate(rayquazaTemplate),
    duplicate(bulbasaurTemplate),
    duplicate(charmanderTemplate),
    duplicate(hydreigonTemplate)];
var user_party = [
    duplicate(venusaurTemplate),
    duplicate(squirtleTemplate),
    duplicate(serperiorTemplate),
    duplicate(greninjaTemplate),
    duplicate(sceptileTemplate),
    duplicate(zacianTemplate)];
var movebuttons = [
    document.getElementById("move1"),
    document.getElementById("move2"),
    document.getElementById("move3"),
    document.getElementById("move4")
];
var currentuser_index = Math.floor(Math.random() * user_party.length);
var currentopp_index = Math.floor(Math.random() * opp_party.length);
var user_pokemon = user_party[currentuser_index];
var opp_pokemon = opp_party[currentopp_index];

function duplicate(template) {
    return {
        name: template.name,
        maxhp: template.maxhp,
        hp: template.maxhp,
        a: template.a,
        d: template.d,
        s: template.s,
        img: template.img,
        moves: template.moves
    };
}

function updatePokemon(user, opp) {
    for (let i = 0; i < 4; i++) {
        // ボタンのラベル
        movebuttons[i].textContent = user.moves[i].name;
    }
    document.getElementById("userpokemon").src = user.img;
    document.getElementById("opppokemon").src = opp.img;
}

function updatestatus(user,opp) {
    for (let i = 0; i <= 5; i++) {
        const ball = document.getElementById(`pokeball${i + 1}`);

        if (i < user.length && user[i].hp > 0) {
            ball.src = "img/pokeball.png";
        } else {
            ball.src = "img/pokeball_fainted.png";
        }
    }
    for (let i = 0; i <= 5; i++) {
        const ball = document.getElementById(`pokeball${i + 7}`);

        if (i < opp.length && opp[i].hp > 0) {
            ball.src = "img/pokeball.png";
        } else {
            ball.src = "img/pokeball_fainted.png";
        }
    }
}

// 敵・味方が攻撃する時の関数
function takeTurn(attacker, defender, moveIndex) {
    attacker.moves[moveIndex].action(attacker, defender);
    updateHP(user_pokemon, opp_pokemon);
}

function fainted(pokemon) {
    if (pokemon.hp <= 0) {
        return true;
    } else {
        return false;
    }
}

function switchPokemon(party) {
    party = party.filter(p => p.hp > 0);
    return party[Math.floor(Math.random() * party.length)];
}

function processFaint(isUser) {
    if (isUser === true) {
        setTimeout(() => {
            disableButtons();
            $(".explanation").text(user_pokemon.name + "はたおれた！");
            user_party = user_party.filter(p => p.hp > 0);

            if (user_party.length === 0) {
                setTimeout(() => $(".explanation").text("たたかえるポケモンはもういない..."), 500);
                setTimeout(() => showscreen(start), 1500);
                return true;
            }

            user_pokemon = switchPokemon(user_party);
            setTimeout(() => {
                $(".explanation").text(user_pokemon.name + "をくりだした！");
                updatePokemon(user_pokemon, opp_pokemon);
                updateHP(user_pokemon, opp_pokemon);
                updatestatus(user_party,opp_party);
                enableButtons();
            }, 2000);
        }, 1000);
    } else {
        setTimeout(() => {
            $(".explanation").text("あいての" + opp_pokemon.name + "はたおれた！");
            opp_party = opp_party.filter(p => p.hp > 0);

            if (opp_party.length === 0) {
                setTimeout(() => {
                    $(".explanation").text("あいてを倒した！");
                    setTimeout(() => { showscreen(start); }, 2000);
                }, 1000);
                return true;
            }

            opp_pokemon = switchPokemon(opp_party);
            setTimeout(() => {
                $(".explanation").text("あいては" + opp_pokemon.name + "をくりだした！");
                updatePokemon(user_pokemon, opp_pokemon);
                updateHP(user_pokemon, opp_pokemon);
                updatestatus(user_party,opp_party);
                enableButtons();
            }, 2000);
        }, 1000);

    }
    return false;
}

function battlestart() {
    disableButtons();
    updateHP(user_pokemon, opp_pokemon);
    updatePokemon(user_pokemon, opp_pokemon);
    updatestatus(user_party,opp_party);

    $(".explanation").text(user_pokemon.name + "をくりだした！");
    setTimeout(() => {
        $(".explanation").text("あいては" + opp_pokemon.name + "をくりだした！");
        enableButtons();
    }, 2000);

    movebuttons.forEach((btn, index) => {
        btn.onclick = () => {
            disableButtons();

            let first, second;
            if (user_pokemon.s >= opp_pokemon.s) {
                // 先行と後攻を決めている
                first = { p: user_pokemon, o: opp_pokemon, isUser: true };
                second = { p: opp_pokemon, o: user_pokemon, isUser: false };
            } else {
                first = { p: opp_pokemon, o: user_pokemon, isUser: false };
                second = { p: user_pokemon, o: opp_pokemon, isUser: true };
            }

            // 先攻
            takeTurn(first.p, first.o, first.isUser ? index : Math.floor(Math.random() * first.p.moves.length));
            // 先攻（first）が攻撃した結果、後攻（first.o）が倒れたか？
            if (fainted(first.o) === true) {


                let battleContinues = processFaint(!first.isUser);
                if (battleContinues === false) {
                    setTimeout(() => { enableButtons(); }, 3000);
                }

                return;


            }

            // 後攻
            setTimeout(() => {
                takeTurn(second.p, second.o, second.isUser ? index : Math.floor(Math.random() * second.p.moves.length));
                if (fainted(second.o)) {
                    setTimeout(() => {
                        processFaint(!second.isUser);
                    }, 1000)
                } else {
                    setTimeout(() => { enableButtons(); }, 1000);
                }
            }, 2000);
        };
    });
}

var startbutton3 = document.querySelector(".startbutton3");
startbutton3.addEventListener("click", () => {
    showscreen(bonus);
    battlestart();
});