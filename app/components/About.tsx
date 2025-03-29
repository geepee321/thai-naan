"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
              alt="Our catering team in action"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              About Thai Naan
            </h2>
            <p className="mb-4 text-gray-600">
              We&apos;re passionate about bringing authentic Thai flavors to your special events. With years of experience in catering, we understand that every event is unique and deserves a personalized touch.
            </p>
            <p className="mb-6 text-gray-600">
              Our team of skilled chefs combines traditional Thai cooking techniques with modern presentation to create an unforgettable dining experience for your guests. From intimate gatherings to large corporate events, we ensure every dish is prepared with the finest ingredients and attention to detail.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Fresh, locally sourced ingredients
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Customizable menu options
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Professional and reliable service
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 