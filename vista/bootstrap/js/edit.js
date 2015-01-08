var socket = io.connect('http://localhost:8088');
var actual = 'A';

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

function saveA(){
  var slaveA = new Array();
  var pot1 = document.getElementById("pot1A").value;
  var pot2 = document.getElementById("pot2A").value;
  var pot3 = document.getElementById("pot3A").value;
  var pot4 = document.getElementById("pot4A").value;
  var pot5 = document.getElementById("pot5A").value;
  var pot6 = document.getElementById("pot6A").value;
  slaveA.push(pot1);
  slaveA.push(pot2);
  slaveA.push(pot3);
  slaveA.push(pot4);
  slaveA.push(pot5);
  slaveA.push(pot6);
  socket.emit("guardarEdicion","slaveA",slaveA);
}

function saveB(){
  var slaveB = new Array();
  var pot1 = document.getElementById("pot1B").value;
  var pot2 = document.getElementById("pot2B").value;
  var pot3 = document.getElementById("pot3B").value;
  var pot4 = document.getElementById("pot4B").value;
  var pot5 = document.getElementById("pot5B").value;
  var pot6 = document.getElementById("pot6B").value;
  slaveB.push(pot1);
  slaveB.push(pot2);
  slaveB.push(pot3);
  slaveB.push(pot4);
  slaveB.push(pot5);
  slaveB.push(pot6);
  socket.emit("guardarEdicion","slaveB",slaveB);
}

function saveC(){
  var slaveC = new Array();
  var pot1 = document.getElementById("pot1C").value;
  var pot2 = document.getElementById("pot2C").value;
  var pot3 = document.getElementById("pot3C").value;
  var pot4 = document.getElementById("pot4C").value;
  var pot5 = document.getElementById("pot5C").value;
  var pot6 = document.getElementById("pot6C").value;
  slaveC.push(pot1);
  slaveC.push(pot2);
  slaveC.push(pot3);
  slaveC.push(pot4);
  slaveC.push(pot5);
  slaveC.push(pot6);
  socket.emit("guardarEdicion","slaveC",slaveC);
}

function saveD(){
  var slaveD = new Array();
  var pot1 = document.getElementById("pot1D").value;
  var pot2 = document.getElementById("pot2D").value;
  var pot3 = document.getElementById("pot3D").value;
  var pot4 = document.getElementById("pot4D").value;
  var pot5 = document.getElementById("pot5D").value;
  var pot6 = document.getElementById("pot6D").value;
  slaveD.push(pot1);
  slaveD.push(pot2);
  slaveD.push(pot3);
  slaveD.push(pot4);
  slaveD.push(pot5);
  slaveD.push(pot6);
  socket.emit("guardarEdicion","slaveD",slaveD);
}

function saveE(){
  var slaveE = new Array();
  var pot1 = document.getElementById("pot1E").value;
  var pot2 = document.getElementById("pot2E").value;
  var pot3 = document.getElementById("pot3E").value;
  var pot4 = document.getElementById("pot4E").value;
  var pot5 = document.getElementById("pot5E").value;
  var pot6 = document.getElementById("pot6E").value;
  slaveE.push(pot1);
  slaveE.push(pot2);
  slaveE.push(pot3);
  slaveE.push(pot4);
  slaveE.push(pot5);
  slaveE.push(pot6);
  socket.emit("guardarEdicion","slaveE",slaveE);
}

function saveF(){
  var slaveF = new Array();
  var pot1 = document.getElementById("pot1F").value;
  var pot2 = document.getElementById("pot2F").value;
  var pot3 = document.getElementById("pot3F").value;
  var pot4 = document.getElementById("pot4F").value;
  var pot5 = document.getElementById("pot5F").value;
  var pot6 = document.getElementById("pot6F").value;
  slaveF.push(pot1);
  slaveF.push(pot2);
  slaveF.push(pot3);
  slaveF.push(pot4);
  slaveF.push(pot5);
  slaveF.push(pot6);
  socket.emit("guardarEdicion","slaveF",slaveF);
}
