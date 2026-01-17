import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen pt-12">
        <section id="about"  className="max-w-[1600px] relative left-1/2 -translate-x-1/2">
        <div className=" pt-20 py-32 lg:px-24 px-3">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">About Me</h2>
            <p className="py-2 text-gray-600 dark:text-gray-300">
              Passionate Software And Machine Learning Engineer
            </p>
          </div>


          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            <div className="bg-gray-100 relative overflow-hidden h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image
                className=" object-cover"
                src={"/about.jpeg"}
                fill
                alt="flowerui"
              />
            </div>

            <div className="">
              <p className="text-sm lg:text-md leading-7 lg:leading-8 md:px-6 text-gray-500 dark:text-gray-200">
                I am a passionate Full Stack Developer with experience in
                building dynamic and user-friendly web applications. Skilled in
                HTML, CSS, JavaScript, React.js, Next.js, PHP, Laravel, and
                MySQL, I thrive on creating innovative solutions. As a Product
                Designer proficient in Figma and Photoshop, I bring a keen eye
                for design to create cohesive and visually appealing user
                experiences. Let&apos;s build something amazing together!
              </p>
            </div>
          </div>


          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center pt-48">
           
            <div className="">
              <p className="text-sm lg:text-md leading-7 lg:leading-8 md:px-6 text-gray-500 dark:text-gray-200">
              Machine Learning Engineer eager to apply my knowledge and skills to solve real-world problems. With a foundation in Python and scikit-learn, I enjoy building and training models that can make accurate predictions and provide valuable insights. My analytical mindset and enthusiasm for learning drive me to continuously improve my capabilities. Let&apos;s explore the potential of machine learning together!
              </p>
            </div>

            <div className="bg-gray-100 relative overflow-hidden h-64 lg:h-96 rounded-2xl dark:bg-gray-900">
              <Image
                className=" object-cover"
                src={"/about.jpeg"}
                fill
                alt="flowerui"
              />
            </div>

          </div>

        </div>
        </section>

    </main>
  )
  ;
};

export default page;
