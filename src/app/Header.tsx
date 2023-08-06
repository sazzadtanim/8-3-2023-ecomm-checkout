'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const links: { title: string; url: string }[] = [
    { title: 'home', url: '/' },
    { title: 'new arrivals', url: '/new_arrivals' },
    { title: 'sale', url: '/sale' },
    { title: 'contact', url: '/contact' },
  ]

  const path = usePathname()

  return (
    <header className='bg-white py-3 sm:mb-10 sm:py-10'>
      <div className='mx-4 flex items-center justify-between sm:container sm:mx-auto'>
        <Link className='font-black tracking-tighter sm:text-xl' href={'/'}>
          LOGO
        </Link>

        <nav className='hidden md:block'>
          <ul
            className='; flex items-center gap-10 font-gerbera font-medium capitalize
          '
          >
            {links.map((nav, index) => (
              <div key={index}>
                <Link href={nav.url}>{nav.title}</Link>
                <div className='h-[5px] w-[5px] rounded-full bg-red-500 last:hidden' />
              </div>
            ))}
          </ul>
        </nav>

        <nav className='flex items-center justify-center gap-6 sm:gap-10'>
          <div className='relative'>
            <Link href={'/'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 sm:h-6 sm:w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
              <div className='absolute -right-1 -top-1 h-1 w-1 rounded-full bg-red-500 sm:h-2 sm:w-2 ' />

              <div className='absolute top-8 h-[1px] w-full scale-150 bg-black sm:top-16' />
            </Link>
          </div>

          <Link href={'/'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5 sm:h-6 sm:w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
