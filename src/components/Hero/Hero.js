import styled from 'styled-components';
import Img from 'gatsby-image';

export const BGWrapper = styled.div`
	position: relative;
`;

export const FakeBGImg = styled(Img)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: ${({ mobileHeight, height }) => mobileHeight || height};
	z-index: 0;
	border-radius: 1rem;

	@media screen and (min-width: 768px) {
		height: ${({ height }) => height || 'auto'};
	}
`;

export const Content = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	height: 100%;

	h2,
	a,
	p {
		color: white;
		font-size: 1.5rem;
		text-align: center;
		margin: 1.1rem;
	}
`;
