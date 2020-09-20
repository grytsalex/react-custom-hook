import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background: ${(props) => (props.isEnd ? "green" : "red")};
  border-radius: 15px;
  border: 2px solid black;
  color: #fff;
  margin-left: 27px;
  padding: 0.25em 1em;
`;

export const Display = styled.h1`
  background: aliceblue;
  margin-left: 25px;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
