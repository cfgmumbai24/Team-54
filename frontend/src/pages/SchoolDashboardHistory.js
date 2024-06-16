import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { ReadingDataWithQuarters } from '../data1';
import Navbar from '../components/navbar';

const SchoolDashboardHistory = () => {
  const [rollNo, setRollNo] = useState('');
  const [classId, setClassId] = useState('');
  const [searchedStudentData, setSearchedStudentData] = useState([]);
  const quarters = ["1st April", "1st August", "1st December"];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ff7300', '#413ea0'];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'rollNo') {
      setRollNo(value);
    } else if (name === 'classId') {
      setClassId(value);
    }
  };

  const handleSearch = () => {
    const foundStudent = ReadingDataWithQuarters.find(student => student.rollNo === parseInt(rollNo) && student.classId === parseInt(classId));
    if (foundStudent) {
      const studentLevels = [
        { date: quarters[0], level: foundStudent.levela },
        { date: quarters[1], level: foundStudent.levelb },
        { date: quarters[2], level: foundStudent.levelc }
      ];
      setSearchedStudentData(studentLevels);
    } else {
      setSearchedStudentData([]);
      alert(`Student with Roll No ${rollNo} and Class ID ${classId} not found.`);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="rollNo">Roll No:</label>
                <input
                  type="text"
                  className="form-control"
                  id="rollNo"
                  name="rollNo"
                  value={rollNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="classId">Class ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="classId"
                  name="classId"
                  value={classId}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleSearch} className="btn btn-primary mt-3">Search</button>
            </div>
          </div>
          {searchedStudentData.length > 0 && (
            <div className="row mt-4">
              <div className="col">
                <h2 className="text-center">Student Levels</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={searchedStudentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis type="number" domain={[1, 7 ]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="level" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default SchoolDashboardHistory;
