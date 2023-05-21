import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GiffExpert = () => {
  const [categories, setCategories] = useState<string[]>(['Dragon Ball', 'Naruto'])
  const onAddCategory = (value: string) => {
    if (categories.includes(value)) return;
    setCategories(cat => [value, ...cat])
  }
  return (
    <>
      <div>GiffExpert App </div>
      <AddCategory
        onNewCategory={(value: string) => onAddCategory(value)}
      />
      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
