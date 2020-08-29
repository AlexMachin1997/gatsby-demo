import React from 'react';
import { BGWrapper, FakeBGImg, Content, TextWrapper } from './Hero';

const Hero = ({ fluid, title, height, mobileHeight, className, children }) => (
	<BGWrapper>
		<FakeBGImg fluid={fluid} title={title} height={height} mobileHeight={mobileHeight} />
		<Content className={className}>
			<TextWrapper>{children}</TextWrapper>
		</Content>
	</BGWrapper>
);

export default Hero;
