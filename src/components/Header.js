import React, { Component } from 'react';
import * as ReactBootstrap  from 'react-bootstrap';

const { 
        Navbar, Nav, NavItem,  NavDropdown, MenuItem,
        FormGroup, FormControl, Button,
        Grid, Row, Col
      } = ReactBootstrap;

export default class Header extends Component {
    
    

    render() {
        
        const mobile = (
            <span><i className="fa fa-mobile"></i>Điện thoại</span>
        );

        const laptop = (
            <span><i className="fa fa-laptop"></i>Máy tính bảng</span>
        );

        const tablet = (
            <span><i className="fa fa-tablet"></i>Tablet</span>
        );

        const accessories = (
            <span><i className="fa fa-headphones"></i>Phụ kiện</span>
        );

        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            <img src="img/logo.png" alt="logo" height="25px"/>
                            React Mobile Shop
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>

                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        <Button type="submit" className="search-btn">
                            <span><i className="fa fa-search" aria-hidden="true"></i></span>
                        </Button>
                    </Navbar.Form>

                    <Nav>
                        <NavDropdown eventKey={1} title={mobile} id="mobile" href="#">
                            <MenuItem eventKey={1.1}>Apple</MenuItem>
                            <MenuItem eventKey={1.2}>Samsung</MenuItem>
                            <MenuItem eventKey={1.3}>Sony</MenuItem>
                            <MenuItem eventKey={1.4}>Nokia</MenuItem>
                            <MenuItem eventKey={1.5}>Asus</MenuItem>
                            <MenuItem eventKey={1.6}>HTC</MenuItem>
                            <MenuItem eventKey={1.7}>Oppo</MenuItem>
                        </NavDropdown>>

                        <NavDropdown eventKey={2} title={tablet} id="tablet" href="#">
                            <MenuItem eventKey={2.1}>Apple</MenuItem>
                            <MenuItem eventKey={2.2}>Google</MenuItem>
                            <MenuItem eventKey={2.3}>Samsung</MenuItem>
                        </NavDropdown>>

                        <NavDropdown eventKey={3} title={laptop} id="laptop" href="#">
                            <MenuItem eventKey={3.1}>Asus</MenuItem>
                            <MenuItem eventKey={3.2}>Apple (Macbook)</MenuItem>
                            <MenuItem eventKey={3.3}>Dell</MenuItem>
                            <MenuItem eventKey={3.3}>HP</MenuItem>
                            <MenuItem eventKey={3.3}>Acer</MenuItem>
                            <MenuItem eventKey={3.3}>Lenovo</MenuItem>
                        </NavDropdown>>
                        

                        <NavDropdown eventKey={4} title={accessories} id="accessories" href="#">
                            <MenuItem eventKey={4.1}>Tai nghe</MenuItem>
                            <MenuItem eventKey={4.2}>Ốp lưng, bao da</MenuItem>
                            <MenuItem eventKey={4.3}>Thẻ nhớ</MenuItem>
                            <MenuItem eventKey={4.3}>Cáp sạc</MenuItem>
                            <MenuItem eventKey={4.3}>Pin dự phòng</MenuItem>
                        </NavDropdown>>

                        <NavItem eventKey={5} href="#">
                            <span><i className="fa fa-newspaper-o"></i>Tin tức</span>
                        </NavItem>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}