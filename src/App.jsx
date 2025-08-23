
import './App.css'
import DessertCard from './components/DessertCard'
import { useDessertsApi } from './contexts/DataContext'

function App() {
  const { desserts } = useDessertsApi()

  return (


    <main>
      <h2>desserts</h2>
      {desserts?.map((dessert, index) => <DessertCard dessert={dessert} key={index} />)}

    </main>
  )
}

export default App
