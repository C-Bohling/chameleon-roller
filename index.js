blueDie = document.getElementById("blue-die");
yellowDie = document.getElementById("yellow-die");

const roll = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

document.getElementById("main").onclick = () => {
  blueDie.innerHTML = roll(8);
  yellowDie.innerHTML = roll(6);
};
