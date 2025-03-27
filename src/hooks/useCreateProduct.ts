import { FormData } from '@/layouts/ui/types'
import { API_URL } from '@/store/api'
import { useState } from 'react'

export const useCreateProduct = () => {
	const [data, setData] = useState(null)

	const createProduct = async (formData: FormData) => {
		if (!formData.name.length) return
		const response = await fetch(`${API_URL}/products`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(formData),
		})
		const result = await response.json()
		setData(result)
	}

	return { data, createProduct }
}
