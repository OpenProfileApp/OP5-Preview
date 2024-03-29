const ISO3166 = {
    getCountry: function(countryCode) {
        // Sample country data
        const countryData = {
            AF: { name: "Afghanistan", emoji: "🇦🇫" },
            AL: { name: "Albania", emoji: "🇦🇱" },
            DZ: { name: "Algeria", emoji: "🇩🇿" },
            AD: { name: "Andorra", emoji: "🇦🇩" },
            AO: { name: "Angola", emoji: "🇦🇴" },
            AG: { name: "Antigua and Barbuda", emoji: "🇦🇬" },
            AR: { name: "Argentina", emoji: "🇦🇷" },
            AM: { name: "Armenia", emoji: "🇦🇲" },
            AU: { name: "Australia", emoji: "🇦🇺" },
            AT: { name: "Austria", emoji: "🇦🇹" },
            AZ: { name: "Azerbaijan", emoji: "🇦🇿" },
            BS: { name: "Bahamas", emoji: "🇧🇸" },
            BH: { name: "Bahrain", emoji: "🇧🇭" },
            BD: { name: "Bangladesh", emoji: "🇧🇩" },
            BB: { name: "Barbados", emoji: "🇧🇧" },
            BY: { name: "Belarus", emoji: "🇧🇾" },
            BE: { name: "Belgium", emoji: "🇧🇪" },
            BZ: { name: "Belize", emoji: "🇧🇿" },
            BJ: { name: "Benin", emoji: "🇧🇯" },
            BT: { name: "Bhutan", emoji: "🇧🇹" },
            BO: { name: "Bolivia", emoji: "🇧🇴" },
            BA: { name: "Bosnia and Herzegovina", emoji: "🇧🇦" },
            BW: { name: "Botswana", emoji: "🇧🇼" },
            BR: { name: "Brazil", emoji: "🇧🇷" },
            BN: { name: "Brunei", emoji: "🇧🇳" },
            BG: { name: "Bulgaria", emoji: "🇧🇬" },
            BF: { name: "Burkina Faso", emoji: "🇧🇫" },
            BI: { name: "Burundi", emoji: "🇧🇮" },
            CV: { name: "Cabo Verde", emoji: "🇨🇻" },
            KH: { name: "Cambodia", emoji: "🇰🇭" },
            CM: { name: "Cameroon", emoji: "🇨🇲" },
            CA: { name: "Canada", emoji: "🇨🇦" },
            CF: { name: "Central African Republic", emoji: "🇨🇫" },
            TD: { name: "Chad", emoji: "🇹🇩" },
            CL: { name: "Chile", emoji: "🇨🇱" },
            CN: { name: "China", emoji: "🇨🇳" },
            CO: { name: "Colombia", emoji: "🇨🇴" },
            KM: { name: "Comoros", emoji: "🇰🇲" },
            CD: { name: "Congo (Congo-Kinshasa)", emoji: "🇨🇩" },
            CG: { name: "Congo (Congo-Brazzaville)", emoji: "🇨🇬" },
            CR: { name: "Costa Rica", emoji: "🇨🇷" },
            HR: { name: "Croatia", emoji: "🇭🇷" },
            CU: { name: "Cuba", emoji: "🇨🇺" },
            CY: { name: "Cyprus", emoji: "🇨🇾" },
            CZ: { name: "Czechia (Czech Republic)", emoji: "🇨🇿" },
            DK: { name: "Denmark", emoji: "🇩🇰" },
            DJ: { name: "Djibouti", emoji: "🇩🇯" },
            DM: { name: "Dominica", emoji: "🇩🇲" },
            DO: { name: "Dominican Republic", emoji: "🇩🇴" },
            EC: { name: "Ecuador", emoji: "🇪🇨" },
            EG: { name: "Egypt", emoji: "🇪🇬" },
            SV: { name: "El Salvador", emoji: "🇸🇻" },
            GQ: { name: "Equatorial Guinea", emoji: "🇬🇶" },
            ER: { name: "Eritrea", emoji: "🇪🇷" },
            EE: { name: "Estonia", emoji: "🇪🇪" },
            ET: { name: "Ethiopia", emoji: "🇪🇹" },
            FJ: { name: "Fiji", emoji: "🇫🇯" },
            FI: { name: "Finland", emoji: "🇫🇮" },
            FR: { name: "France", emoji: "🇫🇷" },
            GA: { name: "Gabon", emoji: "🇬🇦" },
            GM: { name: "Gambia", emoji: "🇬🇲" },
            GE: { name: "Georgia", emoji: "🇬🇪" },
            DE: { name: "Germany", emoji: "🇩🇪" },
            GH: { name: "Ghana", emoji: "🇬🇭" },
            GR: { name: "Greece", emoji: "🇬🇷" },
            GD: { name: "Grenada", emoji: "🇬🇩" },
            GT: { name: "Guatemala", emoji: "🇬🇹" },
            GN: { name: "Guinea", emoji: "🇬🇳" },
            GW: { name: "Guinea-Bissau", emoji: "🇬🇼" },
            GY: { name: "Guyana", emoji: "🇬🇾" },
            HT: { name: "Haiti", emoji: "🇭🇹" },
            HN: { name: "Honduras", emoji: "🇭🇳" },
            HU: { name: "Hungary", emoji: "🇭🇺" },
            IS: { name: "Iceland", emoji: "🇮🇸" },
            IN: { name: "India", emoji: "🇮🇳" },
            ID: { name: "Indonesia", emoji: "🇮🇩" },
            IR: { name: "Iran", emoji: "🇮🇷" },
            IQ: { name: "Iraq", emoji: "🇮🇶" },
            IE: { name: "Ireland", emoji: "🇮🇪" },
            IL: { name: "Israel", emoji: "🇮🇱" },
            IT: { name: "Italy", emoji: "🇮🇹" },
            JM: { name: "Jamaica", emoji: "🇯🇲" },
            JP: { name: "Japan", emoji: "🇯🇵" },
            JO: { name: "Jordan", emoji: "🇯🇴" },
            KZ: { name: "Kazakhstan", emoji: "🇰🇿" },
            KE: { name: "Kenya", emoji: "🇰🇪" },
            KI: { name: "Kiribati", emoji: "🇰🇮" },
            KP: { name: "North Korea", emoji: "🇰🇵" },
            KR: { name: "South Korea", emoji: "🇰🇷" },
            KW: { name: "Kuwait", emoji: "🇰🇼" },
            KG: { name: "Kyrgyzstan", emoji: "🇰🇬" },
            LA: { name: "Laos", emoji: "🇱🇦" },
            LV: { name: "Latvia", emoji: "🇱🇻" },
            LB: { name: "Lebanon", emoji: "🇱🇧" },
            LS: { name: "Lesotho", emoji: "🇱🇸" },
            LR: { name: "Liberia", emoji: "🇱🇷" },
            LY: { name: "Libya", emoji: "🇱🇾" },
            LI: { name: "Liechtenstein", emoji: "🇱🇮" },
            LT: { name: "Lithuania", emoji: "🇱🇹" },
            LU: { name: "Luxembourg", emoji: "🇱🇺" },
            MK: { name: "North Macedonia", emoji: "🇲🇰" },
            MG: { name: "Madagascar", emoji: "🇲🇬" },
            MW: { name: "Malawi", emoji: "🇲🇼" },
            MY: { name: "Malaysia", emoji: "🇲🇾" },
            MV: { name: "Maldives", emoji: "🇲🇻" },
            ML: { name: "Mali", emoji: "🇲🇱" },
            MT: { name: "Malta", emoji: "🇲🇹" },
            MH: { name: "Marshall Islands", emoji: "🇲🇭" },
            MR: { name: "Mauritania", emoji: "🇲🇷" },
            MU: { name: "Mauritius", emoji: "🇲🇺" },
            MX: { name: "Mexico", emoji: "🇲🇽" },
            FM: { name: "Micronesia", emoji: "🇫🇲" },
            MD: { name: "Moldova", emoji: "🇲🇩" },
            MC: { name: "Monaco", emoji: "🇲🇨" },
            MN: { name: "Mongolia", emoji: "🇲🇳" },
            ME: { name: "Montenegro", emoji: "🇲🇪" },
            MA: { name: "Morocco", emoji: "🇲🇦" },
            MZ: { name: "Mozambique", emoji: "🇲🇿" },
            MM: { name: "Myanmar (formerly Burma)", emoji: "🇲🇲" },
            NA: { name: "Namibia", emoji: "🇳🇦" },
            NR: { name: "Nauru", emoji: "🇳🇷" },
            NP: { name: "Nepal", emoji: "🇳🇵" },
            NL: { name: "Netherlands", emoji: "🇳🇱" },
            NZ: { name: "New Zealand", emoji: "🇳🇿" },
            NI: { name: "Nicaragua", emoji: "🇳🇮" },
            NE: { name: "Niger", emoji: "🇳🇪" },
            NG: { name: "Nigeria", emoji: "🇳🇬" },
            NO: { name: "Norway", emoji: "🇳🇴" },
            OM: { name: "Oman", emoji: "🇴🇲" },
            PK: { name: "Pakistan", emoji: "🇵🇰" },
            PW: { name: "Palau", emoji: "🇵🇼" },
            PA: { name: "Panama", emoji: "🇵🇦" },
            PG: { name: "Papua New Guinea", emoji: "🇵🇬" },
            PY: { name: "Paraguay", emoji: "🇵🇾" },
            PE: { name: "Peru", emoji: "🇵🇪" },
            PH: { name: "Philippines", emoji: "🇵🇭" },
            PL: { name: "Poland", emoji: "🇵🇱" },
            PT: { name: "Portugal", emoji: "🇵🇹" },
            QA: { name: "Qatar", emoji: "🇶🇦" },
            RO: { name: "Romania", emoji: "🇷🇴" },
            RU: { name: "Russia", emoji: "🇷🇺" },
            RW: { name: "Rwanda", emoji: "🇷🇼" },
            KN: { name: "Saint Kitts and Nevis", emoji: "🇰🇳" },
            LC: { name: "Saint Lucia", emoji: "🇱🇨" },
            VC: { name: "Saint Vincent and the Grenadines", emoji: "🇻🇨" },
            WS: { name: "Samoa", emoji: "🇼🇸" },
            SM: { name: "San Marino", emoji: "🇸🇲" },
            ST: { name: "Sao Tome and Principe", emoji: "🇸🇹" },
            SA: { name: "Saudi Arabia", emoji: "🇸🇦" },
            SN: { name: "Senegal", emoji: "🇸🇳" },
            RS: { name: "Serbia", emoji: "🇷🇸" },
            SC: { name: "Seychelles", emoji: "🇸🇨" },
            SL: { name: "Sierra Leone", emoji: "🇸🇱" },
            SG: { name: "Singapore", emoji: "🇸🇬" },
            SK: { name: "Slovakia", emoji: "🇸🇰" },
            SI: { name: "Slovenia", emoji: "🇸🇮" },
            SB: { name: "Solomon Islands", emoji: "🇸🇧" },
            SO: { name: "Somalia", emoji: "🇸🇴" },
            ZA: { name: "South Africa", emoji: "🇿🇦" },
            SS: { name: "South Sudan", emoji: "🇸🇸" },
            ES: { name: "Spain", emoji: "🇪🇸" },
            LK: { name: "Sri Lanka", emoji: "🇱🇰" },
            SD: { name: "Sudan", emoji: "🇸🇩" },
            SR: { name: "Suriname", emoji: "🇸🇷" },
            SZ: { name: "Eswatini", emoji: "🇸🇿" },
            SE: { name: "Sweden", emoji: "🇸🇪" },
            CH: { name: "Switzerland", emoji: "🇨🇭" },
            SY: { name: "Syria", emoji: "🇸🇾" },
            TW: { name: "Taiwan", emoji: "🇹🇼" },
            TJ: { name: "Tajikistan", emoji: "🇹🇯" },
            TZ: { name: "Tanzania", emoji: "🇹🇿" },
            TH: { name: "Thailand", emoji: "🇹🇭" },
            TL: { name: "Timor-Leste", emoji: "🇹🇱" },
            TG: { name: "Togo", emoji: "🇹🇬" },
            TO: { name: "Tonga", emoji: "🇹🇴" },
            TT: { name: "Trinidad and Tobago", emoji: "🇹🇹" },
            TN: { name: "Tunisia", emoji: "🇹🇳" },
            TR: { name: "Turkey", emoji: "🇹🇷" },
            TM: { name: "Turkmenistan", emoji: "🇹🇲" },
            TV: { name: "Tuvalu", emoji: "🇹🇻" },
            UG: { name: "Uganda", emoji: "🇺🇬" },
            UA: { name: "Ukraine", emoji: "🇺🇦" },
            AE: { name: "United Arab Emirates", emoji: "🇦🇪" },
            GB: { name: "United Kingdom", emoji: "🇬🇧" },
            US: { name: "United States", emoji: "🇺🇸" },
            UY: { name: "Uruguay", emoji: "🇺🇾" },
            UZ: { name: "Uzbekistan", emoji: "🇺🇿" },
            VU: { name: "Vanuatu", emoji: "🇻🇺" },
            VA: { name: "Vatican City", emoji: "🇻🇦" },
            VE: { name: "Venezuela", emoji: "🇻🇪" },
            VN: { name: "Vietnam", emoji: "🇻🇳" },
            YE: { name: "Yemen", emoji: "🇾🇪" },
            ZM: { name: "Zambia", emoji: "🇿🇲" },
            ZW: { name: "Zimbabwe", emoji: "🇿🇼" }
        };
        return countryData[countryCode];
    }
};

const countryInfo = getCountryInfo('US');
const countryName = countryInfo.name;
const countryEmoji = countryInfo.emoji;

function getCountryInfo(countryCode) {
    const countryData = ISO3166.getCountry(countryCode.toUpperCase());
    if (countryData) {
        return { name: countryData.name, emoji: countryData.emoji }; // Return only name and emoji
    } else {
        return { name: 'Unknown', emoji: '' }; // Return a default value if country data not found
    }
}

// Function to get the flag emoji based on country code
function getCountryFlagEmoji(countryCode) {
    const OFFSET = 127397;
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => char.charCodeAt() + OFFSET);
    return String.fromCodePoint(...codePoints);
}