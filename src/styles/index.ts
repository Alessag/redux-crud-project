import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: inline-block;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 60px;
`;
