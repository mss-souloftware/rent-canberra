import React from 'react'
import Container from '../../Container/Container'
import Image from 'next/image'

export default function PropertySteps() {
  return (
    <section id="propertySteps" className='bg-[#F5F5F5] py-12'>
        <Container>
            <div className="flex grid-cols-3 gap-4 justify-between items-stretch ">
              <div className="textBoxData flex flex-col justify-center w-1/6 bg-white p-8 rounded-xl">
                <h3 className='text-xl font-medium leading-6'>List a place for rent in just <span className='border-b-2 border-black'>2 minutes.</span></h3>
              </div>
              <div className="imageBoxData">
                <Image />
              </div>
              <div className="textBoxData flex flex-col justify-center w-1/6 bg-white p-8 rounded-xl">
                <h3 className='text-xl font-medium leading-6'>Are you a <span className='border-b-2 border-black'>tenant</span> looking for a <span className='border-b-2 border-black'>place to stay?</span></h3>
                <h3 className='text-xl font-medium leading-6 mt-6'>Create a <span className='border-b-2 border-black'>profile</span> to connect with <span className='border-b-2 border-black'>Landlords & Agents</span> </h3>
              </div>
              <div className="textBoxData flex flex-col justify-center w-1/6 bg-white p-8 rounded-xl">
                <h3 className='text-xl font-medium leading-6'>Browse <span className='border-b-2 border-black'>Canberra</span></h3>
              </div>
            </div>
        </Container>
    </section>
  )
}