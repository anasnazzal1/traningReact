import style from "./about.module.css"

function About(){
    return (
        <section className={style.threescreen}>
        <h2>About</h2>
        <div className={style.articlethreescreen}>
            <p></p>
            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            <p></p>
    </div>
        <button>free download</button>
    </section>
    )
}
export default About;