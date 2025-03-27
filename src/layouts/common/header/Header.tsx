'use client'
import { useGetProducts } from '@/hooks/useGetProducts'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const { data } = useGetProducts()
	const [search, setSearch] = useState<string>('')
	const searchData = data?.filter(item =>
		item.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<header className='py-5'>
			<div className='container px-3 flex items-center justify-between'>
				<Link href={'/'}>
					<h1 className='text-4xl'>Header</h1>
				</Link>
				<form className='max-w-[450px] w-full h-[40px] relative'>
					<input
						value={search}
						onChange={e => setSearch(e.target.value)}
						className='w-full h-full indent-4 outline-none rounded-lg bg-[#374151]'
						type='text'
						placeholder='Search'
					/>
					{search.length ? (
						<ul className='w-[100%] max-h-[200px] absolute top-[110%] left-0 right-0 bg-[#374151] p-4 rounded-2xl overflow-hidden overflow-y-auto z-30 flex flex-col gap-2.5'>
							{searchData.length ? (
								searchData?.map(item => (
									<Link
										onClick={() => setSearch('')}
										key={item.id}
										href={`/products/${item.id}`}
									>
										<li>{item.name}</li>
									</Link>
								))
							) : (
								<span>Not Found</span>
							)}
						</ul>
					) : (
						<></>
					)}
				</form>
				<ul className='flex items-center gap-10 *:text-[16px] *:cursor-pointer *:hover:transform-[scale(1.09)]'>
					<Link href={'/products'}>
						<li>Products</li>
					</Link>
					<Link href={'/create-product'}>
						<li>Create Products</li>
					</Link>
				</ul>
			</div>
		</header>
	)
}

export default Header
