var nano = require('nano')('http://localhost:5984');
var controlador = require('../controlador.js');
//createDocuments();

function createDocuments(){
  var db = nano.db.use('octopusctrl');
  db.insert({ nombrePot1: "Cocina",
              nombrePot2: "Patio",
              nombrePot3: "Jacuzzi",
              nombrePot4: "Terraza",
              nombrePot5: "Garaje",
              nombrePot6: "Motor Puerta"
            },"slaveA",function(err,body){
                if(!err){
                  console.log("doc. slaveA creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. slaveA");
                }
            });

  db.insert({ nombrePot1: "Cocina",
              nombrePot2: "Patio",
              nombrePot3: "Jacuzzi",
              nombrePot4: "Terraza",
              nombrePot5: "Garaje",
              nombrePot6: "Motor Puerta"
            },"slaveB",function(err,body){
                if(!err){
                  console.log("doc. slaveB creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. slaveB");
                }
            });

  db.insert({ nombrePot1: "Cocina",
              nombrePot2: "Patio",
              nombrePot3: "Jacuzzi",
              nombrePot4: "Terraza",
              nombrePot5: "Garaje",
              nombrePot6: "Motor Puerta"
            },"slaveC",function(err,body){
                if(!err){
                  console.log("doc. slaveC creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. slaveC");
                }
            });

  db.insert({ nombrePot1: "Cocina",
              nombrePot2: "Patio",
              nombrePot3: "Jacuzzi",
              nombrePot4: "Terraza",
              nombrePot5: "Garaje",
              nombrePot6: "Motor Puerta"
            },"slaveD",function(err,body){
                if(!err){
                  console.log("doc. slaveD creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. slaveD");
                }
            });

  db.insert({ nombrePot1: "Cocina",
              nombrePot2: "Patio",
              nombrePot3: "Jacuzzi",
              nombrePot4: "Terraza",
              nombrePot5: "Garaje",
              nombrePot6: "Motor Puerta"
            },"slaveE",function(err,body){
                if(!err){
                  console.log("doc. slaveE creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. slaveE");
                }
            });

  db.insert({ nombrePot1: "Cocina",
              nombrePot2: "Patio",
              nombrePot3: "Jacuzzi",
              nombrePot4: "Terraza",
              nombrePot5: "Garaje",
              nombrePot6: "Motor Puerta"
            },"slaveF",function(err,body){
                if(!err){
                  console.log("doc. slaveF creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. slaveF");
                }
            });

  db.insert({ip: "192.168.0.15",
             port: "8085"
            },"config",function(err,body){
                if(!err){
                  console.log("doc. config creado correctamente");
                  console.log(body);
                }else{
                  console.log("error al crear el doc. config");
                }
            });

}

function showDocument(id){
  var db = nano.db.use('octopusctrl');
  db.get(id,{revs_info: true},function(err,body){
    if(!err){
      console.log(body);
    }else{
      console.log("error al obtener el doc. " + id);
    }
  });
}

function createDataBase(){
  nano.db.create("octopusctrl",function(err,body){
    if(!err){
      console.log("base de datos creada satisfactoriamente");
      console.log(body);
    }else{
      console.log("error al crear la base de datos");
    }
  });

}

var getNombrePots = function(id){
  var nombres = new Array();
  var db = nano.db.use('octopusctrl');
  db.get(id,{revs_info: true},function(err,body){
    if(!err){
      var c = id.charAt(id.length-1);
      nombres.push(body.nombrePot1);
      nombres.push(body.nombrePot2);
      nombres.push(body.nombrePot3);
      nombres.push(body.nombrePot4);
      nombres.push(body.nombrePot5);
      nombres.push(body.nombrePot6);
      switch(c){
        case 'A': controlador.saveA(nombres);
                  break;
        case 'B': controlador.saveB(nombres);
                  break;
        case 'C': controlador.saveC(nombres);
                  break;
        case 'D': controlador.saveD(nombres);
                  break;
        case 'E': controlador.saveE(nombres);
                  break;
        case 'F': controlador.saveF(nombres);
                  break;
      }
    }else{
      console.log("error al obtener el doc. " + id);
    }
  });
}

var updateDoc = function(id, nombres){
  var db = nano.db.use("octopusctrl");
  var datos = {
    nombrePot1: nombres[0],
    nombrePot2: nombres[1],
    nombrePot3: nombres[2],
    nombrePot4: nombres[3],
    nombrePot5: nombres[4],
    nombrePot6: nombres[5],
  };
  db.get(id,{revs_info: true},function(err,doc){
    if(!err){
      datos._rev = doc._rev;
      db.insert(datos,id,function(err,body){
        if(!err){
          console.log("datos actualizados correctamente");
          console.log(body);
        }else{
          console.log("error al actualizar datos en la base de datos");
        }
      });
    }else{
      console.log("error al obtener el doc. " + id);
    }
  });

};

var updateConfig = function(config){
  var db = nano.db.use("octopusctrl");
  db.get("config",{revs_info: true},function(err,doc){
    if(!err){
      config._rev = doc._rev;
      console.log(config);
      db.insert(config,"config",function(err,body){
        if(!err){
          console.log("datos actualizados correctamente");
          console.log(body);
        }else{
          console.log("error al actualizar datos en la base de datos");
        }
      });
    }else{
      console.log("error al obtener el doc. config");
    }
  });

};


var getConfig = function(){
    var db = nano.db.use("octopusctrl");
    var config = new Array();
    db.get("config",{revs_info: true},function(err,doc){
      if(!err){
          config.push(doc.ip);
          config.push(doc.port);
          controlador.saveConfig(config);
      }else{
        console.log("error al obtener el doc. config");
      }
    });
}

module.exports.getNombrePots = getNombrePots;
module.exports.updateDoc = updateDoc;
module.exports.getConfig = getConfig;
module.exports.updateConfig = updateConfig;
