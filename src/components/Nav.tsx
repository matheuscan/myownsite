import '../assets/css/nav.css'
import { useState } from 'react'



const Nav = () => {
    const [state,setState] =useState("offcanvas")
    let [visible, setVisible] = useState(false)
    

    
    return (
        <>
            <nav>
                <a href="/" id="brand" >Germán Matheus</a>

                <ul >
                    <a href="/" className="nav-item">Home</a>
                    <a href="/blog" className="nav-item">Blog</a>
                    <a href="" className="nav-item"></a>
                </ul>

                <div className="logos-container">
                    <a href="https://linkedin.com/in/german-matheus"><img src="/img/linkedin-icon.png" alt="Linkedin" className="nav-icon" style={{'marginRight':'1rem'}}/></a>
                    <a href="https://github.com/matheuscan"><img src="/img/github.png" alt="GitHub" className="nav-icon"/></a>
                </div>

                <button id='btnNav' onClick={() => {setVisible(true)}} className=''><img src="/img/hamburger-menu.png" alt="" /></button>
                <div className={visible ? "offcanvas-clicked" : "disappear"}>
                   <div className="links-container">
                   <button id='btnClose' onClick={() => {setVisible(false)}}><img src="/img/close.png" alt="" /></button>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <div>
                        <a href="https://linkedin.com/in/german-matheus"><img src="/img/linkedin-icon.png" alt="Linkedin" className="nav-icon" style={{'marginRight':'1rem'}}/></a>
                        <a href="https://github.com/matheuscan"><img src="/img/github.png" alt="GitHub" className="nav-icon"/></a>
                     </div>
                   </div>
                </div>
            

                </nav>
        </>
    )
}
export default Nav 
