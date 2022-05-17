"use strict";
var user = {
    name: 'Quy',
    age: 20,
    isLoggedIn: true,
    role: 1,
    account: {
        username: 'quyv',
        password: '123456',
    }
};

var Role;
(function (Role){
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["CLIENT"] = 2] = "CLIENT";
})(Role || (Role = {}));

if(user.role === Role.ADMIN){
    console.log("admin");
}
else {
    console.log('Client');
}
var numbers = [];
numbers.push(1);
var rappers = ['Binz', 'Den'];
var person = ['Tay', 2000, true];
