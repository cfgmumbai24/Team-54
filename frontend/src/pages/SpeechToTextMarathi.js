import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpeechToTextMarathi = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState(5);

  const predefinedTexts = {
    5: `कथा:
    एके काळी एका दूरच्या प्रदेशात एक सुंदर राज्य होते जिथे सर्व लोक शांततेत आणि ऐक्याने राहत होते.
    राजा दयाळू आणि न्यायप्रिय होता, आणि लोक आनंदी होते. परंतु एके दिवशी, राज्यावर एक काळे ढग आले.
    एका दुष्ट जादूगाराने असा मंत्र केला की सर्व लोक आपला आनंद विसरले. राजाला मंत्र तोडण्याचा उपाय शोधावा लागला.`,
    4: `परिच्छेद: एके काळी एका दूरच्या प्रदेशात एक सुंदर राज्य होते जिथे सर्व लोक शांततेत आणि ऐक्याने राहत होते.`,
    3: `वाक्य: एके काळी एका दूरच्या प्रदेशात एक सुंदर राज्य होते.`,
    2: `शब्द: राज्य`,
    1: `अक्षर: र`
  };

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setMessage("ब्राउजर भाषण ओळख समर्थन करत नाही.");
    }
  }, []);

  const startListening = () => {
    resetTranscript(); // Reset transcript here
    SpeechRecognition.startListening({ continuous: true, language: 'mr-IN' });
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
        setMessage('आपला गणितीय स्तर सर्वोच्च आहे!');
      } else if (level === 4) {
        setMessage('आपला गणितीय स्तर: परिच्छेद');
      } else if (level === 3) {
        setMessage('आपला गणितीय स्तर: वाक्य');
      } else if (level === 2) {
        setMessage('आपला गणितीय स्तर: शब्द');
      } else if (level === 1) {
        setMessage('आपला गणितीय स्तर: अक्षर');
      }
    } else {
      if (level > 1) {
        setLevel(level - 1);
        setMessage('');
        resetTranscript(); // Clear transcript for the next level
      } else {
        setMessage('अभ्यासानंतर पुन्हा प्रयत्न करा.');
        resetTranscript(); // Clear transcript for the retry
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">गणितीय चाचणी</h1>
              <p className="card-text mb-4">{predefinedTexts[level]}</p>
              <div className="text-center mb-4">
                <button onClick={startListening} className="btn btn-primary mx-2" disabled={listening}>
                  ऐकणे प्रारंभ करा
                </button>
                <button onClick={stopListeningAndCompare} className="btn btn-danger mx-2" disabled={!listening}>
                  थांबा आणि तुलना करा
                </button>
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="5"
                  value={transcript}
                  readOnly
                  placeholder="आपले भाषण येथे प्रदर्शित होईल..."
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

export default SpeechToTextMarathi;
