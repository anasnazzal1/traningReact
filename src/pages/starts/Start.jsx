import style from "./start.module.css"
import img  from "../../assets/avataaars.svg"
 function Start(){
    return(
<section className={style.onescreen}>
  <section className={style.imgmain}>
    <img src={img}  />
  </section>
  <h1>Start Bootstrap</h1>
  <p>Graphic Artist - Web Designer - Illustrator</p>
</section>

    )
}

export default Start;