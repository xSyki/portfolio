import React, { useEffect } from 'react';
import Circle from './Circle';

import TagCloud from 'TagCloud';

function Skills() {



    useEffect(() => {
        var width = document.body.clientWidth > 768 ? document.body.clientWidth / 5 : document.body.clientWidth / 2.5;

        const itContainer = '.skills__it';
        const itTexts = [
            'JavaScript', 'TypeScript', 'NodeJS',
            'React', 'Git', 'MongoDB',
            'CSS', 'SCSS', 'BEM',
            'npm', 'JSON',
        ];
        const itOptions = { containerClass: "skills__sphere", useContainerInlineStyles: false, radius: width };

        const artistContainer = '.skills__artist';
        const artistTexts = [
            'Premier Pro', 'Blender', 'PhotoShop',
            'Audition', 'After Effects', 'Ilustrator', 'Davinci Resolve', 'Audacity'
        ];
        const artistOptions = { containerClass: "skills__sphere", useContainerInlineStyles: false, radius: width };

        const itDiv = document.querySelector('.skills__it');
        if (itDiv.children.length) {
            itDiv.innerHTML = "";
            const itSphere = TagCloud(itContainer, itTexts, itOptions);
        } else {
            const itSphere = TagCloud(itContainer, itTexts, itOptions);
        }

        const artistDiv = document.querySelector('.skills__artist');
        if (artistDiv.children.length) {
            artistDiv.innerHTML = "";
            TagCloud(artistContainer, artistTexts, artistOptions);
        } else {
            TagCloud(artistContainer, itTexts, artistOptions);
        }

        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {

            var width = document.body.clientWidth > 768 ? document.body.clientWidth / 5 : document.body.clientWidth / 2.5;

            const itOptions = { containerClass: "skills__sphere", useContainerInlineStyles: false, radius: width };

            if (itDiv.children.length) {
                itDiv.innerHTML = "";
                const itSphere = TagCloud(itContainer, itTexts, itOptions);
            } else {
                const itSphere = TagCloud(itContainer, itTexts, itOptions);
            }

            const artistOptions = { containerClass: "skills__sphere", useContainerInlineStyles: false, radius: width };

            if (artistDiv.children.length) {
                artistDiv.innerHTML = "";
                TagCloud(artistContainer, artistTexts, artistOptions);
            } else {
                TagCloud(artistContainer, itTexts, artistOptions);
            }
        }

    }, [])


    return (
        <section className="skills">
            <h1 className="skills__title">Skills</h1>
            <div className="skills__spheres">
                <div className="skills__it">

                </div>
                <div className="skills__artist">

                </div>
            </div>
            {/* <div className="skills__categories">
                <div className="skills__web">
                    <h2 className="skills__sub-title">WebDeveloper</h2>
                    <div className="skills__circles">
                        <Circle name="JavaScript" progress={70} />
                        <Circle name="TypeScript" progress={40} />
                        <Circle name="React" progress={60} />
                        <Circle name="NodeJS" progress={30} />
                        <Circle name="MongoDB" progress={20} />
                    </div>
                </div>
                <div className="skills__artist">
                    <h2 className="skills__sub-title">Artist</h2>
                    <div className="skills__circles">
                        <Circle name="Premier Pro" progress={95} />
                        <Circle name="After Effects" progress={40} />
                        <Circle name="PhotoShop" progress={60} />
                        <Circle name="Ilustrator" progress={40} />
                        <Circle name="Audition" progress={80} />
                        <Circle name="Blender" progress={40} />
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default Skills;