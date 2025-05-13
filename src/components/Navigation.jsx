import logo from '../assets/images/logo.svg'
import hamburger_icon from '../assets/images/icons/hamburger.svg'
import x_icon from '../assets/images/icons/close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleShowMenu = () => {
        setShowMenu(true)
    }
    
    const handleMenuClose = () => {
        setShowMenu(false)
    }

    return( 
        <nav className='flex flex-row justify-between items-center w-full   py-5 px-4 md:overflow-hidden lg:px-24'>
            <button>
                <img src={logo} alt='logo'/>

            </button>
        

            <div>
                { !showMenu ? 
                    <button onClick={handleShowMenu}>
                        <img src={hamburger_icon} alt='menu icon' className='md:hidden'/>

                    </button>
                    :
                    <button onClick={handleMenuClose}>
                        <img src={x_icon} alt='x icon' className='md:hidden'/>

                    </button>
                }
          
                <ul className={`absolute left-28 w-56 h-[186px] ${showMenu ? 'flex ' : 'hidden'} flex-col bg-[#33323D] text-center text-white text-xs p-4 rounded-xl md:flex md:relative md:flex-row md:w-80 md:h-full md:left-0 md:text-[#33323D] md:bg-transparent md:justify-between`}>
                    <li className=' mt-6 mb-4 md:my-0'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='mb-4 md:mb-0'>
                        <Link to='/portfolio'>PORTFOLIO</Link>
                    </li>
                    <li><Link to='/contactme'>CONTACT ME</Link></li>
                </ul>

            </div>
       

        </nav>
    )
}

export default Navigation;