import { Children } from 'react';
import styled from 'styled-components';

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl};
`;

export default function ImgCard({
    img="/dog.jpeg",
    bg="red",
    tcl="#FFF",
    children=null  //allow to add content in the component
}){

    return <RedCont cl={bg} text_cl={tcl}>
        <img src={img} />
        <h1>This is a dog</h1>
        {children}
    </RedCont>
}