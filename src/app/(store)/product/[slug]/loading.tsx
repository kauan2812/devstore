import Skeleton from '@/components/skeleton'

export default function DetailsLoading() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3 gap-12">
      <Skeleton className="col-span-2 h-[780px]" />
      <Skeleton className="col-span-1" />
    </div>
  )
}
