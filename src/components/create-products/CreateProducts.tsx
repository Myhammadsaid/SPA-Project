'use client'
import { useCreateProduct } from '@/hooks/useCreateProduct'
import { FormData } from '@/layouts/ui/types'
import React, { useState } from 'react'

const InitialState = {
	name: '',
	avatar: '',
}

const CreateProducts = () => {
	const [formData, setFormData] = useState<FormData>(InitialState)
	const { createProduct, data } = useCreateProduct()

	const handleCreateProduct = (e: React.FormEvent) => {
		e.preventDefault()
		createProduct(formData)
		setFormData(InitialState)
	}

	console.log(data)

	return (
		<section>
			<div className='container px-3'>
				<h1 className='text-center mb-[20px] text-2xl'>Create Products</h1>
				<form
					onSubmit={handleCreateProduct}
					className='w-full max-w-[500px] flex flex-col items-center justify-center *:flex *:flex-col **:w-full mx-auto gap-2.5'
				>
					<label htmlFor='name'>
						<span className='pointer-events-none'>Name</span>
						<input
							value={formData?.name}
							onChange={e => setFormData({ ...formData, name: e.target.value })}
							className='h-[40px] indent-2 outline-none border-1 rounded-xl'
							required
							id='name'
							type='text'
							placeholder='Name'
						/>
					</label>
					<label htmlFor='image'>
						<span className='pointer-events-none'>Image</span>
						<textarea
							value={formData?.avatar}
							onChange={e =>
								setFormData({ ...formData, avatar: e.target.value })
							}
							className='!h-[140px] pt-1.5 resize-none indent-2 outline-none border-1 rounded-xl'
							required
							id='image'
							placeholder='Image'
						/>
					</label>
					<button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer'>
						Create
					</button>
				</form>
			</div>
		</section>
	)
}

export default CreateProducts
