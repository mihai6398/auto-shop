import {useContext, useState, useEffect} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))

    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const cheangeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i,[key] : value} :  i))

    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown title={"Select type"}>
                        <Dropdown.Toggle>{device.selectedType.name || "Select type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown title={"Select brand"} className={"mt-3"}>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Select brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        title={"Title"}
                        className={"mt-3"}
                        placeholder={"Write the title of the product"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        title={"Price"}
                        className={"mt-3"}
                        placeholder={"Write the price of the product"}
                        type={"number"}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        title={"Photo"}
                        className={"mt-3"}
                        type={"file"}
                        onChange={selectFile}
                    />
                    <Button
                        onClick={addInfo}
                        className={"mt-3"}
                        variant={"outline-dark"}
                    >
                        Add new properties
                    </Button>
                    {info.map(i =>
                        <Row key={i.number} className={"pt-3 w-100"}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => cheangeInfo('title', e.target.value, i.number)}
                                    placeholder={"Write the name of properties"}>
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => cheangeInfo('description', e.target.value, i.number)}
                                    placeholder={"Write the description of properties"}>
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={"danger"}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-dark"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-dark"} onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;