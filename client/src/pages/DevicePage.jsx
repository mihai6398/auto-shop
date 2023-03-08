import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchDevices, fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={"100%"} height={"100%"} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={3}>
                    <Row className="d-flex flex-column align-items-center">
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{width:240, height: 240, backgroundSize: 'cover', fontSize:20}}
                        >
                            Review {device.rating}⭐
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: "100%", height: "100%", fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h2>{device.name}</h2>
                        <h3>{device.price} $</h3>
                        <a href="Tel:+111223344"><Button variant={"outline-dark"}>Call +999 66X-66X-66 </Button></a>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Characteristics</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;