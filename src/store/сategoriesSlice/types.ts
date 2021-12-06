import { LOAD_STATUSES } from "./constants";

export interface MenuCategories {
    id: number,
    label: string,
    type: string
}

export interface State {
    items: any;
    find: any;
    map: any;
    loadStatus: LOAD_STATUSES,
    data: MenuCategories[]
}