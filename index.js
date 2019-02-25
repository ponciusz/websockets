var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var moment = require("moment");

let activeUsers = {};
let openGames = {};

const showActiveUsers = () => {
  console.log(`----------  Active users   -----------`);
  console.log(JSON.stringify(activeUsers, 2, " "));
  console.log(`--------------------------------------`);
};

function userJoined(socket) {
  socket.on("USER_JOINED", function(name) {
    if (name) {
      activeUsers[socket.id] = {
        name: name
      };
      io.emit("USER_JOINED", {
        id: socket.id,
        name: name || "Unnknown"
      });
      console.log(`${name} joined GAME!!`);
      showActiveUsers();
    }
  });
}

function sendMessage(socket) {
  socket.on("SEND_MESSAGE", function(data) {
    console.log("message: " + data);
    io.emit("SEND_MESSAGE", data);
  });
}

function onDisconnect(socket) {
  socket.on("disconnect", function() {
    delete activeUsers[socket.id];
    io.emit("USER_LEFT", socket.id);
    showActiveUsers();
    console.log(`${socket.id} Left`);
  });
}

function gameCreated(socket) {
  socket.on("GAME_CREATED", function(gameID) {
    console.log("GAME_CREATED by: ");

    if (activeUsers[socket.id]) {
      console.log("CREATED game id: " + gameID);
      openGames[gameID] = {
        createdAt: moment().format("h:mm:ss a"),
        createdBy: activeUsers[socket.id].name
      };
    }

    console.log("gameID: " + gameID);
    io.emit("GAME_CREATED", openGames);
  });
}

io.on("connection", function(socket) {
  // activeUsers[socket.id] = {};
  showActiveUsers();

  io.to(socket.id).emit("ONLINE_USERS", activeUsers); //Send current online status after connection estabilished

  sendMessage(socket);

  userJoined(socket);

  gameCreated(socket);

  onDisconnect(socket);
});

http.listen(3003, function() {
  console.log("listening on *:3003");
});
