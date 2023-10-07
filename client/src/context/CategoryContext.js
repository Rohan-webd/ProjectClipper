import {createContext, useContext} from "react";
export const CatContext = createContext({
    categories: [
        {
            id: 1,
            category: " Todo msg",
        }
    ],
    addCat: (cat,id) => {},
    deleteCat: (name) => {},
});


export const useCategory = () => {
    return useContext(CatContext)
}

export const CatContextProvider = CatContext.Provider