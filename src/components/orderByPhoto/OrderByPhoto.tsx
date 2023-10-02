import "../../styles/OrderByPhoto.scss"
import cloudUp from "../../assets/clouds/cloud-up.png"
import cloudDown from "../../assets/clouds/cloud-down.png"
import phone from "../../assets/phone.png"
import Button from "../button/Button"
import ModalUploadPhoto from "../modal/ModalUploadPhoto"
import { useState } from "react"

function OrderByPhoto() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <section className="order-by-bhoto relative">
      {modalVisible ? <ModalUploadPhoto setModalVisible={setModalVisible} /> : ""}
      <div className="cloud-up">
        <img src={cloudUp} alt="" className="w-full"/>
      </div>
      <div className="hidden lg:block phone absolute left-0 bottom-0 w-2/4 z-0">
        <img src={phone} alt="" />
      </div>
      <div className="container 2xl:max-w-6xl">
        <div className="wrapper lg:ml-auto sm:max-w-md lg:max-w-lg text-white">
          <div className="mb-10 flex flex-col gap-6">
            <span className="bg-white text-black text-xs px-4 py-2 rounded-md w-fit uppercase">Не знайшли те що треба?</span>
            <div className="text-lg sm:text-2xl xl:text-5xl font-medium">Приготуємо замовлення будь-якої складності по фото чи ескізу</div>
            <div className="">Завантажте фотографію або ескіз капкейків і ми розрахуємо вартість за 30 хвилин</div>
          </div>
          <Button onClick={() => setModalVisible(true)}>Завантажити фото</Button>
        </div>
      </div>
      <div className="cloud-down z-10 relative">
        <img src={cloudDown} alt="" className="w-full"/>
      </div>
    </section>
  )
}

export default OrderByPhoto