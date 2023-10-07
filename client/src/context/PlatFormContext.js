import {createContext, useContext} from "react";
export const platformContext = createContext({
    platforms: [
        {
            id: 1,
            platform: " Todo msg",
            platformUrl : "www.coursera.com"
        }
    ],
    addplatform: (platformName,platformUrl,id) => {},
    deleteplatform: (name) => {},
});


export const usePlatform = () => {
    return useContext(platformContext)
}

export const PlatformContextProvider = platformContext.Provider;