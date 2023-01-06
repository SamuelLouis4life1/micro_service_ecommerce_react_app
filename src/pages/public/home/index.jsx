import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";
import ProductsContainer from "../../../components/productsContainer";

export default function Home() {
	const { t } = useTranslation("home");

	const [state, setState] = useState({
        zipCode: "",
		products: [
            {
                id: "5bd285f3-7ba8-4c53-8dde-8a99c5e110da",
                name: "4GB",
                price: 15.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "e17e6418-d81a-4d0a-a723-93088289a71d",
                name: "10GB",
                price: 20.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "228abeac-fa8e-4110-8010-4059533d1bb5",
                name: "15GB",
                price: 25.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "2c6ff17f-aad2-49b2-ab39-851dc38c1d9f",
                name: "Unlimited",
                price: 30.0,
                limited: false,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "35GB de 5G + Dados 4G LTE",
                ],
            },
        ],
	});
	
	return (
		<Container fluid>
			<Row className="mt-4">
				<Col>
					<p className="fs-3 text-center">{t("coverage")}</p>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<p className="fs-4 text-center fw-bold">{t("coverageArea")}</p>
				</Col>
			</Row>
			<Row>
				<Col className="text-center">
                    <Form className={styles.zipInput + " me-2"}>
                        <FloatingLabel
                            label={t("zipCode")}
                            className="mb-3"
                        >
                            <Form.Control
                            type="text"
                            name="zipCode"
                            value={state.zipCode}
                            onChange={(e) => setState({...state, zipCode: e.target.value})}
                            />
                        </FloatingLabel>
                    </Form>
					<Button className="ms-2 mb-3" size="lg">{t("letsGo")}</Button>
				</Col>
			</Row>
			<Row className={styles.offersBg + " mt-2 pt-2"}>
				<Col>
					<Row>
						<Col className="text-center">
							<p>{t("offers")}</p>
						</Col>
					</Row>
					<ProductsContainer products={state.products} />
				</Col>
			</Row>
		</Container>
	);
}
