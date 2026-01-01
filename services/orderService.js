const orders = require('../data/orders');
// console.log(orders);

function getPaidOrders(orders) {    // OK
    return orders.filter(
        order => order.paid === true
    );
}

function getTotalRevenue(orders) {  // OK
    return orders.reduce(
        (value, order) => {
            if (order.paid === true) {
                value += order.total
            }

            return value;
        }
    , 0);
}

function getOrdersByUser(orders, userId) {  //
    return orders.filter(
        order =>
            order.userId == userId
    );
}

console.log(getOrdersByUser(orders, 1));