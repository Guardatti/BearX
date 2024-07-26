import styled from "styled-components";

export const InputBoxStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 10px 0px 10px 0px;
`

export const InputLabelStyled = styled.label`
	font-size: 16px;
	color: #FFFFFF;
	text-align: left;
	padding-bottom: 5px;
`

export const InputStyled = styled.input`
	border-bottom: 1px solid white;
	padding: 5px;
	width: 300px;
	background-color: #101010;
	color: #FFFFFF;
	font-size: 14px;
`

export const ErrorStyled = styled.span`
	color: red;
	font-weight: 300;
	font-size: 14px;
`