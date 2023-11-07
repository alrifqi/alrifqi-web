import Image from 'next/image'
import LeftSideComponent from '@/components/LeftSide'
import RightSideComponent from '@/components/RightSide'

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <LeftSideComponent name='Muhammad Reza Nur Rifqi Prop'/>
        <RightSideComponent />
      </div>
    </main>
  )
}
