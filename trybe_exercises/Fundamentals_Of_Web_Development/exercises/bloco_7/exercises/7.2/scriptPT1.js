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
  // Adicione abaixo as informações necessárias.
  const name = order.order.delivery.deliveryPerson;
  const nameReceive = order.name;
  const phone = order.phoneNumber;
  const addressStreet = order.address.street;
  const addressNumber = order.address.number;
  const addressApp = order.address.apartment;

  const frase = `Olá ${name}, entrega para: ${nameReceive}, Telefone: ${phone}, ${addressStreet}, Nº: ${addressNumber}, AP: ${addressApp}`;
  console.log(frase);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const changeName = order.name = 'Luiz Silva';
  const changeValue = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  console.log(`Olá ${changeName}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${changeValue},00.`);
}

orderModifier(order);