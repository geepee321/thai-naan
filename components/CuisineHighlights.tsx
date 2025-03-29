import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cuisines = [
  {
    title: 'Western Cuisine',
    description: 'Classic European and modern Australian dishes crafted with precision and elegance.',
    image: '/images/western.jpg',
  },
  {
    title: 'Thai Cuisine',
    description: 'Authentic Thai flavors featuring fresh herbs, spices, and traditional cooking methods.',
    image: '/images/thai.jpg',
  },
  {
    title: 'Chinese Cuisine',
    description: 'Traditional and modern Chinese dishes perfect for any celebration.',
    image: '/images/chinese.jpg',
  },
  {
    title: 'Custom Menus',
    description: 'Bespoke menu creation tailored to your specific preferences and dietary requirements.',
    image: '/images/custom.jpg',
  },
]

export default function CuisineHighlights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-gray-50 py-20" id="cuisines">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Culinary Expertise
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cuisines.map((cuisine, index) => (
              <motion.div
                key={cuisine.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={cuisine.image}
                    alt={cuisine.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {cuisine.title}
                  </h3>
                  <p className="text-gray-600">
                    {cuisine.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 