import { ChangeEvent, Dispatch, useState } from "react"
import Button from "./button/Button"

type ModalUploadPhotoProps = {
  setModalVisible: Dispatch<React.SetStateAction<boolean>>
}

function ModalUploadPhoto({ setModalVisible }: ModalUploadPhotoProps) {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgName, setImgName] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const image = e.target.files?.[0];

    if (image) {
      setImgName(image.name);
      setImgUrl(URL.createObjectURL(image));
    }
  }

  function handleSelect() {
    document.getElementById("fileinput")?.click();
  }

  return (
    <div className="wrapper fixed inset-0 flex items-center justify-center bg-black/75 z-20">
      <div className="modal relative p-4 w-fit max-w-[99%] bg-white rounded-lg">
        <form
          className="flex flex-wrap items-center justify-around gap-y-2 gap-x-5"
          onSubmit={e => e.preventDefault()}>
          <div className="preview w-min basis-full shrink flex items-center justify-center">
            {imgUrl.length ? <img src={imgUrl} alt="preview" className="w-[35rem] rounded-lg" /> :
              <div className="h-80 w-full flex items-center justify-center rounded-lg border-gray-500 border-solid border-2">
                ФАЙЛ НЕ ВИБРАНО
              </div>}
          </div>
          <input className="hidden" type="file" name="file" accept="image/*" id="fileinput" onChange={e => handleChange(e)} />
          <div className="flex items-center gap-1">
            <Button size="medium" className="" onClick={handleSelect} >Обрати файл</Button>
            <p>{imgName.length ? imgName : "Файл не вибрано"}</p>
          </div>
          <Button size="medium">Відправити</Button>
        </form>
        <button className="close absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-700 text-white rounded-full border-white border-solid border-2" onClick={() => setModalVisible(false)}>
          <div className="x">X</div>
        </button>
      </div>
    </div>
  )
}

export default ModalUploadPhoto