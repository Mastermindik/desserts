import cloudUp from "../../assets/clouds/cloud-up.png"
import Button from "../button/Button"

function Footer() {
  return (
    <section style={{ background: "#081130" }}>
      <div className="cloud-up">
        <img src={cloudUp} alt="" className="w-full" />
      </div>
      <div className="container max-w-6xl">
        <form  className="bg-white p-4 sm:p-6 lg:p-16 flex flex-col items-center gap-6 text-center" onSubmit={e => e.preventDefault()}>
          <h3 className="text-xl lg:text-4xl">Щоб зробити замовлення, вкажіть ваш телефон</h3>
          <div className="text-base lg:text-xl">Ми передзвонимо протягом 15 хвилин, щоб уточнити ваші побажання</div>
          <div className="flex flex-col sm:flex-row gap-5 w-3/4">
            <input type="tel" placeholder="Номер телефону" className="bg-gray-100 p-4 lg:p-7 w-full" />
            <Button className="w-full">Зробити замовлення</Button>
          </div>

          <label htmlFor="privacy">
            <input type="checkbox" id="privacy" name="privacy" className="mr-2" />
            Натискаючи на кнопку, ви погоджуєтесь з умовами обробки персональних даних
          </label>
        </form>
      </div>
      <footer className="footer py-20 text-center text-gray-400  text-xs">
        <div className="mb-5 flex justify-center flex-wrap gap-x-10 gap-y-2 ">
          <a href="#" className="hover:underline">Згода на обробку даних</a>
          <a href="#" className="hover:underline">Служба підтримки</a>
          <a href="#" className="hover:underline">Політика конфіденційності</a>
        </div>
        <div className="copyright">
          © nazvasaity.ua, 2054 | Назва компанії або ФОП
        </div>
      </footer>
    </section>
  )
}

export default Footer