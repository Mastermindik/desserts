import Header from '../header/Header'
import styles from "./Home.module.scss"
import Button from '../button/Button'

function Home() {
  function handleClick() {
    document.getElementById("cakes")?.scrollIntoView({behavior: "smooth"});
  }

  return <div className={styles.main}>
    <Header />
    <section className='home text-white pt-20 pb-40 lg:pt-44 xl:pb-96'>
      <div className="container 2xl:max-w-6xl ">
        <div className="wrapper sm:max-w-md lg:max-w-xl">
          <div className="content flex flex-col gap-6 mb-10">
            <span className="bg-white text-black rounded-md py-2 px-4 w-fit uppercase">Найсмачніші</span>
            <div className="title text-lg sm:text-2xl xl:text-5xl font-bold">Тістечка і капкейки він 75грн/шт. з доставкою по Києву</div>
            <div className="subtitle text-lg xl:text-2xl">Приготуємо за 3 години на день замовлення. Доставка на авто у холодильнику.</div>
          </div>
          <div className="flex items-center gap-5">
            <Button onClick={handleClick} >Перейти до каталогу</Button>
            <p className="text-green-900 bg font-semibold xl:text-white">9 різних видів на вибір</p>
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default Home