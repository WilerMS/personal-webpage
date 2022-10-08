import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - ${constants.DESKTOP_NAVBAR_HEIGHT});
    padding-top: calc(${constants.DESKTOP_NAVBAR_HEIGHT} + 20px);
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 100px;

    @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
        padding-top: 50px;
    }

    .layout {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: ${constants.WRAPPER_WIDTHS.lg};
        max-width: ${constants.MAX_WIDTH};

        @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
            width: ${constants.WRAPPER_WIDTHS.sm};
        }
    }

    .about {
        width: 100%;
        height: 250px;
        max-width: ${constants.MAX_WIDTH};
        width: ${constants.WRAPPER_WIDTHS.lg};
        background: ${props => props.theme.page_bg};
        box-shadow: 0px -15px 7px -2px #0000000f;
        border-radius: 100px 100px 0 0;
        position: absolute;
        top: -190px;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        h2 {
            margin-top: 50px;
            font-size: ${constants.FONT_SIZES.xxl};
            transition: margin .5s ease;
        }

        &.active {
            h2 {
                margin-top: 200px;
            }
        }

        @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
            display: none;
        }
    }
`

export const Me = styled.div`
    background: none;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;

    @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
        flex-direction: column;
        align-items: center;
    }

    .me {
        &-content {
            opacity: .95;
            height: 100%;
            width: calc(95% - 400px);
            display: flex;
            flex-direction: column;
            gap: 15px;

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                width: 100%;
                text-align: center;
            }   

            h2 {
                font-size: 1.39rem;

                @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                    font-size: 1.2rem;
                }  
            }

            span {
                font-size: 1rem;
                text-align: justify;

                @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                    font-size: 1rem;
                }
            }

        }
        &-img {
            width: 300px;
            height: 300px;
            overflow: hidden;
            border-radius: 20%;

            @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                width: 300px;
                height: 300px;
            }  

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 40%;
            }

        }
    }
`