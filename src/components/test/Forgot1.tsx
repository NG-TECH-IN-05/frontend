const Forgot1 = () => {
  return (
    <div>
      <div className='h-full'>
        <div dir='ltr'>
          <div>
            <div className='flex min-h-screen w-full items-center overflow-hidden bg-background'>
              <div className='flex min-h-screen w-full basis-full flex-wrap justify-center overflow-y-auto'>
                <div className='from-primary-600 via-primary-400 to-primary-600 relative hidden w-full basis-1/2 items-center justify-center bg-primary bg-gradient-to-br xl:flex'>
                  <img
                    alt='image'
                    loading='lazy'
                    width='960'
                    height='1080'
                    decoding='async'
                    data-nimg='1'
                    className='absolute left-0 top-0 h-full w-full'
                    style={{ color: 'transparent' }}
                    srcSet='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fline.c2493fdc.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fline.c2493fdc.png&amp;w=1920&amp;q=75 2x'
                    src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fline.c2493fdc.png&amp;w=1920&amp;q=75'
                  />
                  <div className='bg-primary-foreground/40 relative z-10 max-w-[640px] rounded px-16 py-14 backdrop-blur 2xl:py-[84px] 2xl:pl-[50px] 2xl:pr-[136px]'>
                    <div>
                      <button className='inline-flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-md bg-transparent p-0 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons -ml-2 h-[78px] w-[78px] text-primary-foreground'
                          width='1em'
                          height='1em'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            fillRule='evenodd'
                            d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </button>
                      <div className='mt-2.5 text-4xl font-semibold leading-[50px] 2xl:text-6xl 2xl:leading-[72px]'>
                        <span className='text-default-600 dark:text-default-300'>
                          Unlock <br />
                          Your Project <br />
                        </span>
                        <span className='text-default-900 dark:text-default-50'>
                          Performance
                        </span>
                      </div>
                      <div className='text-default-900 dark:text-default-200 mt-5 text-2xl font-medium 2xl:mt-8'>
                        You will never know everything. <br />
                        But you will know more...
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' flex min-h-screen w-full basis-full items-center justify-center px-4 py-5 md:basis-1/2'>
                  <div className='lg:w-[480px]'>
                    <div className='w-full'>
                      <a className='inline-block' href='/dashboard'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-10 w-10 text-primary 2xl:h-14 2xl:w-14'
                        >
                          <g fill='currentColor' clipPath='url(#logo_svg__a)'>
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
                              className='dark:border-700 border-default-300 text-default-500 disabled:bg-default-200 placeholder:text-accent-foreground/50 h-10 w-full rounded-lg border bg-background px-3 text-sm transition duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium read-only:bg-background read-only:leading-10 focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
                              id='email'
                              name='email'
                            />
                          </div>
                        </div>
                        <button className='hover:bg-primary/80 mt-6 inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'>
                          Send Recovery Email
                        </button>
                      </form>
                      <div className='text-default-600 mt-5 text-center text-base 2xl:mt-8'>
                        Forget it. Send me back to{' '}
                        <a className='text-primary' href='/auth/login'>
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role='region'
          aria-label='Notifications (F8)'
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        >
          <ol
            tabIndex={-1}
            className='fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]'
          ></ol>
        </div>
      </div>
    </div>
  )
}

export default Forgot1
