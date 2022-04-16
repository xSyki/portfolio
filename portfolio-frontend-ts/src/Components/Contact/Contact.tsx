import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {

    return (
        <section className="contact">
            <h1 className="contact__title">Contact</h1>
            {/* <form action="" className="contact__form">
                <div className="contact__my-mail">My e-mail: mikolaj@syki.pl</div>
                <input type="text" placeholder="Name" className="contact__name" />
                <input type="text" placeholder="E-mail" className="contact__mail" />
                <input type="text" placeholder="Title" className="contact__title-mail" />
                <textarea name="" id="" cols="30" rows="10" className="contact__content" placeholder="Message">
                </textarea>
                <button className="contact__send-btn">Send</button>
            </form> */}
            <div className="contact__content">
                <p className="contact__invitation">If you see anything I can help you with, feel free to email me.</p>
                <p className="contact__email">mikolaj@syki.pl</p>
                <p className="contact__welcome-social">or visit my profiles on social media</p>
                <div className="contact__socials">
                    <a href="https://github.com/xSyki" className="contact__social">
                        <FaGithub size="2rem" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mikołajsykuła/" className="contact__social">
                        <FaLinkedin size="2rem" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;