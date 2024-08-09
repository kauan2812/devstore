import Link from 'next/link'
import Image from 'next/image'
import CartWidget from './cart-widget'
import SearchForm from './search-form'
import { Search } from 'lucide-react'
import { Suspense } from 'react'

function SearchBarFallback() {
  return (
    <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          DevStore
        </Link>
        <Suspense fallback={<SearchBarFallback />}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/kauan2812.png"
            className="h-6 w-6 rounded-full"
            alt={''}
            width={24}
            height={24}
          ></Image>
        </Link>
      </div>
    </div>
  )
}
