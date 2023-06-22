import { colorBranco, colorGrafite } from 'components/ui/variaveis';
import iconMenu from './icon-menu.svg'
import iconFechar from './marca-cruzada.png'
import styled from "styled-components";
import { useState } from 'react';
// import { Link } from 'react-router-dom';

const BotaoMenu = styled.button`
    background: none;
    border: none;

    width: 1.125rem;
    height: 1.0625rem;
`

const FecharMenu = styled.button`
    background: none;
    border: none;

    width: 1.5rem;
    height: 1.5rem;
    
    & img {
        width: 1.5rem;
        height: 1.5rem;
        
    }
`

const Menu = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;


    padding: 0.83rem 1.5rem;
    
    background-color: ${colorGrafite};

    & li {
        color: ${colorBranco};
        text-align: center;
        padding: 0.5rem 0;
        font-size: 1.5rem;

        &:nth-child(n+2){
            content: "";
            border-top: 1px solid ${colorBranco};
        }
    }
`

export const MenuHamburguer = () => {
    const [toggleMenu, untoggleMenu] = useState(false);

    const toggleHandler = () => {
        untoggleMenu((toggleMenu) => !toggleMenu)
        console.log(toggleMenu);
    }

    return (
        <> 
            {/* Melhorar esse toggleHandler para fica animado */}
            <BotaoMenu onClick={toggleHandler}>
                <img src={iconMenu} />
            </BotaoMenu>
            {toggleMenu ? 
            <Menu>
                <FecharMenu onClick={toggleHandler}>
                    <img src={iconFechar} />
                </FecharMenu>
                <ul>
                    <li>
                        Home
                        {/* <Link>Home</Link> */}
                    </li>
                    <li>
                        Nossas Lojas
                        {/* <Link>Nossas Lojas</Link> */}
                    </li>
                    <li>
                        Novidades
                        {/* <Link>Novidades</Link> */}
                    </li>
                    <li>
                        Promoções
                        {/* <Link>Promoções</Link> */}
                    </li>
                    
                </ul>
            </Menu>
            : "" }
        </>
    )
}