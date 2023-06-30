/* eslint-disable react/prop-types */
export const SlideCarrosel = ({ imagem }) => {
    const { desktop, tablet, mobile } = imagem;

    return(
        <picture>
            <source src={desktop} media="(min-width: 1440px)" />
            <source src={tablet} media="(min-width: 768px)" />
            <img src={ mobile } />     
        </picture>
    )
}
