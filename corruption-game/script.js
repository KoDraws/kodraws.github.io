let content;
let button1;
let button2;
let button3;
let button4;
let button5;
let buttonQ;
let buttonW;
let buttonE;
let buttonR;
let buttonT;
let buttonA;
let buttonS;
let buttonD;
let buttonF;
let buttonG;
let buttonZ;
let buttonX;
let buttonC;
let buttonV;
let buttonB;
let scene;
const character = {
    name: "",
    stats: { health: 100, strength: 10, dexterity: 10, willpower: 10, wisdom: 10, charisma: 10, libido: 10, lust: 0 },
    statsMult: { strength: 1, dexterity: 1, willpower: 1, wisdom: 1, charisma: 1, libido: 1, lust: 1 },
    traits: { hung: false, bulgy: false, messy: false, libidinous: false },
    body: { species: "human", height: 0, muscle: 20, fat: 20, form: "humanoid" },
    head: { species: "human" },
    hair: { length: 0, color: "" },
    eyes: { species: "human", color: "" },
    arms: { species: "human", count: 0 },
    legs: { species: "human", count: 0 },
    tail: { species: "", count: 0 },
    penis: { species: "human", count: 0, knotted: false, flared: false, size: 0, sizeMult: 1 },
    balls: { species: "human", count: 0, size: 0, sizeMult: 1, efficiency: 10, efficiencyMult: 1 },
    vagina: { species: "human", count: 0, depth: 0 },
    anus: { species: 0, count: 0, depth: 0 }
};

let player = character;

function onLoad() {
    content = document.getElementById("content");
    scene = "mainMenu";
    clearAll();
    setScene();
}

function clearAll() {
    button1 = document.getElementById("1")
    button2 = document.getElementById("2")
    button3 = document.getElementById("3")
    button4 = document.getElementById("4")
    button5 = document.getElementById("5")
    buttonQ = document.getElementById("q")
    buttonW = document.getElementById("w")
    buttonE = document.getElementById("e")
    buttonR = document.getElementById("r")
    buttonT = document.getElementById("t")
    buttonA = document.getElementById("a")
    buttonS = document.getElementById("s")
    buttonD = document.getElementById("d")
    buttonF = document.getElementById("f")
    buttonG = document.getElementById("g")
    buttonZ = document.getElementById("z")
    buttonX = document.getElementById("x")
    buttonC = document.getElementById("c")
    buttonV = document.getElementById("v")
    buttonB = document.getElementById("b")
    const controlButtons = [button1, button2, button3, button4, button5, buttonQ, buttonW, buttonE, buttonR, buttonT, buttonA, buttonS, buttonD, buttonF, buttonG, buttonZ, buttonX, buttonC, buttonV, buttonB];
    let i;
    for (i = 0; i < controlButtons.length; i++) {
        controlButtons[i].innerHTML = "";
        controlButtons[i].disabled = true;
    }
    content.innerHTML = "";
}

