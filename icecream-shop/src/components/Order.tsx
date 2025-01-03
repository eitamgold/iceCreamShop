import React from 'react';

type Flavor = {
  name: string;
  price: number;
  isKosher: boolean;
  isGlutenFree: boolean;
  isDairyFree: boolean;
  key: number;
  color?: string;
};

type OrderProps = {
  flavors: Flavor[];
  orderList: string[];
};

const Order: React.FC<OrderProps> = ({ flavors, orderList }) => {
  // Count the occurrences of each flavor in the orderList
  const flavorCounts = orderList.reduce((acc: Record<string, number>, flavorName) => {
    acc[flavorName] = (acc[flavorName] || 0) + 1;
    return acc;
  }, {});

  // Generate the order summary
  const orderSummary = Object.entries(flavorCounts).map(([flavorName, count]) => {
    const flavor = flavors.find((f) => f.name === flavorName);
    if (!flavor) return null;

    const totalCost = flavor.price * count;

    return {
      name: flavor.name,
      count,
      totalCost,
    };
  });

  return (
    <div className="order-summary">
      <h2>Your Order</h2>
      {orderSummary.length > 0 ? (
        <ul>
          {orderSummary.map(
            (item) =>
              item && (
                <li key={item.name}>
                  {item.name}: {item.count} × ${item.totalCost.toFixed(2)} (${item.totalCost.toFixed(2)})
                </li>
              )
          )}
        </ul>
      ) : (
        <p>Your order is empty.</p>
      )}
    </div>
  );
};

export default Order;
