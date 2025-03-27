import { Actions, State } from '@/layouts/ui/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { favorite } from './slices/favorite'

export const useStore = create<State & Actions>()(
	persist(
		set => ({
			...favorite(set),
		}),
		{ name: 'favorite-storage' }
	)
)
