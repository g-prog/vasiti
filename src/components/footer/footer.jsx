import "./footer.scss"

export default function footer() {
    return (
        <div className="footer">
            <div className="left">
                <img src="assets/phone.png" alt="phone"/>

            </div>
            <div className="right">
                <h1>Be a member of our community</h1>
                <p>Be a vibrant member of our community and support our mission</p>
                <div className="form">
                <form action="input" className="type">
                    <input type="email" id="email" placeholder="Enter  email  address" name="email"></input>
                    <button>SUBSCRIBE</button>
                </form>
                
                



                </div>
                

            </div>
            
        </div>
    )
}
