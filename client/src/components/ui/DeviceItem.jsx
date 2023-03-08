import {Card, Col, Image} from "react-bootstrap";
import {DEVICE_ROUTE} from "../../utils/consts";
import { useNavigate } from 'react-router-dom';

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mb-3"}>
            <Card
                style={{borderRadius: "7px", cursor: "pointer",width: 227, border: "light"}}
                className={"p-3"}
                onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            >
                <Image height={"100%"} width={"100%"} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className={"py-3"}>
                    <b className={"text-danger"}>{device.price} $</b>
                    <div className={"h5"}>{device.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;