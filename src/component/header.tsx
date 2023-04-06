import React from "react";
import styled from "styled-components";
import AddPageIcon from "../asset/addPage.png";
import AddImage from "../asset/photo.png";
import AddText from "../asset/font.png";
import Draw from "../asset/pen2.png";
import Save from "../asset/folder.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background: linear-gradient(
    rgb(0, 88, 238) 0%,
    rgb(53, 147, 255) 4%,
    rgb(40, 142, 255) 6%,
    rgb(18, 125, 255) 8%,
    rgb(3, 111, 252) 10%,
    rgb(2, 98, 238) 14%,
    rgb(0, 87, 229) 20%,
    rgb(0, 84, 227) 24%,
    rgb(0, 85, 235) 56%,
    rgb(0, 91, 245) 66%,
    rgb(2, 106, 254) 76%,
    rgb(0, 98, 239) 86%,
    rgb(0, 82, 214) 92%,
    rgb(0, 64, 171) 94%,
    rgb(0, 48, 146) 100%
  );
  font-weight: 900;
  text-shadow: rgb(0, 0, 0) 1px 1px;
`;
const SmallWrapper = styled.div`
  display: flex;
`;
const Btn = styled.div`
  margin-right: 1px;
  position: relative;
  border: #fff solid 1px;
  border-radius: 3px;
  width: 20px;
  height: 20px;
`;
const BlueBtn = styled(Btn)`
  box-shadow: rgb(70, 70, 255) 0px -1px 2px 1px inset;
  background-image: radial-gradient(
    circle at 90% 90%,
    rgb(0, 84, 233) 0%,
    rgb(34, 99, 213) 55%,
    rgb(68, 121, 228) 70%,
    rgb(163, 187, 236) 90%,
    white 100%
  );
`;
const RedBtn = styled(Btn)`
  box-shadow: rgb(218, 70, 0) 0px -1px 2px 1px inset;
  background-image: radial-gradient(
    circle at 90% 90%,
    rgb(204, 70, 0) 0%,
    rgb(220, 101, 39) 55%,
    rgb(205, 117, 70) 70%,
    rgb(255, 204, 178) 90%,
    white 100%
  );
`;

const Minimize = styled.div`
  border: #fff solid;
  width: 5px;
  position: absolute;
  bottom: 3px;
  left: 3px;
`;
const Maxmize = styled.div`
  width: 10px;
  height: 9px;
  border: #fff solid 1.5px;
  position: absolute;
  left: 4px;
  top: 3px;
  border-width: 3px 1px 1px 1px;
`;
const Close = styled.div`
  :after {
    content: "";
    position: absolute;
    left: 9px;
    top: 2px;
    transform: rotate(45deg);
    width: 2px;
    height: 16px;
    background-color: #fff;
  }
  :before {
    content: "";
    position: absolute;
    left: 9px;
    top: 2px;
    transform: rotate(-45deg);
    width: 2px;
    height: 16px;
    background-color: #fff;
  }
`;
const ToolBar = styled.div`
  padding: 3px 10px;
  background: #fff;
`;
const IconImg = styled.img`
  width: 25px;

  margin-right: 10px;
`;

const Document = styled.div`
  color: #fff;
`;
const Logo = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const Devise = styled.div`
  border-left: red solid;
`;

function Header() {
  return (
    <>
      <ToolBar>
        <IconImg src={AddImage} alt="add-image" />
        <IconImg src={Save} alt="draw" />
        <IconImg src={AddText} alt="add-text" />
        <IconImg src={Draw} alt="draw" />
      </ToolBar>
    </>
  );
}

export default Header;
