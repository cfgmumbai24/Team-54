import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpeechToText = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState(5);

  const predefinedTexts = {
    5: `Story: 
    Once upon a time in a land far, far away, there was a beautiful kingdom where everyone lived in peace and harmony.
    The king was kind and just, and the people were happy. But one day, a dark cloud appeared over the kingdom.
    An evil sorcerer cast a spell that made everyone forget their happiness. The king had to find a way to break the spell.`,
    4: `Paragraph: Once upon a time in a land far, far away, there was a beautiful kingdom where everyone lived in peace and harmony.`,
    3: `Sentence: Once upon a time in a land far, far away, there was a beautiful kingdom.`,
    2: `Word: kingdom`,
    1: `Alphabet: k`
  };

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setMessage("Browser doesn't support speech recognition.");
    }
  }, []);

  const startListening = () => {
    resetTranscript(); // Reset transcript here
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListeningAndCompare = () => {
    SpeechRecognition.stopListening();
    const predefinedString = predefinedTexts[level];
    const calculateMatchPercentage = (str1, str2) => {
      const words1 = str1.split(' ');
      const words2 = str2.split(' ');
      const commonWords = words1.filter(word => words2.includes(word)).length;
      return (commonWords / words1.length) * 100;
    };

    const matchPercentage = calculateMatchPercentage(predefinedString, transcript);
    if (matchPercentage > 60) {
      if (level === 5) {
        setMessage('You have the highest numeracy level!');
      } else if (level === 4) {
        setMessage('You have numeracy level: Paragraph');
      } else if (level === 3) {
        setMessage('You have numeracy level: Sentence');
      } else if (level === 2) {
        setMessage('You have numeracy level: Word');
      } else if (level === 1) {
        setMessage('You have numeracy level: Alphabet');
      }
    } else {
      if (level > 1) {
        setLevel(level - 1);
        setMessage('');
      } else {
        setMessage('Retake after practice.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Numeracy Test</h1>
              <p className="card-text mb-4">{predefinedTexts[level]}</p>
              <div className="text-center mb-4">
                <button onClick={startListening} className="btn btn-primary mx-2" disabled={listening}>
                  Start Listening
                </button>
                <button onClick={stopListeningAndCompare} className="btn btn-danger mx-2" disabled={!listening}>
                  Stop & Compare
                </button>
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="5"
                  value={transcript}
                  readOnly
                  placeholder="Your speech will be displayed here..."
                ></textarea>
              </div>
              {message && (
                <div className="alert alert-info text-center" role="alert">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
