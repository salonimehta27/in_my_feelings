import React from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Disclaimer() {
	const navigate = useNavigate()
	return (
		<Container style={{ color: "#000" }}>
			THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE The information, including
			but not limited to, text, graphics, images and other material contained on
			this website are for informational purposes only. No material on this site
			is intended to be a substitute for professional medical advice, diagnosis
			or treatment. Always seek the advice of your physician or other qualified
			health care provider with any questions you may have regarding a medical
			condition or treatment and before undertaking a new health care regimen,
			and never disregard professional medical advice or delay in seeking it
			because of something you have read on this website.
			<Row>
				<Col>
					<Button
						variant="danger"
						style={{ marginTop: "10px" }}
						onClick={() => navigate("/signup")}
					>
						back to signup
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default Disclaimer
