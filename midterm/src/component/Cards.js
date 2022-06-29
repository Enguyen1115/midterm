import React from 'react'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function cards({student}) {
    return (
        <div className='cardProfile'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src={student.image} />
                <Card.Body className="card-Body">
                    <Card.Title>{student.name}</Card.Title>
                    <Card.Text>{student.gpa}</Card.Text>
                    <Button variant="primary">Grade</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default cards