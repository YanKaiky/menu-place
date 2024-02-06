import { FC } from "react"

interface ICategoriesCardInformationProps {
    title: string,
    image_url: string,
}

export const CategoriesCardInformation: FC<ICategoriesCardInformationProps> = ({ title, image_url }) => {
    return (
        <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/20 rounded-xl text-white text-left">
                <p className="font-bold px-2 pt-4">{title}</p>
            </div>
            <img
                className="h-full md:max-h-[200px] w-full object-cover rounded-xl"
                src={image_url}
                alt="Spaghetti carbonara"
            />
        </div>
    )
}
