import React from "react";
import './footer.css';
import fb from '../Images/github.png';
import twitter from '../Images/github.png';
import linkedin from '../Images/github.png';
import github from '../Images/github.png';

const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>Resources</h4>
                        <a href="/Privacy">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="/About">
                            <p>About Us</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Socials</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                            <p><img src={linkedin} alt="" /></p>
                            <p><img src={github} alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} EpicsProject. All rights reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/terms"><div><p>Privacy</p></div></a>
                        <a href="/terms"><div><p>Scurity</p></div></a>
                        <a href="/terms"><div><p>Cookie Declaration</p></div></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;