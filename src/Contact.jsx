import screenshot from "./assets/img/Screenshot_2023-08-12_003748.png"
import email from "./assets/icons/Email.svg"
import github from "./assets/icons/Github.svg"
import instagram from "./assets/icons/Instagram.svg"
import linkedin from "./assets/icons/linkedin.svg"
import website from "./assets/icons/Website.svg"
import Menu from "./Menu"

function Contact() {
  return (
    <div className="">
      <Menu />
      <div className="mt-0" id="image">
            <img src={screenshot} alt="Henry and their dog Lucky"></img>
        </div>

        <div id="name">
            <a href="https://hpknollenberg.github.io/"><h1>Henry Knollenberg</h1></a>
        </div>

        <div class="container contact-card-wrapper mb-3">
            <div class="row justify-content-center justify-content-md-around align-items-center">
                    <a href="mailto:henryknollenberg@outlook.com" class="icon email-button col-5 col-md-2"><img src={email} alt="envelope icon" class="icons"></img></a>
                    <a href="https://github.com/hpknollenberg" class="icon col-5 col-md-2"><img src={github} alt="github icon" class="icons"></img></a>
                    <a href="https://www.instagram.com/greatsetman/" class="icon col-5 col-md-2"><img src={instagram} alt="instagram icon" class="icons"></img></a>
                    <a href="https://www.linkedin.com/in/henry-knollenberg-44a62829a/" class="icon col-5 col-md-2"><img src={linkedin} alt="linked-in icon" class="icons"></img></a>
            </div>
        </div>
    </div>
    
  )
}


export default Contact
