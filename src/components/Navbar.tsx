import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import Link from 'next/link'
import { icons } from './icons'

const Navbar = () => {
  return (
    <div  className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxwidthWrapper>
                <div className='border-b border-gray-200'>
                    <div className='flex h-16 items-center'>


                        {/* TODO: mobile nav */}


                        <div className='ml-4 flex lg:ml-9'>
                            <Link href='/'>
                            <icons.logo className="logo"/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </MaxwidthWrapper>
        </header>
    </div>
  )
}

export default Navbar