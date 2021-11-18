import React from "react";

interface GoodsCategoryProps{
    category:{id:number, type:string, label: string }[];
    items:{id:number, category_type:string, price:number, label:string, img:string}[]
}

export const GoodsCategory:React.FC< GoodsCategoryProps> = ({}) =>{
    return(
            <div></div>
    )
}