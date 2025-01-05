const Projects = () => {
  return (
    <div>
      <div className='grid  grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'>
        <div className='rounded-md bg-card text-card-foreground shadow-sm'>
          <div className='mb-0 flex flex-row items-center gap-3 space-y-1.5 border-b border-none border-border px-4 py-4'>
            <div className='flex-1'>
              <div className='inline-flex items-center rounded-full border border-transparent bg-primary bg-opacity-10 px-2.5 py-0.5 text-xs font-semibold capitalize text-primary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                in progress
              </div>
            </div>
            <div className='flex-none cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                aria-hidden='true'
                role='img'
                className='iconify iconify--heroicons h-[18px] w-[18px] text-yellow-400'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <button
              className='bg-default-200 hover:bg-default-300 inline-flex h-6 w-6 flex-none items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
              type='button'
              id='radix-:r1af:'
              aria-haspopup='menu'
              aria-expanded='false'
              data-state='closed'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-default-700 h-4 w-4'
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </button>
          </div>
          <div className='p-4 pb-5 pt-0'>
            <a href='projects/1/overview'>
              <div className='flex gap-2'>
                <div>
                  <span className='relative flex h-12 w-12 shrink-0 overflow-hidden rounded'>
                    <span className='bg-success/30 text-success flex h-full w-full items-center justify-center rounded text-sm font-semibold uppercase'>
                      Ac
                    </span>
                  </span>
                </div>
                <div>
                  <div className='text-default-900 mb-1 text-base font-semibold capitalize'>
                    Acculance – A POS Application.
                  </div>
                  <div className='text-default-600 max-h-[34px] overflow-hidden text-xs  font-medium'>
                    Acculance stands out as a web application crafted for point
                    of sale, inventory management, &amp; etc.
                  </div>
                </div>
              </div>
            </a>
            <div className='mt-6  flex gap-10'>
              <div className='flex-1'>
                <div className='text-default-900 mb-3 text-sm font-medium'>
                  Team:
                </div>
                <div>
                  <div className='w-max-content avatarGroup relative flex items-center -space-x-3'>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-1.f70409c3.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-2.1136fd53.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-3.d19d606f.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <span className='flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-normal'>
                        +4
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-default-900 mb-3 text-right text-sm font-medium '>
                  Priority:
                </div>
                <div className='bg-info text-info-foreground inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                  low
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='mb-2 flex justify-between'>
                <span className='text-default-900 text-sm font-medium capitalize'>
                  Project Progress:
                </span>
                <span className='text-default-600 text-xs font-medium'>
                  32%
                </span>
              </div>
              <div
                aria-valuemax={100}
                aria-valuemin={0}
                role='progressbar'
                data-state='indeterminate'
                data-max={100}
                className='bg-default-200 relative h-3 overflow-hidden rounded-full [&>div]:bg-primary'
              >
                <div
                  data-state='indeterminate'
                  data-max={100}
                  className='flex h-full w-full flex-1 items-center justify-center transition-all'
                  style={{ transform: 'translateX(-68%)' }}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between border-t p-4'>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Assigned Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                24 June 2023
              </span>
            </div>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Due Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                02 March 2024
              </span>
            </div>
          </div>
        </div>
        <div className='rounded-md bg-card text-card-foreground shadow-sm'>
          <div className='mb-0 flex flex-row items-center gap-3 space-y-1.5 border-b border-none border-border px-4 py-4'>
            <div className='flex-1'>
              <div className='inline-flex items-center rounded-full border border-transparent bg-primary bg-opacity-10 px-2.5 py-0.5 text-xs font-semibold capitalize text-primary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                in progress
              </div>
            </div>
            <div className='flex-none cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                aria-hidden='true'
                role='img'
                className='text-default-400 iconify iconify--heroicons h-[18px] w-[18px]'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z'
                />
              </svg>
            </div>
            <button
              className='bg-default-200 hover:bg-default-300 inline-flex h-6 w-6 flex-none items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
              type='button'
              id='radix-:r1ak:'
              aria-haspopup='menu'
              aria-expanded='false'
              data-state='closed'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-default-700 h-4 w-4'
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </button>
          </div>
          <div className='p-4 pb-5 pt-0'>
            <a href='projects/3/overview'>
              <div className='flex gap-2'>
                <div>
                  <span className='relative flex h-12 w-12 shrink-0 overflow-hidden rounded'>
                    <img
                      className='aspect-square h-full w-full'
                      alt='dfd'
                      src='/_next/static/media/uradvisor.ca52deae.jpg'
                    />
                  </span>
                </div>
                <div>
                  <div className='text-default-900 mb-1 text-base font-semibold capitalize'>
                    UR-Advisor - Online Advisor Tool.
                  </div>
                  <div className='text-default-600 max-h-[34px] overflow-hidden text-xs  font-medium'>
                    UR-Advisor stands as a lightweight quiz/survey web
                    application built on PHP.
                  </div>
                </div>
              </div>
            </a>
            <div className='mt-6  flex gap-10'>
              <div className='flex-1'>
                <div className='text-default-900 mb-3 text-sm font-medium'>
                  Team:
                </div>
                <div>
                  <div className='w-max-content avatarGroup relative flex items-center -space-x-3'>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-9.4871c30c.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-10.ed0e170e.jpg'
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-default-900 mb-3 text-right text-sm font-medium '>
                  Priority:
                </div>
                <div className='bg-info text-info-foreground inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                  low
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='mb-2 flex justify-between'>
                <span className='text-default-900 text-sm font-medium capitalize'>
                  Project Progress:
                </span>
                <span className='text-default-600 text-xs font-medium'>
                  61%
                </span>
              </div>
              <div
                aria-valuemax={100}
                aria-valuemin={0}
                role='progressbar'
                data-state='indeterminate'
                data-max={100}
                className='bg-default-200 relative h-3 overflow-hidden rounded-full [&>div]:bg-primary'
              >
                <div
                  data-state='indeterminate'
                  data-max={100}
                  className='flex h-full w-full flex-1 items-center justify-center transition-all'
                  style={{ transform: 'translateX(-39%)' }}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between border-t p-4'>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Assigned Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                12 Nov 2023
              </span>
            </div>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Due Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                31 May 2024
              </span>
            </div>
          </div>
        </div>
        <div className='rounded-md bg-card text-card-foreground shadow-sm'>
          <div className='mb-0 flex flex-row items-center gap-3 space-y-1.5 border-b border-none border-border px-4 py-4'>
            <div className='flex-1'>
              <div className='bg-success text-success hover:text-success inline-flex items-center rounded-full border border-transparent bg-opacity-10 px-2.5 py-0.5 text-xs font-semibold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                completed
              </div>
            </div>
            <div className='flex-none cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                aria-hidden='true'
                role='img'
                className='text-default-400 iconify iconify--heroicons h-[18px] w-[18px]'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z'
                />
              </svg>
            </div>
            <button
              className='bg-default-200 hover:bg-default-300 inline-flex h-6 w-6 flex-none items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
              type='button'
              id='radix-:r1ap:'
              aria-haspopup='menu'
              aria-expanded='false'
              data-state='closed'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-default-700 h-4 w-4'
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </button>
          </div>
          <div className='p-4 pb-5 pt-0'>
            <a href='projects/4/overview'>
              <div className='flex gap-2'>
                <div>
                  <span className='relative flex h-12 w-12 shrink-0 overflow-hidden rounded'>
                    <img
                      className='aspect-square h-full w-full'
                      alt='ss'
                      src='/_next/static/media/konst.d0ccdc12.jpg'
                    />
                  </span>
                </div>
                <div>
                  <div className='text-default-900 mb-1 text-base font-semibold capitalize'>
                    Konst - Construction Website.
                  </div>
                  <div className='text-default-600 max-h-[34px] overflow-hidden text-xs  font-medium'>
                    Konst professional, clean, creative, corporate, modern, and
                    easy-to-use xd template designed.
                  </div>
                </div>
              </div>
            </a>
            <div className='mt-6  flex gap-10'>
              <div className='flex-1'>
                <div className='text-default-900 mb-3 text-sm font-medium'>
                  Team:
                </div>
                <div>
                  <div className='w-max-content avatarGroup relative flex items-center -space-x-3'>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-11.acd52ead.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-12.a2be90d5.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-13.d324e3e5.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <span className='flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-normal'>
                        +4
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-default-900 mb-3 text-right text-sm font-medium '>
                  Priority:
                </div>
                <div className='inline-flex items-center rounded-full border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold capitalize text-destructive-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                  high
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='mb-2 flex justify-between'>
                <span className='text-default-900 text-sm font-medium capitalize'>
                  Project Progress:
                </span>
                <span className='text-default-600 text-xs font-medium'>
                  100%
                </span>
              </div>
              <div
                aria-valuemax={100}
                aria-valuemin={0}
                role='progressbar'
                data-state='indeterminate'
                data-max={100}
                className='bg-default-200 relative h-3 overflow-hidden rounded-full [&>div]:bg-primary'
              >
                <div
                  data-state='indeterminate'
                  data-max={100}
                  className='flex h-full w-full flex-1 items-center justify-center transition-all'
                  style={{ transform: 'translateX(0%)' }}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between border-t p-4'>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Assigned Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                09 Dec 2022
              </span>
            </div>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Due Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                14 Jan 2024
              </span>
            </div>
          </div>
        </div>
        <div className='rounded-md bg-card text-card-foreground shadow-sm'>
          <div className='mb-0 flex flex-row items-center gap-3 space-y-1.5 border-b border-none border-border px-4 py-4'>
            <div className='flex-1'>
              <div className='bg-warning text-warning hover:text-warning inline-flex items-center rounded-full border border-transparent bg-opacity-10 px-2.5 py-0.5 text-xs font-semibold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                review
              </div>
            </div>
            <div className='flex-none cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                aria-hidden='true'
                role='img'
                className='text-default-400 iconify iconify--heroicons h-[18px] w-[18px]'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z'
                />
              </svg>
            </div>
            <button
              className='bg-default-200 hover:bg-default-300 inline-flex h-6 w-6 flex-none items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
              type='button'
              id='radix-:r1au:'
              aria-haspopup='menu'
              aria-expanded='false'
              data-state='closed'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-default-700 h-4 w-4'
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </button>
          </div>
          <div className='p-4 pb-5 pt-0'>
            <a href='projects/5/overview'>
              <div className='flex gap-2'>
                <div>
                  <span className='relative flex h-12 w-12 shrink-0 overflow-hidden rounded'>
                    <span className='bg-success/30 text-success flex h-full w-full items-center justify-center rounded text-sm font-semibold uppercase'>
                      Da
                    </span>
                  </span>
                </div>
                <div>
                  <div className='text-default-900 mb-1 text-base font-semibold capitalize'>
                    DashCode - Admin Dashboard.
                  </div>
                  <div className='text-default-600 max-h-[34px] overflow-hidden text-xs  font-medium'>
                    DashCode stands out as the fastest and extensive
                    customizable admin dashboard template.
                  </div>
                </div>
              </div>
            </a>
            <div className='mt-6  flex gap-10'>
              <div className='flex-1'>
                <div className='text-default-900 mb-3 text-sm font-medium'>
                  Team:
                </div>
                <div>
                  <div className='w-max-content avatarGroup relative flex items-center -space-x-3'>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-2.1136fd53.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-3.d19d606f.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-4.aff7e3ca.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <span className='flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-normal'>
                        +4
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-default-900 mb-3 text-right text-sm font-medium '>
                  Priority:
                </div>
                <div className='bg-warning text-warning-foreground inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                  medium
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='mb-2 flex justify-between'>
                <span className='text-default-900 text-sm font-medium capitalize'>
                  Project Progress:
                </span>
                <span className='text-default-600 text-xs font-medium'>
                  84%
                </span>
              </div>
              <div
                aria-valuemax={100}
                aria-valuemin={0}
                role='progressbar'
                data-state='indeterminate'
                data-max={100}
                className='bg-default-200 relative h-3 overflow-hidden rounded-full [&>div]:bg-primary'
              >
                <div
                  data-state='indeterminate'
                  data-max={100}
                  className='flex h-full w-full flex-1 items-center justify-center transition-all'
                  style={{ transform: 'translateX(-16%)' }}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between border-t p-4'>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Assigned Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                19 Oct 2023
              </span>
            </div>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Due Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                02 Feb 2024
              </span>
            </div>
          </div>
        </div>
        <div className='rounded-md bg-card text-card-foreground shadow-sm'>
          <div className='mb-0 flex flex-row items-center gap-3 space-y-1.5 border-b border-none border-border px-4 py-4'>
            <div className='flex-1'>
              <div className='bg-success text-success hover:text-success inline-flex items-center rounded-full border border-transparent bg-opacity-10 px-2.5 py-0.5 text-xs font-semibold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                completed
              </div>
            </div>
            <div className='flex-none cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                aria-hidden='true'
                role='img'
                className='text-default-400 iconify iconify--heroicons h-[18px] w-[18px]'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z'
                />
              </svg>
            </div>
            <button
              className='bg-default-200 hover:bg-default-300 inline-flex h-6 w-6 flex-none items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
              type='button'
              id='radix-:r1b3:'
              aria-haspopup='menu'
              aria-expanded='false'
              data-state='closed'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-default-700 h-4 w-4'
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </button>
          </div>
          <div className='p-4 pb-5 pt-0'>
            <a href='projects/6/overview'>
              <div className='flex gap-2'>
                <div>
                  <span className='relative flex h-12 w-12 shrink-0 overflow-hidden rounded'>
                    <img
                      className='aspect-square h-full w-full'
                      alt='ee'
                      src='/_next/static/media/ass.79ab648d.jpg'
                    />
                  </span>
                </div>
                <div>
                  <div className='text-default-900 mb-1 text-base font-semibold capitalize'>
                    Acculance SaaS - POS System.
                  </div>
                  <div className='text-default-600 max-h-[34px] overflow-hidden text-xs  font-medium'>
                    Create a Brand logo design for a DashTail Admin. Total 21/25
                    tasks logo design for completed.
                  </div>
                </div>
              </div>
            </a>
            <div className='mt-6  flex gap-10'>
              <div className='flex-1'>
                <div className='text-default-900 mb-3 text-sm font-medium'>
                  Team:
                </div>
                <div>
                  <div className='w-max-content avatarGroup relative flex items-center -space-x-3'>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-6.513b01f7.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-7.82cf057d.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <img
                        className='aspect-square h-full w-full'
                        src='/_next/static/media/avatar-8.943d4e6b.jpg'
                      />
                    </span>
                    <span className='relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background'>
                      <span className='flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-normal'>
                        +4
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-default-900 mb-3 text-right text-sm font-medium '>
                  Priority:
                </div>
                <div className='inline-flex items-center rounded-full border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold capitalize text-destructive-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                  high
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='mb-2 flex justify-between'>
                <span className='text-default-900 text-sm font-medium capitalize'>
                  Project Progress:
                </span>
                <span className='text-default-600 text-xs font-medium'>
                  100%
                </span>
              </div>
              <div
                aria-valuemax={100}
                aria-valuemin={0}
                role='progressbar'
                data-state='indeterminate'
                data-max={100}
                className='bg-default-200 relative h-3 overflow-hidden rounded-full [&>div]:bg-primary'
              >
                <div
                  data-state='indeterminate'
                  data-max={100}
                  className='flex h-full w-full flex-1 items-center justify-center transition-all'
                  style={{ transform: 'translateX(0%)' }}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between border-t p-4'>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Assigned Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                26 Aug 2023
              </span>
            </div>
            <div>
              <div className='text-default-600  mb-[2px] text-xs'>
                Due Date:
              </div>
              <span className='text-default-900 text-xs font-medium'>
                31 Jan 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
