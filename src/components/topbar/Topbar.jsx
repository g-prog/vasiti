import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <header>
                <a href="#intro" id="vasiti"><span id="name">vasiti</span><span id="tiny">.com</span></a>

                <nav>
                    <ul className="navlinks">
                        <li><a href="#intro">ABOUT US</a></li>
                        <li><a href="#intro">STORIES</a></li>
                        <li><a href="#intro">CONTACT</a></li>
                        <li><a href="#intro">LOG IN</a></li>

                    </ul>
                </nav>
                <a class="cta" href="#intro"><button>SIGN UP</button></a>

            </header>
            



            
        </div>
    )
}
