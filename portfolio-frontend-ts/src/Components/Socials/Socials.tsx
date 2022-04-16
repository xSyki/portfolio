import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Socials() {

    return (
        <div className="socials">
            <a href="https://github.com/xSyki">
                <FaGithub size="2rem" />
            </a>
            <a href="https://www.linkedin.com/in/mikołajsykuła/">
                <FaLinkedin size="2rem" />
            </a>
        </div>
    );
}

export default Socials;