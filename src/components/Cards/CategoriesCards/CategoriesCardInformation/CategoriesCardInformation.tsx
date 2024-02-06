import { FC } from "react"

interface ICategoriesCardInformationProps {
    title: string,
    image_url: string,
}

export const CategoriesCardInformation: FC<ICategoriesCardInformationProps> = ({ title, image_url }) => {
    return (
        <div className="rounded-xl relative" title={title}>
            <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
                <p className="font-bold px-2 pt-4 overflow-hidden whitespace-nowrap overflow-ellipsis">{title}</p>
            </div>
            <img
                className="max-h-[100px] w-full object-cover rounded-xl"
                src={image_url}
                alt={title}
            />
        </div>
    )
}
