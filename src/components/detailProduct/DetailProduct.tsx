'use client'
import { useDetailProduct } from '@/hooks/useDetailProduct'
import { IData } from '@/layouts/ui/types'
import { useStore } from '@/store/store'
import { useParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const DetailProduct = () => {
	const params = useParams()
	const { detailData, detailProduct, loading } = useDetailProduct()
	const id = params.id as string
	const favorite = useStore<IData[]>(state => state.favorite)
	const toggleFavorite = useStore(state => state.toggleFavorite)

	const handleToggleFavorite = useCallback(
		(item: IData) => toggleFavorite(item),
		[toggleFavorite]
	)

	useEffect(() => {
		detailProduct(id)
	}, [id])

	return (
		<section>
			<div className='container px-2'>
				{loading ? (
					<h1>Loading...</h1>
				) : detailData ? (
					<>
						<img
							className='max-w-[500px]'
							src={detailData.avatar}
							alt={detailData.name}
						/>
						<h1>{detailData.name}</h1>
						<button
							onClick={() => handleToggleFavorite(detailData)}
							className='mr-4 z-10 cursor-pointer hover:transform-[scale(1.09)]'
						>
							{favorite?.some(fav => fav.id === detailData.id) ? '❤️' : '🤍'}
						</button>
					</>
				) : (
					<h1>Not Found</h1>
				)}
			</div>
		</section>
	)
}

export default DetailProduct
