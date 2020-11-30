const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = Object.values(order.order.delivery)[0];
  const name = Object.values(order)[0];
  const phoneNumber = Object.values(order)[1];
  const addressObj = Object.values(order.address);
  const address = `R. ${addressObj[0]}, Nº: ${addressObj[1]}, AP: ${addressObj[2]}`
  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address}.`
}

customerInfo(order);

const orderModifier = (order) => {
  const name = Object.values(order)[0];
  const orderData = order.order;
  const flavor = `${Object.keys(orderData.pizza)[0]}, ${Object.keys(orderData.pizza)[1]}`;
  const drinks = Object.values(orderData.drinks.coke)[0];
  return `Olá ${name}, o total do seu pedido de ${flavor} e ${drinks} é R$${order.payment.total},00`;
}

orderModifier(order);
