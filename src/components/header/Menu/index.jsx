import { colorGrafite, colorVerde } from 'components/ui/variaveis';
import styled from "styled-components";
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import { MenuLista } from './MenuLista/index';

const MenuHamburguer = styled.div`  
    position: absolute;
    top: 96px;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding: 0.83rem 1.5rem;

    background-color: ${colorGrafite};
`

const MenuLine = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;

    }
    
`

export const Menu = () => {
    const [isOpen, setOpen] = useState(false);


    return (
        <>
            <MenuLine>
                <MenuLista />
            </MenuLine>
                <Hamburger toggled={isOpen} toggle={setOpen}
                    color={colorVerde}
                />
            {isOpen ?
                <MenuHamburguer>
                    <MenuLista />
                </MenuHamburguer>
                : ""}
        </>
    )
}