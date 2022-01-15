import React from 'react';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Style components
import { Container, StoreLogo, StyleIconButton, Wrapper } from './Navbar.styles';

//assets
import logo from '../../assets/images/storelogo.png';

export const Navbar = ({ title }) => {
	return (
		<Wrapper>
			<Container>
				<StoreLogo src={logo} alt="store-logo" />
				<h1>{title}</h1>
				<StyleIconButton>
					<Badge badgeContent={4} color="error">
						<ShoppingCartIcon style={{ color: 'white' }} />
					</Badge>
				</StyleIconButton>
			</Container>
		</Wrapper>
	);
};
