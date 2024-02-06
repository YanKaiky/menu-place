import { FC } from "react"

interface IFoodCardProps {
    name: string;
    image_url: string;
    price: number;
}

export const FoodCard: FC<IFoodCardProps> = ({ name, image_url, price }) => {
    return (
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' title={name}>
            <div className='px-2 py-1'>
                <p className='font-bold overflow-hidden whitespace-nowrap overflow-ellipsis'>{name}</p>
            </div>

            <img src={image_url} alt={name} className='w-full h-[200px] object-cover' />

            <div className='py-1 bg-black rounded-b-lg'>
                <p className='text-white px-2'>
                    <span>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                </p>
            </div>
        </div>
    )
}
