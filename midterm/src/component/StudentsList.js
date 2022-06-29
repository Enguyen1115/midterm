import React from 'react'
import Cards from './Cards';

function studentsList(props) {

    const cardInfo = [
        {
          image:
            "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      ];    

      const students = cardInfo.map(student => <Cards key={student.name} student={student}/>)

  return (
    <div>{students}</div>
  )
}

export default studentsList