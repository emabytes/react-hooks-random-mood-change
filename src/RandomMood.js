import React, { useState } from 'react';
import { Cat } from 'react-kawaii';

const RandomMood = (props) => {
    const MoodHappy = () => <Cat size={400} mood="blissful" color="#FDA7DC" />;
    const [isHappy, setMood] = useState(MoodHappy)

    const moodArr = ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"];
    let randomMood = moodArr[Math.floor(Math.random() * moodArr.length)];

    return (
        <section>
            <Cat size={400} mood={randomMood} color="#FDA7DC" />
            <button onClick={() => setMood(!isHappy)}>CHANGE MOOD</button>
        </section>

    );
}

export default RandomMood;