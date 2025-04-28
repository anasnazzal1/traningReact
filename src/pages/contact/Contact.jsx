import style from "./contact.module.css" 
 
 function Contact(){
    return (
       <section className={style.fourscreen}>
  <h2>Contact Me</h2>
  <div className={style.childfour}>
    <form action className={style.formfourscreen}>
      <input type="text" placeholder="full name" />
      <input type="email" placeholder="email addres" />
      <input type="number" placeholder="phone number" />
      <textarea name id placeholder="message" defaultValue={""} />
      <button type="submit" className={style.btnfourscreen}>send</button>
    </form>
  </div>
</section>

    )
}
export default Contact;