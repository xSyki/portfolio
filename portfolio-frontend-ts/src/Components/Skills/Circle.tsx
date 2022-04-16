import React, { useEffect, useState } from 'react';

interface circleProps {
    progress: number,
    name: string
}

function Circle(props: circleProps) {

    const [degreeProgress, setDegreeProgress] = useState(0);

    useEffect(() => {
        setDegreeProgress(180 * props.progress / 100);
    }, [])

    return (
        <div className="skill">
            <h3>{props.name}</h3>
            <div className="circle-wrap">
                <div className="circle">
                    <div className="mask half">
                        <div className="fill" style={{ transform: `rotate(${degreeProgress}deg)` }}></div>
                    </div>
                    <div className="mask full" style={{ transform: `rotate(${degreeProgress}deg)` }}>
                        <div className="fill" style={{ transform: `rotate(${degreeProgress}deg)` }}></div>
                    </div>
                </div>
                <div className="inside-circle"> {props.progress}% </div>
            </div>
        </div>
    );
}

export default Circle;