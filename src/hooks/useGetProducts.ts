'use client'
import { IData } from '@/layouts/ui/types'
import { API_URL } from '@/store/api'
import { useEffect, useState } from 'react'

export const useGetProducts = () => {
	const [data, setData] = useState<[] | IData[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)
		const getProducts = async () => {
			const response = await fetch(`${API_URL}/products`)
			const result = await response.json()
			setData(result)
			setLoading(false)
		}
		getProducts()
	}, [])

	return { data, setData, loading }
}
