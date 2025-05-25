import hero_mobile from '../assets/images/homepage/mobile/image-homepage-hero@2x.jpg'
import hero_tablet from '../assets/images/homepage/tablet/image-homepage-hero@2x.jpg'
import hero_dekstop from '../assets/images/homepage/desktop/image-homepage-hero@2x.jpg'
import down_arrows_icon from '../assets/images/icons/down-arrows.svg'
import pic from '../assets/images/hero.jpg'
const Home = () => {

    return(
        <section className='px-4 lg:px-24'>
            <div className='mb-14 relative'>
                <img src={hero_mobile} alt='hero' className='mb-5 md:hidden'/>
                 <img src={hero_tablet} alt='hero' className='mb-5 hidden md:flex lg:hidden'/>
                 <img src={hero_dekstop} alt='hero' className='mb-5 hidden lg:flex'/>

               <div className='md:w-[514px] md:h-[278px]  md:absolute md:z-10 md:bg-white md:bottom-0 md:flex md:flex-col md:justify-end md:pr-10 lg:w-[445px] lg:h-[357px] '>
                    <h1 className='text-[#33323D] text-[40px] font-bold leading-[42px] mb-5 font-irn lg:text-[50px] lg:leading-[50px]'>Hey, I’m Michael Ayua and I love building beautiful websites </h1>

                    <div className='flex flex-row justify-between items-center bg-[#203A46] w-52 h-12'>
                        <div className='bg-gray-800 h-12 w-12 flex flex-col justify-center items-center'>
                            <img src={down_arrows_icon} alt='arrows' className='w-4 h-3'/>

                        </div>
                        
                        <p className='text-white text-center text-xs w-full'>ABOUT ME</p>
                    </div>
               </div>
                
            </div>

            <div className='mb-12 md:flex md:flex-row md:justify-between md:items-center lg:w-[1090px] '>
                <img src={pic} alt='a picture of a cool developer' className='rounded-xl mb-5 md:w-[380px] md:h-[600px] lg:w-[540px]'/>

                <div className='lg:w-[480px]'>
                    <div className='border-t  p-4 text-[#33323D] border-gray-300 '>
                    <h2 className='text-[40px] font-bold leading-[42px] mb-6 font-irn'>About Me</h2>

                    <p className='text-left leading-7 font-publicSans'>I’m a passionate Full Stack Developer looking for a new role in an exciting company. I specialize in writing accessible HTML, implementing modern CSS practices, and crafting clean, efficient JavaScript. My expertise lies in seamlessly connecting the frontend to the backend, primarily using Node.js.
                    While I typically work with React when building web applications, I’m adaptable and open to using any tools or frameworks that suit the project’s needs.
                    Based in Abuja, Nigeria. I’m comfortable working remotely and have valuable experience collaborating with remote teams.
                    Outside of coding, you can find me on the basketball court or lost in a book—I consider myself an amateur philosopher, constantly exploring ideas, abstractions, and creative concepts. I love building things and bringing ideas to life.
                    I’d love for you to check out my work!</p>
                    </div>

                    <button className='border-2 border-[#33323D] text-xs py-3 px-7 mt-6'>GO TO PORTFOLIO</button>
                </div>

            </div>

            <div className='border-t border-gray-300 py-6 flex flex-col items-center md:flex-row  md:justify-between md:mb-3 md:border-0 md:py-20 '>
                <h3 className='font-irn text-[#33323d] text-[40px] leading-[42px] px-8 text-center mt-12 md:w-[350px] md:h-[84px] md:p-0 md:mt-0 '>
                    Interested in doing a project together?

                </h3>

                <div className='hidden md:flex md:bg-gray-200 md:h-0.5 md:w-28 lg:w-[534px]'></div>

                <button className='border-2 border-[#33323D] text-xs py-3 px-7 mt-10 md:mt-0 '>CONTACT ME</button>
            </div>
             
        </section>
    )
}

export default Home;