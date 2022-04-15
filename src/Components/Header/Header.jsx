import React from "react";
import { images } from "../../constants/index";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<section className="header__section">
				<h1>Virtual heathcare for you</h1>
				<p className="header__text">
					Trafalgar provides progressive, and affordable healthcare, accessible
					on mobile and online for everyone
				</p>
			</section>

			<div className="header__image">
				<img src={images.HeaderIllustration} alt="" />
			</div>
		</header>
	);
};

export default Header;
