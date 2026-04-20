import React from 'react'
import p from './assets/p.png'

const Contact = () => {
    return (
        <div className='w-full h-auto p-30  '>
            <h2 className='flex text-4xl font-bold items-center text-center ml-140 text-white mb-20'>Contact Me</h2>
            <div className='flex gap-10 '>
                <img src={p} alt="" className='w-150 h-180 rounded ' />

                <div>
                    <form action="" className='flex flex-col bg-cyan-900 rounded-2xl p-18 shadow-white/90 shadow-lg'>
                        <h2 className='text-4xl text-white font-bold text-center'>Contact Us</h2>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="Name" id="Name" placeholder='FirstName' required /><br />
                        <input type="text" name="Name" id="Name" placeholder='LastName' required /><br />
                        <label htmlFor="Password">Password:</label>
                        <input type="password" name="Password" id="Password" placeholder='Enter Password' required /><br />
                        <label htmlFor="Email">Email:</label>
                        <input type="email" name="Email" id="Email" placeholder='********' required /><br />
                        <div className='contact-btn'>
                            <button>Submit</button>
                        <button>Reset</button>
                        </div>
                        <p  className='text-amber-100 font-bold pt-5'><input type="checkbox" /> i have read and accept the Terms and Conditions and the <a href="">privacyPolicy</a></p>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact
