import { Actions, State } from '@/layouts/ui/types'

export const favorite = (
	set: (fn: (state: State) => State) => void
): State & Actions => ({
	favorite: [],

	toggleFavorite: item => {
		set(state => {
			const isExists = state.favorite.some(fav => fav?.id === item.id)
			if (isExists) {
				const filtered = state.favorite.filter(fav => fav?.id !== item.id)
				return { ...state, favorite: filtered }
			} else {
				return { ...state, favorite: [...state.favorite, item] }
			}
		})
	},
})
