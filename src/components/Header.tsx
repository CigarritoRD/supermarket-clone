
import { MenuIcon, SearchIcon, ShopingCartIcon } from '../components/Icons'
import logo from '../assets/logo.png'

const Header = (): JSX.Element => {
  return (
    <header className=''>
      <nav className='flex justify-between px-2 py-2 items-center gap-2'>
        <div className='flex gap-2'>
          <div className='cursor-pointer'><MenuIcon /></div>
          <div className='h-6 w-6 rounded-lg overflow-hidden'><img className='w-full' src={logo} alt="" /></div>
        </div>
        <form className='flex-1 relative'>
          <input className=" w-full border rounded-xl px-6 p-[0.5px" type="text" name="search" id="" placeholder="Que deseas buscar?..." />
          <div className='absolute top-[50%] translate-y-[-50%] left-1'><SearchIcon /></div>
        </form>
        <div className='cursor-pointer'><ShopingCartIcon /></div>
      </nav>
    </header>
  )
}

export default Header
