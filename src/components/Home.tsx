import '../assets/css/home.css'

const Home = () => {
    return (
        <>
            <div className="home-top">
                <h2>Welcome to my site!</h2>
            </div>
            <div className="home-section">
                
                <div className="about-cards">
                    <div className="about-card" id="academics">
                        <h3>System Administration</h3>
                    </div>
                    <div className="about-card" id="expertise">
                        <h3>Web Development</h3>
                    </div>
                    <div className="about-card" id="hobbies">
                        <h3>Tech Support</h3>
                    </div>
                </div>
                <div className="home-cv">
                    <img src="../public/img/undraw_website_u6x8.png" alt="Profile picture" className="self-picture" />

                    <div className="info-card">
                        <h2>About Me</h2>
                        <div className="h2separator"></div>

                        <h3>IT Specialist - Industrias Jatu | July 2023 - October 2023</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae, expedita odio suscipit soluta veniam at quaerat id enim veritatis explicabo assumenda 
                            consequatur iste reiciendis excepturi doloribus ipsum harum dolorem?</p>

                            <h3>IT Specialist - Industrias Jatu | July 2023 - October 2023</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae, expedita odio suscipit soluta veniam at quaerat id enim veritatis explicabo assumenda 
                            consequatur iste reiciendis excepturi doloribus ipsum harum dolorem?</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home