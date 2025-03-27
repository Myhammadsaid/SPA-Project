import { IData } from '@/layouts/ui/types'
import { API_URL } from '@/store/api'
import { useState } from 'react'

export const useDeleteProduct = () => {
	const [data, setData] = useState<IData | null>(null)

	const deleteProduct = async (id: string) => {
		const response = await fetch(`${API_URL}/products/${id}`, {
			method: 'DELETE',
		})
		const result = await response.json()
		setData(result)
	}

	return { data, deleteProduct }
}
