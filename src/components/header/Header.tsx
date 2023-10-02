import geo from "../../assets/header/Icon.svg"
import phone from "../../assets/header/phone.svg"

function Header() {
  return (
    <header className='bg-inherit text-white py-4 sm:py-9'>
      <div className="container 2xl:max-w-6xl flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div className='logo mb-1 font-medium text-xs sm:text-sm md:text-xl'>Солодка скриня</div>
        <div className="flex sm:gap-16 items-center justify-between">
          <div className="geolocation flex gap-3">
            <div className="icon flex justify-center items-center">
              <img src={geo} alt="" className="w-full" />
            </div>
            <div className="address flex flex-col text-xs ">
              <div className="city">Київ</div>
              <div className="street">вул. Хрещатик 41</div>
            </div>
          </div>
          <div className="contacts flex gap-3">
            <div className="icon flex justify-center items-center">
              <img src={phone} alt="" />
            </div>
            <div className="tel flex flex-col">
              <div className="number text-xs sm:text-sm md:text-xl font-bold">+38 (093) 153-45-98</div>
              <div className="timing text-xs sm:text-sm md:text-sm">Цілодобово з 9:00 до 20:00</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header