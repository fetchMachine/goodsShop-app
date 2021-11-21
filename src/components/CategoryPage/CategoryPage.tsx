import React from "react";

interface CategoryProps{
    category:{id:number, type:string, label: string }[];
    items:{id:number, category_type:string, price:number, label:string, img:string}[]
}

export const CategoryPage:React.FC< CategoryProps> = ({ }) =>{
    return(
            <div></div>
    )
}