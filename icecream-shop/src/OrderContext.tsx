import React, { createContext, useContext, useState } from 'react';

type OrderContextType = {
  orderList: string[];
  setOrderList: React.Dispatch<React.SetStateAction<string[]>>;
};

// Create the context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orderList, setOrderList] = useState<string[]>(() => {
    // Initialize from localStorage if available
    const savedOrder = localStorage.getItem('orderList');
    return savedOrder ? JSON.parse(savedOrder) : [];
  });

  // Save orderList to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('orderList', JSON.stringify(orderList));
  }, [orderList]);

  return (
    <OrderContext.Provider value={{ orderList, setOrderList }}>
      {children}
    </OrderContext.Provider>
  );
};

// Hook to use the OrderContext
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
