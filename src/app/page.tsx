import Image from 'next/image'
import LeftSideComponent from '@/components/LeftSide'
import RightSideComponent from '@/components/RightSide'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row lg:px-24 md:px-12 lg:py-24 md:my-12 mx-auto">
      <LeftSideComponent />
      <RightSideComponent />
    </main>
  )
}
