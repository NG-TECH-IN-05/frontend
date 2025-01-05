import { SetStateAction, Key, useEffect, useState } from 'react'
import menuData from './menuData'
import { Link, To, useLocation } from 'react-router-dom'
import { Button } from '@/components/custom/button'
import ThemeSwitch from '@/components/theme-switch'
// import ChangeLanguage from "../ChangeLanguage";
// import ChangeTheme from "../ChangeTheme";
// import { useTranslation } from "react-i18next";
// import PrimaryLink from "../../butttons-links/PrimaryLink";

const Header = () => {
  const { pathname } = useLocation()
  // const { t } = useTranslation();
  const token = localStorage.getItem('access')
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  })

  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index: SetStateAction<number>) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <header className='fixed top-0 z-[999] w-full bg-background  backdrop-blur-md'>
      <div className='px-10'>
        <div className='relative -mx-4 flex items-center justify-center'>
          <div className='w-60 max-w-full px-4 xl:mr-12'>
            <Link
              to='/'
              className={`header-logo block w-full ${
                sticky ? 'py-5 xl:py-2' : 'py-8'
              } `}
            >
              {/* <img
                src={Images.logo_minepia}
                alt="logo"
                className="w-[40px] dark:hidden"
              /> */}
              {/* <img
                src="/images/logo/logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              /> */}
              <h1 className='my-0  font-bold text-primary md:text-2xl'>
                {'Web site'}
              </h1>
            </Link>
          </div>
          <div className='flex w-full items-center justify-between px-4'>
            <div>
              <button
                onClick={navbarToggleHandler}
                id='navbarToggler'
                aria-label='Mobile Menu'
                className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-xl px-3 py-[6px] ring-primary focus:ring-2 xl:hidden'
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? ' top-[7px] rotate-45' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? 'opacity-0 ' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                  }`}
                />
              </button>
              <nav
                id='navbarCollapse'
                className={`navbar dark:border-body-color/20 dark:bg-boxdark absolute right-0 z-30  w-full rounded bg-white px-6 py-4 duration-300 xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                  navbarOpen
                    ? 'visibility top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className='block xl:flex xl:space-x-12'>
                  {menuData.map((menuItem, index) => (
                    <li key={index} className='group relative'>
                      {menuItem.path ? (
                        <Link
                          to={menuItem.path}
                          className={`flex py-2 font-bold xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 ${
                            pathname === menuItem.path
                              ? 'text-primary dark:text-white'
                              : 'dark:text-primary/70 text-black hover:text-primary dark:hover:text-white'
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className='text-dark dark:text-primary/70 flex cursor-pointer items-center justify-between py-2 text-base font-bold text-black group-hover:text-primary dark:group-hover:text-white xl:mr-0 xl:inline-flex xl:px-0 xl:py-6'
                          >
                            {menuItem.title}
                            <span className='pl-3'>
                              <svg width='25' height='24' viewBox='0 0 25 24'>
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z'
                                  fill='currentColor'
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-background xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-xl xl:group-hover:visible xl:group-hover:top-full ${
                              openIndex === index
                                ? 'z-[99999] block w-full bg-black p-9'
                                : 'hidden'
                            }`}
                          >
                            {menuItem.submenu &&
                              menuItem.submenu.map(
                                (
                                  submenuItem: {
                                    path: To
                                    title: string
                                  },
                                  index: Key | null | undefined
                                ) => (
                                  <Link
                                    to={submenuItem.path}
                                    key={index}
                                    className='text-dark block rounded py-2.5 text-sm hover:text-primary dark:text-white/70 dark:hover:text-white xl:px-3'
                                  >
                                    {submenuItem.title}
                                  </Link>
                                )
                              )}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center justify-end pr-16 xl:pr-0'>
              <Link
                to='/web/contact'
                className='text-dark hidden px-7 py-3 text-base font-bold text-black hover:opacity-70 dark:text-white md:block'
              >
                Contacts
              </Link>

              <Link to={'/sign-in'}>
                <Button size={'lg'} variant={'blue'}>
                  Se connecter
                </Button>
              </Link>

              {/* {!token ? (
                <PrimaryLink path="/web/login" title={t("login")} />
              ) : (
                <PrimaryLink path="/dashboard" title="Mon compte" />
              )} */}

              <div className='flex items-center'>
                {/* <ChangeLanguage /> */}
                {/* <ThemeToggler /> */}
                {/* <ChangeTheme /> */}
                {/* <DropdownChangeTheme /> */}
              </div>
            </div>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header
