var sock = io.connect('http://localhost:8088');
var actual = 'A';
var estadoA = [0,0,0,0,0,0];
var estadoB = [0,0,0,0,0,0];
var estadoC = [0,0,0,0,0,0];
var estadoD = [0,0,0,0,0,0];
var estadoE = [0,0,0,0,0,0];
var estadoF = [0,0,0,0,0,0];


function active(slave){
  var elemento;
  if(actual != slave){
    elemento = document.getElementById(actual);
    elemento.style.display = 'none';
    elemento = document.getElementById(slave);
    elemento.style.display = 'block';
    actual = slave;
  }
}

function onPot(slave,pot){
  if(slave == 'A'){
    if(estadoA[pot] == 0){
      sock.emit("encenderPot",slave,pot);
      estadoA[pot] = 1;
    }else{
      sock.emit("apagarPot",slave,pot);
      estadoA[pot] = 0;
    }
  }

  if(slave == 'B'){
    if(estadoB[pot] == 0){
      sock.emit("encenderPot",slave,pot);
      estadoB[pot] = 1;
    }else{
      sock.emit("apagarPot",slave,pot);
      estadoB[pot] = 0;
    }
  }

  if(slave == 'C'){
    if(estadoC[pot] == 0){
      sock.emit("encenderPot",slave,pot);
      estadoC[pot] = 1;
    }else{
      sock.emit("apagarPot",slave,pot);
      estadoC[pot] = 0;
    }
  }

  if(slave == 'D'){
    if(estadoD[pot] == 0){
      sock.emit("encenderPot",slave,pot);
      estadoD[pot] = 1;
    }else{
      sock.emit("apagarPot",slave,pot);
      estadoD[pot] = 0;
    }
  }

  if(slave == 'E'){
    if(estadoE[pot] == 0){
      sock.emit("encenderPot",slave,pot);
      estadoE[pot] = 1;
    }else{
      sock.emit("apagarPot",slave,pot);
      estadoE[pot] = 0;
    }
  }

  if(slave == 'F'){
    if(estadoF[pot] == 0){
      sock.emit("encenderPot",slave,pot);
      estadoF[pot] = 1;
    }else{
      sock.emit("apagarPot",slave,pot);
      estadoF[pot] = 0;
    }
  }
}
