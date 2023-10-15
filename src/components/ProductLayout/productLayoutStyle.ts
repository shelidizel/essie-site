import styled from "styled-components";

const ProductDiv = styled.div`
margin: 0;
padding: 0;
width: 80vw;
display: grid;
grid-template-columns: repeat(autofill, 250px);
grid-auto-rows: 10px;
position: absolute;
left: 50%;
transform: translateX(-50%);
justify-content: center;
background-color: black;
`

const StyledCard = styled.div`
margin: 15px 10px;
padding: 0;
border-radius: 16px;
background-color: red;
`

export  {ProductDiv, StyledCard}
