"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Corporate Event Manager',
      content: 'The team at Thai Naan provided an exceptional catering service for our company event. The food was delicious and the presentation was stunning.',
    },
    {
      name: 'Michael Thompson',
      role: 'Wedding Planner',
      content: 'I&apos;ve worked with many caterers, but Thai Naan stands out for their attention to detail and fantastic Thai cuisine. My clients are always impressed.',
    },
    {
      name: 'Emily Wong',
      role: 'Birthday Celebration Host',
      content: 'The food was amazing and the service was impeccable. All my guests were raving about the authentic Thai flavors.',
    },
  ]

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-gray-600">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 