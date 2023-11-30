import React, { useContext, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import jsPDF from 'jspdf';
import download from './assets/download.png'
import pdf from './assets/pdf.png'
// import mic from './assets/mic.png'
// import micOff from './assets/mic-off.png'
import { color } from 'framer-motion';



const Dictaphone = ({ setTheme, theme }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // const [isListening, setIsListening] = useState(false);
  const [recordedText, setRecordedText] = useState('')
  const [saveFileName, setSavaeFileName] = useState('')
  const [savePDFClick, setPDFClick] = useState(false)

  const [rotationDirection, setRotationDirection] = useState(0);
  const [rotationCounter,setRotationCounter] = useState(0)



  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'eng-US' })
    setRecordedText(transcript)

  }



  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text(10, 10, doc.splitTextToSize(transcript, 180));
    doc.save(`${saveFileName ? saveFileName : 'recording'}.pdf`);
    setSavaeFileName('')
    setPDFClick(false)

  }



  const themeSet=() =>{
    setTheme(theme == 'light' ? 'dark' : 'light')
    setRotationCounter(rotationCounter+1)
    setRotationDirection(rotationCounter%2 === 0 ? 25: -25);
  }






  return (
    <div className={`dictaphone ${theme}-phone`}>

      <div>
        <h3 style={listening ? { color: 'white' } : {}}>Microphone: {listening ? 'on' : 'off'}


          <span className="material-symbols-outlined"> {listening ? 'keyboard_voice' : 'mic_off'} </span>

        </h3>

        <button className='action-btns' onClick={() => navigator.clipboard.writeText(transcript)}> &nbsp; Copy  &nbsp; </button>
        <button onClick={() => setPDFClick(true)} className='action-btns' >Save as <img src={pdf} alt="" /> </button>
        {/* <button onClick={onClick} className={theme}  ></button> */}

        <span className={`material-symbols-outlined ${theme}`} id='dark-mode-btn' onClick={themeSet}
          style={{transform: `rotate(${rotationDirection}deg)`}}
        >light_mode</span>
      </div>



      <div className="typewriter">
        <p>{transcript}</p>
      </div>

      <div className="actions">

        <button className='action-btns' onClick={startListening}>Start</button>
        <button className='action-btns' onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className='action-btns' onClick={resetTranscript}>Reset</button>

        {savePDFClick &&

          <div className="filename-popup">
            <input type="text" name="" id="" value={saveFileName} onChange={(e) => setSavaeFileName(e.target.value)} />
            <button onClick={downloadPdf} ><img src={download} alt="" /></button>

          </div>
        }
      </div>





    </div>
  );
};
export default Dictaphone;