import React, {useContext} from 'react';
import {Context} from "../../index";
import {Navbar, NavDropdown, Nav, Form, Button, Container, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {Link, useNavigate} from "react-router-dom";


const NavBar = observer(() => {

    const navigation = useNavigate()
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style={{color:'white'}} to={SHOP_ROUTE}><Image height={20} alt={"Auto Shop Logo"} src={'assets/auto-shop.png'}/></Link>
                <Form>

                </Form>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigation(ADMIN_ROUTE)}
                            className={"mx-3"}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigation(LOGIN_ROUTE)}
                        >
                            Sing in
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;