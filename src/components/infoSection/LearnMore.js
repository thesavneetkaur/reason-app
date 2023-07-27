import React from "react";
import { Container } from "../../globalStyles";
import { HelpSection, StartNowBtn, StartNowSec } from "../../style";
import { IoIosArrowDown } from "react-icons/io";

function LearnMore() {
  return (
    <>
      <HelpSection>
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12%",
              height: "70px",
            }}>
            <h1>How can we help you?</h1>
            <h6 style={{ fontSize: "1rem" }}>
              Let us know your you are and what you're looking for, and we'll
              help get you to the right place.
            </h6>
          </div>
          <StartNowSec>
            <h2>
              I am{" "}
              <span style={{ color: "#497C8F", textDecoration: "underline" }}>
                an individual <IoIosArrowDown />
              </span>{" "}
              and I want{" "}
              <span style={{ color: "#497C8F", textDecoration: "underline" }}>
                want to learn
                <IoIosArrowDown />
              </span>
            </h2>
            <StartNowBtn>Start Now</StartNowBtn>
          </StartNowSec>
        </Container>
      </HelpSection>
    </>
  );
}

export default LearnMore;
