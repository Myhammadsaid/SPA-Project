import { IData } from '@/layouts/ui/types'
import { API_URL } from '@/store/api'
import { useState } from 'react'

export const useDetailProduct = () => {
	const [detailData, setDetailData] = useState<IData | null>(null)
	const [loading, setLoading] = useState(false)

	const detailProduct = async (id: string) => {
		setLoading(true)
		const response = await fetch(`${API_URL}/products/${id}`, {
			method: 'GET',
		})
		const result = await response.json()
		setDetailData(result)
		setLoading(false)
	}

	return { detailProduct, detailData, loading }
}
