import {useState} from "react";
import React from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue("")
            onHide()
            console.log(true)
        })
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add car brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control onChange={event => setValue(event.target.value)} placeholder={"Write the name to the type"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-dark"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-dark"} onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;