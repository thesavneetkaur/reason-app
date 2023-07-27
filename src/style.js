import styled from "styled-components";
import { Container } from "./globalStyles";
import { FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  color: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  top: 5%;
  z-index: 999;
  border-top: 1px solid #f5f5f5;
  width: 100%;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: $fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaDonate)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transform: all 0.1s ease;
    background-color: grey;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transform: all 0.3s ease;
    }
  }
`;

export const MiniNav = styled(Container)`
  height: 50px;

  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  font-size: 1rem;
  text-align: end;
`;

export const SearchBtn = styled.div`
  border-left: 3px solid #f5f5f5;
  border-right: 3px solid #f5f5f5;
  padding: 5px;
`;

export const BtnGrp = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px;
  border-left: 2px solid #f5f5f5;
`;
export const LearnBtn = styled.div`
  border-bottom: 3px solid #89a9a2;
  padding: 5px;
`;
export const DonateBtn = styled.div`
  background-color: #bc3247;
  color: white;
  padding: 5px;
`;

export const InfoSec = styled.div`
  color: #fff;
`;

export const InfoRow = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
`;

export const InfoText = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  top: 25%;
  z-index: 1;
`;

export const H1 = styled.h1`
  background-color: #497c8f;
  color: white;
  text-align: center;
  margin-top: 5%;
  padding: 7px;
  width: 80%;
  font-size: 4rem;
`;

export const H4 = styled.h4`
  background-color: white;
  color: #497c8f;
  text-align: left;
  margin-top: 3%;
  width: 70%;
  padding: 10px;
  font-size: 1rem;
`;

export const P = styled.p`
  color: #bc3247;
  background-color: white;
  border-radius: 50px 50px;
  text-align: center;
  margin-top: 3%;
  width: 25%;
  padding: 10px;
  font-weight: 500;
`;

export const InfoColumn = styled.div`
  width: 100%;
  position: absolute;
  height: 30px;
  top: 72%;
  display: flex;
`;
export const CharityImg = styled.div`
  width: 100%;
`;

export const CharityText = styled.div`
  background-color: #4a847a;
  width: 100%;
  height: 500px;
  padding: 55px;
`;

export const H2 = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 2.5rem;
  width: 100%;
`;

export const H3 = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 2rem;
  width: 100%;
  margin-top: 6%;
`;

export const LearnMoreBtn = styled.div`
  border: 1px solid white;
  border-radius: 50px 50px;
  width: 25%;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 6%;
  padding: 10px;
  cursor: pointer;
  text-align: center;
`;

export const HelpSection = styled.div`
  width: 100%;
  height: 250px;
  background-color: #ececec;

  position: absolute;
  top: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StartNowSec = styled.div`
  background-color: white;
  height: 80px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 2%;
`;

export const StartNowBtn = styled.div`
  background-color: #bd3048;
  color: white;
  text-align: center;
  padding: 0.3% 0.7%;
  font-weight: 500;
  border-radius: 50px 50px;
  cursor: pointer;
`;

export const ServicesSection = styled.div`
  background-color: #497c8f;
  display: flex;
  flex-direction: column;
  gap: 2%;
  height: 400px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 145%;
  width: 100%;
`;

export const ServicesText = styled.div`
  line-height: 2rem;

  display: flex;
  flex-direction: column;
  gap: 10%;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 50px 100px;
  grid-template-columns: auto auto auto auto;
  margin-top: 3%;
`;

export const GridItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ReadMoreBtn = styled.div`
  border: 2px solid black;
  color: #bc2f47;
  border-radius: 50px 50px;
  font-size: 1rem;
  width: auto;
  padding: 1% 4%;
  font-weight: 600;
`;

export const AboutBtn = styled.div`
  border-radius: 50px 50px;
  background-color: white;
  width: 25%;
  color: #bc2f47;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 6%;
  padding: 10px;
  cursor: pointer;
  text-align: center;
`;
