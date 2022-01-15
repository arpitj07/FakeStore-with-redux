import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Wrapper = styled.div`
	width: 100%;
	height: 80px;
	margin: 0;
	padding: 0;
	position: relative;
	display: flex;
	background-color: #cc5875;
	justify-content: center;
	box-shadow: 5px 5px 4px #888888;
`;

export const Container = styled.div`
	width: 1000px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
`;

export const StoreLogo = styled.img`
	width: 50px;
	height: 50px;
	margin: 10px;
`;

export const StyleIconButton = styled(IconButton)`

	z-index: 100;
	position: fixed;
	right: 20px;
	color: #fff;

`;
