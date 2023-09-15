import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Trade from '@/components/Trade'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Services />
      <Trade />
    </main>
  )
}
