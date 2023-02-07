import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!drinkId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

        const { data: drink } = await axios(url);
        setRecipe(drink.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipe();
  }, [drinkId]);

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

  const handleClickDrinkId = id => {
    setDrinkId(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        getDrinks,
        handleModalClick,
        modal,
        handleClickDrinkId,
        recipe
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
