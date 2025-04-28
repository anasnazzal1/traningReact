import style from "./portfolio.module.css"
import img1  from "../../assets/1.png"
import img2  from "../../assets/2.png"
import img3  from "../../assets/3.png"
import img4  from "../../assets/4.png"
import img5  from "../../assets/5.png"
import img6  from "../../assets/6.png"

function Portfolio(){
    return (
      <section className={style.twoscreen}>
  <h2>Portfolio</h2>
  <section className={style.imgestwoscreen}>
    <div className={style.photo}>
      <img src={img1} alt="this photo for prodact" />
    </div>
    <div className={style.photo}>
      <img src={img2} alt="this photo for prodact" />
    </div>
    <div className={style.photo}>
      <img src={img3} alt="this photo for prodact" />
    </div>
    <div className={style.photo}>
      <img src={img4} alt="this photo for prodact" />
    </div>
    <div className={style.photo}>
      <img src={img5} alt="this photo for prodact" />
    </div>
    <div className={style.photo}>
      <img src={img6} alt="this photo for prodact" />
    </div>
  </section>
</section>

    )
}
export default Portfolio;