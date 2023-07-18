
import { useMemo, useState } from 'react'
import Header from './components/Header'
import data from './DATA/data.json'
import CarruselProducts from './components/CarruselProducts'
import { BagIcon } from './components/Icons'

export interface Product {
  id: number
  titulo: string
  precio: number
  imagen: string
  thumbnail: string
  categoria: string
}
export type listOfProducts = Product[]

function App (): JSX.Element {
  const [allProducts] = useState<listOfProducts>(data.productos)
  const categorias = useMemo(() => new Set(allProducts.map(producto => producto.categoria)), [allProducts])
  console.log(categorias)
  return (
    <div className='bg-gray-50'>
      <Header />
      <main className=''>
        <div className='relative overflow-hidden text-white text-xl font-bold h-28 px-4 rounded-lg m-2 bg-gradient-to-r from-red-700 to-orange-400'>
          <p className='pt-4'>Todas las categoria</p>
          <BagIcon />
        </div>
        <div className='p-2'>
          {[...categorias].map(categoria => (
            <div key={categoria}>
              <h3 className='text-md font-bold capitalize my-2'>{categoria}</h3>
              <CarruselProducts productos={allProducts} />
            </div>
          ))}

        </div>
      </main>
    </div>
  )
}

export default App
