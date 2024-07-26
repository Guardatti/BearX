import styled from "styled-components";

export const ContainerTextarea= styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 10px 0px 10px 0px;
`

export const LabelStyled = styled.label`
	font-size: 16px;
	color: #FFFFFF;
	text-align: left;
	padding-bottom: 5px;
`

export const TextareaStyled = styled.textarea`
	border: 1px solid #FFFFFF;
	padding: 5px;
	width: 500px;
    height: 200px;
	background-color: #101010;
	color: #FFFFFF;
	font-size: 14px;
	@media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
`

export const ErrorStyled = styled.span`
	color: red;
	font-weight: 300;
	font-size: 14px;
`