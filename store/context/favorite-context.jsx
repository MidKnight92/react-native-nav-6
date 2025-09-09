import { createContext, useContext, useState, useMemo } from "react";

const FavoriteContext = createContext({
    ids: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});


export const FavoriteContextProvider = ({ children }) => {
    const [favs, setFavs] = useState([]);
    const hasFavorite = (id) => favs.includes(id);
    const addFavorite = (id) => {
        if (!hasFavorite(id)) setFavs(prevFavs => [...prevFavs, id]);
    };
    const removeFavorite = (id) => {
        setFavs(prevFavs => prevFavs.filter(favIds => favIds !== id));
    };
    const value = useMemo(() => ({ favs, addFavorite, removeFavorite, hasFavorite }), [favs]);
    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
}

export const useFavoriteContext = () => useContext(FavoriteContext);