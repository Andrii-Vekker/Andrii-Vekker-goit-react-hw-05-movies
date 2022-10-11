import styled from "styled-components";


export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  margin-bottom: 30px;
  font: inherit;
  font-size: 20px;
  border: 1px solid skyblue;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  
  &:hover{
   border: 1px solid blue;
  }
  &::placeholder{
    font: inherit;
  font-size: 18px;
  }
`



