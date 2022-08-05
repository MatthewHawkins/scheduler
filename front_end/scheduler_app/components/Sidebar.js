/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import HomeIcon from '@mui/icons-material/Home';

const sidebarStyles = css`
    background-color: darkgrey;
    width: 15vw;
    min-width: 175px;
    height: 100vh - 60px;
    margin-top: 60px;

    ul{
        display: flex;
        flex-direction: column;
    }
    li{
        display: flex;
        list-style-type: none;
        padding: 5px;
    }
`


function Sidebar(props){

    return (
        <div css={sidebarStyles}>
           <ul>
               <li>
                   <HomeIcon />
                   Home
               </li>
               <li>
                   Item 2
               </li>
               <li>
                   Item 3
               </li>
               <li>
                   Item 4
               </li>
           </ul>
        </div>
    );
}

export default Sidebar