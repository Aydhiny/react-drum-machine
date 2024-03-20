import React, { useState, useRef } from 'react';
import './App.css';

const DrumPad = ({ id, src, keyTrigger, onClick }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      onClick(id);
    }
  };

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      <div className="drum-pad-key">{keyTrigger}</div>
      <audio className="clip" ref={audioRef} src={src}></audio>
    </div>
  );
};

const App = () => {
  const [displayText, setDisplayText] = useState('');

  const playSound = (soundId) => {
    setDisplayText(soundId);
    animateSoundWave(soundId);
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const sound = document.getElementById(key);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      setDisplayText(sound.parentElement.id);
      animateSoundWave(key);
    }
  };

const animateSoundWave = (key) => {
  const soundWave = document.createElement('div');
  soundWave.classList.add('sound-wave');
  soundWave.id = `${key}-wave`; // Set unique ID for each sound wave
  document.getElementById('drum-machine').appendChild(soundWave);

  setTimeout(() => {
    soundWave.remove();
  }, 300);
};

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        <DrumPad id="Heater-1" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" keyTrigger="Q" onClick={playSound} />
        <DrumPad id="Heater-2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" keyTrigger="W" onClick={playSound} />
        <DrumPad id="Heater-3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" keyTrigger="E" onClick={playSound} />
        <DrumPad id="Heater-4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" keyTrigger="A" onClick={playSound} />
        <DrumPad id="Heater-6" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" keyTrigger="S" onClick={playSound} />
        <DrumPad id="Dsc_Oh" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" keyTrigger="D" onClick={playSound} />
        <DrumPad id="Kick_n_Hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" keyTrigger="Z" onClick={playSound} />
        <DrumPad id="RP4_KICK_1" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyTrigger="X" onClick={playSound} />
        <DrumPad id="Cev_H2" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" keyTrigger="C" onClick={playSound} />
      </div>
            <p className='headerText'>Drum Machine by <strong>Ajdin Mehmedović</strong></p>
    </div>
  );
};

export default App;
