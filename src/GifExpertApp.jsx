import { useState } from "react"
import { AddCategory,GifGrid } from "./componets";

var arr = ['One Punch'];

export const GifExpertApp = () => {

  const [categories,setCategories]=useState(arr);

  const onAddCategory= (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
    //console.log(newCategory);
  }
  
  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory}/>      
      
        {
          categories.map(category=>(
            <GifGrid key={category} category={category}/>
          ))
        }        
      
    </div>
  )
  }