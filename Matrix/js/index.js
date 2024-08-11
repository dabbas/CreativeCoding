var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');
var fontSize = 18;
var chars = generateChars();
var columns;
var drops;
var drawnToBottom;

function generateChars() {
  var chars = '404 Error';

  return chars.split('');
}

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.round(canvas.width / fontSize);
  drops = [];

  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  drawnToBottom = false;
}

window.onresize = function () {
  initCanvas();
};

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.font = 'bold ' + fontSize + 'px monospace';

  var dropCount = drops.length;
  var charCount = chars.length;

  for (var i = 1; i < dropCount; i++) {
    var text = chars[Math.floor(Math.random() * charCount)];
    var rowNum = drops[i] * fontSize;
    ctx.fillText(text, i * fontSize, rowNum);

    if (rowNum > canvas.height) drawnToBottom = true;

    if ((!drawnToBottom && Math.random() > 0.925) || (drawnToBottom && Math.random() > 0.97)) drops[i] = 0;

    drops[i]++;
  }
}

initCanvas();
setInterval(draw, 44);