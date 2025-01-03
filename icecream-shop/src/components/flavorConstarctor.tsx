import React from 'react'

type flavor = {
    setOrderList: React.Dispatch<React.SetStateAction<string[]>>;
    name: string;
    color: string;
    price: number;
}

const FlavorConstarctor: React.FC<flavor> = ({setOrderList, name, color, price}: flavor) => {
  function addFlavor(event: React.MouseEvent<HTMLButtonElement>) {
    const flavorName = event.currentTarget.getAttribute('name');
    if (flavorName) {
      setOrderList((prev) => [...prev, flavorName])
    }
    
  }

  return (
    <button
      className='flavor-box'
      onClick={addFlavor}
      name={name}
      style={{backgroundColor: (color)}}>
        {`${name} - costs: ${price}$`}
    </button>
  )
}

export default FlavorConstarctor