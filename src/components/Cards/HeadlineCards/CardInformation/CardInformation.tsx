import { FC } from "react"

interface ICardInformationProps {
    title: string,
    subtitle: string,
    buttonText: string,
    image_url: string,
}

export const CardInformation: FC<ICardInformationProps> = ({ title, subtitle, buttonText, image_url }) => {
    return (
        <div className="rounded-xl relative" title={title}>
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">{title}</p>
                <p className='px-2'>{subtitle}</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">{buttonText}</button>
            </div>
            <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src={image_url}
                alt={title}
            />
        </div>
    )
}
