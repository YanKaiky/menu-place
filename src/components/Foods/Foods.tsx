import foods from '../../services/foods.json';
import { FoodCard } from '../Cards/FoodCard/FoodCard';

export const Foods = () => {
    console.log(foods);

    return (
        <div className='max-w-[1640px] m-auto p-4'>
            <p className="font-bold text-2xl px-2 pt-4">Filters</p>

            {/* Display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((f) => (
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
