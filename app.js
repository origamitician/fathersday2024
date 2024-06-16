const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
let particleColors = [["#46eb34", "#85d166", "grey"], ["#13ede6", "red", "#3c9e9b"], ["orange", "#c4bc27", "#9e873c"], ["green", "lime"], ["cornflowerblue", "lightblue"], ["lime", "lightblue"], ["red"], ["cornflowerblue", "lime"], ["orange"], ["purple", "lime", "lightblue"], ["purple", "lime"], ["purple", "lightblue"], ["white", "pink"], ["red", "orange", "yellow", "green", "blue", "purple"]];

var deathParticles = []
let subDeathParticles = []
let nonExplodedParticles = [];
let lengthOfOriginalArray = 0;

const happyfathersday = [[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,null,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,null,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]

var iloveyou = [[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,1,1,null,null,1,1,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,1,1,null,null,1,1,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,1,1,null,null,1,1,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,1,1,null,null,1,1,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,1,null,null,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,1,1,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null],
[null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,null,null,1,1,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,null,null,null,null,1,1,null,null,1,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null],
[null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null],
[null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]

let arrayDepth = 1;
const coordArr = [];
for (let i = 0; i < happyfathersday.length; i++) {
    for (let j = 0; j < happyfathersday[i].length; j++) {
        if (happyfathersday[i][j] === 1) {
            for (let row = 0; row < arrayDepth; row++) {
                for (let col = 0; col < arrayDepth; col++) {
                    coordArr.push({x: (j*arrayDepth) + row, y: (i*arrayDepth) + col})
                }
            }
        }
    }
}
console.log(coordArr)
lengthOfOriginalArray = coordArr.length;

const defaultHeight = 633;
const defaultWidth = 1366;

// frame for HAPPY FATHER'S DAY! is 171 (width) x 24 (height).

let happyFathersDayFinishedRendering = false;
let textFrameWidth = window.innerWidth * 0.8
let textFrameHeight = textFrameWidth * (24/171)
let textFrameLocX = (window.innerWidth / 2) - (textFrameWidth / 2)
let textFrameLocY = window.innerHeight * 0.7
let textFramePixelSize = textFrameWidth / 171 / arrayDepth
const vertScale = window.innerHeight / defaultHeight
const horizScale = window.innerWidth / defaultWidth
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function explode(x, y){
    subDeathParticles = [];
    let radius = 5
    let numParticles = Math.floor(Math.random()*30)+85 //85-115 particles

    let mainParticleColor = Math.round(Math.random()*particleColors.length);
    for (let k = 0; k < numParticles; k++){
        let particleLife;
        let targetCoordX = null
        let targetCoordY = null
        if (Math.random() < 0.5 || coordArr.length == 0) {
            // let one half of the particles not get sucked into the text.
            if (coordArr.length == 0 && !happyFathersDayFinishedRendering) {
                happyFathersDayFinishedRendering = true;
            }
            particleLife = 500
        } else {
            particleLife = 100
            let index = Math.floor(Math.random() * coordArr.length)
            targetCoordX = (coordArr[index].x * textFramePixelSize) + textFrameLocX
            targetCoordY = (coordArr[index].y * textFramePixelSize) + textFrameLocY
            coordArr.splice(index, 1)
        }
        subDeathParticles.push({
            x: x+(radius*Math.cos(k*((Math.PI*2)/numParticles))),
            y: y+(radius*Math.sin(k*((Math.PI*2)/numParticles))),
            variationX: (Math.random()*4)-2,
            variationY: (Math.random()*4)-2,
            angle: k*((Math.PI*2)/numParticles),
            size: Math.floor(Math.random()*(6*horizScale))+2.5, 
            initGravity: 4*(window.innerHeight / defaultHeight),
            particleColor: particleColors[mainParticleColor][Math.floor(Math.random()*(particleColors[mainParticleColor].length))],
            loop: 0,
            targetX: targetCoordX,
            targetY: targetCoordY,
            life: particleLife,
        })
    }
    deathParticles.push(subDeathParticles)
}
            

function updateDeathParticles(){
    let i = 0;
    let j = 0;
    while (i < deathParticles.length){
        j = 0;
        while (j < deathParticles[i].length){
            if(deathParticles[i][j].loop < deathParticles[i][j].life){
                deathParticles[i][j].x += Math.cos(deathParticles[i][j].angle)*0.5 + deathParticles[i][j].variationX
                deathParticles[i][j].y -= Math.sin(deathParticles[i][j].angle)*0.5 + deathParticles[i][j].initGravity + deathParticles[i][j].variationY
                deathParticles[i][j].initGravity -= 0.1
                deathParticles[i][j].loop++;
                j++
            }else{
                if (deathParticles[i][j].targetX) {
                    if (!deathParticles[i][j].exitLoop && !deathParticles[i][j].exitLife) {
                        // compute the angle needed and the number of loops.
                        deathParticles[i][j].exitLoop = 0
                        let computedGravity = Math.sin(deathParticles[i][j].angle)*0.5 + deathParticles[i][j].initGravity + deathParticles[i][j].variationY; // if negative, particle goes down.

                        if (deathParticles[i][j].y  - deathParticles[i][j].targetY > 0 && computedGravity < 0) {
                            // if the particle is below the target tile.
                            computedGravity = 0-computedGravity // make the gravity positive so the particle goes up.
                        } else if (deathParticles[i][j].y  - deathParticles[i][j].targetY < 0 && computedGravity > 0) {
                            computedGravity = 0-computedGravity
                        }
                        const computedExitLife = Math.abs(Math.round((deathParticles[i][j].y - deathParticles[i][j].targetY) / computedGravity))
                        deathParticles[i][j].exitLife = computedExitLife
                        deathParticles[i][j].exitGravity = computedGravity
                        deathParticles[i][j].exitXIncr = (deathParticles[i][j].targetX - deathParticles[i][j].x) / computedExitLife
                        deathParticles[i][j].exitSizeChange = (deathParticles[i][j].size - (textFramePixelSize / 2)) / computedExitLife
                    } else if (deathParticles[i][j].exitLoop < deathParticles[i][j].exitLife){
                        deathParticles[i][j].x += deathParticles[i][j].exitXIncr
                        deathParticles[i][j].y -= deathParticles[i][j].exitGravity
                        deathParticles[i][j].size -= deathParticles[i][j].exitSizeChange
                        deathParticles[i][j].exitLoop++;
                    } else {
                        deathParticles[i][j].x = deathParticles[i][j].targetX
                        deathParticles[i][j].y = deathParticles[i][j].targetY
                    }
                   j++;
                } else {
                    deathParticles[i].splice(j, 1)
                }
            }
        }
        if(deathParticles[i].length == 0){
            deathParticles.splice(i, 1)
            i--;
        }
        i++;
    }
}

let size;
function drawDeathParticles(){
    for(let i = 0; i < deathParticles.length; i++){
        for(let j = 0; j < deathParticles[i].length; j++){
            size = deathParticles[i][j].size
            c.beginPath()
            c.save()
            if (!deathParticles[i][j].targetX) {
                // if the particles have no target, render the fading opacity.
                c.globalAlpha = 1-(deathParticles[i][j].loop/deathParticles[i][j].life);
            } else {
                c.globalAlpha = 1
            }
            /* c.font = 30*horizScale + "px inconsolata";
            c.textAlign = "center";
            c.fillStyle = "white";
            c.beginPath()
            c.fillText("(" + Math.round(deathParticles[i][j].targetX) + ", " + Math.round(deathParticles[i][j].targetY) + "); loop is: " + deathParticles[i][j].exitLoop, deathParticles[i][j].x, deathParticles[i][j].y-15); */
            c.rect(deathParticles[i][j].x-size, deathParticles[i][j].y-size, size*2, size*2)
            c.fillStyle = deathParticles[i][j].particleColor;
            c.fill()
            c.closePath()
            c.restore()
        }
    }
}

function initParticle(){
    
    if(Math.round(Math.random()) == 1){
        //default fireworks
        nonExplodedParticles.push({x: Math.round(Math.random()*window.innerWidth), y: window.innerHeight, initGravity: 0-((Math.random()*3)+5)*(window.innerHeight/defaultHeight), type: "default"})
    }else{
        //curvy fireworks
        let randomX = Math.round(Math.random()*window.innerWidth)
        nonExplodedParticles.push({x: randomX, y: window.innerHeight, initGravity: 0-((Math.random()*4)+4)*(window.innerHeight/defaultHeight), amplitude: ((Math.random()*2)+50)*(window.innerHeight/defaultHeight), type: "curvy", loop: 0, referenceX: randomX})
    }
}

function updateInitParticle(){
    let i=0;
    while(i < nonExplodedParticles.length){
        if(nonExplodedParticles[i].initGravity < -0.8){
            if(nonExplodedParticles[i].type == "default"){
                //runs if default
                
                nonExplodedParticles[i].y += nonExplodedParticles[i].initGravity
                nonExplodedParticles[i].initGravity += 0.05;
            }else{
                //runs if curvy
                nonExplodedParticles[i].y += nonExplodedParticles[i].initGravity
                nonExplodedParticles[i].initGravity += 0.05;
                nonExplodedParticles[i].x = nonExplodedParticles[i].referenceX + (nonExplodedParticles[i].amplitude)*Math.sin((nonExplodedParticles[i].loop*5)*(Math.PI/180));
                nonExplodedParticles[i].loop++;
            }
        }else{
            explode(nonExplodedParticles[i].x, nonExplodedParticles[i].y);
            nonExplodedParticles.splice(i, 1);
            i--;
        }
        i++;
    }
}

function drawInitParticle(){
    let size = 5*horizScale
    for(let i = 0; i < nonExplodedParticles.length; i++){
        c.beginPath()
        c.rect(nonExplodedParticles[i].x-size, nonExplodedParticles[i].y-size, size*2, size*2)
        c.fillStyle = "white"
        c.fill()
        c.closePath()
    }
}
let breakFramesBetweenText = 0;
function frame(){

    c.clearRect(0, 0, canvas.width, canvas.height);
    if(Math.floor(Math.random()*80) == 1){
        initParticle();
    }

    c.font = 100*horizScale + "px inconsolata";
    c.textAlign = "center";
    c.fillStyle = "white";
    c.beginPath()
    c.fillText("Wait for it...", window.innerWidth / 2, window.innerHeight / 2);
    c.rect(textFrameLocX, textFrameLocY, textFrameWidth, textFrameHeight)
    c.strokeWidth = 5;
    c.strokeStyle = 'white'
    c.stroke()
    c.font = 20*horizScale  + "px inconsolata";
    c.textAlign = "left";
    c.beginPath()
    c.fillText("Rendered " + (lengthOfOriginalArray - coordArr.length) + "/" + lengthOfOriginalArray + " (" + (((lengthOfOriginalArray - coordArr.length)/lengthOfOriginalArray)*100).toFixed(2) + "%)", 10, 15);
    c.closePath()

    drawInitParticle()
    updateInitParticle()
    
    drawDeathParticles()
    updateDeathParticles()

    if (happyFathersDayFinishedRendering) {
        breakFramesBetweenText++;
    }

    if (breakFramesBetweenText > 1300 && happyFathersDayFinishedRendering) {
        happyFathersDayFinishedRendering = false;
        console.log("rendering I LOVE YOU")
        deathParticles = [];
        arrayDepth = 2
        // frame for I LOVE YOU! is 98 (width) x 24 (height).
        textFrameWidth = window.innerWidth * 0.5
        textFrameHeight = textFrameWidth * (24/98)
        textFrameLocX = (window.innerWidth / 2) - (textFrameWidth / 2)
        textFrameLocY = window.innerHeight * 0.7
        textFramePixelSize = textFrameWidth / 97 / arrayDepth
        
        for (let i = 0; i < iloveyou.length; i++) {
            for (let j = 0; j < iloveyou[i].length; j++) {
                if (iloveyou[i][j] === 1) {
                    for (let row = 0; row < arrayDepth; row++) {
                        for (let col = 0; col < arrayDepth; col++) {
                            coordArr.push({x: (j*arrayDepth) + row, y: (i*arrayDepth) + col})
                        }
                    }
                }
            }
        }

        lengthOfOriginalArray = coordArr.length;
    }
}

var wrapper = frame();

var interval = setInterval(frame, 10);