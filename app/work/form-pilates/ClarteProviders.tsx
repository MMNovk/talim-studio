'use client'

import { useState, useEffect } from 'react'
import PageLoader from '@/components/ui/loader'
import CustomCursor from '@/components/ui/custom-cursor'

export default function ClarteProviders() {
  const [loaderMounted, setLoaderMounted] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoaderMounted(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <CustomCursor isLoaderVisible={loaderMounted} />
      <PageLoader />
    </>
  )
}
