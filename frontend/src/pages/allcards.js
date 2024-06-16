import React,{useState, useEffect} from 'react';
import Card from '../components/card';
import navbar from '../components/navbar';
import axios from 'axios';

function CardsPage() {
      const [student, setStudent] = useState([]);
      useEffect(()=>{
        const fetchStudents = async () => {
            try {
              const response = await axios.get('http://localhost:8000/api/getss/getSchoolsNGO'); // Replace with your API endpoint
              //const data = await response.json();
              console.log(response.data);
              setStudent(response.data);
            } catch(error){
                console.log(error);
            }
          };
          fetchStudents();
      },[]);
  // Data for the cards
  return (
    <>
    <div className="flex flex-wrap justify-center items-center p-10 bg-gray-100 min-h-screen">
      {student.map((student, index) => (
        <Card
          key={index} // Each child in a list should have a unique key prop
          image={student.image || 'https://via.placeholder.com/150'} // Provide a placeholder image if none exists
          title={student.name}
          description={"wow yaar"}
        />
      ))}
    </div>
  </>
  );
}

export default CardsPage;