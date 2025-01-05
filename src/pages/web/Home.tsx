import WebLanding from '@/components/website/WebLanding'
import { LockOpen1Icon } from '@radix-ui/react-icons'
import { IconAlarmAverage } from '@tabler/icons-react'

const Home = () => {
  return (
    <div>
      {/* <WebLanding /> */}
      <div className='my-10'>
        <section className=' bg-white dark:bg-gray-900'>
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
                  'https://images.unsplash.com/photo-1721201342276-3edf188d1335?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt='Image'
                draggable
              />
              {/* <img
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
							alt="mockup"
						/> */}
            </div>
          </div>
        </section>

        <div className='relative -z-20 '>
          <section className='z-0 overflow-hidden  bg-slate-900'>
            <div className='absolute -right-14 -top-12 z-0 h-full w-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 opacity-5 blur-2xl'></div>
            <div className='container mx-auto px-[7%] pb-32 pt-20'>
              <h1 className='text-2xl font-semibold capitalize text-white lg:text-3xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p className='mt-4  text-gray-300 xl:mt-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores fuga expedita laboriosam. Ullam, voluptatibus.
              </p>
              <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16'>
                {Array.from({ length: 6 }).map((_, key) => (
                  <div key={key}>
                    <div className='space-y-3'>
                      <div className='flex size-14 place-content-center items-center rounded-full bg-primary'>
                        <IconAlarmAverage className='text-primary-foreground' />
                      </div>
                      <h1 className='text-xl font-semibold capitalize text-white'>
                        Lorem, ipsum.
                      </h1>
                      <p className='text-justify text-gray-500 dark:text-gray-300'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur ab repellat cumque voluptates
                        adipisci at, fugiat harum, est odio laborum pariatur
                        odit libero debitis, similique sunt? Optio provident
                        reiciendis voluptate corporis. Animi voluptates facere
                        consequatur qui vitae at labore, recusandae aspernatur
                        expedita veritatis fuga. Facilis, ab. Doloribus enim
                        cumque culpa.
                      </p>
                      {/* <a
				href="#1"
				className="inline-flex items-center -mx-1 text-sm text-orange-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500">
				<span className="mx-1">Voir plus</span>
			</a> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>{' '}
    </div>
  )
}

export default Home
