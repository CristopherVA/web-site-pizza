import styled from "styled-components";
import FeaturePic from '../../images/featured3.jpg';

export const FeatureContainer = styled.div`
    background: linear-gradient( to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
    height: 100vh;
    min-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 1rem;

    h1{
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p{
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`

export const FeatureBtn = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background-color: #ffc500;
    color: #000;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`