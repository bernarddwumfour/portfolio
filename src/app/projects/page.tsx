import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen pt-12">

      <section id="projects">
        <div className="py-32 lg:px-24">
          <div className="pb-12">
            <h2 className="text-3xl text-indigo-600">My Projects</h2>
            <p className="py-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
             <div className="relative overflow-hidden bg-gray-100 h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image src={"/plantui.png"} fill alt="flowerui" />
            </div>

             <div className="relative overflow-hidden bg-gray-100 h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image src={"/plantui.png"} fill alt="flowerui" />
            </div>

             <div className="relative overflow-hidden bg-gray-100 h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image src={"/plantui.png"} fill alt="flowerui" />
            </div>

             <div className="relative overflow-hidden bg-gray-100 h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image src={"/plantui.png"} fill alt="flowerui" />
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default page