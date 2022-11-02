import { Card } from 'flowbite-react'
import React from 'react';
import rocket from "../../assets/images/rocket.gif"
import crypto from "../../assets/images/crypto.png"

const AboutCardTwo = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
        {/** first card */}
        <div className="md:basis-1/2">
        <Card className='border-none mt-20'>
        <h2 className="text-4xl font-bold dark:text-white">
        simply dummy text of the
          </h2>
          <p className="mb-2 text-lg font-normal text-gray-500 mt-4 lg:text-xl dark:text-gray-400">
          Lorem Ipsum has been the industry's standard.
          </p>
          <img alt="secomd0" src={rocket} />
        </Card>
        </div>
        {/** second card */}
        <div className="md:basis-1/2 self-center">
        <Card className='border-none mt-20'>
        <h2 className="text-4xl font-bold dark:text-white">
        simply dummy text of the
          </h2>
          <p className="mb-2 text-lg font-normal text-gray-500 mt-4 lg:text-xl dark:text-gray-400">
          Lorem Ipsum has been the industry's standard.
          </p>
          <img alt="secomd0" src={crypto} />
        </Card>
        </div>
      </div>
  )
}

export default AboutCardTwo