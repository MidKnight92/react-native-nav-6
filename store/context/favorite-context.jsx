import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext({
    ids: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});


export const FavoriteContextProvider = ({children}) => {
    const [favs, setFavs] = useState([]);
    const getFavorites = () => [...favs]
    const addFavorite = (id) => {
        setFavs(prevFavs => [...prevFavs, id]);
    }
    const removeFavorite = (id) => {
        setFavs(prevFavs => prevFavs.filter(favIds => favIds !== id));
    }
    return (
        <FavoriteContext.Provider value={{getFavorites, addFavorite, removeFavorite}}>
            {children}
        </FavoriteContext.Provider>
    );
}

export const useFavoriteContext = () => useContext(FavoriteContext);