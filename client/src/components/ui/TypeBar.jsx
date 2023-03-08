import {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className={"mt-5"}>
            <ListGroup>
                {device.types.map(type =>
                    <ListGroupItem
                        style={{cursor: "pointer"}}
                        active={type.id === device.selectedType.id}
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>
    );
});

export default TypeBar;