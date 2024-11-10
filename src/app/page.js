import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Products from '@/components/Products'
import FadeIn from '@/components/FadeIn'
import Loader from '@/components/Loader'

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <FadeIn delay={0}>
        <>
          <Navigation />
          <Header />
        </>
      </FadeIn>
      <FadeIn delay={0.4}>
        <About />
      </FadeIn>
      <FadeIn delay={0.6}>
        <Products />   
      </FadeIn> 
      <FadeIn delay={0.6}>
        <Footer />
      </FadeIn>
    </Suspense>
  )
}
