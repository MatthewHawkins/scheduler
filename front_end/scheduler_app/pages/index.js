/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const mainStyles = css`
    background-color: gray;
    width: 100vw;
    height: 100vh;
    display: flex;
`

const mainDisplay = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    margin-top: 65px;
`

const mainTopBar = css`
background-color: lightgray;
width: 70vw;
border-radius: 5px;
flex: .5;
margin: 3vh 0 3vh 0;
`

const mainInfoSection = css`
background-color: lightgray;
width: 70vw;
border-radius: 5px;
flex: 5;
margin: 3vh 0 5vh 0;

`


function HomePage(props) {
    return (
        <div css={mainStyles} >
            <Topbar />
            <Sidebar />
            <div css={mainDisplay}>
                <div css={mainTopBar}>
                    Div 1
                </div>
                <div css={mainInfoSection}>
                    Div 2
                </div>
            </div> 
        </div>
    );
}

export default HomePage;