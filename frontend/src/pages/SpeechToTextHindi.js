import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpeechToTextHindi = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState(5);

  const predefinedTexts = {
    5: `कहानी: 
    बहुत समय पहले, एक दूर देश में एक सुंदर राज्य था जहाँ सभी लोग शांति और सद्भाव में रहते थे।
    राजा दयालु और न्यायप्रिय था, और लोग खुश थे। लेकिन एक दिन, राज्य पर एक काला बादल छा गया।
    एक दुष्ट जादूगर ने ऐसा जादू किया जिससे सभी अपनी खुशी भूल गए। राजा को जादू तोड़ने का तरीका खोजना था।`,
    4: `पैरा: बहुत समय पहले, एक दूर देश में एक सुंदर राज्य था जहाँ सभी लोग शांति और सद्भाव में रहते थे।`,
    3: `वाक्य: बहुत समय पहले, एक दूर देश में एक सुंदर राज्य था।`,
    2: `शब्द: राज्य`,
    1: `अक्षर: र`
  };

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setMessage("ब्राउज़र स्पीच रिकग्निशन का समर्थन नहीं करता।");
    }
  }, []);

  const startListening = () => {
    resetTranscript(); // Reset transcript here
    SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
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
        setMessage('आपका अंकगणित का स्तर सबसे उच्च है!');
      } else if (level === 4) {
        setMessage('आपका अंकगणित का स्तर: पैरा');
      } else if (level === 3) {
        setMessage('आपका अंकगणित का स्तर: वाक्य');
      } else if (level === 2) {
        setMessage('आपका अंकगणित का स्तर: शब्द');
      } else if (level === 1) {
        setMessage('आपका अंकगणित का स्तर: अक्षर');
      }
    } else {
      if (level > 1) {
        setLevel(level - 1);
        setMessage('');
        resetTranscript(); // Clear transcript for the next level
      } else {
        setMessage('अभ्यास के बाद पुनः प्रयास करें।');
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
              <h1 className="card-title text-center mb-4">अंकगणित परीक्षण</h1>
              <p className="card-text mb-4">{predefinedTexts[level]}</p>
              <div className="text-center mb-4">
                <button onClick={startListening} className="btn btn-primary mx-2" disabled={listening}>
                  सुनना प्रारंभ करें
                </button>
                <button onClick={stopListeningAndCompare} className="btn btn-danger mx-2" disabled={!listening}>
                  रोकें और तुलना करें
                </button>
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="5"
                  value={transcript}
                  readOnly
                  placeholder="आपकी आवाज यहाँ प्रदर्शित होगी..."
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

export default SpeechToTextHindi;
