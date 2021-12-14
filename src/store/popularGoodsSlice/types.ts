import { LOAD_STATUSES } from "./constants";

export interface PopularCategories { 

        id: number,
        type: string,
        label: string
    }
    // items: {
    //     id: string,
    //     categoryTypeId: string,
    //     label: string,
    //     price: number,
    //     img: string,
    //     description: string
    // }[]


export interface State {
    loadStatus: LOAD_STATUSES,
    data: PopularCategories[]
}