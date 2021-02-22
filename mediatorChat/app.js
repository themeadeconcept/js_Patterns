// MEDIATOR PATTERN
// interface for communicating with colleagues (mediated objects)
// i.e. a chatroom (CHECK OUT SOCKET.IO)

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] != from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const torrey = new User("Torrey");
const meaghan = new User("Meaghan");
const gavin = new User("Gavin");

const chatroom = new Chatroom();

chatroom.register(torrey);
chatroom.register(meaghan);
chatroom.register(gavin);

torrey.send("Hello Meaghan", meaghan);
meaghan.send("Hey BABE!", torrey);
gavin.send("Gavin like to party");
