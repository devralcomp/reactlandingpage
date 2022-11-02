import { Button, Card } from 'flowbite-react'
import React from 'react'
import growth from "../../assets/images/growth.png"

const AboutCardOne = () => {
  return (
    <Card className='border-none mt-20'>
  <div className="flex flex-col sm:flex-row">
        <div className="md:basis-1/2 self-center">
          <h2 className="text-4xl font-bold dark:text-white">
            Create Dynamic Surveys
          </h2>
          <p className="mb-2 text-lg font-normal text-gray-500 mt-6 lg:text-xl dark:text-gray-400">
            Lorem Ipsum available but the majority have suffered alteration in
            some form.
          </p>
        </div>
        <div className="md:basis-1/2 self-center">
          <img
            className="w-full aspect-video"
            alt="about-us"
            src={growth}
          />
        </div>
      </div>
</Card>
  )
}

export default AboutCardOne