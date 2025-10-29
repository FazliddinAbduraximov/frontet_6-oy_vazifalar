import { ProductCard } from "./components/product-card"
import { AudioCard } from "./components/audio"
import products from "./data/products"
import audio from "./data/audio"


function App() {
  return <>
    <section>
      <div className="container ">
          <h1 className="font-bold text-[33px] mt-16 mb-8">Янги қўшилганлар</h1>
        <div className="flex justify-between gap-6 " >
          {products.map((iteam) => (
            <ProductCard img={iteam.img} title={iteam.title} />
          ))}
        </div>
      </div>
    </section>
    <section>
      <div className="container ">
          <h1 className="font-bold text-[33px] mt-16 mb-8">Аудио китоблар</h1>
        <div className="flex justify-between gap-6 " >
          {audio.map((iteam) => (
            <AudioCard img={iteam.img} title={iteam.title} />
          ))}
        </div>
      </div>
    </section>

  </>

}

export default App
