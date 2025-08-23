import { createContext, useContext, useEffect, useState } from "react";

const dessertsContext = createContext()



function DessertsProvider({ children }) {
    const [desserts, setDesserts] = useState()
    const [cart, setCart] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/data/data.json")
                if (!response.ok) throw new Error("could not fetch desserts data")
                const data = await response.json()
                setDesserts(data)

            } catch (error) {
                console.error(error);

            }
        }
        fetchData()
    }, [])
    return (
        <dessertsContext.Provider value={{ desserts, cart, setCart }}>{children}</dessertsContext.Provider>
    )
}

function useDessertsApi() {
    const context = useContext(dessertsContext)
    if (context === undefined) throw new Error("dessertsContext was used outside of its provider")
    return context
}

export { DessertsProvider, useDessertsApi }
