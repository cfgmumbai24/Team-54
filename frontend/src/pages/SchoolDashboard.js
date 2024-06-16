import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ReadingData } from '../Data';
import TakeTestForm from './TakeTestForm';
import SpeechToText from './SpeechToText';
import Navbar from '../components/navbar';

const SchoolDashboard = () => {
  const [showTakeTestForm, setShowTakeTestForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [studentData, setStudentData] = useState({});

  const getClassData = (classId) => ReadingData.filter(student => student.classId === classId);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ff7300', '#413ea0'];
  const getUniqueLevels = () => {
    const levels = ReadingData.map(student => student.level);
    return Array.from(new Set(levels)).sort((a, b) => a - b).slice(0, 7);
  };

  const renderLegend = () => (
    <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', maxWidth: '200px', margin: '0 auto' }}>
      {getUniqueLevels().map((level, index) => (
        <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: COLORS[(level - 1) % COLORS.length], marginRight: '5px' }}></div>
          <span>Level {level}</span>
        </div>
      ))}
    </div>
  );

  const getStudentsBelowLevel = (classId, maxLevel) => {
    return getClassData(classId).filter(student => student.level < maxLevel);
  };

  const analyzeData = () => {
    const thresholds = { 1: 3, 2: 5, 3: 7 };
    let reportText = '';

    [1, 2, 3].forEach(classId => {
      const totalStudents = getClassData(classId).length;
      const belowLevelStudents = getStudentsBelowLevel(classId, thresholds[classId]).length;
      const percentageBelow = (belowLevelStudents / totalStudents) * 100;

      if (percentageBelow > 30) {
        reportText += `Class ${classId} is below average with ${percentageBelow.toFixed(2)}% of students below the specified level.\n`;
      } else {
        reportText += `Class ${classId} is performing well.\n`;
      }
    });

    alert(reportText);
  };

  const handleFormSubmit = (data) => {
    setStudentData(data);
    setFormSubmitted(true);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="container mt-5">
      {!formSubmitted ? (
        showTakeTestForm ? (
          <TakeTestForm onFormSubmit={handleFormSubmit} />
        ) : (
          <>
            <div className="row">
              <div className="col text-center mb-4">
                <h1>School Dashboard</h1>
              </div>
              <div className="col text-right mb-4">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowTakeTestForm(true)}
                >
                  Take Test
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  {[1, 2, 3].map(classId => (
                    <div key={`class-${classId}`} className="col-md-4 mb-4">
                      <h3 className="text-center">Class {classId}</h3>
                      <div style={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={getUniqueLevels().map(level => ({
                                level,
                                value: getClassData(classId).filter(student => student.level === level).length,
                              }))}
                              dataKey="value"
                              nameKey="level"
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                            >
                              {getUniqueLevels().map((level, index) => (
                                <Cell key={`cell-${level}`} fill={COLORS[(level - 1) % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <h4>Students Below Level {classId === 1 ? 3 : classId === 2 ? 5 : 7}</h4>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Roll No</th>
                              <th>Level</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getStudentsBelowLevel(classId, classId === 1 ? 3 : classId === 2 ? 5 : 7).map(student => (
                              <tr key={`student-${student.rollNo}`}>
                                <td>{student.rollNo}</td>
                                <td>{student.level}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-3">
                {renderLegend()}
                <button onClick={analyzeData} className="btn btn-primary mt-3">Analyze Data</button>
              </div>
            </div>
          </>
        )
      ) : (
        <SpeechToText studentData={studentData} />
      )}
    </div>
    </>
  );
};

export default SchoolDashboard;
