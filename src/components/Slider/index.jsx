import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../Assets/Images/slide1.jpg";
import slide2 from "../../Assets/Images/slide2.jpg";
import slide3 from "../../Assets/Images/slide3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>
                        <b>Love to Learn</b>
                    </h3>
                    <p>Well learnt person is an assert.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>
                        <b>New Technology</b>
                    </h3>
                    <p>Use new technology to gather more knowledge</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>
                        <b>Read Books</b>
                    </h3>
                    <p>
                        Make a time to read books. Reading makes a person
                        perfect
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
