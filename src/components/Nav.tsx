import '../assets/css/nav.css'
import { useState } from 'react'



const Nav = () => {
    const [state,setState] =useState("offcanvas")
    let [mainNavState, setMainNav] = useState("")
    let [srcState, setSrc] = useState("../../public/img/hamburger-menu.png")

    const handleClick = () => {
        if (state === "offcanvas") 
        {
            setState("offcanvas-clicked")
            setMainNav("disappear")
            setSrc("../../public/img/close.png")
        }
        else
           {
            setState("offcanvas")
            setMainNav("")
            setSrc("../../public/img/hamburger-menu.png")
           }
        
    }
    return (
        <>
            <nav>
                <a href="/" id="brand" className={mainNavState}>Germán Matheus</a>

                <ul className={mainNavState}>
                    <a href="/" className="nav-item">Home</a>
                    <a href="/blog" className="nav-item">Blog</a>
                    <a href="" className="nav-item"></a>
                </ul>

                <div className="logos-container">
                    <a href="https://linkedin.com/in/german-matheus"><img src=".../../public/img/linkedin-icon.png" alt="Linkedin" className="nav-icon" style={{'marginRight':'1rem'}}/></a>
                    <a href="https://github.com/matheuscan"><img src=".../../public/img/github.png" alt="GitHub" className="nav-icon"/></a>
                </div>

                <button id='btnNav' onClick={handleClick}><img src={srcState} alt="" /></button>
                <div className={state}>
                   <div className="links-container">
                    
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <div>
                        <a href="https://linkedin.com/in/german-matheus"><img src=".../../public/img/linkedin-icon.png" alt="Linkedin" className="nav-icon" style={{'marginRight':'1rem'}}/></a>
                        <a href="https://github.com/matheuscan"><img src=".../../public/img/github.png" alt="GitHub" className="nav-icon"/></a>
                     </div>
                   </div>
                </div>
            

                </nav>
        </>
    )
}
export default Nav 
