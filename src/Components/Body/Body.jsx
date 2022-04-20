import { Divider } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import cardsData from "./cardsData";
import Carousels from "../Carousel/Carousel";

import { images } from "../../constants/index";

import "./Body.css";

const Body = () => {
	return (
		<div className="body">
			<section className="body__services">
				<div className="body__servicesContent">
					<h2>Our services</h2>
					<Divider
						style={{ width: "5%", borderColor: "black", borderRadius: "5px" }}
					/>
					<p className="body__servicesText">
						We provide to you the best choiches for you. Adjust it to your
						health needs and make sure your undergo treatment with our highly
						qualified doctors you can consult with us which type of service is
						suitable for your health
					</p>
				</div>

				<div className="body__servicesCards">
					<img
						className="body__serviceCards-bgImage"
						src={images.bgVector}
						alt=""
					/>
					{cardsData.map((item) => (
						<Cards
							key={item.id}
							img={item.img}
							title={item.title}
							text={item.text}
						/>
					))}

					<div className="body__servicesCards-buttonDiv">
						<button>Learn more</button>
					</div>
				</div>
			</section>

			<section className="body__providers">
				<div className="body__providers-image">
					<img src={images.section2img} alt="" />
				</div>
				<section className="body__providers-contents">
					<h2>Leading healthcare providers</h2>
					<Divider
						style={{
							width: "15%",
							borderColor: "black",
							borderWidth: "2px",
							borderRadius: "10px",
							marginBlock: "1.25rem",
						}}
					/>
					<p>
						Trafalgar provides progressive, and affordable healthcare,
						accessible on mobile and online for everyone. To us, it’s not just
						work. We take pride in the solutions we deliver
					</p>
					<button>Learn more</button>
				</section>
			</section>

			<section className="body__download">
				<div className="body__download-image">
					<img src={images.section3img} alt="" />
				</div>
				<section className="body__download-contents">
					<h2>Leading healthcare providers</h2>
					<Divider
						style={{
							width: "15%",
							borderColor: "black",
							borderWidth: "2px",
							borderRadius: "10px",
							marginBlock: "1.25rem",
						}}
					/>
					<p>
						Trafalgar provides progressive, and affordable healthcare,
						accessible on mobile and online for everyone. To us, it’s not just
						work. We take pride in the solutions we deliver
					</p>
					<button>Learn more</button>
				</section>
			</section>

			<Carousels />
		</div>
	);
};

export default Body;
