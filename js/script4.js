/*4. Найти расстояние между двумя точками в двумерном декартовом пространстве*/

const findCoords = (x1, y1, x2, y2) => {
    return Number(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
};

let x1 = Number(prompt("Enter the first x-coordinate"));
if (isNaN(x1)) {
    console.log("Please try again");
};

let y1 = Number(prompt("Enter the first y-coordinate"));
if (isNaN(y1)) {
    console.log("Please try again");
};

let x2 = Number(prompt("Enter the second x-coordinate"));
if (isNaN(x2)) {
    console.log("Please try again");
};

let y2 = Number(prompt("Enter the second x-coordinate"));
if (isNaN(y2)) {
    console.log("Please try again");
};

// console.log(findCoords(x1, y1, x2, y2).toFixed(2));
console.log(Math.round(findCoords(x1, y1, x2, y2) * 100) / 100);