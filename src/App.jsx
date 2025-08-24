
import './App.css'
import Cart from './components/Cart'
import DessertCard from './components/DessertCard'
import { useDessertsApi } from './contexts/DataContext'

function App() {
  const { desserts } = useDessertsApi()

  return (
    <main className='bg-amber-50 grid grid-cols-3 px-4 py-4'>
      <section className='col-start-1 col-end-3 px-8'>

        <h2 className='text-3xl capitalize text-amber-950 font-bold mb-8'>desserts</h2>
        <div className='grid grid-cols-3 gap-4'>

          {desserts?.map((dessert, index) => <DessertCard dessert={dessert} key={index} />)}
        </div>
      </section>
      <section className='col-start-3 col-end-4'>

        <Cart />
      </section>

    </main>
  )
}

export default App
