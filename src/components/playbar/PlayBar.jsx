import './PlayBar.scss'
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function PlayBar() {
    const [value, setValue] = useState(100);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="playbar">
            <div className="playbar__controller">
                <i className='bx bx-rewind'></i>
                <i className='bx bx-play' ></i>
                <i className='bx bx-fast-forward' ></i>
                <i className='bx bx-repeat'></i>
                <i className='bx bx-shuffle'></i>
            </div>

            <div className="playbar__info">
                <div className="playbar__cover">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/LP_Vinyl_Symbol_Icon.png"
                        alt="Cover Image"
                        className="playbar__coverimg"
                    />
                </div>
                <div className="playbar__desc">
                    <div className="playbar__desc__song">
                        Song Name
                    </div>
                    <div className="playbar__desc__downside">
                        <span>Artist Name</span>
                        <span> • </span>
                        <span>Album Name</span>
                        <span> • </span>
                        <span>Release Year</span>
                    </div>
                </div>
            </div>

            <div className="playbar__status">
                <div className="playtime">
                    <span className="now">00:00 /</span>
                    <span className="all"> 00:00</span>
                </div>
                <div className="volumebar">
                    <i class='bx bx-volume-full' ></i>
                    <Slider
                        aria-label="Volume"
                        sx={{
                            maxWidth: "8rem",
                        }}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}
