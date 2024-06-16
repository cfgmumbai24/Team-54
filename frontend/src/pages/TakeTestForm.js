import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeechToText from './SpeechToText';
import SpeechToTextHindi from './SpeechToTextHindi';
import SpeechToTextMarathi from './SpeechToTextMarathi';

const TakeTestForm = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [classNo, setClassNo] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showTest, setShowTest] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rollNo && classNo && selectedLanguage) {
      setShowTest(true);
    } else {
      alert('Please fill out all fields and select a language');
    }
  };

  let SpeechComponent;
  switch (selectedLanguage) {
    case 'english':
      SpeechComponent = SpeechToText;
      break;
    case 'hindi':
      SpeechComponent = SpeechToTextHindi;
      break;
    case 'marathi':
      SpeechComponent = SpeechToTextMarathi;
      break;
    default:
      SpeechComponent = null;
  }

  return (
    <div className="container mt-5">
      {!showTest ? (
        <form className="mx-auto" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Student Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="rollNo" className="form-label">Roll Number:</label>
            <input
              type="text"
              id="rollNo"
              className="form-control"
              onChange={(e) => setRollNo(e.target.value)}
              value={rollNo}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="classNo" className="form-label">Class Number:</label>
            <input
              type="text"
              id="classNo"
              className="form-control"
              onChange={(e) => setClassNo(e.target.value)}
              value={classNo}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="language" className="form-label">Select Language:</label>
            <select
              id="language"
              className="form-control"
              onChange={(e) => setSelectedLanguage(e.target.value)}
              value={selectedLanguage}
              required
            >
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Start Test</button>
        </form>
      ) : (
        SpeechComponent && <SpeechComponent student={{ name, rollNo, classNo }} />
      )}
    </div>
  );
};

export default TakeTestForm;

