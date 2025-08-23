
import './App.css'
import Cart from './components/Cart'
import DessertCard from './components/DessertCard'
import { useDessertsApi } from './contexts/DataContext'

function App() {
  const { desserts } = useDessertsApi()

  return (


    <main className='bg-amber-50'>
      <h2 className='text-3xl capitalize text-amber-950 font-bold'>desserts</h2>
      <section className='grid grid-cols-3 gap-2'>

        {desserts?.map((dessert, index) => <DessertCard dessert={dessert} key={index} />)}
      </section>
      <Cart/>

    </main>
  )
}

export default App
