import { Link } from 'react-router-dom'

const Publications = () => {
  return (
    <div className='my-32'>
      <div className='container my-5'>
        <div
          className='relative min-h-[600px]  w-full p-20'
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backdropFilter: 'revert',
            backfaceVisibility: 'unset',
          }}
        >
          {/* <div className="absolute top-13 left-0 h-full bg-slate-500/35 border-b-4 border-white"></div> */}
          <hr className='my-5 text-white' />
          <h1 className='z-auto text-[25px] font-bold  leading-[1.2] text-white md:text-[60px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nulla maiores optio ullam aliquam sit maxime delectus ad corporis
            iure.
          </h1>
          <div className=' my-4 flex h-full flex-col justify-between'>
            <p className='my-4 w-full text-justify font-mono leading-8 text-black lg:text-2xl xl:w-1/2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              cumque, tenetur voluptatum in nostrum sit nihil ducimus et facere
              iure ex consequatur esse adipisci excepturi delectus unde nulla
              iste? Doloribus aliquid inventore officia placeat aspernatur
              dolorum eaque aliquam eligendi rerum cum quaerat minima cumque,
              fugit tempore. Eveniet voluptatibus enim velit?
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`my-2 flex h-auto flex-col  rounded dark:bg-slate-900 lg:h-[240px] lg:flex-row`}
          >
            <div className='flex h-full w-full flex-none lg:w-[300px]'>
              <img
                src={
                  'https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                className='w-full object-cover'
                alt='Image illustrative'
              />
            </div>
            <div className='flex flex-col gap-y-2 p-8'>
              <h2 className='text-wrap break-words text-xl font-semibold dark:text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia necessitatibus praesentium esse ex cum magni! Suscipit
                facere facilis ut dicta?
              </h2>
              <span className='dark:text-white/20'>Par Jeanne Dupont</span>
              <p className='dark:text-whiten  text-justify text-sm text-neutral-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nostrum explicabo reiciendis soluta, aspernatur quas,
                facilis labore temporibus id ut impedit hic repudiandae sequi
                quo sapiente non sunt quam adipisci laborum nam aliquid
                perspiciatis. Blanditiis quo nam laborum magnam est aperiam in
                expedita repellat omnis, dignissimos voluptatum, incidunt hic
                natus eligendi nulla explicabo, quae debitis dolorem doloribus.
                Blanditiis, perspiciatis eveniet!
              </p>
              <div className='mt-auto flex items-center justify-between'>
                <span className='mt-2 rounded-lg text-sm text-gray-500'>
                  25/06/2024 10:15:00
                </span>
                <a
                  className='flex cursor-pointer items-center gap-x-1 text-sm text-gray-400'
                  href=''
                >
                  En savoir plus{' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 448 512'
                    className='text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className='container my-10 grid gap-10 md:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <div className='shadow-one hover:shadow-two dark:bg-boxdark-2 dark:hover:shadow-gray-dark group relative h-full overflow-hidden rounded-sm bg-white duration-300 hover:scale-105'>
              <Link to='' className='relative block aspect-[37/22] w-full'>
                <span className='absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white'></span>

                <img
                  src={
                    'https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  className='w-full'
                  alt='image'
                />
              </Link>
              <div className='bg-background p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8'>
                <h3>
                  <Link
                    to=''
                    className='mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Link>
                </h3>
                <p className='border-body-color text-body-color mb-6 border-b border-opacity-10  pb-6 text-base font-medium dark:border-white dark:border-opacity-10'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus accusantium enim eaque rem nihil quasi natus,
                  corrupti, necessitatibus, perferendis illo tempore distinctio
                  delectus qui. Beatae provident accusantium inventore repellat
                  in.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Publications
