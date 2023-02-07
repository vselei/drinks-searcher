import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

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

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        getDrinks
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
