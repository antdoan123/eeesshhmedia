import React from 'react'
import { useRef, useState } from 'react';


const Contact = () => {
    const [sent, setSent] = useState(false)

    const senderNameRef = useRef("")
    const senderEmailRef = useRef("")
    const messageRef = useRef("")
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailBody = {
            subject: `EeesshhMedia - Message from ${senderNameRef.current.value} (${senderEmailRef.current.value})`,
            text: messageRef.current.value
        }
        try {
            const res = await fetch('api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(emailBody)
            })
            console.log('The email sent!')
            setSent(true)

        } 
        catch (error) {
            console.log('The email did not send...')
        }

    }
  return (
    <div className='h-full mt-20 mx-auto p-4 w-full'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='border-b-2 border-black py-4 text-2xl font-bold text-black'>Contact Us</h1>
            <p className='mt-4 text-md text-center text-neutral-500'>WE WILL BE GLAD TO HEAR FROM YOU ABOUT A NEW EXCITING PROJECT</p>
        </div>
        <form className='max-w-[600px] m-auto pt-4 text-black' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-2 '>
                <input className=' border-b border-[#5865F2] p-3 ' ref={senderNameRef} type="text" placeholder='Name'></input>
                <input className='border-b border-[#5865F2] p-3 ' ref={senderEmailRef} type="email" placeholder='Email'></input>
            </div>
            <textarea className='border-b border-[#5865F2] p-3 w-full ' ref={messageRef} col="30" rows="10" placeholder="Message"></textarea>
                <a href="mailto:antdoan123@gmail.com" target="_blank" rel="noreferrer">
                    <button className='rounded-md p-3 w-full mt-2 bg-[#5865F2] text-white font-bold text-xl shadow-lg'>Submit</button>
                </a>
                <p className={`pt-1 text-[#5865F2] italic ${sent ? '' : 'hidden'}`}>{"Sent! We'll get back to you shortly."}</p>
            </form>        
    </div>
  )
}

export default Contact