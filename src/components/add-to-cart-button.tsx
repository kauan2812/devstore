'use client'

import { useCart } from '@/context/cart-context'

interface AddToCartProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="mt-8 p-3 bg-emerald-700 rounded-full font-semibold hover:bg-emerald-500 transition-colors text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
