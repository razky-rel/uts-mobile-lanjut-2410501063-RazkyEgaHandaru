import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider= ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (meal) => {
        const isExist = favorites.find((fav) => fav.idMeal === meal.idMeal );
        if (isExist) {
            setFavorites(favorites.filter((fav) => fav.idMeal !== meal.idMeal));
        } else {
            setFavorites([...favorites, meal]);
        }
    };

    const isFavorite = (mealId) => {
        return favorites.some((fav) => fav.idMeal === mealId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
 }

 export const useFavorites = () => useContext(FavoritesContext);