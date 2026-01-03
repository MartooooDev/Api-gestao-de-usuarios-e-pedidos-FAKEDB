function getPaidOrders(orders) {
    return orders.filter(
        order => order.paid === true
    );
}

function getTotalRevenue(orders) {
    return (
        orders
        .filter(order => order.paid)
        .reduce(
            (value, order) => value + order.total, 0)
    );
}

function getOrdersByUser(orders, userId) { 
    return orders.filter(
        order =>
            order.userId === userId
    );
}

module.exports = { 
    getPaidOrders,
    getTotalRevenue,
    getOrdersByUser,
};