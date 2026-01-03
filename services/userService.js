function getActiveUsers(users) {
    return users.filter(
        user => 
            user.active === true
    );
}

function getActiveNonAdminUsers(users) {
    return users.filter(
        user => 
            user.active === true && user.role === 'user'
    );
}

function getAdmins(users) {
    return users.filter(user => user.role === 'admin')
}

function getUsernamesUppercase(users) {
    return users.map(
        user => 
            user.name.toUpperCase()
    );
}

module.exports = {
    getActiveUsers,
    getAdmins,
    getUsernamesUppercase,
};