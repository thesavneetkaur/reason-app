import React from "react";
import {
  CharityImg,
  CharityText,
  H2,
  H3,
  InfoColumn,
  LearnMoreBtn,
} from "../../style";

function CharityInfo() {
  return (
    <>
      <InfoColumn>
        <CharityImg>
          <img
            style={{ width: "100%", position: "relative", height: "500px" }}
            src="https://images.pexels.com/photos/6994855/pexels-photo-6994855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </CharityImg>
        <CharityText>
          <H2>
            We are a social change charity, helping people to improve their
            lives through digital.
          </H2>
          <H3>
            We tackle the most pressing issues of our times, working with
            partners in thousands of communites across the UK and further afield
          </H3>
          <LearnMoreBtn> Learn more about us</LearnMoreBtn>
        </CharityText>
      </InfoColumn>
    </>
  );
}

export default CharityInfo;
