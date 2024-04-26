"use strict";

const button = document.querySelector("#increment-btn");
let countElement = document.getElementById("count");
let countParagraph = document.getElementById("save-el");
let count = 0;
let saveCount = 0;


function increment(){
    count++;
    countElement.textContent = count;
}

function save(){
    saveCount = count;
    saveCount += " - ";
    countParagraph.textContent += saveCount;
    count = 0;
    saveCount = 0;
    countElement.textContent = count;
}

function reset(){
    saveCount = 0;
    count = 0;
    countElement.textContent = count;
    countParagraph.textContent = "Previous Entries: ";
}