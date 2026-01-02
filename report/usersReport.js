const users = require('../data/users');
const orders = require('../data/orders');

// Quantidade por role
// Usuários ativos vs inativos

function countUsersPerRole(users) {
    return users.reduce(
        (roles, user) => {
            const role = user.role;

            if (roles[role]) {
                roles[role]++;
            } else {
                roles[role] = 1;
            }

            return roles;
        }, {}
    );
}

function countActiveUsers(users) {
    return users.reduce(
        (statuses, user) => {
            const status = user.active ? 'active' : 'inactive';

            if (statuses[status]) {
                statuses[status]++;
            } else {
                statuses[status] = 1;
            }

            return statuses
        }, {}
    );
}

module.exports = {
    countUsersPerRole,
    countActiveUsers,
}