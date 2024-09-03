import React, { PropsWithChildren } from 'react'

export const Button = ({ children }: PropsWithChildren) => {
    return (
        <button className='relative py-2 px-3 rounded-lg font-medium'>
            <div className='absolute inset-0'>
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="rounded-lg absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,.7)_inset]"></div>
            </div>
            <span>{children}</span>
        </button>
    )
}
