import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Delicious catering spread"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
            Exquisite Catering for Every Occasion
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Serving Western, Thai, Chinese, and Custom Cuisines in Chatswood, NSW
          </p>
          <button className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-600">
            Book Your Event Today
          </button>
        </motion.div>
      </div>
    </div>
  )
} 