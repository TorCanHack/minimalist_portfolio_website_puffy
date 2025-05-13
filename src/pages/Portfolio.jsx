import landingpagemanage1 from '../assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg'
import landingpageinvoiceapp from '../assets/images/detail/invoiceapp.jpg'
import homepagefinanceapp from '../assets/images/detail/personalfinanceapp.jpg'
import homapagedictionaryapp from '../assets/images/detail/dictionarylandingpage.jpg'
import landingmanagedesktop from '../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg'

const Portfolio = () => {

    return (
        <section className='p-4 font-irn md:px-8 lg:px-28'>
            <article className='p-4 mb-4  pb-8 md:flex md:flex-row md:justify-between'>
                <div className='flex flex-col justify-center items-center pb-8'>
                    <img src={landingpagemanage1} alt="" className='w-[311px] h-72 md:w-[339px] md:h-[314px] lg:hidden'/>
                    <img src={landingmanagedesktop} alt="preview" className='hidden lg:flex lg:w-[610px] lg:h-[500px]'/>
                </div>
                <div className='border-t border-b border-gray-300 md:w-72 md:h-[418px] pb-8 md:py-8 lg:w-[450px] lg:h-[500px]'>
                    <h2 className='font-bold text-[40px] my-4'>Manage</h2>
                    <p className='text-[#33323D]  leading-7 font-publicSans mb-6 md:text-[15px] lg:pr-28 '>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. </p>
                    <a className='border-2 border-[#33323D] text-xs py-3 px-7' href="https://manage-landing-page-9eti.onrender.com">VIEW PROJECT</a>

                </div>
                
            
            </article>
            <article className='p-4  pb-8 md:flex md:flex-row-reverse md:justify-between'>
                <div className='flex flex-col justify-center items-center pb-8'>
                    <img src={landingpageinvoiceapp} alt="" className='w-[311px] h-72  md:w-[339px] md:h-[314px] lg:w-[610px] lg:h-[500px]' />

                </div>
                <div className='border-t border-b border-gray-300 md:w-72 md:h-[418px] pb-8 md:py-8 lg:w-[450px] lg:h-[500px]'>
                    <h2 className='font-bold text-[40px] my-4'>Invoice App</h2>

                    <p className='text-[#33323D]  leading-7 font-publicSans mb-6 lg:pr-28'>The Invoice Management Application is a full-stack web application built to streamline invoice creation, viewing, and editing for small businesses and freelancers. Developed using React for the frontend and Express.js for the backend. </p>

                    <a className='border-2 border-[#33323D] text-xs py-3 px-7 my-4' href='https://invoice-app-1-17ot.onrender.com/'>VIEW PROJECT</a>

                </div>
                

            </article>
            <article className='p-4 mt-4  pb-8 md:flex md:flex-row md:justify-between'>
                <div className='flex flex-col justify-center items-center pb-8 '>
                    <img src={homepagefinanceapp} alt="" className='w-[311px] h-72  md:w-[339px] md:h-[314px] lg:w-[610px] lg:h-[500px]' />

                </div>
                <div className='border-t border-b border-gray-300 md:w-72  pb-8 md:py-8 lg:w-[450px] lg:h-[500px]'>
                    <h2 className='font-bold text-[40px] my-4'>Personal Finance App</h2>
                    <p className='text-[#33323D]  leading-7 font-publicSans mb-6 lg:pr-28'>
                        This project is a personal finance web application designed to help users manage savings, budget, and keep track of spending, it aims to provide hands-on experience with full-stack development, focusing on React for the frontend and Node.js/Express for the backend. The app allows users to create, edit, and delete pots, add or withdraw money, and track their balance, with all data stored in a JSON file.
                    </p>

                    <a className='border-2 border-[#33323D] text-xs py-3 px-7 my-4' href='https://finance-app-q3kq.onrender.com'>VIEW PROJECT</a>

                </div>
                

            </article>
            <article className='p-4 mt-4 pb-8 md:flex md:flex-row-reverse md:justify-between'>
                 <div className='flex flex-col justify-center items-center pb-8'>
                    <img src={homapagedictionaryapp} alt="" className='w-[311px] h-72  md:w-[339px] md:h-[314px] lg:w-[610px] lg:h-[500px]' />

                </div>
                <div className='border-t border-b border-gray-300 md:w-72 pb-8 md:py-8 lg:w-[450px] lg:h-[500px]'>
                    <h2 className='font-bold text-[40px] my-4'>Dictionary Web App</h2>
                    <p className='text-[#33323D]  leading-7 font-publicSans mb-6 lg:pr-28'>
                        This project is built using React, a popular JavaScript library for building user interfaces. It leverages React Hooks (useState) for state management and Axios for making HTTP requests to the Dictionary API (https://api.dictionaryapi.dev).
                    </p>

                    <a className='border-2 border-[#33323D] text-xs py-3 px-7  ' href='https://dictionary-web-app-9fd9.onrender.com'>VIEW PROJECT</a>
                </div>

            </article>
            
        </section>
        
    )
}

export default Portfolio;