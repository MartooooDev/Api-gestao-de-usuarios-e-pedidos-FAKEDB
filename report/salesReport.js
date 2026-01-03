const { getTotalRevenue } = require('../services/orderService');

function getTotalSold(orders) {
    return (
        orders
        .filter(order => order.paid)
        .reduce((total, order) => total + order.total, 0)
    );
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
    if (amountOfPaidOrders === 0) return 0

    let totalRevenue = getTotalRevenue(orders);

    //Ticket médio = valor total de vendas ÷ quantidade de pedidos pagos

    return totalRevenue / amountOfPaidOrders;
}

module.exports = {
    getTotalSold,
    getTotalPaidOrders,
    getTicketMedio,
};