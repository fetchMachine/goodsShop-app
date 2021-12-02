import React from "react";

interface Goods {
    id: number,
    label: string,
    category_type: string,
    img: string,
    price: number,
    description: string
}

export class Api {

    getDataGoods(): Promise<{ items: Goods[], total: number }> {
        return fetch('/api/good').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
        })
    }
   
}