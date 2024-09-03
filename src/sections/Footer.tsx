import React from 'react'
import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-2 border-t border-white/15">
            <div className="container py-3">
                <div className="flex items-center justify-center flex-col lg:space-y-0 
                    space-y-5 lg:justify-between lg:flex-row">
                    <Link href="/" className="flex justify-center gap-x-2">
                        <Logo className='size-6 text-yellow-400' />
                        <h1>AI Startup Landing Page</h1>
                    </Link>
                    <p className="text-gray-400  block">©
                        <Link href="/">Copyright</Link> 2024 <span className='text-white'>|</span> All rights reserved.</p>
                    <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                        <div className='flex gap-5 lg:flex-1 lg:justify-between'>
                            <XSocial className="text-white/40 hover:text-white transition cursor-pointer" />
                            <InstaSocial className="text-white/40 hover:text-white transition cursor-pointer" />
                            <YTSocial className="text-white/40 hover:text-white transition cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
