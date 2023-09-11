import { ComponentPropsWithoutRef } from "react"

type PrevArrowProps = ComponentPropsWithoutRef<"button"> & { }

function PrevArrow({ ...rest }: PrevArrowProps) {
  return (
    <button {...rest} className="bg-yellow-500 rounded-full w-16 h-16 p-5 absolute -bottom-20 right-1/2 mr-3">
      <div className="h-6 w-6 border-l-4 border-b-4 border-current border-solid rotate-45 translate-x-1"></div>
    </button>
  )
}

export default PrevArrow