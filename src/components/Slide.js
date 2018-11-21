import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const {Carousel} = ReactBootstrap;

export default class Slide extends Component {

    render() {
        return (
            <Carousel id="myCarousel">
                <Carousel.Item>
                    <a href="#"><img alt="slide-1" src="img/s1.jpg"/></a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="#"><img alt="slide-2" src="img/s2.jpg"/></a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="#"><img alt="slide-3" src="img/s3.jpg"/></a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="#"><img alt="slide-4" src="img/s4.png"/></a>
                </Carousel.Item>
            </Carousel>
        );
    }
}