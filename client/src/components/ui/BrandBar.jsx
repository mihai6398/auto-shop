import {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row>
            <div className={"d-flex mt-5"}>
                {device.brands.map(brand =>
                    <Card
                        key={brand.id}
                        className={"p-2 me-3"}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    >
                        {brand.name}
                    </Card>
                )}
            </div>
        </Row>
    );
});

export default BrandBar;