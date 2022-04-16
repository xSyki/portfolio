import React from 'react';
import Circle from './Circle';

function Skills() {

    return (
        <section className="skills">
            <h1 className="skills__title">Skills</h1>
            <div className="skills__categories">
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
            </div>
        </section>
    );
}

export default Skills;