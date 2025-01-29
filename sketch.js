let currentBg;
let img;
let flipped = false;
let sound; // Variable para el sonido

function preload() {
  img = loadImage('download-removebg-preview.png');

  soundFormats('mp3');
  sound = loadSound('Glitter Sound Effect for Music or Editing.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentBg = color(random(200, 255), random(100, 180), random(150, 200));
  background(currentBg);

  let changeBgBtn = createButton("Oops!…I Did It Again");
  changeBgBtn.addClass("myButton");

  let w = changeBgBtn.elt.offsetWidth;
  let h = changeBgBtn.elt.offsetHeight;
  changeBgBtn.position(width / 2 - w / 2, height / 3 - h / 2);

  changeBgBtn.mousePressed(toggleFlip);
}

function draw() {
  background(currentBg);

  let imgX = width / 2 - img.width / 2;
  let imgY = height - img.height;

  push();

  if (flipped) {
    scale(-1, 1); 
    image(img, -imgX - img.width, imgY); 
  } else {
    image(img, imgX, imgY);
  }

  pop(); 
}

function toggleFlip() {
  flipped = !flipped; 
  currentBg = color(random(200, 255), random(100, 180), random(150, 200)); 
  
  // Reproducir el sonido cuando se hace clic
  if (sound) {
    sound.play();
  }
}
