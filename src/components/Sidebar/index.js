import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtnWrap, 
    SidebarRoute 
} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarMenu>
                <SidebarLink to=''>Pizzas</SidebarLink>
                <SidebarLink to=''>Dresserts</SidebarLink>
                <SidebarLink to=''>Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}
