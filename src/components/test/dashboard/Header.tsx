const Header = () => {
  return (
    <div>
      <header className='has-sticky-header sticky top-6 z-50 rounded-md ltr:xl:ml-[272px] rtl:xl:mr-[272px]'>
        <div className='mx-4 xl:mx-20'>
          <div className='bg-card/90 my-6 w-full rounded-md border-b px-[15px] py-3 shadow-md backdrop-blur-lg md:px-6'>
            <div className='flex h-full items-center justify-between'>
              <div className='flex items-center gap-3 md:gap-6'>
                <button className='group relative  opacity-50 disabled:cursor-not-allowed'>
                  <div>
                    <div className='flex h-[16px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300'>
                      <div className='h-[2px] w-7 origin-left transform bg-card-foreground transition-all delay-150 duration-300'></div>
                      <div className='h-[2px] w-7 transform rounded bg-card-foreground transition-all duration-300'></div>
                      <div className='h-[2px] w-7 origin-left transform bg-card-foreground transition-all delay-150 duration-300'></div>
                    </div>
                  </div>
                </button>
                <div>
                  <button className=' text-default-600  inline-flex items-center gap-2 text-sm'>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className=' h-4 w-4'
                      >
                        <circle cx='11' cy='11' r='8'></circle>
                        <path d='m21 21-4.3-4.3'></path>
                      </svg>
                    </span>
                    <span className=' hidden md:block'> Search...</span>
                  </button>
                </div>
              </div>
              <div className='nav-tools flex items-center  gap-2'>
                <button
                  className='inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-[10px] text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
                  id='radix-:rrd:'
                  aria-haspopup='menu'
                  aria-expanded='false'
                  data-state='closed'
                >
                  <span className='me-1.5 h-6 w-6 rounded-full'>
                    <img
                      alt=''
                      loading='lazy'
                      width='100'
                      height='53'
                      decoding='async'
                      data-nimg='1'
                      className='h-full w-full rounded-full object-cover'
                      src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflag-1.cefcb2cf.png&amp;w=256&amp;q=75'
                    />
                  </span>
                  <span className='text-default-600 text-sm capitalize'>
                    en
                  </span>
                </button>
                <button
                  className='hover:bg-default-100 dark:hover:bg-default-200 data-[state=open]:bg-default-100 dark:data-[state=open]:bg-default-200 text-default-500 dark:text-default-800 relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 md:h-9 md:w-9'
                  data-state='closed'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='h-5 w-5'
                  >
                    <path
                      fill='currentColor'
                      d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2'
                      opacity='0.35'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M2.75 9.97c-.41 0-.75-.33-.75-.75V6.91C2 4.2 4.2 2 6.91 2h2.31a.749.749 0 1 1 0 1.5H6.91C5.03 3.5 3.5 5.03 3.5 6.91v2.31c0 .42-.34.75-.75.75M21.25 9.97c-.41 0-.75-.34-.75-.75V6.91c0-1.88-1.53-3.41-3.41-3.41h-2.31a.749.749 0 1 1 0-1.5h2.31C19.8 2 22 4.2 22 6.91v2.31c0 .42-.34.75-.75.75M17.09 22H15.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.39c1.88 0 3.41-1.53 3.41-3.41V15.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39C22 19.8 19.8 22 17.09 22M9.22 22H6.91C4.2 22 2 19.8 2 17.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31c0 1.88 1.53 3.41 3.41 3.41h2.31a.749.749 0 1 1 0 1.5'
                    ></path>
                  </svg>
                </button>
                <button
                  className='hover:bg-default-100 dark:hover:bg-default-200 data-[state=open]:bg-default-100 dark:data-[state=open]:bg-default-200 text-default-500 dark:text-default-800 relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 md:h-9 md:w-9'
                  id='radix-:rrg:'
                  aria-haspopup='menu'
                  aria-expanded='false'
                  data-state='closed'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 21'
                    className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
                  >
                    <path
                      fill='currentColor'
                      d='M10 15.592a5.093 5.093 0 1 0 0-10.185 5.093 5.093 0 0 0 0 10.185'
                    ></path>
                    <g fill='currentColor' opacity='0.35'>
                      <path d='M8.472 2.86c0-.875.561-1.52 1.437-1.527h.182c.876.007 1.437.652 1.437 1.528s-.561 1.52-1.437 1.527h-.182c-.876-.006-1.437-.651-1.437-1.527M8.472 18.138c0 .876.561 1.521 1.437 1.528h.181c.877-.007 1.438-.652 1.438-1.528s-.561-1.52-1.437-1.527h-.182c-.876.006-1.437.65-1.437 1.527M14.321 4.018c.62-.62 1.472-.68 2.096-.064l.065.064.064.064c.615.624.555 1.477-.064 2.096-.62.62-1.472.68-2.096.064l-.129-.128c-.615-.624-.555-1.477.064-2.096M3.518 14.821c-.62.62-.679 1.472-.064 2.096l.129.129c.624.615 1.476.555 2.096-.064.62-.62.679-1.472.064-2.096l-.129-.129c-.624-.615-1.476-.555-2.096.064M2.361 12.027c-.876 0-1.52-.56-1.527-1.437v-.181c.006-.877.65-1.437 1.527-1.437s1.521.56 1.528 1.437v.181c-.007.876-.652 1.437-1.528 1.437M17.639 12.027c.876 0 1.52-.56 1.527-1.437v-.181c-.006-.877-.65-1.437-1.527-1.437s-1.521.56-1.528 1.437v.181c.007.876.652 1.437 1.528 1.437M3.518 6.178c-.62-.62-.679-1.472-.064-2.096l.129-.128c.624-.615 1.476-.556 2.096.064s.679 1.472.064 2.096l-.129.128c-.624.615-1.476.556-2.096-.064M14.321 16.982c.62.62 1.472.679 2.096.064l.129-.129c.615-.624.555-1.476-.064-2.096-.62-.62-1.472-.679-2.096-.064l-.129.129c-.615.624-.555 1.476.064 2.096'></path>
                    </g>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
                  >
                    <path
                      fill='currentColor'
                      d='M9 19c0 .84.13 1.66.37 2.42-3.84-1.33-6.74-4.86-7.04-8.99-.3-4.39 2.23-8.49 6.32-10.21 1.06-.44 1.6-.12 1.83.11.22.22.53.75.09 1.76a8.2 8.2 0 0 0-.67 3.28c.01 2.04.81 3.93 2.11 5.38A7.99 7.99 0 0 0 9 19'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M21.21 17.72a10.5 10.5 0 0 1-8.47 4.27c-.16 0-.32-.01-.48-.02-1-.04-1.97-.23-2.89-.55C9.13 20.66 9 19.84 9 19c0-2.53 1.18-4.79 3.01-6.25a8.4 8.4 0 0 0 5.91 2.82c.63.03 1.26-.02 1.88-.13 1.12-.2 1.57.22 1.73.49.17.27.35.86-.32 1.79'
                      opacity='0.4'
                    ></path>
                  </svg>
                </button>
                <button
                  className='hover:bg-default-100 dark:hover:bg-default-200 data-[state=open]:bg-default-100 dark:data-[state=open]:bg-default-200 text-default-500 dark:text-default-800 relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 md:h-9 md:w-9'
                  id='radix-:rri:'
                  aria-haspopup='menu'
                  aria-expanded='false'
                  data-state='closed'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                    className='h-5 w-5 '
                  >
                    <path
                      fill='currentColor'
                      d='M3.333 8.296V4.167a2.5 2.5 0 0 1 2.5-2.5h8.334a2.5 2.5 0 0 1 2.5 2.5v4.13c0 .545-.266 1.055-.722 1.354-1.41.924-4.52 2.85-5.945 2.85s-4.535-1.926-5.945-2.85a1.61 1.61 0 0 1-.722-1.355'
                      opacity='0.35'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M3.333 5.209c-.425.315-.8.603-1.101.839-.502.392-.816.97-.859 1.606-.058.865-.124 2.316-.124 4.43 0 1.997.119 3.404.23 4.282.09.724.575 1.298 1.29 1.446 1.146.237 3.334.521 7.23.521s6.085-.284 7.23-.521c.716-.148 1.2-.722 1.291-1.446.111-.878.23-2.285.23-4.283 0-2.113-.067-3.564-.125-4.429a2.23 2.23 0 0 0-.858-1.606 56 56 0 0 0-1.101-.839v3.087c0 .545-.265 1.055-.722 1.354-1.41.925-4.52 2.85-5.945 2.85s-4.534-1.925-5.945-2.85a1.61 1.61 0 0 1-.721-1.354z'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M5.833 4.792c0-.345.28-.625.625-.625h3.75a.625.625 0 1 1 0 1.25h-3.75a.625.625 0 0 1-.625-.625M5.833 7.708c0-.345.28-.625.625-.625h6.25a.625.625 0 1 1 0 1.25h-6.25a.625.625 0 0 1-.625-.625'
                    ></path>
                  </svg>
                  <div className='absolute bottom-[calc(100%-16px)] left-[calc(100%-18px)] inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent bg-primary p-0 text-xs font-medium text-primary-foreground ring-2 ring-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                    1
                  </div>
                </button>
                <button
                  className='hover:bg-default-100 dark:hover:bg-default-200 data-[state=open]:bg-default-100 dark:data-[state=open]:bg-default-200 text-default-500 dark:text-default-800 relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 md:h-9 md:w-9'
                  id='radix-:rrk:'
                  aria-haspopup='menu'
                  aria-expanded='false'
                  data-state='closed'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 21'
                    className='h-5 w-5 '
                  >
                    <path
                      fill='currentColor'
                      d='M15.625 8v.587c0 .704.2 1.392.577 1.978l.923 1.436c.843 1.312.2 3.094-1.267 3.508a21.5 21.5 0 0 1-11.716 0c-1.466-.414-2.11-2.196-1.267-3.508l.923-1.436a3.66 3.66 0 0 0 .578-1.978V8c0-3.221 2.518-5.833 5.624-5.833S15.625 4.779 15.625 8'
                      opacity='0.35'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M10.625 5.5a.625.625 0 0 0-1.25 0v3.333a.625.625 0 0 0 1.25 0zm-4.59 10.454a4.168 4.168 0 0 0 7.928 0 21.5 21.5 0 0 1-7.927 0'
                    ></path>
                  </svg>
                  <div className='absolute bottom-[calc(100%-16px)] left-[calc(100%-18px)] inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent bg-primary p-0 text-xs font-medium text-primary-foreground ring-2 ring-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                    5
                  </div>
                </button>
                <div className='ltr:pl-2 rtl:pr-2'>
                  <div
                    className=' flex  cursor-pointer items-center  '
                    id='radix-:rrm:'
                    aria-haspopup='menu'
                    aria-expanded='false'
                    data-state='closed'
                  >
                    <img
                      alt='dashtail'
                      loading='lazy'
                      width='36'
                      height='36'
                      decoding='async'
                      data-nimg='1'
                      className='rounded-full'
                      src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.d19d606f.jpg&amp;w=96&amp;q=75'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
