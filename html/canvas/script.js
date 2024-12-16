function fn17(ctx) {
  ctx.shadowColor = "lightblue";
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  //   shadowColor:string; shadowOffsetX:number; shadowOffsetY:number; shadowBlur:number

  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 30, 30);

  ctx.lineWidth = 4;
  ctx.strokeStyle = "blue";
  ctx.strokeRect(50, 10, 30, 30);

  ctx.font = "14px Arial";
  ctx.fillText("hello", 10, 80);

  ctx.shadowColor = "lightgreen";
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = -5;
  ctx.shadowBlur = 5;

  ctx.lineWidth = 4;
  ctx.strokeStyle = "green";
  ctx.strokeRect(50, 60, 30, 30);
}

function fn16(ctx) {
  ctx.font = "14px Verdana";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("hello world", ctx.canvas.width / 2, ctx.canvas.height / 2);
}

function fn15(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 80);
  ctx.lineTo(100, 80);
  ctx.stroke();
  ctx.closePath();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(50, 0);
  ctx.lineTo(50, 60);
  ctx.stroke();
  ctx.closePath();
  ctx.closePath();
  // textBaseline: 'alphabetic:default' | 'top' | 'hanging' | 'middle' | 'idiographic' | 'bottom'
  // textAlign: 'start:default' | 'right' | 'center' | 'end'
  ctx.textBaseline = "top";
  ctx.fillText("top", 10, 80);
  ctx.textBaseline = "middle";
  ctx.fillText("middle", 30, 80);
  ctx.textBaseline = "bottom";
  ctx.fillText("bottom", 70, 80);

  ctx.textAlign = "left";
  ctx.fillText("left", 50, 20);
  ctx.textAlign = "center";
  ctx.fillText("center", 50, 40);
  ctx.textAlign = "right";
  ctx.fillText("right", 50, 60);
}

function fn14(ctx) {
  // font: '10px sans serif', fillText(text, x, y, maxwidth), strokeText(text, x,y,maxwidth)
  ctx.font = "24px Arial";
  ctx.fillText("Hello", 10, 50);
  ctx.font = "bold italic 28px Arial";
  ctx.strokeText("World", 15, 80);
}

function fn13(ctx) {
  // createRadialGradient(x0, y0, r0, x1, y1, r1)
  const gradRad13 = ctx.createRadialGradient(50, 50, 10, 50, 50, 50);
  gradRad13.addColorStop(0, "red");
  gradRad13.addColorStop(0.4, "yellow");
  gradRad13.addColorStop(1, "darkblue");
  ctx.fillStyle = gradRad13;
  ctx.fillRect(10, 10, 80, 80);
  ctx.strokeRect(10, 10, 80, 80);
}

function fn12(ctx) {
  // createRadialGradient(x0, y0, r0, x1, y1, r1)
  const gradRad3 = ctx.createRadialGradient(40, 50, 5, 70, 50, 50);
  gradRad3.addColorStop(0, "red");
  gradRad3.addColorStop(1, "yellow");
  ctx.fillStyle = gradRad3;
  ctx.fillRect(10, 10, 80, 80);
  ctx.strokeRect(10, 10, 80, 80);
}

function fn11(ctx) {
  // createRadialGradient(x0, y0, r0, x1, y1, r1)
  const gradRad2 = ctx.createRadialGradient(50, 50, 10, 50, 50, 50);
  gradRad2.addColorStop(0, "red");
  gradRad2.addColorStop(1, "yellow");
  ctx.fillStyle = gradRad2;
  ctx.fillRect(10, 10, 80, 80);
  ctx.strokeRect(10, 10, 80, 80);
}

function fn10(ctx) {
  // createRadialGradient(x0, y0, r0, x1, y1, r1)
  const gradRad1 = ctx.createRadialGradient(50, 50, 50, 50, 50, 10);
  gradRad1.addColorStop(0, "red");
  gradRad1.addColorStop(1, "yellow");
  ctx.fillStyle = gradRad1;
  ctx.fillRect(10, 10, 80, 80);
  ctx.strokeRect(10, 10, 80, 80);
}

function fn9(ctx) {
  // createLinearGradient(x0, y0, x1, y1) start and end point
  // addColorStop()
  const grad = ctx.createLinearGradient(0, 0, 100, 0);
  grad.addColorStop(0, "red");
  grad.addColorStop(0.5, "green");
  grad.addColorStop(1, "blue");
  ctx.fillStyle = grad;
  ctx.fillRect(20, 20, 60, 60);

  const grad2 = ctx.createLinearGradient(0, 0, 100, 100);
  grad2.addColorStop(0, "red");
  grad2.addColorStop(1, "yellow");
  ctx.strokeStyle = grad2;
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, 80, 80);

  const grad3 = ctx.createLinearGradient(0, 0, 0, 100);
  grad3.addColorStop(0, "green");
  grad3.addColorStop(1, "red");
  ctx.fillStyle = grad3;
  ctx.fillRect(40, 30, 20, 40);
}