function buttonClick(button) {
    if (scene == "mainMenu") {
        if (button == 1) {
            scene = "nameSelect";
            setScene();
        }
    }
    else if (scene == "nameSelect") {
        if (button == 1) {
            let input = document.getElementById("input");
            let error = document.getElementById("error");
            if (input.value.length > 1) {
                scene = "heightSelect";
                player.name = input.value;
                console.log("Player Name: " + player.name);
                setScene();
            }
            else error = "Name must from 2 to 30 characters long";
        }
        else if (button == b) {
            scene = "mainMenu";
            setScene();
        }
    }
    else if (scene == "heightSelect") {
        if (button == 1) {
            let input = document.getElementById("input");
            let error = document.getElementById("error");
            if (input.value >= 48 && input.value <= 84) {
                scene = "eyeColorSelect";
                player.height = input.value;
                console.log("Player Height: " + Math.floor(player.height / 12) + "'" + player.height % 12 + "\"");
                setScene();
            }
            else error = "Height must be from 48\"(4'0\") to 84\"(7'0\")";
        }
        else if (button == b) {
            scene = "nameSelect";
            setScene();
        }
    }
    else if (scene == "eyeColorSelect") {
        if (button == 1) {
            player.eyes.color = "gray";
            console.log("Eye Color: " + player.eyes.color);
            scene = "hairLengthSelect";
            setScene();
        }
        else if (button == 2) {
            player.eyes.color = "hazel";
            console.log("Eye Color: " + player.eyes.color);
            scene = "hairLengthSelect";
            setScene();
        }
        else if (button == 3) {
            player.eyes.color = "brown";
            console.log("Eye Color: " + player.eyes.color);
            scene = "hairLengthSelect";
            setScene();
        }
        else if (button == 4) {
            player.eyes.color = "green";
            console.log("Eye Color: " + player.eyes.color);
            scene = "hairLengthSelect";
            setScene();
        }
        else if (button == 5) {
            player.eyes.color = "blue";
            console.log("Eye Color: " + player.eyes.color);
            scene = "hairLengthSelect";
            setScene();
        }
        else if (button == b) {
            scene = "heightSelect";
            setScene();
        }
    }
    else if (scene == "hairLengthSelect") {
        if (button == 1) {
            player.hair.length = 0;
            scene = "hairColorSelect";
            setScene();
        }
        else if (button == 2) {
            player.hair.length = 1;
            console.log("Hair length: " + player.hair.length + "\"");
            scene = "hairColorSelect";
            setScene();
        }
        else if (button == 3) {
            player.hair.length = 3;
            console.log("Hair length: " + player.hair.length + "\"");
            scene = "hairColorSelect";
            setScene();
        }
        else if (button == 4) {
            player.hair.length = 6;
            console.log("Hair length: " + player.hair.length + "\"");
            scene = "hairColorSelect";
            setScene();
        }
        else if (button == b) {
            scene = "eyeColorSelect";
            console.log("Hair length: " + player.hair.length + "\"");
            setScene();
        }
    }
    else if (scene == "hairColorSelect") {
        if (button == 1) {
            player.hair.color = "white";
            console.log("Hair Color: " + player.hair.color);
            scene = "statSelect";
            setScene();
        }
        else if (button == 2) {
            player.hair.color = "blonde";
            console.log("Hair Color: " + player.hair.color);
            scene = "statSelect";
            setScene();
        }
        else if (button == 3) {
            player.hair.color = "light brown";
            console.log("Hair Color: " + player.hair.color);
            scene = "statSelect";
            setScene();
        }
        else if (button == 4) {
            player.hair.color = "brown";
            console.log("Hair Color: " + player.hair.color);
            scene = "statSelect";
            setScene();
        }
        else if (button == 5) {
            player.hair.color = "black";
            console.log("Hair Color: " + player.hair.color);
            scene = "statSelect";
            setScene();
        }
        else if (button == b) {
            scene = "hairLengthSelect";
            console.log("Hair Color: " + player.hair.color);
            setScene();
        }
    }
    else if (scene == "statSelect") {
        if (button == 1) {
            player.statsMult.strength = 2;
            player.statsMult.dexterity = 1;
            player.statsMult.willpower = 1;
            player.statsMult.wisdom = 1;
            player.statsMult.charisma = 1;
            console.log("Strength: " + player.stats.strength * player.statsMult.strength);
            scene = "physiqueSelect";
            setScene();
        }
        else if (button == 2) {
            player.statsMult.strength = 1;
            player.statsMult.dexterity = 2;
            player.statsMult.willpower = 1;
            player.statsMult.wisdom = 1;
            player.statsMult.charisma = 1;
            console.log("Dexterity: " + player.stats.dexterity * player.statsMult.dexterity);
            scene = "physiqueSelect";
            setScene();
        }
        else if (button == 3) {
            player.statsMult.strength = 1;
            player.statsMult.dexterity = 1;
            player.statsMult.willpower = 2;
            player.statsMult.wisdom = 1;
            player.statsMult.charisma = 1;
            console.log("Willpower: " + player.stats.willpower * player.statsMult.willpower);
            scene = "physiqueSelect";
            setScene();
        }
        else if (button == 4) {
            player.statsMult.strength = 1;
            player.statsMult.dexterity = 1;
            player.statsMult.willpower = 1;
            player.statsMult.wisdom = 2;
            player.statsMult.charisma = 1;
            console.log("Wisdom: " + player.stats.wisdom * player.statsMult.wisdom);
            scene = "physiqueSelect";
            setScene();
        }
        else if (button == 5) {
            player.statsMult.strength = 1;
            player.statsMult.dexterity = 1;
            player.statsMult.willpower = 1;
            player.statsMult.wisdom = 1;
            player.statsMult.charisma = 2;
            console.log("Charisma: " + player.stats.charisma * player.statsMult.charisma);
            scene = "physiqueSelect";
            setScene();
        }
        else if (button == b) {
            scene = "hairColorSelect";
            setScene();
        }
    }
    else if (scene == "physiqueSelect") {
        if (button == 1) {
            player.body.muscle = 10;
            player.body.fat = 10;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == 2) {
            player.body.muscle = 15;
            player.body.fat = 15;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == 3) {
            player.body.muscle = 20;
            player.body.fat = 20;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == 4) {
            player.body.muscle = 25;
            player.body.fat = 15;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == 5) {
            player.body.muscle = 15;
            player.body.fat = 25;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == q) {
            player.body.muscle = 40;
            player.body.fat = 20;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == w) {
            player.body.muscle = 20;
            player.body.fat = 40;
            console.log("Muscle: " + player.body.muscle);
            console.log("Fat: " + player.body.fat);
            scene = "penisSizeSelect";
            setScene();
        }
        else if (button == b) {
            scene = "statSelect";
            setScene();
        }
    }
    else if (scene == "penisSizeSelect") {
        if (button == 1) {
            player.penis.size = 4;
            console.log("Penis Size: " + player.penis.length + "\"");
            scene = "ballSizeSelect";
            setScene();
        }
        else if (button == 2) {
            player.penis.size = 6;
            console.log("Penis Size: " + player.penis.length + "\"");
            scene = "ballSizeSelect";
            setScene();
        }
        else if (button == 3) {
            player.penis.size = 8;
            console.log("Penis Size: " + player.penis.length + "\"");
            scene = "ballSizeSelect";
            setScene();
        }
        else if (button == 4) {
            player.penis.size = 10;
            console.log("Penis Size: " + player.penis.length + "\"");
            scene = "ballSizeSelect";
            setScene();
        }
        else if (button == b) {
            scene = "physiqueSelect";
            setScene();
        }
    }
    else if (scene == "ballSizeSelect") {
        if (button == 1) {
            player.balls.size = 0.5;
            console.log("Ball Size: " + player.balls.size + "\" wide each");
            scene = "traitSelect";
            setScene();
        }
        else if (button == 2) {
            player.balls.size = 1;
            console.log("Ball Size: " + player.balls.size + "\" wide each");
            scene = "traitSelect";
            setScene();
        }
        else if (button == 3) {
            player.balls.size = 1.5;
            console.log("Ball Size: " + player.balls.size + "\" wide each");
            scene = "traitSelect";
            setScene();
        }
        else if (button == 4) {
            player.balls.size = 2;
            console.log("Ball Size: " + player.balls.size + "\" wide each");
            scene = "traitSelect";
            setScene();
        }
        else if (button == b) {
            scene = "penisSizeSelect";
            setScene();
        }
    }
    else if (scene == "traitSelect") {
        if (button == 1) {
            player.traits.hung = true;
            player.traits.bulgy = false;
            player.traits.messy = false;
            player.traits.libidinous = false;
            player.penis.lengthMod = 1.5;
            player.balls.sizeMod = 1;
            player.balls.efficiencyMod = 1;
            player.statsMult.libido = 1;
            console.log("Trait: Hung");
            scene = "confirmCharacter";
            setScene();
        }
        else if (button == 2) {
            player.traits.hung = false;
            player.traits.bulgy = true;
            player.traits.messy = false;
            player.traits.libidinous = false;
            player.penis.lengthMod = 1;
            player.balls.sizeMod = 1.5;
            player.balls.efficiencyMod = 1;
            player.statsMult.libido = 1;
            console.log("Trait: Bulgy");
            scene = "confirmCharacter";
            setScene();
        }
        else if (button == 3) {
            player.traits.hung = false;
            player.traits.bulgy = false;
            player.traits.messy = true;
            player.traits.libidinous = false;
            player.penis.lengthMod = 1;
            player.balls.sizeMod = 1;
            player.balls.efficiencyMod = 2;
            player.statsMult.libido = 1;
            console.log("Trait: Messy");
            scene = "confirmCharacter";
            setScene();
        }
        else if (button == 4) {
            player.traits.hung = false;
            player.traits.bulgy = false;
            player.traits.messy = false;
            player.traits.libidinous = true;
            player.penis.lengthMod = 1;
            player.balls.sizeMod = 1;
            player.balls.efficiencyMod = 1;
            player.statsMult.libido = 2;
            console.log("Trait: Libidinous");
            scene = "confirmCharacter";
            setScene();
        }
        else if (button == b) {
            scene = "ballSizeSelect";
            setScene();
        }
    }
    else if (scene == "confirmCharacter") {
        if (button == z) {
            scene = "beginning";
            setScene();
        }
        else if (button == b) {
            scene = "traitSelect";
            setScene();
        }
    }
}

