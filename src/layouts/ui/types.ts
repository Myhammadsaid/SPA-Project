export interface IData {
	avatar: string
	createdAt: string
	id: string
	name: string
}

export interface FormData {
	name: string
	avatar: string
}

export interface State {
	favorite: IData[] | []
}

export interface Actions {
	toggleFavorite: (item: IData) => void
}
