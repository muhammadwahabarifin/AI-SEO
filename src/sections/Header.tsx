import React from 'react'
import LogoIcon from '@/assets/logo.svg';
import Link from 'next/link';
import { Button } from '@/components/Button';

const Header = () => {
    return (
        <header className='sticky top-0 z-10 py-4 border-b border-white/15 md:border-none'>
            <div className='absolute inset-0 backdrop-blur-lg -z-10 md:hidden'></div>
            <div className='container'>
                <div className='flex justify-between items-center md:border border-white/10 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative'>
                    <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
                    <div>
                        <div className='border border-white/15 size-10 rounded-lg inline-flex justify-center items-center'>
                            <LogoIcon className='size-8' />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <nav className='flex gap-8 text-sm'>
                            <Link href='/' className='text-white/70 hover:text-white transition'>Feature</Link>
                            <Link href='/' className='text-white/70 hover:text-white transition'>Developer</Link>
                            <Link href='/' className='text-white/70 hover:text-white transition'>Pricing</Link>
                            <Link href='/' className='text-white/70 hover:text-white transition'>Changelog</Link>
                        </nav>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button>Join Waitlist</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
