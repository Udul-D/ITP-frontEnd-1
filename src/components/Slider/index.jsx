import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { sliderData } from "./slider.data";
import "./slide.scss";
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="w-full h-screen relative overflow-hidden">
            <ArrowLeftOutlined />
            <ArrowRightOutlined />

            {sliderData.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === currentSlide
                                ? "slide current"
                                : "slide"
                        }>
                        {index === currentSlide && (
                            <img src={slide.image} alt={slide.title} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Slider;
