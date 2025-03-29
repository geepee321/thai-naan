import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-white py-20" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
            <Image
              src="/images/team.jpg"
              alt="Our catering team in action"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Your Premier Catering Partner in Chatswood
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              At Chatswood Catering, we bring over a decade of culinary expertise to your special events. Our passionate team combines local ingredients with international flavors to create memorable dining experiences.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Whether you're planning an intimate gathering or a large corporate event, we customize our services to match your vision and exceed your expectations.
            </p>
            <ul className="grid gap-4 text-gray-600">
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Fresh, Local Ingredients
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Customizable Menus
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Professional Service Staff
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 