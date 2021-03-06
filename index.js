var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

let activeUsers = {};

const showActiveUsers = () => {
  console.log(`----------  Active users   -----------`);
  console.log(JSON.stringify(activeUsers, 2, " "));
  console.log(`--------------------------------------`);
};

io.on("connection", function(socket) {
  activeUsers[socket.id] = "Unnknown";
  showActiveUsers();

  socket.on("SEND_MESSAGE", function(data) {
    console.log("message: " + data);
    io.emit("SEND_MESSAGE", data);
  });

  socket.on("USER_JOINED", function(name) {
    activeUsers[socket.id] = name;
    console.log(`${name} joined GAME!!`);
    showActiveUsers();
  });

  socket.on("disconnect", function() {
    delete activeUsers[socket.id];
    showActiveUsers();
    console.log(`${socket.id} disconnected`);
  });
});

http.listen(3003, function() {
  console.log("listening on *:3003");
});
