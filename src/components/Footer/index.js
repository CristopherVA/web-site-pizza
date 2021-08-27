import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaGithubAlt,
    FaLinkedin,

} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    SocialMediaWrap,
    SocialMedia
} from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                                <SocialIconLink href='/' target='_blanck' arial-label="Facebook" rel="noopener noreferre" >
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href='/' target='_blanck' arial-label="Instagram" rel="noopener noreferre" >
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink href='/' target='_blanck' arial-label="Linkedin" rel="noopener noreferre" >
                                    <FaLinkedin />
                                </SocialIconLink>

                                <SocialIconLink href='/' target='_blanck' arial-label="GitHub" rel="noopener noreferre" >
                                    <FaGithubAlt />
                                </SocialIconLink>
                            </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer >
    )
}
