import twitter_icon from '../assets/images/icons/twitter copy.svg'
import linkedIn_icon from '../assets/images/icons/linkedin copy.svg'
import github_icon from '../assets/images/icons/github copy.svg'

const ContactMe = () => {

    return (
        <section className='p-6 text-[#33323D] lg:px-28'>
            <article className='border-y border-gray-300 lg:flex lg:flex-row lg:justify-between lg:py-8'>
                <h2 className='text-[40px] font-bold leading-10 font-irn my-6 lg:my-0'>Get in Touch</h2>
                <div className='lg:w-[650px]'>
                    <p className='text=[15px] font-publicSans font-light leading-[30px]'>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a remote job. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>

                    <div className='flex flex-row justify-between w-28 py-9'>
                        <img src={twitter_icon} alt='twitter icon'/>
                        <img src={linkedIn_icon} alt='linkedin icon'/>
                        <img src={github_icon} alt='github icon'/>
                    </div>
                </div>
            </article>
            <article className='lg:flex lg:flex-row lg:justify-between lg:py-6'>
                <h2 className='text-[40px] font-bold leading-10 font-irn my-6 lg:my-0'>Contact Me</h2>
                <form action="" className='text-[13px] lg:w-[650px]'>
                    <label>
                        <span className='mb-2'>Name</span>
                        <input type="text"  className='p-3 bg-[#E6E6E7] w-full rounded-lg my-3' placeholder='Jane Appleseed'/>
                    </label>
                    <label>
                        <span>Email Address</span>
                        <input type="email"  className='p-3 bg-[#E6E6E7] w-full rounded-lg my-3' placeholder='email@example.com'/>
                    </label>
                    <label>
                        <span>Message</span>
                        <textarea  className='p-3 bg-[#E6E6E7] w-full rounded-lg my-3 h-24' placeholder='How can I be of service?'/>
                    </label>

                    <button className='p-3 bg-[#203A4C] text-white rounded-lg my-4'>SEND MESSAGE</button>
                </form>
            </article>
        </section>
    )
}

export default ContactMe;