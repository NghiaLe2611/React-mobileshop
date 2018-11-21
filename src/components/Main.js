import React, {Component} from 'react';
import Slide from './Slide';
import ProductList from './ProductList';

import * as ReactBootstrap from 'react-bootstrap';

const {Grid, Row, Col} = ReactBootstrap;

export default class Main extends Component {
    render() {

        return (

            <div className="main">
                
                <div className="banner">
                    <Grid>
                        <Row>
                            <Col md={8}>
                                <Slide/>
                            </Col>

                            <Col md={4}>
                                
                                <div className="right">
                                    <a href="#">
                                        <img src="img/qc1.png" alt="ad1"/>
                                    </a>
                                    <a href="#">
                                        <img src="img/qc2.jpg" alt="ad2"/>
                                    </a>
                                    <a href="#">
                                        <img src="img/qc3.png" alt="ad3"/>
                                    </a>
                                </div>

                            </Col>
                        </Row>

                    </Grid>
                </div> 
                
                <ProductList/>

            </div>

        );
    }
}