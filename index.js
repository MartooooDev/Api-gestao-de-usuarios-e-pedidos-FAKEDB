// IMPORTAÇÕES ===============================================================
const users = require('./data/users');
const orders = require('./data/orders');
const {
    getTotalSold,
    getTotalPaidOrders,
    getTicketMedio,
} = require('./report/salesReport');
const {
    countUsersPerRole,
    countActiveUsers,
} = require('./report/usersReport');
const {
    getPaidOrders,
    getTotalRevenue,
    getOrdersByUser,
} = require('./services/orderService');
const {
    getActiveUsers,
    getAdmins,
    getUsernamesUppercase,
} = require('./services/userService');
// IMPORTAÇÕES ===============================================================

console.log(getTotalPaidOrders(orders));