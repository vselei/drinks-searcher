import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);

  const getDrinks = async data => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`;

      const {
        data: { drinks }
      } = await axios(url);

      setDrinks(drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        getDrinks,
        handleModalClick,
        modal
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
