'use client'

import Accounts from '@/components/Accounts'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Navbar from '@/components/Navbar'
import Ready from '@/components/Ready'
import Services from '@/components/Services'
import Trade from '@/components/Trade'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <main className="">
      <Navbar />
      <Hero />
      <Services />
      <Trade />
      <Accounts />
      <Metrics />
      <Ready />
    </main>
  )
}