function fn8(ctx) {
  // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  // cp1: first control point; cp2: seconde control point; x/y: end point
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.bezierCurveTo(10, 90, 90, 10, 100, 100);
  ctx.stroke();
}

function fn7(ctx) {
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(0, 0, 50, 50);
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(50, 0, 50, 50);
  ctx.strokeStyle = "green";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(0, 50, 50, 50);
  ctx.strokeStyle = "blue";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(100, 50, 50, 50);
  ctx.strokeStyle = "cyan";
  ctx.stroke();
}

function fn6(ctx) {
  ctx.beginPath();
  ctx.moveTo(50, 50); // pusat lingkaran
  ctx.arc(50, 50, 50, 0, Math.PI / 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(50, 50); // pusat lingkaran
  ctx.arc(50, 50, 40, 0, Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(50, 50); // pusat lingkaran
  ctx.arc(50, 50, 30, 0, Math.PI * 1.5);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function fn5(ctx) {
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, 0.5 * Math.PI);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, 1 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, 1.5 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

function fn4(ctx) {
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 45, 0, 0.5 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 35, 0, 1.5 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 30, 1 * Math.PI, 1.5 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 25, 1 * Math.PI, 0);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 20, 1 * Math.PI, 0.5 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(50, 50, 15, 1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function fn3(ctx) {
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(50, 50);
  ctx.lineTo(90, 10);
  ctx.lineTo(90, 90);
  ctx.lineTo(10, 90);
  ctx.lineTo(10, 50);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.fillStyle = "indigo";
  ctx.stroke();
  ctx.fill();
}

function fn2(ctx) {
  // rect(x,y,w,h)
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.rect(5, 5, 40, 40);
  ctx.stroke();
  //   rect(x, y, w, h);
  //   strokeRect(x, y, w, h);
  // strokeRect(x,y,w,h)
  ctx.strokeStyle = "rgb(0 0 255 / 50%)";
  ctx.strokeRect(55, 5, 40, 40);
  ctx.fillStyle = "blue";
  ctx.fill();
  // perbedaan rect() dan strokeRect(), rect() menggunakan beginPath() dan stroke() juga menerima fill(), sedangkan strokeRect tidak.
  // fillRect()
  ctx.fillStyle = "green";
  ctx.fillRect(5, 55, 40, 40);
  ctx.fillRect(55, 55, 40, 40);
  ctx.strokeRect(55, 55, 40, 40);
  ctx.clearRect(70, 70, 20, 20);
}

function fn1(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
  // lineWidth: number; lineCap: string
  ctx.beginPath();
  ctx.moveTo(20, 70);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.lineTo(80, 70);
  ctx.stroke();
  ctx.closePath();
}

function defaultCanvas(ctx) {
  // Set default drawing styles
  ctx.lineWidth = 1; // Ketebalan garis
  ctx.strokeStyle = "#000000"; // Warna garis
  ctx.fillStyle = "#000000"; // Warna isi
  ctx.lineCap = "butt"; // Bentuk ujung garis ('butt', 'round', 'square')
  ctx.lineJoin = "miter"; // Bentuk sudut gabungan garis ('round', 'bevel', 'miter')
  ctx.miterLimit = 10; // Batas panjang sudut miter
  ctx.globalAlpha = 1.0; // Transparansi global
  ctx.globalCompositeOperation = "source-over"; // Cara menggabungkan gambar
  ctx.font = "10px sans-serif"; // Jenis dan ukuran font teks
  ctx.textAlign = "start"; // Penyusunan horizontal teks ('start', 'end', 'left', 'right', 'center')
  ctx.textBaseline = "alphabetic"; // Penyusunan vertikal teks ('top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom')

  // Clear canvas before drawing (optional)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Additional properties or methods you might consider adding based on needs:

  // Shadow properties
  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  // ctx.shadowOffsetX = 2;
  // ctx.shadowOffsetY = 2;
  // ctx.shadowBlur = 5;

  // Transformation (example)
  // ctx.scale(1.5, 1.5); // Scales the drawing by 1.5x

  // Gradient or pattern fill (example)
  // var gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
  // gradient.addColorStop(0, "red");
  // gradient.addColorStop(1, "white");
  // ctx.fillStyle = gradient;

  // Clipping area (example)
  // ctx.beginPath();
  // ctx.rect(50, 50, 100, 100);
  // ctx.clip();

  // Drawing state (example)
  // ctx.save(); // Save current drawing state
  // ctx.translate(50, 50); // Translate the origin to (50, 50)

  // Set up any other default configurations specific to your application
}
