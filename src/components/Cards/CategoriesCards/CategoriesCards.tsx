import { CategoriesCardInformation } from "./CategoriesCardInformation/CategoriesCardInformation"
import categories from '../../../services/categories.json';

export const CategoriesCards = () => {
  return (
    <div className="max-w-[1640px] p-4">
      <p className="font-bold text-2xl px-2 pt-4">Categories</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
        {categories.map((ct, i) => (
          <CategoriesCardInformation
            key={i}
            title={ct.name}
            image_url={ct.image_url}
          />
        ))}
      </div>
    </div>
  )
}
