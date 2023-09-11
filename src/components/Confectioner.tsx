import confectioner from "../assets/confectioner.png"
import Button from "./button/Button"

function Confectioner() {
  return (
    <section className="confectioner">
      <div className="container 2xl:max-w-6xl">
        <div className="wrapper flex flex-col gap-6 lg:flex-row lg:gap-0 items-center">
          <div className="content basis-1/2 flex flex-col gap-7">
            <span className="w-fit px-4 py-3 rounded-md bg-slate-200 uppercase">хто буде готувати?</span>
            <div className="text-lg sm:text-2xl xl:text-5xl font-medium">Особисто приготую і все красиво запакую для вашої події</div>
            <ul className="list-disc lg:max-w-sm ml-4">
              <li className="mb-7">Проконсультую щодо вибору капкейкові і придумаю нестандартну ідею</li>
              <li className="mb-7">Приготую капкейки для вашої події, які обов'язково всім сподобаються</li>
              <li>Акуратно і красиво все запакую, якщо ви хочете зробити приємний подарунок</li>
            </ul>
            <Button>Задати питання Марії</Button>
          </div>
          <div className="photo basis-1/2 relative">
              <img src={confectioner} alt="" />
            <div className="info absolute left-0 bottom-0 md:-left-12 md:bottom-36 flex flex-col items-center">
              <div className="name p-2 sm:py-4 sx:px-5 text-white sm:text-2xl bg-slate-800 rounded -skew-y-6 rotate-6">Марія Мельник</div>
              <div className="profession w-fit p-2 sm:p-4 uppercase text-xs sm:text-lg bg-slate-200 rounded -skew-y-6 rotate-6 ">ваш кондитер</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Confectioner