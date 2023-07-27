import React from "react";
import { BtnGrp, DonateBtn, LearnBtn, MiniNav, SearchBtn } from "../../style";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <>
      <MiniNav>
        <SearchBtn>
          <AiOutlineSearch />
          Search
        </SearchBtn>
        <BtnGrp>
          <LearnBtn>Learn</LearnBtn>
          <DonateBtn>Donate</DonateBtn>
        </BtnGrp>
      </MiniNav>
    </>
  );
}

export default SearchBar;
