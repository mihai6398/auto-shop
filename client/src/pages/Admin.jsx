import {useState} from "react";
import {Button, Container} from "react-bootstrap";
import {CreateBrand, CreateDevice, CreateType} from "../components/ComponentsMain";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className={"d-flex flex-column"}>
            <Button variant={"outline-dark"}
                    className={"my-3 p-2"}
                    onClick={() => setTypeVisible(true)}
            >
                Add type
            </Button>
            <Button variant={"outline-dark"}
                    className={"mb-3 p-2"}
                    onClick={() => setBrandVisible(true)}
            >
                Add brend
            </Button>
            <Button variant={"outline-dark"}
                    className={"mb-3 p-2"}
                    onClick={() => setDeviceVisible(true)}
            >
                Add car
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;