function setScene() {
    if (scene == "mainMenu") {
        clearAll();
        content.innerHTML = "<p>Main Menu</p>";
        button1.disabled = false;
        button1.innerHTML = "New Game";
        //button2.disabled = false;
        button2.innerHTML = "Load Game";
    }
    else if (scene == "nameSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's name?</p>";
        content.innerHTML += "<input type=\"text\" id=\"input\" minlength=\"2\" maxlength=\"30\"></input>";
        content.innerHTML += "<p id=\"errorText\"></p>";
        button1.disabled = false;
        button1.innerHTML = "Next";
        buttonB.disabled = false;
        buttonB.innerHTML = "Back";
        document.getElementById("input").focus();
        document.getElementById("input").value = player.name;
    }
    else if (scene == "heightSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's height in inches?</p>";
        content.innerHTML += "<input type=\"number\" id=\"input\" minlength=\"2\" maxlength=\"2\"></input>";
        content.innerHTML += "<p id=\"errorText\"></p>";
        button1.disabled = false;
        button1.innerHTML = "Next";
        buttonB.disabled = false;
        buttonB.innerHTML = "Back";
        document.getElementById("input").focus();
        if (player.height != null) document.getElementById("input").value = player.height;
    }
    else if (scene == "eyeColorSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's eye color?</p>";
        button1.innerHTML = "Gray";
        button1.disabled = false;
        button2.innerHTML = "Hazel";
        button2.disabled = false;
        button3.innerHTML = "Brown";
        button3.disabled = false;
        button4.innerHTML = "Green";
        button4.disabled = false;
        button5.innerHTML = "Blue";
        button5.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "hairLengthSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's hair length?</p>";
        button1.innerHTML = "Bald";
        button1.disabled = false;
        button2.innerHTML = "Short";
        button2.disabled = false;
        button3.innerHTML = "Medium";
        button3.disabled = false;
        button4.innerHTML = "Long";
        button4.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "hairColorSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's hair color?</p>";
        button1.innerHTML = "White";
        button1.disabled = false;
        button2.innerHTML = "Blonde";
        button2.disabled = false;
        button3.innerHTML = "Light Brown";
        button3.disabled = false;
        button4.innerHTML = "Brown";
        button4.disabled = false;
        button5.innerHTML = "Black";
        button5.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "statSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's strongest stat?</p>";
        button1.innerHTML = "Strength";
        button1.disabled = false;
        button2.innerHTML = "Dexterity";
        button2.disabled = false;
        button3.innerHTML = "Willpower";
        button3.disabled = false;
        button4.innerHTML = "Wisdom";
        button4.disabled = false;
        button5.innerHTML = "Charisma";
        button5.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "physiqueSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's physique?</p>";
        button1.innerHTML = "Skinny";
        button1.disabled = false;
        button2.innerHTML = "Lithe";
        button2.disabled = false;
        button3.innerHTML = "Normal";
        button3.disabled = false;
        button4.innerHTML = "Toned";
        button4.disabled = false;
        button5.innerHTML = "Overweight";
        button5.disabled = false;
        buttonQ.innerHTML = "Muscular";
        buttonQ.disabled = false;
        buttonW.innerHTML = "Fat";
        buttonW.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "penisSizeSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's penis size?</p>";
        button1.innerHTML = "4\"";
        button1.disabled = false;
        button2.innerHTML = "6\"";
        button2.disabled = false;
        button3.innerHTML = "8\"";
        button3.disabled = false;
        button4.innerHTML = "10\"";
        button4.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "ballSizeSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's testicle diameter?</p>";
        button1.innerHTML = "0.5\"";
        button1.disabled = false;
        button2.innerHTML = "1\"";
        button2.disabled = false;
        button3.innerHTML = "1.5\"";
        button3.disabled = false;
        button4.innerHTML = "2\"";
        button4.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "traitSelect") {
        clearAll();
        content.innerHTML = "<p>What is your character's dominant sexual trait?</p>";
        content.innerHTML += "<p style=\"font-size: 12px; color: #ccc;\">Hung: Penis is larger from the start and is more prone to growth.</p>"
        content.innerHTML += "<p style=\"font-size: 12px; color: #ccc;\">Bulgy: Testicles are larger from the start and are more prone to growth.</p>"
        content.innerHTML += "<p style=\"font-size: 12px; color: #ccc;\">Messy: Orgasms are considerably larger and more voluminous.</p>"
        content.innerHTML += "<p style=\"font-size: 12px; color: #ccc;\">Libidinous: The need for relief builds considerably faster.</p>"
        button1.innerHTML = "Hung";
        button1.disabled = false;
        button2.innerHTML = "Bulgy";
        button2.disabled = false;
        button3.innerHTML = "Messy";
        button3.disabled = false;
        button4.innerHTML = "Libidinous";
        button4.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
    else if (scene == "confirmCharacter") {
        clearAll();

        content.innerHTML += "<p>Confirm character choices. You will not be able to edit them beyond this point.</p>";
        content.innerHTML += "<p>Name: " + player.name + "</p>";
        content.innerHTML += "<p>Height: " + Math.floor(player.height / 12) + "'" + player.height % 12 + "\"</p>";
        content.innerHTML += "<p>Eye Color: " + player.eyes.color + "</p>"
        content.innerHTML += "<p>Hair Length: " + player.hair.length + "</p>"
        content.innerHTML += "<p>Hair Color: " + player.hair.color + "</p>"
        if (player.statsMult.strength > 1) content.innerHTML += "<p>Stat Boost: Strength</p>"
        if (player.statsMult.dexterity > 1) content.innerHTML += "<p>Stat Boost: Dexterity</p>"
        if (player.statsMult.willpower > 1) content.innerHTML += "<p>Stat Boost: Willpower</p>"
        if (player.statsMult.wisdom > 1) content.innerHTML += "<p>Stat Boost: Wisdom</p>"
        if (player.statsMult.charisma > 1) content.innerHTML += "<p>Stat Boost: Charisma</p>"
        content.innerHTML += "<p>Muscle: " + player.body.muscle + " / 100</p>"
        content.innerHTML += "<p>Fat: " + player.body.fat + " / 100</p>"
        content.innerHTML += "<p>Penis: " + player.penis.size + "\"</p>"
        content.innerHTML += "<p>Balls: " + player.balls.size + "\" wide, each</p>"
        if (player.traits.hung) content.innerHTML += "<p>Sexual Trait: Hung</p>"
        if (player.traits.bulgy) content.innerHTML += "<p>Sexual Trait: Bulgy</p>"
        if (player.traits.messy) content.innerHTML += "<p>Sexual Trait: Messy</p>"
        if (player.traits.libidinous) content.innerHTML += "<p>Sexual Trait: Libidinous</p>"

        buttonZ.innerHTML = "Confirm Character";
        buttonZ.disabled = false;
        buttonB.innerHTML = "Back";
        buttonB.disabled = false;
    }
}

document.addEventListener("keydown", e => {
    if (scene != "nameSelect" && scene != "heightSelect") {
        console.log(e.key)
        buttonClick(e.key);
    }
});