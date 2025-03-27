'use client'
import { useDeleteProduct } from '@/hooks/useDeleteProduct'
import { useGetProducts } from '@/hooks/useGetProducts'
import { IData } from '@/layouts/ui/types'
import { useStore } from '@/store/store'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'

const Product = () => {
	const { data, setData, loading } = useGetProducts()
	const toggleFavorite = useStore(state => state.toggleFavorite)
	const favorite = useStore(state => state.favorite)
	const [filteredFav, setFilteredFav] = useState<string>('all')
	const { data: updateData, deleteProduct } = useDeleteProduct()

	const handleDeleteProduct = (id: string) => {
		deleteProduct(id)
	}

	useEffect(() => {
		setData(data?.filter(fav => fav?.id !== updateData?.id))
	}, [updateData])

	const selectData = useMemo(() => {
		return filteredFav === 'all' ? data : favorite
	}, [filteredFav, data, favorite])

	const handleToggleFavorite = useCallback(
		(item: IData) => toggleFavorite(item),
		[toggleFavorite]
	)

	return (
		<section>
			<div className='container'>
				<div className='flex items-center justify-center gap-6 mb-[20px]'>
					<h1 className='text-center text-2xl'>Products</h1>
					<select
						className='bg-[#111827]'
						value={filteredFav}
						onChange={e => setFilteredFav(e.target.value)}
					>
						<option value='all'>All products</option>
						<option value='favorites'>Favorites products</option>
					</select>
				</div>
				<div className='flex items-center justify-center gap-5 flex-wrap'>
					{loading ? (
						<h1 className='text-3xl'>Loading...</h1>
					) : selectData?.length === 0 ? (
						<h1>Not Found</h1>
					) : (
						selectData?.map(item => (
							<div key={item.id} className='w-[250px] h-[320px] relative'>
								<img
									className='w-full h-[250px] mb-2 object-cover'
									src={item.avatar}
									alt={item.name}
								/>
								<Link
									href={`/products/${item.id}`}
									title={item.name}
									className='line-clamp-1'
								>
									{item.name}
								</Link>
								<button
									onClick={() => handleToggleFavorite(item)}
									className='mr-4 z-10 cursor-pointer hover:transform-[scale(1.09)]'
								>
									{favorite?.some(fav => fav.id === item.id) ? '❤️' : '🤍'}
								</button>
								<button
									onClick={() => handleDeleteProduct(item.id)}
									className='cursor-pointer hover:transform-[scale(1.09)]'
								>
									🗑️
								</button>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	)
}

export default Product
