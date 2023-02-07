import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserEntryForm(props) {
    const [state, setState] = useState({});
    const [empId, setEmpID] = useState();

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if(name === 'emp_id'){
            setEmpID(value);
        }
        else {
            setState({...state, [name]: value,});
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <Container className='mt-4'>
            <h3>Today's Task</h3>
            <hr></hr>
            <Form onSubmit={handleSubmit}>
                <Row className='mb-3 mt-4'>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control type="text" placeholder="Team Name" name="team_name" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control type="text" placeholder="Employee ID" name="emp_id" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Employee Name" name="emp_name" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Accumulated Story Point</Form.Label>
                        <Form.Control type="text" placeholder="Accumulated Story Point" onChange={handleInputChange} name="acc_story"/>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task ID</Form.Label>
                        <Form.Control type="text" placeholder="Task ID" name="task_id" onChange={handleInputChange}/>
                    </Form.Group> 
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" name="description" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Status" name="status" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Task Type" name="type" onChange={handleInputChange}/>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" placeholder="Due Date" name="dueDate" onChange={handleInputChange}/>
                    </Form.Group> 
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Module</Form.Label>
                        <Form.Control type="text" placeholder="module" name="module" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Story Point</Form.Label>
                        <Form.Control type="text" placeholder="Story Point" name="story_point" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Completion Date</Form.Label>
                        <Form.Control type="date" placeholder="Completion Date" name="completion_date" onChange={handleInputChange}/>
                    </Form.Group> 
                </Row>
                <Row>
                <Form.Group as={Col} className="mb-3 col-3" controlId="formBasicEmail">
                    <Form.Label>Attendance</Form.Label>
                    <Form.Control type="text" placeholder="Attendance" name='attendance' onChange={handleInputChange}/>
                </Form.Group>  
                <Col className="col-9 text-right mt-4"> <Button variant="primary" type="submit">Submit</Button></Col>
                </Row>
            </Form>
        </Container>
    );
}

export default UserEntryForm;