import React from 'react'
import {useHistory} from 'react-router-dom';
let Data = [
    {
        id: 1,
        Title: "Building Applications in React and Flux",
        Length: "   5:08",
        Category: "	JavaScript",
        Author: "cory-house",
    },
    {
        id: 2,
        Title: "Clean Code: Writing Code for Humans",
        Length: "3:10",
        Category: "Software Practices",
        Author: "cory-house",
    },
    {
        id: 3,
        Title: "Architecting Applications for the Real World",
        Length: "   2:52",
        Category: "	Software Architecture",
        Author: "cory-house",
    },
    {
        id: 4,
        Title: "Becoming an Outlier: Reprogramming the Developer Mind",
        Length: " 2:30",
        Category: "	Career",
        Author: "cory-house",
    },
    {
        id: 5,
        Title: "Web Component Fundamentals",
        Length: "5:10",
        Category: "HTML5",
        Author: "cory-house",
    },
  ]
  

 const Main = () => {
    let history = useHistory();
    return (
        <div>

    <h1 style={{textAlign:'center',marginLeft:'550px',marginTop:'1rem'}}>Courses</h1>
    <button style={{marginLeft:'35rem',marginTop:'1rem'}}className="btn btn-primary" onClick={() => {history.push("/show");}}>Add</button>
    <button style={{marginLeft:'40rem',marginTop:'-4rem'}}className="btn btn-danger"onClick={() => {history.push("/show");}}>Edit</button>
    <br />
    <br />
    <table className="table" style={{marginLeft:'100px',width:'90vw'}}>
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Length</th>
      <th scope="col">Category</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
                    <tbody>
                        {Data.map((item, index) => {
                            return <tr key={index}>
                                <td><a style={{'color':'blue'}}href="https://www.pluralsight.com/courses/writing-clean-code-humans" target="_blank">{item.Title}</a></td>
                                <td>{item.Length}</td>
                                <td>{item.Category}</td>
                                <td>{item.Author}</td>
                              
                                
                                
                            </tr>
                        })}
                    </tbody>
      </table>
      


            
        </div>
    )
}
export default Main