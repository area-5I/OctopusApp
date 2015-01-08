var socket = io.connect('http://localhost:8088');

function saveConfig(){
  var config = new Object();
  var ip = document.getElementById("IP").value;
  var port = document.getElementById("PORT").value;
  config.ip = ip;
  config.port = port;
  socket.emit("saveConfig",config);
}
