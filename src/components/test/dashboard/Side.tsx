const Side = () => {
  return (
    <div className='relative'>
      <div className='fixed  top-0 m-6 w-[248px] rounded-md border-r bg-card'>
        <div
          className=' absolute left-0 top-0   z-[-1] h-full w-full bg-cover bg-center opacity-[0.07]'
          style={{
            backgroundImage: 'url("/images/all-img/img-2.jpeg")',
          }}
        ></div>
        <div className='px-4 py-4 '>
          <div className=' flex items-center'>
            <div className='flex flex-1 items-center gap-x-3  '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 32 32'
                className='h-8 w-8 text-primary'
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
              <div className='flex-1  text-xl font-semibold  text-primary'>
                DashTail
              </div>
            </div>
          </div>
        </div>
        <div
          data-orientation='horizontal'
          role='none'
          className='h-[1px] w-full shrink-0 bg-border'
        ></div>
        <div
          dir='ltr'
          className='sidebar-menu relative h-[calc(100%-80px)] overflow-hidden px-4'
          style={{
            position: 'relative',
            //   '--radix-scroll-area-corner-width': '0px',
            //   '--radix-scroll-area-corner-height': '0px',
          }}
        >
          <div
            data-radix-scroll-area-viewport=''
            className='h-full w-full rounded-[inherit]'
            style={{ overflow: 'scroll' }}
          >
            <div
              style={{
                minWidth: '100%',
                display: 'table',
              }}
            >
              <ul dir='ltr' className='space-y-1'>
                <li>
                  <div className='text-default-900 mb-3 mt-4 text-xs font-semibold uppercase'>
                    menu
                  </div>
                </li>
                <li>
                  <div className='group flex cursor-pointer rounded bg-primary px-[10px] py-3 text-sm font-medium capitalize text-primary-foreground transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M28.054 9.587 16.001 16.56 3.948 9.587C4.48 8.6 5.254 7.734 6.12 7.254l7.12-3.947c1.52-.853 4-.853 5.52 0l7.12 3.947c.866.48 1.64 1.346 2.173 2.333'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M16 16.56v12.774c-1 0-2-.214-2.76-.64l-7.12-3.947c-1.612-.893-2.932-3.133-2.932-4.973v-7.547c0-.853.293-1.787.76-2.64z'
                            opacity='0.5'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M28.814 12.227v7.547c0 1.84-1.32 4.08-2.933 4.973l-7.12 3.947c-.76.426-1.76.64-2.76.64V16.56l12.053-6.973c.467.853.76 1.787.76 2.64'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>dashboard</div>
                    </div>
                    <div className='flex-0'>
                      <div className='flex rotate-90 items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='open'>
                    <div
                      data-state='open'
                      id='radix-:rt4:'
                      className='CollapsibleContent'
                    >
                      <ul className='sub-menu  before:bg-primary/10 relative space-y-4 before:absolute before:left-4  before:top-0  before:h-[calc(100%-5px)] before:w-[3px] before:rounded'>
                        <li className='relative block pl-9 before:absolute before:left-4 before:top-0 before:h-full before:w-[3px] before:bg-primary first:pt-4 first:before:top-4 first:before:h-[calc(100%-16px)] last:pb-4'>
                          <a href='/dashboard'>
                            <div className='flex items-center gap-3 rounded text-sm font-normal capitalize text-primary transition-all duration-150 dark:hover:text-primary'>
                              <span className='flex-1 truncate'>analytics</span>
                            </div>
                          </a>
                        </li>
                        <li className='relative block pl-9 before:absolute before:left-4 before:top-0 before:w-[3px] first:pt-4 first:before:top-4 last:pb-4'>
                          <a href='/ecommerce'>
                            <div className='text-default-600 dark:text-default-700 flex items-center gap-3 rounded text-sm font-normal capitalize transition-all duration-150 dark:hover:text-primary'>
                              <span className='flex-1 truncate'>ecommerce</span>
                            </div>
                          </a>
                        </li>
                        <li className='relative block pl-9 before:absolute before:left-4 before:top-0 before:w-[3px] first:pt-4 first:before:top-4 last:pb-4'>
                          <a href='/project'>
                            <div className='text-default-600 dark:text-default-700 flex items-center gap-3 rounded text-sm font-normal capitalize transition-all duration-150 dark:hover:text-primary'>
                              <span className='flex-1 truncate'>Project </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-default-900 mb-3 mt-4 text-xs font-semibold uppercase'>
                    application
                  </div>
                </li>
                <li>
                  <a href='/chat'>
                    <div className='text-default-700 flex cursor-pointer gap-3 rounded px-[10px] py-3 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground'>
                      <span className='flex-grow-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M3.436 1.87c.995-.102 2.651-.203 5.314-.203s4.319.1 5.314.203c.85.088 1.47.718 1.567 1.567.102.886.202 2.224.202 4.063 0 1.84-.1 3.177-.202 4.063-.098.85-.716 1.48-1.567 1.568-.879.09-2.273.18-4.421.199a1.26 1.26 0 0 0-.887.373l-1.41 1.43c-.611.62-1.669.26-1.775-.605l-.111-.91a.42.42 0 0 0-.397-.367 33 33 0 0 1-1.626-.12c-.85-.088-1.47-.719-1.568-1.568-.102-.886-.202-2.224-.202-4.063s.1-3.177.202-4.063c.098-.849.717-1.48 1.567-1.567M5.833 5a.833.833 0 1 0 0 1.667h5.834a.833.833 0 1 0 0-1.667zm0 3.75a.833.833 0 1 0 0 1.667h3.334a.833.833 0 1 0 0-1.667z'
                            clip-rule='evenodd'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M5 5.833c0-.46.372-.833.833-.833h5.833a.833.833 0 0 1 0 1.667H5.833a.833.833 0 0 1-.834-.834M5 9.583c0-.46.372-.833.833-.833h3.333a.833.833 0 1 1 0 1.667H5.833a.833.833 0 0 1-.834-.834M8.355 14.11l.4-.406c.234-.238.554-.371.887-.374 2.148-.02 3.543-.109 4.422-.2.85-.087 1.469-.718 1.566-1.567.067-.578.133-1.35.17-2.329.423.025.756.055 1.015.084.52.059.903.435.968.956.068.544.133 1.393.133 2.643s-.065 2.1-.133 2.643c-.065.521-.448.897-.969.956-.348.04-.83.079-1.484.108a.42.42 0 0 0-.394.337l-.143.722a.625.625 0 0 1-1.026.348l-1.207-1.065a1.27 1.27 0 0 0-.81-.314 27 27 0 0 1-2.315-.136 1.07 1.07 0 0 1-.969-.955 17 17 0 0 1-.111-1.452'
                          ></path>
                        </svg>
                      </span>
                      <div className='text-box flex-grow '>chat</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='/email'>
                    <div className='text-default-700 flex cursor-pointer gap-3 rounded px-[10px] py-3 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground'>
                      <span className='flex-grow-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
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
                      </span>
                      <div className='text-box flex-grow '>email</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='/kanban'>
                    <div className='text-default-700 flex cursor-pointer gap-3 rounded px-[10px] py-3 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground'>
                      <span className='flex-grow-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M18.333 8.75c0 2.255-.06 4.022-.117 5.168-.038.781-.794 1.341-1.568 1.237-1.27-.171-3.415-.363-6.648-.363s-5.377.192-6.648.363c-.774.104-1.53-.456-1.568-1.237a107 107 0 0 1-.117-5.168c0-2.255.06-4.021.117-5.168.038-.78.794-1.34 1.568-1.236 1.27.17 3.416.363 6.648.363 3.233 0 5.378-.192 6.648-.363.774-.105 1.53.456 1.568 1.236.056 1.147.117 2.913.117 5.168'
                            opacity='0.32'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M4.659 15.008a27 27 0 0 0-.779 2.075c-.073.227.064.465.3.488.387.038.8.02 1.116-.007.345-.03.647-.227.834-.517.492-.762.969-1.556 1.352-2.213-1.123.04-2.059.103-2.823.174M12.518 14.834c.383.657.86 1.451 1.352 2.213.187.29.49.487.834.517a6.4 6.4 0 0 0 1.116.007c.237-.023.373-.262.3-.488a27 27 0 0 0-.779-2.075c-.764-.07-1.7-.134-2.823-.174'
                          ></path>
                        </svg>
                      </span>
                      <div className='text-box flex-grow '>kanban</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='/task'>
                    <div className='text-default-700 flex cursor-pointer gap-3 rounded px-[10px] py-3 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground'>
                      <span className='flex-grow-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 18 18'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M12.492.667H5.508C2.475.667.667 2.475.667 5.509v6.983c0 3.033 1.808 4.842 4.841 4.842h6.984c3.033 0 4.841-1.809 4.841-4.842V5.509c0-3.034-1.808-4.842-4.841-4.842'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='#475569'
                            d='M14.258 6.392a.624.624 0 0 1-.625.625H9.258a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h4.375c.35 0 .625.283.625.625M7.308 5.584 5.433 7.46a.62.62 0 0 1-.441.183.6.6 0 0 1-.442-.183l-.625-.625a.614.614 0 0 1 0-.883.63.63 0 0 1 .883 0l.184.183 1.433-1.433a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883M14.258 12.226a.624.624 0 0 1-.625.625H9.258a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h4.375c.35 0 .625.283.625.625M7.308 11.417l-1.875 1.875a.62.62 0 0 1-.441.184.6.6 0 0 1-.442-.184l-.625-.625a.614.614 0 0 1 0-.883.63.63 0 0 1 .883 0l.184.183 1.433-1.433a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883'
                          ></path>
                        </svg>
                      </span>
                      <div className='text-box flex-grow '>task</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='/calendar'>
                    <div className='text-default-700 flex cursor-pointer gap-3 rounded px-[10px] py-3 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground'>
                      <span className='flex-grow-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M5.8 1.667c.348 0 .63.258.63.577v1.165c.558-.01 1.185-.01 1.89-.01h3.36c.705 0 1.33 0 1.89.01V2.244c0-.319.282-.577.63-.577s.63.258.63.577v1.215c1.208.088 2.003.306 2.586.84s.82 1.26.917 2.368V7.5H1.667v-.833c.096-1.108.334-1.833.917-2.368.584-.534 1.377-.752 2.586-.84V2.244c0-.319.283-.577.63-.577'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M18.333 11.667V10c0-.7-.01-1.946-.021-2.5H1.672c-.011.554 0 1.8 0 2.5v1.667c0 3.142 0 4.714.975 5.69.977.976 2.548.976 5.69.976h3.333c3.142 0 4.712 0 5.688-.976.975-.976.975-2.548.975-5.69'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M15 13.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0'
                          ></path>
                        </svg>
                      </span>
                      <div className='text-box flex-grow '>calendar</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='/projects'>
                    <div className='text-default-700 flex cursor-pointer gap-3 rounded px-[10px] py-3 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground'>
                      <span className='flex-grow-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M16.667 6.875V15c0 2.5-1.492 3.334-3.334 3.334H6.667c-1.842 0-3.334-.834-3.334-3.334V6.875c0-2.708 1.492-3.333 3.334-3.333 0 .517.208.983.55 1.325.341.342.808.55 1.325.55h2.916a1.88 1.88 0 0 0 1.875-1.875c1.842 0 3.334.625 3.334 3.333'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M13.333 3.542a1.88 1.88 0 0 1-1.875 1.875H8.542c-.517 0-.984-.208-1.325-.55a1.86 1.86 0 0 1-.55-1.325c0-1.033.841-1.875 1.875-1.875h2.916c.517 0 .984.208 1.325.55.342.342.55.808.55 1.325M10 11.458H6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625H10a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M13.333 14.792H6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h6.666a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625'
                          ></path>
                        </svg>
                      </span>
                      <div className='text-box flex-grow '>project</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className='text-default-900 mb-3 mt-4 text-xs font-semibold uppercase'>
                    pages
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M2.272 3.905c.08-.686.497-1.253 1.171-1.402C4.496 2.27 6.536 2 10.333 2c3.798 0 5.838.27 6.89.503.675.15 1.092.716 1.171 1.402.12 1.039.273 2.748.273 4.762 0 3.762-1.986 7.281-5.33 9.003-1.118.575-2.208.997-3.004.997s-1.885-.422-3.003-.997C3.985 15.948 2 12.428 2 8.667c0-2.014.152-3.723.272-4.762'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M7.6 6.462a2.402 2.402 0 0 1 4.8 0l.049 1.119.057.005c.67.058 1.141.523 1.192 1.192.03.394.052.926.052 1.639s-.022 1.245-.052 1.639c-.05.67-.523 1.134-1.192 1.192-.54.047-1.34.086-2.506.086s-1.966-.04-2.506-.086c-.67-.058-1.141-.523-1.192-1.192-.03-.394-.052-.926-.052-1.639 0-.651.016-1.152.038-1.534.042-.724.543-1.239 1.263-1.303zm3.134.074.043.97a46 46 0 0 0-1.554 0l.043-.97a.735.735 0 0 1 1.468 0m.1 3.464c0 .341-.205.634-.498.763l.059.522c.014.129-.007.27-.123.327a.6.6 0 0 1-.272.055.6.6 0 0 1-.271-.055c-.117-.057-.138-.198-.123-.327l.058-.522a.834.834 0 1 1 1.17-.763'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>authentication</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rt5:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M10 2.158v9.183l-7.792 5.45c-.708-.841-.75-2.116.042-3.541l2.6-4.675L7.3 4.167c.742-1.334 1.717-2.009 2.7-2.009'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M17.792 16.792c-.542.658-1.484 1.05-2.742 1.05H4.95c-1.258 0-2.2-.392-2.742-1.05L10 11.342z'
                            opacity='0.5'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M17.792 16.792 10 11.342V2.158c.983 0 1.958.675 2.7 2.009l2.45 4.408 2.6 4.675c.792 1.425.75 2.7.042 3.541'
                            opacity='0.35'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>utility</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rt6:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M27.882 10.97c-1.92.482-4.186.515-6.144-.084a2.7 2.7 0 0 1-1.752-1.716c-.696-2.04-.868-4.538-.357-6.46A145 145 0 0 0 16 2.666c-4.646 0-7.414.182-8.983.352-1.162.125-2.058.912-2.276 2.06C4.402 6.869 4 10.21 4 16s.402 9.133.741 10.92c.218 1.15 1.114 1.937 2.276 2.062 1.569.17 4.337.352 8.983.352s7.414-.183 8.983-.352c1.162-.125 2.058-.913 2.276-2.061.339-1.788.741-5.13.741-10.92 0-1.941-.045-3.607-.118-5.031m-17.215 6.364a1.333 1.333 0 0 1 0-2.667H16a1.333 1.333 0 1 1 0 2.667zm0 6a1.333 1.333 0 0 1 0-2.667H20a1.333 1.333 0 1 1 0 2.667z'
                            clip-rule='evenodd'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M9.333 22c0 .737.597 1.334 1.334 1.334H20a1.333 1.333 0 0 0 0-2.667h-9.333c-.737 0-1.334.597-1.334 1.333M9.333 16c0 .737.597 1.334 1.334 1.334H16a1.333 1.333 0 0 0 0-2.667h-5.333c-.737 0-1.334.597-1.334 1.333M27.882 10.97c-1.92.482-4.186.514-6.144-.084a2.7 2.7 0 0 1-1.752-1.717c-.696-2.04-.868-4.538-.357-6.46 0 0 1.633.624 4.633 3.624s3.62 4.636 3.62 4.636'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>invoice</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rt7:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='m18.133 13.267-5.333-9.6c-.717-1.292-1.708-2-2.8-2s-2.083.708-2.8 2l-5.333 9.6c-.675 1.225-.75 2.4-.209 3.325.542.925 1.609 1.433 3.009 1.433h10.666c1.4 0 2.467-.508 3.009-1.433s.466-2.108-.209-3.325'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M10 12.292a.63.63 0 0 1-.625-.625V7.5A.63.63 0 0 1 10 6.875a.63.63 0 0 1 .625.625v4.167a.63.63 0 0 1-.625.625M10 15q-.077-.002-.167-.017a.5.5 0 0 1-.15-.05.6.6 0 0 1-.15-.075l-.125-.1a.88.88 0 0 1-.241-.591c0-.217.091-.434.241-.592l.125-.1q.075-.051.15-.075.075-.038.15-.05a.7.7 0 0 1 .325 0 .5.5 0 0 1 .159.05q.075.024.15.075l.125.1c.15.158.241.375.241.591a.88.88 0 0 1-.241.592l-.125.1a.6.6 0 0 1-.15.075.5.5 0 0 1-.159.05c-.05.008-.108.017-.158.017'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>error</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rt8:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M24.92 15.373c-.76-.2-1.654-.306-2.72-.306-1.48 0-2.027.36-2.787.933a1 1 0 0 0-.12.107l-1.267 1.346c-1.053 1.134-2.986 1.134-4.053 0l-1.267-1.333a.5.5 0 0 0-.12-.12c-.773-.573-1.32-.933-2.786-.933-1.067 0-1.96.093-2.72.306-3.174.854-3.174 3.374-3.174 5.587v1.24c0 3.347 0 7.133 7.134 7.133h9.92c4.733 0 7.133-2.4 7.133-7.133v-1.24c0-2.213 0-4.733-3.173-5.587'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M19.72 2.667h-7.44c-5.893 0-5.893 3.133-5.893 5.893v7.72c0 .293.133.56.36.733.226.174.533.24.813.16q.9-.24 2.24-.24c.893 0 1.08.107 1.613.507l1.214 1.28a4.64 4.64 0 0 0 3.386 1.467c1.28 0 2.507-.534 3.387-1.467l1.213-1.28c.534-.4.72-.507 1.614-.507q1.34 0 2.24.24c.28.08.573.014.813-.16a.94.94 0 0 0 .36-.733V8.56c-.027-2.76-.027-5.893-5.92-5.893'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M18.067 13.213h-4.134A.93.93 0 0 1 13 12.28c0-.52.413-.933.933-.933h4.134c.52 0 .933.413.933.933a.945.945 0 0 1-.933.933M19.107 9.493h-6.214a.93.93 0 0 1-.933-.933c0-.52.413-.933.933-.933h6.2a.933.933 0 0 1 .013 1.867'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>email template</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rt9:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-900 mb-3 mt-4 text-xs font-semibold uppercase'>
                    Elements
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M18.667 21.333A7.93 7.93 0 0 1 16 27.28a7.9 7.9 0 0 1-5.333 2.053c-4.414 0-8-3.586-8-8 0-3.68 2.506-6.8 5.893-7.72a8.03 8.03 0 0 0 5.333 4.774 7.8 7.8 0 0 0 2.107.28 7.8 7.8 0 0 0 2.107-.28c.36.906.56 1.906.56 2.946'
                            opacity='0.5'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M24 10.667c0 1.04-.2 2.04-.56 2.947a8.03 8.03 0 0 1-5.333 4.773 7.8 7.8 0 0 1-2.107.28c-.733 0-1.44-.093-2.107-.28a8.03 8.03 0 0 1-5.333-4.773A8 8 0 0 1 8 10.667c0-4.413 3.587-8 8-8s8 3.587 8 8'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M29.333 21.333c0 4.414-3.586 8-8 8A7.9 7.9 0 0 1 16 27.28a7.93 7.93 0 0 0 2.667-5.947c0-1.04-.2-2.04-.56-2.946a8.03 8.03 0 0 0 5.333-4.774c3.387.92 5.893 4.04 5.893 7.72'
                            opacity='0.35'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>components</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rta:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M29.333 22v4c0 2-1.333 3.334-3.333 3.334H8c.547 0 1.107-.08 1.627-.254.146-.053.293-.106.44-.173.466-.187.92-.453 1.32-.8.12-.093.253-.213.373-.333l.053-.054 9.067-9.053H26c2 0 3.333 1.333 3.333 3.333'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='m24.493 15.053-3.613 3.613-9.067 9.054a5.34 5.34 0 0 0 1.52-3.72V11.12l3.614-3.614c1.413-1.413 3.306-1.413 4.72 0l2.826 2.827c1.414 1.413 1.414 3.307 0 4.72'
                            opacity='0.5'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M10 2.667H6C4 2.667 2.667 4 2.667 6v18c0 .36.04.72.106 1.067.04.173.08.347.134.52.066.2.133.4.213.587.013.013.013.026.013.026.014 0 .014 0 0 .014.187.373.4.733.654 1.066.146.174.293.334.44.494.146.16.306.293.48.426l.013.014c.333.253.693.466 1.067.653.013-.013.013-.013.013 0 .2.093.4.16.613.227.174.053.347.093.52.133A5.7 5.7 0 0 0 8 29.334c.547 0 1.107-.08 1.627-.254.146-.053.293-.106.44-.173.466-.187.92-.453 1.32-.8.12-.093.253-.213.373-.333l.053-.054a5.34 5.34 0 0 0 1.52-3.72V6C13.333 4 12 2.667 10 2.667M8 26c-1.107 0-2-.893-2-2s.893-2 2-2 2 .894 2 2c0 1.107-.893 2-2 2'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>forms</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rtb:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M28.667 14.534V5.467c0-2-.854-2.8-2.974-2.8h-5.386c-2.12 0-2.974.8-2.974 2.8v9.067c0 2 .854 2.8 2.974 2.8h5.386c2.12 0 2.974-.8 2.974-2.8M14.667 17.467v9.067c0 2-.854 2.8-2.974 2.8H6.307c-2.12 0-2.974-.8-2.974-2.8v-9.067c0-2 .854-2.8 2.974-2.8h5.386c2.12 0 2.974.8 2.974 2.8'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M28.667 26.533V22.8c0-2-.854-2.8-2.974-2.8h-5.386c-2.12 0-2.974.8-2.974 2.8v3.733c0 2 .854 2.8 2.974 2.8h5.386c2.12 0 2.974-.8 2.974-2.8M14.667 9.2V5.467c0-2-.854-2.8-2.974-2.8H6.307c-2.12 0-2.974.8-2.974 2.8V9.2c0 2 .854 2.8 2.974 2.8h5.386c2.12 0 2.974-.8 2.974-2.8'
                            opacity='0.35'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>Table</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rtc:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M28.893 9.266c-.853-2.893-3.266-5.306-6.16-6.16-2.2-.64-3.72-.586-4.773.2-1.267.947-1.413 2.654-1.413 3.867v3.32c0 3.28 1.493 4.947 4.426 4.947H24.8c1.2 0 2.92-.147 3.867-1.414.813-1.04.88-2.56.226-4.76'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M25.213 17.813a1.82 1.82 0 0 0-1.373-.627h-4.773a4.256 4.256 0 0 1-4.254-4.253V8.159c0-.52-.226-1.026-.626-1.373a1.8 1.8 0 0 0-1.427-.44c-3.133.4-6.013 2.12-7.893 4.707-1.894 2.6-2.587 5.773-1.987 8.946.867 4.587 4.533 8.254 9.133 9.12a11 11 0 0 0 2.2.214c2.414 0 4.747-.747 6.734-2.2 2.586-1.88 4.306-4.76 4.706-7.894a1.8 1.8 0 0 0-.44-1.426'
                            opacity='0.35'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>diagrams</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rtd:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 28 28'
                          className='h-5 w-5'
                        >
                          <path
                            fill='#94A3B8'
                            d='M19.587.667H8.414C3.56.667.667 3.56.667 8.413v11.16c0 4.867 2.893 7.76 7.747 7.76h11.16c4.853 0 7.746-2.893 7.746-7.746V8.413C27.334 3.56 24.44.667 19.587.667'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='#94A3B8'
                            d='M7.174 23.2c-.547 0-1-.453-1-1v-2.76c0-.547.453-1 1-1s1 .453 1 1v2.76c0 .56-.454 1-1 1M14 23.2c-.547 0-1-.453-1-1v-5.533c0-.547.453-1 1-1s1 .453 1 1V22.2c0 .56-.453 1-1 1M20.827 23.2c-.547 0-1-.453-1-1v-8.293c0-.547.453-1 1-1s1 .453 1 1V22.2c0 .56-.44 1-1 1M21.827 5.76c0-.067-.027-.147-.04-.214l-.04-.173c-.027-.053-.067-.093-.093-.147-.04-.053-.08-.12-.134-.16-.013-.013-.013-.026-.026-.026-.04-.027-.08-.04-.12-.067a.9.9 0 0 0-.187-.107c-.067-.026-.133-.026-.2-.04-.053-.013-.093-.026-.147-.026h-3.906c-.547 0-1 .453-1 1s.453 1 1 1H18.6a24.2 24.2 0 0 1-11.666 6.813c-.534.133-.867.68-.734 1.213.107.454.52.76.974.76.08 0 .16-.013.24-.026a26.04 26.04 0 0 0 12.413-7.147v1.293c0 .547.453 1 1 1s1-.453 1-1V5.76'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>chart</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rte:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M11.413 4.453V23.56c-.453.013-.906.12-1.24.32L7.04 25.667c-2.187 1.253-3.987.213-3.987-2.32V10.372c0-.84.6-1.88 1.347-2.307l5.773-3.306c.334-.187.787-.294 1.24-.307'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M20.973 8.44v19.107c-.466.013-.92-.067-1.28-.24l-7-3.507c-.36-.173-.813-.253-1.28-.24V4.454c.467-.014.92.066 1.28.24l7 3.506c.36.174.814.254 1.28.24'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M29.333 8.653v12.973c0 .84-.6 1.88-1.346 2.307l-5.774 3.307c-.333.186-.786.293-1.24.306V8.44c.454-.014.907-.12 1.24-.32l3.134-1.787c2.186-1.253 3.986-.213 3.986 2.32'
                            opacity='0.35'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>maps</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rtf:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M16 29.334c7.364 0 13.333-5.97 13.333-13.334S23.363 2.667 16 2.667 2.667 8.637 2.667 16 8.637 29.334 16 29.334'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M16 15.84a3.173 3.173 0 1 0 0-6.347 3.173 3.173 0 0 0 0 6.347M19.453 21.373l-1.6-2.013c.44-.12.88-.28 1.294-.48a.99.99 0 0 0 .4-1.334 1.007 1.007 0 0 0-1.334-.426 4.97 4.97 0 0 1-4.426 0 1 1 0 0 0-1.347.44 1 1 0 0 0 .44 1.346c.4.2.827.36 1.253.467l-1.586 2.013a.994.994 0 0 0 .16 1.4.994.994 0 0 0 1.4-.16l1.88-2.373 1.88 2.373a.99.99 0 0 0 .786.374c.214 0 .44-.067.614-.214.453-.346.52-.973.186-1.413'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>icons</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rtg:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
                <li>
                  <div className='text-default-700 group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground'>
                    <div className='flex  flex-1 items-start gap-3'>
                      <span className='inline-flex items-center  text-lg '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 32 32'
                          className='h-5 w-5'
                        >
                          <path
                            fill='currentColor'
                            d='M20.373 6H6.293C5.03 6 4 6.747 4 7.667c0 .919 1.029 1.666 2.294 1.666h14.08c1.264 0 2.293-.747 2.293-1.666 0-.92-1.03-1.667-2.294-1.667'
                            opacity='0.35'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M25.706 14.333h-14.08c-1.264 0-2.293.748-2.293 1.667s1.03 1.666 2.294 1.666h14.08C26.97 17.666 28 16.92 28 16c0-.92-1.029-1.667-2.294-1.667M20.373 22.667H6.293C5.03 22.667 4 23.414 4 24.334 4 25.253 5.029 26 6.294 26h14.08c1.264 0 2.293-.747 2.293-1.666 0-.92-1.03-1.667-2.294-1.667'
                          ></path>
                        </svg>
                      </span>
                      <div className=' '>multi level</div>
                    </div>
                    <div className='flex-0'>
                      <div className='text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--heroicons h-5 w-5'
                          width='1em'
                          height='1em'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fill='currentColor'
                            fill-rule='evenodd'
                            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-state='closed'>
                    <div
                      data-state='closed'
                      id='radix-:rth:'
                      className='CollapsibleContent'
                    ></div>
                  </div>
                </li>
              </ul>
              <div className='-mx-2 '>
                <div className='dark:bg-default-400 m-3 hidden rounded bg-primary px-4 pb-4 pt-5 text-primary-foreground xl:block'>
                  <div className='text-base font-semibold text-primary-foreground'>
                    {' '}
                    Storage capacity
                  </div>
                  <div className='text-sm text-primary-foreground'>
                    {' '}
                    Out of your total storage on Premium Plan, you have used up
                    40%.
                  </div>
                  <div className='relative mt-4'>
                    <img
                      alt='footer-thumbnail'
                      loading='lazy'
                      width='168'
                      height='120'
                      decoding='async'
                      data-nimg='1'
                      className='h-full w-full'
                      src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail.a198b95e.png&amp;w=384&amp;q=75'
                    />
                    <button
                      className='dark:text-default-950 hover:bg-secondary/80 absolute left-1/2 top-1/2 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full bg-secondary text-sm font-semibold text-muted-foreground opacity-40 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50'
                      type='button'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        role='img'
                        className='iconify iconify--heroicons h-5 w-5 text-white'
                        width='1em'
                        height='1em'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill='currentColor'
                          d='M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267z'
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className='mt-4 flex  items-center gap-2 text-sm font-semibold text-primary-foreground'>
                    Upgrade Now
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='img'
                      className='iconify iconify--heroicons h-5 w-5'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
                        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                      ></path>
                    </svg>{' '}
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

export default Side
