import style from "./footer.module.css"

function Footer(){
    return(

      <div>
  <footer className={style.footer}>
    <div className={style.sec}>
      <h2>Location</h2>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className={style.sec}>
      <h2>Around the Web</h2>
      <nav>
        <a href="https://www.facebook.com/profile.php?id=100004006304491&mibextid=LQQJ4d" className={style.linkscoial} target="_blank">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://twitter.com/your-twitter-username" className={style.linkscoial} target="_blank">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href="https://www.linkedin.com/in/anas-nazzal-948873271" className={style.linkscoial} target="_blank">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/anasnazzal1" className={style.linkscoial} target="_blank">
          <i className="fa-brands fa-github" />
        </a>
      </nav>
    </div>
    <div className={style.sec}>
      <h2>About Freelancer</h2>
      <p>Freelance is a free to use, MIT licensed</p>
      <p>Bootstrap theme created by <a href className={style.bottstraplink}>Start Bootstrap </a></p>
    </div>
  </footer>
  <section className={style.end}>
    <p>Copyright © Your Website 2021</p>
  </section>
</div>

    )
}

export default Footer;