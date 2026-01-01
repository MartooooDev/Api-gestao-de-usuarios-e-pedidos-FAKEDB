const users = require('../data/users');

function getActiveUsers(users) {
    return users.filter(
        user => 
            user.active === true && user.role == 'user'
    );
}

function getAdmins(users) {
    return users.filter(user => user.role === 'admin')
}

function getUsernameUppercase(users) {
    return users.map(
        user => 
            user.name.toUpperCase()
    );
}
