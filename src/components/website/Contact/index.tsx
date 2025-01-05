// import { Images } from "../../images/images";
import NewsLatterBox from './NewsLatterBox'

const Contact = () => {
  return (
    <section
      id='contact'
      className='lg:py-18 my-4 overflow-hidden  py-16  md:py-10 lg:px-[200px]'
    >
      <div className='lg:container '>
        <div className='-mx-4 flex flex-wrap '>
          <div className='w-full bg-slate-100 px-4 shadow-md dark:bg-slate-700 dark:bg-blend-darken lg:w-7/12 xl:w-8/12'>
            <div className='shadow-three dark:bg-boxdark-2 bg-secondary/45 mb-12 h-full rounded-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]'>
              <h2 className='mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl'>
                Besoin d'aide ? Ouvrez un ticket
              </h2>
              <p className='text-body-color mb-12 text-base font-medium'>
                Notre équipe de soutien vous répondra dès que possible par
                email.
              </p>
              <form>
                <div className='-mx-4 flex flex-wrap'>
                  <div className='w-full px-4 md:w-1/2'>
                    <div className='mb-8'>
                      <label
                        htmlFor='name'
                        className='text-dark mb-3 block text-sm font-medium dark:text-white'
                      >
                        Votre nom
                      </label>
                      <input
                        type='text'
                        placeholder='Entrez votre nom'
                        className='border-stroke text-body-color dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none'
                      />
                    </div>
                  </div>
                  <div className='w-full px-4 md:w-1/2'>
                    <div className='mb-8'>
                      <label
                        htmlFor='email'
                        className='text-dark mb-3 block text-sm font-medium dark:text-white'
                      >
                        Votre email
                      </label>
                      <input
                        type='email'
                        placeholder='Entrez votre email'
                        className='border-stroke text-body-color dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none'
                      />
                    </div>
                  </div>
                  <div className='w-full px-4'>
                    <div className='mb-8'>
                      <label
                        htmlFor='message'
                        className='text-dark mb-3 block text-sm font-medium dark:text-white'
                      >
                        Votre message
                      </label>
                      <textarea
                        name='message'
                        rows={5}
                        placeholder='Entrez votre message'
                        className='border-stroke text-body-color dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none'
                      ></textarea>
                    </div>
                  </div>
                  <div className='w-full px-4'>
                    <button className='shadow-submit dark:shadow-submit-dark hover:bg-primary/90 rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300'>
                      Soumettre le ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='w-full px-4 lg:w-5/12 xl:w-4/12 '>
            <NewsLatterBox />
            <div className='relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0'>
              {/* <img
                src={Images.main_image}
                alt="Santé animale"
                className="w-full drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <img
                src={Images.main_image}
                alt="Santé animale (mode sombre)"
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
