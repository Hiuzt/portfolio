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
		["Weboldal tervezés, felépítés, karbantartás", "Building, planning, maintanencing webpages"],
		["Adatbázis", "Database"],
		["Adatbázis kiépítés, karbantartás", "Building, maintanencing database"],
		["API", "API"],
		["API  tervezés, felépítés, karbantartás", "Planning, building, maintanencing APIs"],
		["Ügyfeleim", "Clients"],
		["Ez az adat nem valós, a kinézet kedvéért lett létrehozva", "This data is false, it has been created due to the design of the webpage"]
    ]

  return languageArray[textID - 1][languageID - 1];
}

export default Languages