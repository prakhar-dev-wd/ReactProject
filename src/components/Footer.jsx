import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer(){
    return (
        <div className="footer">
            <p>Connect With Us❤</p>
            <footer>
            <ul class="list-inline">
                <li class="list-inline-item">FaceBook</li>
                <li class="list-inline-item">Instagram</li>
                <li class="list-inline-item">Linkedin <FontAwesomeIcon icon="fa-brands fa-linkedin" /></li>
            </ul>
            </footer>
        </div>
    )
}
export default Footer;