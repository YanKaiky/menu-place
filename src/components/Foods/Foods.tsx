import { useState } from 'react';
import categories from '../../services/categories.json';
import foods from '../../services/foods.json';
import { FoodCard } from '../Cards/FoodCard/FoodCard';

export const Foods = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c: string) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isAllSelected = selectedCategories.length === 0;

    const filteredFoods = isAllSelected
        ? foods
        : foods.filter((food) => selectedCategories.includes(food.category));

    return (
        <div className='max-w-[1640px] m-auto p-4'>
            <p className="font-bold text-2xl px-2 pt-4">Filters</p>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-4'>
                <button className={`bg-${isAllSelected ? 'orange-500' : 'white'} text-${isAllSelected ? 'white' : 'black'} mx-2`} onClick={() => setSelectedCategories([])}>All</button>
                {categories.map((ct, i) => (
                    <button
                        key={i}
                        className={`bg-${selectedCategories.includes(ct.name) ? 'orange-500' : 'white'} text-${selectedCategories.includes(ct.name) ? 'white' : 'black'} mx-2`}
                        onClick={() => handleCategoryClick(ct.name)}
                    >
                        {ct.name}
                    </button>
                ))}
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {filteredFoods.map((f) => (
                    <FoodCard
                        key={f.guid}
                        image_url={f.image_url}
                        name={f.name}
                        price={f.price}
                    />
                ))}
            </div>
        </div>
    )
}
