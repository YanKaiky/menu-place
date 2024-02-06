import { CategoriesCardInformation } from "./CategoriesCardInformation/CategoriesCardInformation"
import categories from '../../services/categories.json';

export const CategoriesCards = () => {
  return (
    <div className="w-[1640px] mx-auto p-4 py-12">
      <div>
        <p className="font-bold text-2xl px-2 pt-4">Categories </p>
      </div>
      <div className="py-12 grid md:grid-cols-12 gap-6">
        {categories.map((ct) => (
          <CategoriesCardInformation
            title={ct.name}
            image_url={ct.image_url}
          />
        ))}
      </div>
    </div>
  )
}
