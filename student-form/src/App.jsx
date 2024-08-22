import { useState } from 'react'

import './App.css'



function App() {
  const [username,setUserName] = useState("");
  const [fathername,setFatherName] = useState("");
  const [rollnumber,setRollNumber] = useState("");
  const [timing,setTiming] = useState("");
  const [sirname,setSirName] = useState("");
  const [students,setStudent] = useState([]);

  const addStudent = () => {
    // check if all fields are filled
    if(!username) return alert('Please add Student name')
    if(!fathername) return alert('Please add Father name')
    if(!rollnumber) return alert('Please add Roll name')
    if(!sirname) return alert('Please add Sir name')
    if(!timing) return alert('Please add Class timing')

    // const arr = [...students,username,fathername,rollnumber];
    // console.log(arr);
    // setStudent(arr);
    // setFatherName(arr);
    // setRollNumber(arr);

    const newStudent = {username,fathername,rollnumber,sirname,timing};
    setStudent([...students,newStudent])

    // Clear input fields
    setUserName("");
    setFatherName("");
    setRollNumber("");
    setSirName("")
    setTiming("")
  }

  return (
    <>
    <div className='container'>
      <div>
        <input placeholder='Student-name' value={username} onChange={(e)=>setUserName(e.target.value)} />
        <input placeholder='Father-name' value={fathername} onChange={(e)=>setFatherName(e.target.value)} />
        <input placeholder='Roll-no' value={rollnumber} onChange={(e)=>setRollNumber(e.target.value)} />
        <input placeholder='Sir-name' value={sirname} onChange={(e)=>setSirName(e.target.value)} />
        <input placeholder='Class-timing' value={timing} onChange={(e)=>setTiming(e.target.value)} />
        <button onClick={addStudent}>SUBMIT</button>
        {/* {students.map((student,index)=>(<h3 key={index}>{student}</h3>))} */}
      </div>
      <h2>Students List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Roll No</th>
            <th>Sir Name</th>
            <th>Class Timing</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.username}</td>
              <td>{student.fathername}</td>
              <td>{student.rollnumber}</td>
              <td>{student.sirname}</td>
              <td>{student.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </>
  )
}
export default App