import React from "react";
import { Container } from "../../globalStyles";
import {
  AboutBtn,
  GridContainer,
  GridItem,
  ReadMoreBtn,
  ServicesSection,
  ServicesText,
} from "../../style";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

function ServicesSec() {
  const [services] = useAllPrismicDocumentsByType("services");

  return (
    <>
      <ServicesSection>
        <Container>
          <ServicesText>
            <h2 style={{ color: "white" }}>What do we do?</h2>
            <p style={{ color: "white", fontWeight: "500" }}>
              You might not have heard us, but we're the people behind the
              following impactful programmes.
            </p>
          </ServicesText>
          <GridContainer>
            {services?.map((service) => (
              <GridItem>
                <h5>{service?.data?.title?.[0]?.text}</h5>
                <p style={{ fontSize: ".8rem" }}>
                  {service?.data?.description}
                </p>
                <ReadMoreBtn>{service?.data?.cta}</ReadMoreBtn>
              </GridItem>
            ))}
          </GridContainer>
          <center>
            <AboutBtn>More about what we do</AboutBtn>
          </center>
        </Container>
      </ServicesSection>
    </>
  );
}

export default ServicesSec;
