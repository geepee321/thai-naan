import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: 'Private Parties',
    description: 'Intimate gatherings with personalized menus and attentive service.',
    features: [
      'Custom menu planning',
      'Professional staff',
      'Full setup and cleanup',
      'Flexible serving styles',
    ],
  },
  {
    title: 'Corporate Events',
    description: 'Professional catering solutions for business meetings and corporate functions.',
    features: [
      'Breakfast and lunch packages',
      'Cocktail reception service',
      'Corporate branding options',
      'Dietary accommodation',
    ],
  },
  {
    title: 'Church Events',
    description: 'Thoughtful catering for religious gatherings and community celebrations.',
    features: [
      'Large group capabilities',
      'Budget-friendly options',
      'Cultural sensitivity',
      'Flexible scheduling',
    ],
  },
  {
    title: 'Special Occasions',
    description: 'Making your milestone celebrations truly memorable.',
    features: [
      'Wedding receptions',
      'Anniversary parties',
      'Birthday celebrations',
      'Holiday events',
    ],
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-white py-20" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-lg bg-gray-50 p-6 shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg
                        className="mr-2 h-5 w-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 