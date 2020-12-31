import React from 'react';
import './topNav.css'


function navSlide() {

}


function Nav() {
    return (

        <body>
            <nav>
                <div>
                    <h4>Robert Mazza</h4>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <div id="burger" class="burger" >
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </body>

    );
}

export default Nav;
