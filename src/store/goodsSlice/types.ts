import { LOAD_STATUSES } from './constants'
export interface Goods {
    id: number,
    category_type: string;
    label: string,
    img: string,
    price: number,
    description: string
}
export interface State {
    loadStatus: LOAD_STATUSES,
    data: Goods[]
}