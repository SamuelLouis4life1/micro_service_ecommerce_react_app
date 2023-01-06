import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

export default function ProductCard({
	id,
	limited = true,
	title,
	subtitle = "5G • 4G LTE DATA",
	price = 0.0,
	details = [],
	footerText = "",
}) {
	const { t } = useTranslation("productCard");

	return (
		<Card className={styles.cardBorder + " text-center mb-3"}>
			<div className={styles.header}>
				<Card.Subtitle className="text-uppercase">
					{limited ? subtitle : '\u00A0'}
				</Card.Subtitle>
				<Card.Title className="d-flex flex-row justify-content-center">
					<h2 className={styles.bold +" text-uppercase"}>{title}</h2>
					{ limited ? (<p>/MO</p>) : null }
				</Card.Title>
			</div>
			<Card.Body>
				<Card.Text>
					<div className="d-flex flex-row justify-content-center">
						<p>$</p>
						<h2 className={styles.bold}>{price}</h2>
						<p>/MO</p>
					</div>
					<ul className="text-start">
						{details.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</Card.Text>
				<div className="d-grid gap-2">
					<Link className="btn btn-primary lg" to={`/products/${id}`}>
						{t("btnDetails")}
					</Link>
				</div>
				<small>{footerText}</small>
			</Card.Body>
		</Card>
	);
}