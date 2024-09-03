'use client';

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { Button } from '@/components/Button'
import { useRelativeMousePosition } from '@/hooks/useRelativeMousePosition';
import starsBg from '@/assets/stars.png'
import gridLines from '@/assets/grid-lines.png'

export default function CallToAction() {
  const SectionRef = useRef<HTMLElement | null>(null);
  const borderDivRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [mosueX, mosueY] = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mosueX}px ${mosueY}px, black, transparent)`;

  return (
    <section className='py-20 md:py-24'>
      <div className='container'>
        <motion.div
          ref={borderDivRef}
          className='border border-white/15 py-24 rounded-xl overflow-hidden relative group'
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            duration: '60',
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0'
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div
            className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700'
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage,
            }}
          ></motion.div>

          <div className='relative select-none'>
            <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>
              AI-drive <span className="font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b">SEO</span> for everyone
            </h2>
            <p className='text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight'>
              Achieve clear, impactfull result without the complexit
            </p>
            <div className='flex justify-center mt-8'>
              <Button>
                Join Wishlist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
