import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {selectLanguageID} from "../../redux/features/languageSlice";
import Languages from "../Languages";

const PersonalPartial = () => {

    
    const languageID = useSelector(selectLanguageID)
    const personalArray = [
        [Languages(languageID, 7), "Kerner Dániel"],
        [Languages(languageID, 8), "2000.11.17."],
        [Languages(languageID, 9), "Pécs"],
        [Languages(languageID, 10), "0620-318-4108"],
        [Languages(languageID, 11), "kerner.daniel1@gmail.com"],
        [Languages(languageID, 12), "Deutsche Telekom"],
    ]


  return (
    <>

    
        <span id="first">               
                <h1>{Languages(languageID, 5)}</h1>
                    <p>{Languages(languageID, 46)}<br></br><br></br>
                        {Languages(languageID, 47)}
                     </p>                
                     </span>
                <span>
                    <h1>{Languages(languageID, 6)}</h1>
                    <ul>
                        {personalArray.map((arrayData, arrayIndex) => (
                            <>
                                <li>
                                    <span>
                                        {arrayData[0]}
                                    </span>
                                    <span>
                                        {arrayData[1]}
                                    </span>
                                </li>
                            </>
                        ))}
                    </ul>
                </span>
                </>
  )
}

export default PersonalPartial