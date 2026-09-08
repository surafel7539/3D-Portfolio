import React from 'react'

const About = () => {
  return (
    <section className='padding-x my-20'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
            <div className="rounded-2xl border border-gray-200 bg-black-50 p-4 h-full flex items-center justify-center">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLiH2M33tGU2O04uKGeFEKCoqHvs1X-Iw06qpg-GXkQ&s=10"
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
            />
            </div>
        </div>
        </div>

    </section>
  )
}

export default About