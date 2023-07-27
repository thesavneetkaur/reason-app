import React from "react";
import { H1, H4, InfoRow, InfoSec, InfoText, P } from "../../style";
import { Container } from "../../globalStyles";

function InfoSection() {
  return (
    <>
      <InfoSec>
        <InfoRow>
          <img
            style={{ width: "100%", position: "relative", height: "600px" }}
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </InfoRow>
        <Container>
          <InfoText>
            <H1>Get Online week 2021</H1>
            <H4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ornare tempus aliquet. Pellentesque finibus, est et iaculis
              suscipit,
            </H4>
            <P>
              <strong>Get involved now</strong>
            </P>
          </InfoText>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
