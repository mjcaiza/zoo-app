import styled from "styled-components";



const StyledTable = styled.button`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 50;
    padding: 10px 20px;
    background-color: ${(props ) => {
        if(props.typeButton === "primary" ) return "#337FED"
        if(props.typeButton === "defaultb" ) return "#d9dcd6"
        if(props.typeButton === "success" ) return "#28a745"
        if(props.typeButton === "danger" ) return "#F46F6F" 
    }};
    border: solid #337FED 0;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    width: 100%;
`;


export const Button = ({ tittle, typeButton, onClick }) => {
    return (
        <StyledTable typeButton ={typeButton} onClick={onClick}>{tittle}</StyledTable>
    )
}
