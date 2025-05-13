import logo from '../assets/images/logo copy.svg'
import twitter_icon from '../assets/images/icons/twitter.svg'
import linkedIn_icon from '../assets/images/icons/linkedin.svg'
import github_icon from '../assets/images/icons/github.svg'
const Footer = () => {
    
    return (
        <footer className="flex flex-col items-center bg-[#33323D] md:flex-row md:justify-between md:px-8 md:h-20 lg:px-24">

            <img src={logo} alt='logo' className='mt-10 mb-5 md:mb-0 md:mt-0'/>

            <ul className='text-white text-center md:flex md:flex-row md:items-center  '>
                <li className='mb-3 md:mb-0 md:mr-6'>HOME</li>
                <li className='mb-3 md:mb-0 md:mr-6'>PORTFOLIO</li>
                <li className='mb-3 md:mb-0'>CONTACT ME</li>
            </ul>

            <div className='flex flex-row justify-between w-28 py-9'>
                <img src={twitter_icon} alt='twitter icon'/>
                <img src={linkedIn_icon} alt='linkedin icon'/>
                <img src={github_icon} alt='github icon'/>
            </div>
            
        </footer>
    )
}

export default Footer;