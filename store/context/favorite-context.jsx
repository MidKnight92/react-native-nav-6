import { createContext, useContext, useState, useCallback } from "react";

const FavoriteContext = createContext({
    ids: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});


export const FavoriteContextProvider = ({ children }) => {
    const [favs, setFavs] = useState([]);
    const getFavorites = useCallback(() => [...favs], []);
    const hasFavorite = useCallback((id) => favs.includes(favId => favId === id), []);
    const addFavorite = useCallback((id) => {
        setFavs(prevFavs => [...prevFavs, id]);
    }, []);
    const removeFavorite = useCallback((id) => {
        setFavs(prevFavs => prevFavs.filter(favIds => favIds !== id));
    }, []);
    return (
        <FavoriteContext.Provider value={{ getFavorites, addFavorite, removeFavorite, hasFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export const useFavoriteContext = () => useContext(FavoriteContext);