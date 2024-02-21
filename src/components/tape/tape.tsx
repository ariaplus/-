import Image from 'next/image'
import { UserCircleIcon, ShareIcon } from '@heroicons/react'

export function Tape() {
  return (
    <div className="relative">
      <Image
        src="https://example.com/reel-image.jpg" // replace with your image URL
        layout="responsive"
        width={300}
        height={300}
        alt="Reel"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <UserCircleIcon className="h-6 w-6 text-white mr-2" />
            <p className="text-white">
              <span className="font-bold mr-2">Reels</span>
              <span className="font-bold mr-2">Foreld</span>
              <span className="font-bold mr-2">feroldis</span>
              <span className="font-bold mr-2">Sponsored</span>
            </p>
          </div>
          <ShareIcon className="h-6 w-6 text-white" />
        </div>
        <p className="text-white mt-2">
          Stacks on stacks on stacks with our bold layered tangle necklace
        </p>
        <button className="mt-4 py-2 px-4 bg-white text-black rounded">
          Shop Now
        </button>
      </div>
    </div>
  )
}
