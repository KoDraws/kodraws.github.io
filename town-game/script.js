let character = {
    name: null,
    height: 0,
    health: 100,
    maxHealth: 100,
    location: [null, 0, 0],
    stats: { str: 10, dex: 10, wil: 10, wis: 10, cha: 10, lib: 10 },
    penis: { size: 6 },
    balls: { size: 1 }
};

let town = {
    name: null
};

let plot = {};

let startMenuSection = null;
let mainMenuSection = null;
let optionsSection = null;
let saveSection = null;
let gameSection = null;

function start() {
    startMenuSection = document.getElementById("startMenuSection");
    mainMenuSection = document.getElementById("mainMenuSection");
    optionsSection = document.getElementById("optionsSection");
    saveSection = document.getElementById("saveSection");
    gameSection = document.getElementById("gameSection");

    pageLayout("startMenuSection");
}

function pageLayout(input) {
    clearHTML();
    if (input == "startMenuSection") startMenuSection.className = "showSection";
    else if (input == "mainMenuSection") mainMenuSection.className = "showSection";
    else if (input == "optionsSection") optionsSection.className = "showSection";
    else if (input == "saveSection") saveSection.className = "showSection";
    else if (input == "gameSection") gameSection.className = "showSection";
}

function clearHTML() {
    startMenuSection.className = "hideSection";
    mainMenuSection.className = "hideSection";
    optionsSection.className = "hideSection";
    saveSection.className = "hideSection";
    gameSection.className = "hideSection";
    console.log("clearHTML() Done")
}