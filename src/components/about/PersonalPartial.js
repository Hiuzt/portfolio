import React from 'react'

const PersonalPartial = () => {

    const personalArray = [
        ["Teljes név", "Kerner Dániel"],
        ["Születési idő", "2000.11.17."],
        ["Lakhely", "Pécs"],
        ["Telefonszám", "+36 20 318 4108"],
        ["E-Mail", "kerner.daniel1@gmail.com"],
        ["Munkahely", "Deutsche Telekom"],
    ]


  return (
    <>

    
        <span id="first">               
                    <h1>Junior webfejlesztő</h1>
                    <p>Kerner Dániel vagyok, 22 éves pályakezdő informatikus. A Pécsi Tudomány Egyetem Mérnöki karán végeztem
                     mérnökinformatikusként 2023 nyarán, ez idő alatt duális képzésben vettem részt a Deutsche Telekomnál
                     . Itt a főbb feladatom automatizálás volt Visual Basic Application-ben Excel reportokat dolgoztam fel. Már kisebb korom óta érdekelt a programozás,
                      ezért 14 évesen kezdtem vele fogalkozni. A webfejlesztés komolyabban csak a szakdolgozatom
                       alatt kezdett érdekelni, a szakdolgozat témám is erre alapult amiben
                        legfőképpen ReactJS illetve ASP.NET-et használtam. 
                     </p>                
                     </span>
                <span>
                    <h1>Személyes információk</h1>
                    <ul>
                        {personalArray.map((arrayData, arrayIndex) => (
                            <>
                                <li>
                                    <span>
                                        {arrayData[0]} :
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