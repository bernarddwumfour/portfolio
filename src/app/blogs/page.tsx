import React from "react";

let blogs: { title: string, content: string }[] = []

const page = () => {
  return (
    <main className="min-h-screen pt-12">
      <section id="blogs" className="max-w-[1600px] relative left-1/2 -translate-x-1/2">
        <div className="py-32 lg:px-24 px-3">
          <div className="pb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-500">My Blogs</h2>
            <p className="md:py-2 py-1 text-sm lg:text-[1.05rem] text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At!
            </p>
          </div>

          {blogs.length > 0 ? (<div className="mb-12">
            <div className="w-full bg-gray-200 dark:bg-gray-900 h-[550px]"> </div>
            <h4 className="text-indigo-600 text-xl pt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h4>
            <p className="text-gray-600 dark:text-gray-300 pt-2 text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo omnis, ipsa labore cumque pariatur similique consectetur eum repudiandae nulla dicta. Eum, accusamus. Sequi accusantium repellat voluptates. Quae enim obcaecati blanditiis alias omnis aspernatur vero illum accusamus esse, libero quod cum nulla? Illo, qui iusto, ratione nisi accusantium nulla ex et, officiis explicabo blanditiis doloremque. Tenetur.
            </p>
          </div>) : <h2 className="text-2xl md:text-4xl pt-4 md:pt-8"> COMING SOON ...</h2>}

        </div>
      </section>
    </main>
  )
    ;
};

export default page;
