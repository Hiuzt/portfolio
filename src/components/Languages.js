import React from 'react'

const Languages = (languageID, textID) => {
    const languageArray = [
        ["KEZDŐLAP", "HOME"],
		["RÓLAM", "ABOUT ME"],
		["ÖNÉLETRAJZ", "RESUME"],
		["REFERENCIÁK", "REFERENCES"],
		["Junior webfejlesztő", "Junior webdeveloper"],
		["Személyes információk", "Personal data"],
		["Teljes név", "Full name"],
		["Születési idő", "Date of birth"],
		["Lakhely", "Place of residence"],
		["Telefonszám", "Phone number"],
		["E-Mail", "E-Mail"],
		["Munkahely", "Workplace"],
		["Skillek", "Skills"],
		["Amit nyújtok", "My services"],
		["Responszivitás", "Responsivity"],
		["Teljesen reszponzív weboldalak felépítése", "Building fully responsive webpages"],
		["Webfejlesztés", "Webdevelopment"],
		["Weboldal tervezés, felépítés, karbantartás", "Building, planning, maintaining webpages"],
		["Adatbázis", "Database"],
		["Adatbázis kiépítés, karbantartás", "Building maintaining database"],
		["API", "API"],
		["API  tervezés, felépítés, karbantartás", "Planning, building, maintaining APIs"],
		["Ügyfeleim", "Clients"],
		["Kommentek", "Comments"],
		["Ez az adat nem valós", "This data is not valid"],
		["Oktatás", "Education"],
		["Munkahelyek", "Workplaces"],
		["Pécsi Tudományegyetem", "University of Pécs"],
		["Műszaki és Informatikai Kar", "Faculty of Engineering and Information Technology"],
		["Mérnökinformatika", "IT Engineer"],		
		["Középiskola", "High school"],
		["Széchenyi István gimnázium", "Széchenyi István high school"],
		["Általános iskola", "Elementary school"],
		["Jókai Mór általános iskola", "Jókai Mór elementary school"],
		["Most", "Now"],
		["Magyar", "Hungarian"],
		["Anyanyelv", "Native language"],
		["Angol", "English"],
		["Nyelvvizsga", "Language exam"],
		["Autó foglaló rendszer", "Car rental"],
		["Ez a projekt a szakdolgozatomra lett készítve. Egy céges autófoglaló rendszer ami biztosítja a felhasználóknak a könnyű autófoglalást illetve utazást, admin felülettel ellátva.",
			"This project was created for my thesis. It is a corporate car reservation system that provides easy car booking and travel options for users, equipped with an admin interface."
		],
		["Portfólió", "Portfolio"],
		["Egy portfólió amit referencia munka miatt készítettem el, ezen a weboldalon megtudhatnak rólam pár tájékoztató jellegű információt",
			"A portfolio created for reference purposes, on this website, you can find some informational details about me."
		],
		["Forráskód", "Source code"],
		["Előnézet", "Demo"],
		["Kerner Dániel vagyok, 22 éves pályakezdő informatikus. A Pécsi Tudomány Egyetem Mérnöki karán végeztem mérnökinformatikusként 2023 nyarán, ez idő alatt duális képzésben vettem "+
		"részt a Deutsche Telekomnál. Itt a főbb feladatom automatizálás volt Visual Basic Application-ben Excel reportokat dolgoztam fel. ",
		"I am Daniel Kerner, a 22-year-old aspiring IT professional. I graduated from the Faculty of Engineering at the University of Pécs as " + 
		"a computer engineer in the summer of 2023. During this time, I participated in a dual education program at Deutsche " +
		"Telekom, where my main task was automation using Visual Basic Application to process Excel reports."],
		["Már kisebb korom óta érdekelt a programozás, ezért 14 évesen kezdtem vele fogalkozni. A webfejlesztés komolyabban csak a szakdolgozatom alatt kezdett érdekelni, a szakdolgozat témám is erre alapult amiben legfőképpen ReactJS illetve ASP.NET-et használtam.", 
		"I have been interested in programming since a young age, therefore i dig into it at the age of 14. I became more interested in web development during the preparation of my thesis, which was focused on ReactJS and ASP.NET."],
		["Minden jog fenntartva", "All rights reserved."]
	]
  return languageArray[textID - 1][languageID - 1];
}

export default Languages