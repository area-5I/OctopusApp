var express = require('express');
var request = require('request');
var nunjucks = require('nunjucks');
var socketio = require('socket.io').listen(8088);
var app = express();
var base = require("./modelo/base.js");
var slaveA,slaveB,slaveC,slaveD,slaveE,slaveF,config;

socketio.sockets.on("connection", function(socket){
    socket.on("guardarEdicion", function(id, nombres){
      base.updateDoc(id, nombres);
    });

    socket.on("saveConfig", function(config){
      base.updateConfig(config);
    });

    socket.on("encenderPot", function(slave, pot){
      console.log("encender");
      encenderPot(slave, pot);
    });

    socket.on("apagarPot", function(slave, pot){
      console.log("apagar");
      apagarPot(slave, pot);
    });
});

app.listen(8089);

nunjucks.configure(__dirname + "/vista",{
  express: app
});

app.use(express.static(__dirname + "/vista"));

app.get("/editar",function(req,res){
    getDatosPot();
    setTimeout(function(){
      res.render("editar.html",{
        vA: slaveA,
        vB: slaveB,
        vC: slaveC,
        vD: slaveD,
        vE: slaveE,
        vF: slaveF
      });
    },1000);
});


app.get("/",function(req,res){
    getDatosPot();
    setTimeout(function(){
      res.render("app.html",{
        vA: slaveA,
        vB: slaveB,
        vC: slaveC,
        vD: slaveD,
        vE: slaveE,
        vF: slaveF
      });
    },1000);
});

app.get("/config",function(req,res){
  base.getConfig();
  setTimeout(function(){
    res.render("config.html",{
      config: config
    });
  },1000);
});

function getDatosPot(){
  base.getNombrePots("slaveA");
  base.getNombrePots("slaveB");
  base.getNombrePots("slaveC");
  base.getNombrePots("slaveD");
  base.getNombrePots("slaveE");
  base.getNombrePots("slaveF");

}

var saveConfig = function(configuracion){
  config = configuracion;
  console.log(configuracion);
};


var saveA = function(nombres){
    slaveA = nombres;
};

var saveB = function(nombres){
    slaveB = nombres;
};

var saveC = function(nombres){
    slaveC = nombres;
};

var saveD = function(nombres){
    slaveD = nombres;
};

var saveE = function(nombres){
    slaveE = nombres;
};

var saveF = function(nombres){
    slaveF = nombres;
};

function encenderPot(slave,pot){
  base.getConfig();
  var ruta;
  var host = "http://"+config[0]+":"+config[1];
  switch(pot){
    case 0: ruta = "/" + slave + "A";
            break;
    case 1: ruta = "/" + slave + "B";
            break;
    case 2: ruta = "/" + slave + "C";
            break;
    case 3: ruta = "/" + slave + "D";
            break;
    case 4: ruta = "/" + slave + "E";
            break;
    case 5: ruta = "/" + slave + "F";
            break;
  }
  host = host + ruta;
  console.log(host);
  request(host, function(error, response, body) {
    console.log(body);
  });
}

function apagarPot(slave,pot){
  base.getConfig();
  var ruta;
  var host = "http://"+config[0]+":"+config[1];
  switch(pot){
    case 0: ruta = "/" + slave + "a";
            break;
    case 1: ruta = "/" + slave + "b";
            break;
    case 2: ruta = "/" + slave + "c";
            break;
    case 3: ruta = "/" + slave + "d";
            break;
    case 4: ruta = "/" + slave + "e";
            break;
    case 5: ruta = "/" + slave + "f";
            break;
  }
  host = host + ruta +'\n';
  console.log(host);
  request(host, function(error, response, body) {
    console.log(body);
  });
}



module.exports.saveA = saveA;
module.exports.saveB = saveB;
module.exports.saveC = saveC;
module.exports.saveD = saveD;
module.exports.saveE = saveE;
module.exports.saveF = saveF;
module.exports.saveConfig = saveConfig;
