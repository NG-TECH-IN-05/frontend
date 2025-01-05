import React from 'react'

const Login2 = () => {
  return (
    <div dir='ltr'>
      <div>
        <div className='loginwrapper  flex  items-center  justify-center bg-primary '>
          <div className='m-4 my-10 flex w-fit flex-col justify-center gap-4 overflow-hidden rounded-3xl bg-background p-10 xl:w-[calc(100vw-80px)]   2xl:my-20  2xl:w-[calc(100vw-160px)] 2xl:px-20 2xl:py-24 '>
            <div className='relative  rounded-xl'>
              <div className='flex w-full flex-col items-center gap-y-12 xl:flex-row'>
                <div className='w-full basis-full xl:basis-1/2'>
                  <div className='relative  z-20  w-full xl:w-[480px]'>
                    <div className='w-full py-5 lg:py-10'>
                      <a className='inline-block' href='/dashboard'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-10 w-10 text-primary 2xl:h-14 2xl:w-14'
                        >
                          <g fill='currentColor' clip-path='url(#logo_svg__a)'>
                            <path d='M0 18.383c0-1.505 1.194-2.724 2.667-2.724H18v2.043c0 1.504-1.194 2.723-2.667 2.723H0zM9.333 32c-1.472 0-2.666-1.22-2.666-2.723v-8.17h2c1.472 0 2.666 1.219 2.666 2.723V32zM0 0h18.667C26.03 0 32 6.097 32 13.617H0zM16 32c2.101 0 4.182-.423 6.123-1.244a16 16 0 0 0 5.19-3.542 16.4 16.4 0 0 0 3.47-5.302A16.6 16.6 0 0 0 32 15.66h-9.159c0 .918-.177 1.826-.52 2.674a7 7 0 0 1-1.484 2.267 6.8 6.8 0 0 1-2.219 1.514c-.83.351-1.72.532-2.618.532z'></path>
                          </g>
                          <defs>
                            <clipPath id='logo_svg__a'>
                              <path fill='#fff' d='M0 0h32v32H0z'></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <div className='text-default-900 mt-6 text-2xl font-bold 2xl:mt-8 2xl:text-3xl'>
                        Forget Your Password?
                      </div>
                      <div className='text-default-600 mt-2 text-base leading-6 2xl:text-lg'>
                        Enter your email &amp; instructions will be sent to you!
                      </div>
                      <form className='mt-5 xl:mt-7'>
                        <div>
                          <label
                            className='text-default-600 mb-2 inline-block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
                            htmlFor='email'
                          >
                            Email{' '}
                          </label>
                          <div className='w-full flex-1'>
                            <input
                              type='email'
                              className='dark:border-700 text-default-500 disabled:bg-default-200 placeholder:text-accent-foreground/50 h-10 w-full rounded-lg border border-destructive bg-background px-3 text-sm transition duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium read-only:bg-background read-only:leading-10 focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
                              id='email'
                              name='email'
                            />
                          </div>
                          <div className=' mt-2 text-destructive'>
                            Your email is invalid.
                          </div>
                        </div>
                        <button className='hover:bg-primary/80 mt-6 inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'>
                          Send Recovery Email
                        </button>
                      </form>
                      <div className='text-default-600 mt-5 text-center text-base 2xl:mt-8'>
                        Forget it. Send me back to{' '}
                        <a className='text-primary' href='/auth/login5'>
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative hidden w-[500px] basis-full xl:block xl:basis-1/2 '>
                  <svg
                    className='absolute -right-0 top-0 '
                    width='1208'
                    height='580'
                    viewBox='0 0 1208 1080'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g filter='url(#filter0_f_4801_13605)'>
                      <circle
                        cx='604'
                        cy='565'
                        r='404'
                        fill='url(#paint0_radial_4801_13605)'
                      ></circle>
                    </g>
                    <defs>
                      <filter
                        id='filter0_f_4801_13605'
                        x='0'
                        y='-39'
                        width='1208'
                        height='1208'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                      >
                        <feFlood
                          flood-opacity='0'
                          result='BackgroundImageFix'
                        ></feFlood>
                        <feBlend
                          mode='normal'
                          in='SourceGraphic'
                          in2='BackgroundImageFix'
                          result='shape'
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation='100'
                          result='effect1_foregroundBlur_4801_13605'
                        ></feGaussianBlur>
                      </filter>
                      <radialGradient
                        id='paint0_radial_4801_13605'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(805.322 373.168) rotate(134.675) scale(1098.13)'
                      >
                        <stop stop-color='#826AF9' stop-opacity='0.6'></stop>
                        <stop
                          offset='1'
                          stop-color='#826AF9'
                          stop-opacity='0'
                        ></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  <div className='relative h-full w-full overflow-hidden rounded-3xl  rounded-tr-none bg-primary xl:p-[60px]  xl:pr-9'>
                    <svg
                      className='[&amp;>*]:fill-background absolute -right-6 -top-[25px] hidden lg:block'
                      width='209'
                      height='162'
                      viewBox='0 0 209 162'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M62 25H0V0H209V162H185C184.317 129.162 169.576 122.271 158.235 120.921H121.512C100.402 119.676 90.7287 104.351 90.7287 93.7286V57.8571C89.4326 35.64 71.0009 26.7357 62 25Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                    <div className='text-2xl font-semibold text-primary-foreground lg:text-3xl xl:text-5xl rtl:pr-16 '>
                      What’s Our <span className='xl:block'></span>Clients
                      Say...
                    </div>
                    <div className='mt-2  flex gap-1 text-xl text-primary-foreground rtl:pr-12'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--bi text-2xl text-primary-foreground'
                          width='1em'
                          height='1em'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fill='currentColor'
                            d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'
                          ></path>
                        </svg>
                      </span>
                      DashTail is awesome friendly Admin Dashboard Template. If
                      you manage your business in online then “DashTail” is for
                      you. Buy Now &amp; make user friendly your business
                      today...
                    </div>
                    <div className='relative mt-11 w-full  overflow-hidden rounded-3xl  rounded-tr-none bg-card pb-7 pt-8 ltr:pl-4 rtl:pr-10'>
                      <div className='absolute right-0 top-0  z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-background'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-12 w-12 text-yellow-400'
                          width='1em'
                          height='1em'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393l3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39l.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574l-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293l1.41-3.393A.75.75 0 0 1 8 1.75'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                      <svg
                        className='[&amp;>*]:fill-primary absolute -right-6 -top-[25px]'
                        width='209'
                        height='162'
                        viewBox='0 0 209 162'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M62 25H0V0H209V162H185C184.317 129.162 169.576 122.271 158.235 120.921H121.512C100.402 119.676 90.7287 104.351 90.7287 93.7286V57.8571C89.4326 35.64 71.0009 26.7357 62 25Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                      <div className='w-[90%]'>
                        <div
                          className='swiper swiper-initialized swiper-horizontal swiper-backface-hidden h-full w-full rounded-2xl'
                          dir='ltr'
                          style={{}}
                        >
                          <div className='swiper-wrapper'>
                            <div
                              className='swiper-slide swiper-slide-active'
                              style={{ width: '413px' }}
                            >
                              <div className='pb-10 ltr:pl-4 rtl:pr-10'>
                                <div className='text-default-900 pr-10  text-lg font-semibold lg:text-xl '>
                                  Prantik Chakraborty <br />
                                  <span className='text-default-700 text-base font-medium'>
                                    {' '}
                                    UI/UX Designer at Codeshaper
                                  </span>
                                </div>
                                <div className='text-default-800  mt-4 text-lg'>
                                  The key metric of whether you've succeeded is
                                  what fraction of your employees use that
                                  dashboard everyday.
                                </div>
                              </div>
                            </div>
                            <div
                              className='swiper-slide swiper-slide-next'
                              style={{ width: '413px' }}
                            >
                              <div className='pb-10 ltr:pl-4 rtl:pr-10'>
                                <div className='text-default-900 pr-10  text-lg font-semibold lg:text-xl '>
                                  Prantik Chakraborty <br />
                                  <span className='text-default-700 text-base font-medium'>
                                    {' '}
                                    UI/UX Designer at Codeshaper
                                  </span>
                                </div>
                                <div className='text-default-800  mt-4 text-lg'>
                                  The key metric of whether you've succeeded is
                                  what fraction of your employees use that
                                  dashboard everyday.
                                </div>
                              </div>
                            </div>
                            <div
                              className='swiper-slide'
                              style={{ width: '413px' }}
                            >
                              <div className='pb-10 ltr:pl-4 rtl:pr-10'>
                                <div className='text-default-900 pr-10  text-lg font-semibold lg:text-xl '>
                                  Prantik Chakraborty <br />
                                  <span className='text-default-700 text-base font-medium'>
                                    {' '}
                                    UI/UX Designer at Codeshaper
                                  </span>
                                </div>
                                <div className='text-default-800  mt-4 text-lg'>
                                  The key metric of whether you've succeeded is
                                  what fraction of your employees use that
                                  dashboard everyday.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
                            <span className='swiper-pagination-bullet swiper-pagination-bullet-active'></span>
                            <span className='swiper-pagination-bullet'></span>
                            <span className='swiper-pagination-bullet'></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login2
