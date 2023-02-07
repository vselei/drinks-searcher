import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const { data } = await axios(url);

      setDrinks(data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <DrinksContext.Provider
      value={{
        drinks
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
