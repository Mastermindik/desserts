import Button from "../button/Button"

type CardProps = {
  imageUrl: string,
  name: string,
  descr: string,
  price: string
}

function Card({ descr, imageUrl, name, price }: CardProps) {
  return (
    <div className="sm:px-2 flex flex-col rounded-lg flex-wrap basis-full sm:basis-1/2 xl:basis-1/3 grow-0 shrink-0">
      <div className="image w-full">
        <img src={imageUrl} alt={name} className="w-full" />
      </div>
      <div className="content p-2 sm:p-4 lg:p-8 xl:py-12 xl:px-11 grow flex flex-col gap-4 border border-gray-100 border-solid">
        <div className="name text-2xl font-bold">{name}</div>
        <div className="descr text-sm">{descr}</div>
        <div className="price mt-auto text-2xl">{price} грн/шт.</div>
        <Button size="medium" >Замовити</Button>
      </div>
    </div>
  )
}

export default Card