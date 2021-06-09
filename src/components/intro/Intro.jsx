import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
            
                <hr className="line"></hr>
                <nav>
                        <ul className="navlinks">
                            <li><a href="#intro">MARKETPLACE</a></li>
                            <li><a href="#intro">WHOLESALE CENTER</a></li>
                            <li><a href="#intro">SELLER CENTER</a></li>
                            <li><a href="#intro">SERVICES</a></li>
                            <li><a href="#intro">INTERNSHIPS</a></li>
                            <li><a href="#intro">EVENTS</a></li>

                        </ul>
                    </nav>

                <hr className="line"></hr>

            
                <div className="container">
                        <div className="left">
                            <div className="wrapper">
                                <div className="content">
                                <h1>Amazing <br></br>
                                    Experiences from Our <br></br>Wonderful Customers</h1>
                                    <p>Here is what customers and vendors are saying<br></br>about us,you can share your stories with us too.</p>
                                </div>
                                
                                
                            </div>
                        
                       </div>
                        <div className="right">
                            <div className="imageContainer">
                                <img src="assets/smiling.png" alt="cartoon"/>
                            </div>
                        </div>
            
                

                </div>

                
            
            
        </div>
    )
}
