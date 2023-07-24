import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const AddToDo = (props) => {
    const [title, setTitle] =   useState("");
    const submit =(e)=>{
        //This is prevent your page from getting reloaded
        e.preventDefault();
        
        props.addTodo(title);
        setTitle("");
        

    }
    return (
        <div className='container my-3'>
            <h3 className='text-center mt-4 mb-4'>Add Todo</h3>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title" />
                </Form.Group>
                <Button variant="primary" type="submit">
                   Add Todo
                </Button>
            </Form>
        </div>
    )
}
