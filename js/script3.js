/*3. Написать функцию, которая принимает строку (Rock, Paper или Scissors), рандомно сама генерирует один из этих вариантов и возвращает в ответ следующую строку: “Player selected Scissors. CPU selected Rock. CPU won”. Если выбор пал на одинаковые строки, то строка должна быть следующей: “Player and CPU both selected Paper. Friendship won”. Игра камень ножницы бумага*/

let playerChoice = prompt("Do you choose Rock, Paper or Scissors?");

const choices = ["Rock", "Paper", "Scissors"];

let cpuChoice = Math.floor(Math.random() * 3);

let compare = function (playerChoice, cpuChoice) {
    if (playerChoice === "Rock" && choices[cpuChoice] === "Scissors") {
        console.log(`Plarer selected ${playerChoice}. CPU selected Scissors. Player won!`);
    } else if (playerChoice === "Rock" && choices[cpuChoice] === "Paper") {
        console.log(`Plarer selected ${playerChoice}. CPU selected Paper. CPU won!`);
    } else if (playerChoice === "Rock" && choices[cpuChoice] === "Rock") {
        console.log("Player and CPU are both selected the same! Friendship won!")
    } else if (playerChoice === "Paper" && choices[cpuChoice] === "Scissors") {
        console.log(`Plarer selected ${playerChoice}. CPU selected Scissors. CPU won!`);
    } else if (playerChoice === "Paper" && choices[cpuChoice] === "Rock") {
        console.log(`Plarer selected ${playerChoice}. CPU selected Rock. Player won!`)
    } else if (playerChoice === "Paper" && choices[cpuChoice] === "Paper") {
        console.log("Player and CPU are both selected the same! Friendship won!")
    } else if (playerChoice === "Scissors" && choices[cpuChoice] === "Rock") {
        console.log(`Plarer selected ${playerChoice}. CPU selected Rock. CPU won!`)
    } else if (playerChoice === "Scissors" && choices[cpuChoice] === "Paper") {
        console.log(`Plarer selected ${playerChoice}. CPU selected Paper. Player won!`)
    } else if (playerChoice === "Scissors" && choices[cpuChoice] === "Scissors") {
        console.log("Player and CPU are both selected the same! Friendship won!")
    }
};

compare(playerChoice, cpuChoice);