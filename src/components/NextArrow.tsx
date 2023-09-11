import { ComponentPropsWithoutRef } from "react"

type NextArrowProps = ComponentPropsWithoutRef<"button"> & { }

function NextArrow({ ...rest }: NextArrowProps) {
  return (
    <button {...rest} className="bg-yellow-500 rounded-full w-16 h-16 p-5 absolute -bottom-20 left-1/2 ml-3 ">
      <div className="h-6 w-6 border-r-4 border-b-4 border-current border-solid -rotate-45 -translate-x-1"></div>
    </button>
  )
}

export default NextArrow