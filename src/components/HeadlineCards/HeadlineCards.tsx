import { CardInformation } from "./CardInformation/CardInformation"

export const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <CardInformation
        title="When hunger calls, pasta responds"
        subtitle="Spaghetti carbonara"
        buttonText="Order Now"
        image_url="https://menu-place.s3.sa-east-1.amazonaws.com/spaghetti-a-carbonara.jpg"
      />
      <CardInformation
        title="From the pan to the grill, meat and barbecue"
        subtitle="Well-done or rare??"
        buttonText="Order Now"
        image_url="https://menu-place.s3.sa-east-1.amazonaws.com/roast-rib.jpg"
      />
      <CardInformation
        title="In a world of options, choose a cake"
        subtitle="Enjoy yourself"
        buttonText="Order Now"
        image_url="https://menu-place.s3.sa-east-1.amazonaws.com/cake.jpg"
      />
    </div>
  )
}
