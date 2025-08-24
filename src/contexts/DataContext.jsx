import { createContext, useContext, useEffect, useState } from "react";

const dessertsContext = createContext()



function DessertsProvider({ children }) {
    const [desserts, setDesserts] = useState([])
    const [cart, setCart] = useState([])

    function handleCountIncrement(item) {
        const newItem = { ...item, quantity: 1 }
        setCart((cart) => cart?.map((dessert) => dessert.name === newItem.name ? { ...dessert, quantity: dessert.quantity + 1 } : dessert))

    }
    function handleCountDecrement(item) {
        const newItem = { ...item, quantity: 1 }
        setCart((cart) => cart?.map((dessert) => dessert.name === newItem.name ? { ...dessert, quantity: dessert.quantity < 1 ? 0 : dessert.quantity - 1 } : dessert))
        const findDessert = cart?.find(dessert => dessert.name === newItem.name)
        if(findDessert.quantity <= 1) return setCart((cart) => cart?.filter((items) => items.name !== findDessert.name))
        
        
    }
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
        <dessertsContext.Provider value={{ desserts, cart, setCart, handleCountDecrement, handleCountIncrement }}>{children}</dessertsContext.Provider>
    )
}

function useDessertsApi() {
    const context = useContext(dessertsContext)
    if (context === undefined) throw new Error("dessertsContext was used outside of its provider")
    return context
}

export { DessertsProvider, useDessertsApi }
