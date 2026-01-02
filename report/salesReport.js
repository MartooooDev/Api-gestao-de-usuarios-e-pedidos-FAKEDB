const users = require('../data/users');
const orders = require('../data/orders');
const { getTotalRevenue } = require('../services/orderService');

// Total vendido
// Total de pedidos pagos
// Ticket médio

function getTotalSold(orders) {
    return (orders.reduce( 
        (total, order) => {
            return (total + order.total);
        }, 0));
}

function getTotalPaidOrders(orders) {
    return (orders.reduce(
        (total, order) => {
            if (order.paid === true) {
                total += 1;
            }
            return total;
        }, 0));
}

function getTicketMedio(orders) {
    let amountOfPaidOrders = getTotalPaidOrders(orders);
    let totalRevenue = getTotalRevenue(orders);

    //Ticket médio = valor total vendido ÷ quantidade de pedidos pagos

    return totalRevenue / amountOfPaidOrders;
}

module.exports = {
    getTotalSold,
    getTotalPaidOrders,
    getTicketMedio,
};