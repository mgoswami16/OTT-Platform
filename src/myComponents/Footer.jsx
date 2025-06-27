import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>About</h3>
                        <a href="#">Company Info</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact Us</a>
                    </div>

                    <div class="footer-section">
                        <h3>Help</h3>
                        <a href="#">FAQ</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <div class="social-icons">
                            <a href="#"><img src="facebook-icon.svg" alt="Facebook" /></a>
                            <a href="#"><img src="twitter-icon.svg" alt="Twitter" /></a>
                            <a href="#"><img src="instagram-icon.svg" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
                <p class="footer-bottom">© 2025 YourBrand. All rights reserved.</p>
            </footer>


        </>
    )
}

export default Footer
