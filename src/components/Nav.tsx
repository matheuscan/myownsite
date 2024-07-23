import '../assets/css/nav.css'

const Nav = () => {
    return (
        <>
            <nav>
                <a href="/" id="brand">Germán Matheus</a>

                <ul>
                    <a href="/" className="nav-item">Home</a>
                    <a href="/blog" className="nav-item">Blog</a>
                    <a href="" className="nav-item"></a>
                </ul>

                <div className="logos-container">
                    <a href="https://linkedin.com/in/german-matheus"><img src=".../../public/img/linkedin-icon.png" alt="Linkedin" className="nav-icon" style={{'marginRight':'1rem'}}/></a>
                    <a href="https://github.com/matheuscan"><img src=".../../public/img/github.png" alt="GitHub" className="nav-icon"/></a>
                </div>
            </nav>
        </>
    )
}
export default Nav 