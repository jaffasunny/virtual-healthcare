import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./Carousel.css";
import { Divider } from "@mui/material";

const Carousel = () => {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);

		return () => clearInterval(slider);
	}, [index]);

	return (
		<>
			<section className="section">
				<div className="sectionContent">
					<div className="title">
						<h2>What our customer are saying</h2>
						<Divider
							style={{
								width: "5%",
								borderColor: "white",
								borderRadius: "6px",
								borderWidth: "2px",
							}}
						/>
					</div>

					<div className="section-center">
						<div className="section-centerContent">
							{people.map((person, personIndex) => {
								const { id, image, name, title, quote } = person;
								// Adding class to get the slider functionality
								let position = "nextSlide";
								if (personIndex === index) {
									position = "activeSlide";
								}
								if (
									personIndex === index - 1 ||
									(index === 0 && personIndex === people.length - 1)
								) {
									position = "lastSlide";
								}

								return (
									<article className={position} key={id}>
										<img src={image} alt={name} className="person-img" />
										<h4>{name}</h4>
										<p className="title">{title}</p>
										<p className="text">{quote}</p>
										<FaQuoteRight className="icon" />
									</article>
								);
							})}
						</div>
					</div>
				</div>
				<div className="carousel__buttonGroup">
					<button
						className="prev"
						onClick={() => {
							setIndex(index - 1);
						}}>
						<FiChevronLeft />
					</button>
					<button className="next" onClick={() => setIndex(index + 1)}>
						<FiChevronRight />
					</button>
				</div>
			</section>
		</>
	);
};

export default Carousel;
