import React from 'react'
import Container from '../../Container/Container'
import Image from 'next/image'
import styles from './PropertySteps.module.css';

export default function PropertySteps() {
  return (
    <section id="propertySteps" className='bg-[#F5F5F5] py-12 pb-20'>
      <Container>
        <div className="flex grid-cols-5 gap-4 justify-between items-stretch ">
          <div className="textBoxData flex flex-col justify-center w-1/4 relative bg-white shadow-xl p-8 rounded-xl">
            <h3 className='text-xl font-medium leading-6'>List a place for rent in just <span className='border-b-2 border-black'>2 minutes.</span></h3>
            <div className={styles.imageBoxData}>
              <Image src='/icons/arrow-steps.svg' fill={true} />
            </div>
          </div>
          <div className="textBoxData flex flex-col justify-center w-1/4 relative bg-white shadow-xl p-8 rounded-xl">
            <h3 className='text-xl font-medium leading-6'>Are you a <span className='border-b-2 border-black'>tenant</span> looking for a <span className='border-b-2 border-black'>place to stay?</span></h3>
            <h3 className='text-xl font-medium leading-6 mt-6'>Create a <span className='border-b-2 border-black'>profile</span> to connect with <span className='border-b-2 border-black'>Landlords & Agents</span> </h3>
            <div className={styles.imageBoxData}>
              <Image src='/icons/arrow-steps.svg' fill={true} />
            </div>
          </div>
          <div className="textBoxData flex flex-col justify-center w-1/4 relative bg-white shadow-xl p-8 rounded-xl">
            <h3 className='text-xl font-medium leading-6'>Browse <span className='border-b-2 border-black'>Canberra</span></h3>
          </div>
        </div>
      </Container>
    </section>
  )
}