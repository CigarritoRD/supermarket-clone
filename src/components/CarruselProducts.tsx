
import { type listOfProducts } from '../App'
import { BuyIcon } from './Icons'

interface Props {
  productos: listOfProducts
}

const CarruselProducts: React.FC<Props> = ({ productos }) => {
  return (
    <ul className='flex gap-2 overflow-x-scroll pb-2'>
      {productos.map(producto => (
        <li key={producto.id} className=' flex flex-col rounded-lg shadow-gray-300 shadow-sm border border-gray-50 bg-white p-2 min-w-[150px]  '>
          <img className='block h-20 mx-auto' src={producto.thumbnail} alt="" />
          <p className=' lowercase text-sm flex-1'><span className='text-gray-500'>{producto.titulo}</span></p>
          <div className='flex justify-between pt-2 items-center  place-items-end '>
            <p className='font-bold text-sm'> ${producto.precio}</p>
            <div className="cursor-pointer" >
              <BuyIcon />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CarruselProducts
