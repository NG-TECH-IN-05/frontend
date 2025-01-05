import { IconAlarmAverage } from '@tabler/icons-react'

const About = () => {
  return (
    <div>
      <section className='my-20 bg-white dark:bg-gray-900'>
        <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl'>
              Lorem, ipsum dolor.
            </h1>
            <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum enim recusandae debitis maxime iure, a quo eos dolor
              laborum eum fugiat soluta quis consequatur maiores harum veniam
              eius ut. Officiis, cupiditate. Eaque exercitationem explicabo,
              suscipit excepturi libero voluptatum nihil molestias.
            </p>
          </div>

          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
            <img
              src={
                'https://images.unsplash.com/photo-1708162665956-98da095550ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt='Image'
              draggable
            />
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-16'>
          {Array.from({ length: 8 }).map((_, key) => (
            <div key={key} className='duration-500 hover:scale-105'>
              <div className='block h-full overflow-hidden'>
                <div className='h-[200px] overflow-hidden rounded'>
                  <img
                    alt='img-load'
                    src={
                      'https://images.unsplash.com/photo-1708162665956-98da095550ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                  />
                  {/* <img
					src={LocalIcon}
					alt=""
					className="object-cover w-full h-full bg-white"
				/> */}
                </div>
                <div className='h-full basis-[40%] bg-white p-5 shadow-lg shadow-gray-200/70 dark:bg-gray-700 dark:text-white dark:shadow-none'>
                  <h1 className='mb-2 text-lg font-semibold'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi, voluptate?
                  </h1>
                  <p className='mb-2 text-sm text-gray-500 dark:text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit consequuntur minima minus id vel! Numquam asperiores
                    error, quia, esse perferendis ullam, deserunt delectus
                    molestiae dolores itaque voluptatibus dolor sit reiciendis.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
