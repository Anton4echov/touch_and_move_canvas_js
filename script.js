// Get canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize canvas position
let canvasX = 0;
let canvasY = 0;

// Initialize touch/mouse position
let touchX = 0;
let touchY = 0;

// Initialize movement variables
let isMoving = false;
let offsetX = 0;
let offsetY = 0;

// Draw something on the canvas (example)
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 200, 200);

// Add event listeners
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);
canvas.addEventListener('touchend', handleTouchEnd);

canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseup', handleMouseUp);

// Touch event handlers
function handleTouchStart(e) {
  isMoving = true;
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
  offsetX = canvasX - touchX;
  offsetY = canvasY - touchY;
}

function handleTouchMove(e) {
  if (isMoving) {
    e.preventDefault();
    canvasX = e.touches[0].clientX + offsetX;
    canvasY = e.touches[0].clientY + offsetY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, canvasX, canvasY);
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 100, 200, 200);
  }
}

function handleTouchEnd() {
  isMoving = false;
}

// Mouse event handlers
function handleMouseDown(e) {
  isMoving = true;
  touchX = e.clientX;
  touchY = e.clientY;
  offsetX = canvasX - touchX;
  offsetY = canvasY - touchY;
}

function handleMouseMove(e) {
  if (isMoving) {
    canvasX = e.clientX + offsetX;
    canvasY = e.clientY + offsetY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, canvasX, canvasY);
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 100, 200, 200);
  }
}

function handleMouseUp() {
  isMoving = false;
}
