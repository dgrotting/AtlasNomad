//mouseDown refers to JVectorMap map.js file
mouseDown = false;

(function(){
  $('document').ready(function(){
    makeMap();
    addAutocompleteListener();
    addCountryClickListener();
    addOceanClickListener();
    addLanguageButtonClickListener();
    addVisaButtonClickListener();
    addGDPButtonClickListener();
    filterSlider();
    generateColors();
    randomColor();
  })


  var makeMap = function(){
    AtlasMap = {
      zoomedIn: false,
      currentCountry: null,
      clickedCountry: null,
      divsShown: false,
      languages: { "BD": 1000, "BE": 1, "BF": 1, "BG": 1, "BA": 1, "BN": 1, "BO": 1, "JP": 1, "BI": 1000, "BJ": 1, "BT": 1, "JM": 1000, "BW": 1000, "BR": 1, "BS": 1000, "BY": 1, "BZ": 1000, "RU": 1, "RW": 1000, "RS": 1, "LT": 1, "LU": 1, "LR": 1000, "RO": 1, "GW": 1, "GT": 1, "GR": 1, "GQ": 1, "GY": 1000, "GE": 1, "GB": 1000, "GA": 1, "GN": 1, "GM": 1, "GL": 1, "KW": 1, "GH": 1000, "OM": 1, "_1": 1000, "_0": 1, "JO": 1, "HR": 1, "HT": 1000, "HU": 1, "HN": 1, "PR": 1000, "PS": 1, "PT": 1, "PY": 1, "PA": 1, "PG": 1000, "PE": 1, "PK": 1000, "PH": 1000, "PL": 1, "ZM": 1000, "EH": 1, "EE": 1, "EG": 1, "ZA": 1000, "EC": 1, "AL": 1, "AO": 1, "KZ": 1, "ET": 1, "ZW": 1000, "ES": 1, "ER": 1000, "ME": 1, "MD": 1, "MG": 1, "MA": 1, "UZ": 1, "MM": 1, "ML": 1, "MN": 1, "MK": 1, "MW": 1, "MR": 1, "UG": 1000, "MY": 1, "MX": 1, "VU": 1, "FR": 1, "FI": 1, "FJ": 1000, "FK": 1, "NI": 1, "NL": 1, "NO": 1, "NA": 1000, "NC": 1, "NE": 1, "NG": 1000, "NZ": 1000, "NP": 1, "CI": 1, "CH": 1, "CO": 1, "CN": 1, "CM": 1000, "CL": 1, "CA": 1000, "CG": 1, "CF": 1, "CD": 1, "CZ": 1, "CY": 1, "CR": 1, "CU": 1, "SZ": 1000, "SY": 1, "KG": 1, "KE": 1000, "SS": 1000, "SR": 1, "KH": 1, "SV": 1, "SK": 1, "KR": 1, "SI": 1, "KP": 1, "SO": 1, "SN": 1, "SL": 1000, "SB": 1, "SA": 1, "SE": 1, "SD": 1000, "DO": 1000, "DJ": 1, "DK": 1, "DE": 1, "YE": 1, "AT": 1, "DZ": 1, "US": 1000, "LV": 1, "UY": 1, "LB": 1, "LA": 1, "TW": 1, "TT": 1000, "TR": 1, "LK": 1000, "TN": 1, "TL": 1, "TM": 1, "TJ": 1, "LS": 1000, "TH": 1, "TF": 1, "TG": 1, "TD": 1, "LY": 1, "AE": 1, "VE": 1, "AF": 1, "IQ": 1, "IS": 1, "IR": 1, "AM": 1, "IT": 1, "VN": 1, "AR": 1, "AU": 1000, "IL": 1000, "IN": 1000, "TZ": 1000, "AZ": 1, "IE": 1000, "ID": 1, "UA": 1, "QA": 1, "MZ": 1},
      visas: { "BD": 1, "BE": 1000, "BF": 1, "BG": 1000, "BA": 1000, "BN": 1000, "BO": 1, "JP": 1000, "BI": 1, "BJ": 1, "BT": 1, "JM": 1000, "BW": 1000, "BR": 1, "BS": 1000, "BY": 1, "BZ": 1000, "RU": 1, "RW": 1, "RS": 1000, "LT": 1000, "LU": 1000, "LR": 1, "RO": 1000, "GW": 1, "GT": 1, "GR": 1000, "GQ": 1, "GY": 1000, "GE": 1, "GB": 1000, "GA": 1, "GN": 1, "GM": 1, "GL": 1000, "KW": 1, "GH": 1, "OM": 1, "_1": 1000, "_0": 1, "JO": 1, "HR": 1000, "HT": 1000, "HU": 1000, "HN": 1000, "PR": 1000, "PS": 1, "PT": 1000, "PY": 1, "PA": 1000, "PG": 1000, "PE": 1000, "PK": 1000, "PH": 1000, "PL": 1000, "ZM": 1000, "EH": 1, "EE": 1000, "EG": 1, "ZA": 1000, "EC": 1000, "AL": 1000, "AO": 1, "KZ": 1000, "ET": 1, "ZW": 1000, "ES": 1000, "ER": 1000, "ME": 1000, "MD": 1000, "MG": 1, "MA": 1000, "UZ": 1000, "MM": 1, "ML": 1, "MN": 1000, "MK": 1000, "MW": 1000, "MR": 1, "UG": 1000, "MY": 1000, "MX": 1000, "VU": 1000, "FR": 1000, "FI": 1000, "FJ": 1000, "FK": 1000, "NI": 1000, "NL": 1000, "NO": 1000, "NA": 1000, "NC": 1, "NE": 1, "NG": 1, "NZ": 1000, "NP": 1, "CI": 1, "CH": 1000, "CO": 1000, "CN": 1, "CM": 1, "CL": 1000, "CA": 1000, "CG": 1, "CF": 1, "CD": 1, "CZ": 1000, "CY": 1000, "CR": 1000, "CU": 1, "SZ": 1000, "SY": 1, "KG": 1000, "KE": 1000, "SS": 1000, "SR": 1, "KH": 1, "SV": 1000, "SK": 1, "KR": 1000, "SI": 1000, "KP": 1, "SO": 1000, "SN": 1, "SL": 1, "SB": 1000, "SA": 1, "SE": 1000, "SD": 1, "DO": 1000, "DJ": 1000, "DK": 1000, "DE": 1000, "YE": 1000, "AT": 1000, "DZ": 1, "US": 1000, "LV": 1000, "UY": 1000, "LB": 1, "LA": 1000, "TW": 1000, "TT": 1000, "TR": 1000, "LK": 1, "TN": 1000, "TL": 1, "TM": 1, "TJ": 1, "LS": 1000, "TH": 1000, "TF": 1000, "TG": 1000, "TD": 1, "LY": 1, "AE": 1000, "VE": 1, "AF": 1, "IQ": 1, "IS": 1000, "IR": 1, "AM": 1000, "IT": 1000, "VN": 1, "AR": 1, "AU": 1000, "IL": 1000, "IN": 1, "TZ": 1, "AZ": 1, "IE": 1000, "ID": 1000, "UA": 1000, "QA": 1, "MZ": 1},
      gdpData: {"AF": 16.63,  "AL": 11.58,  "DZ": 158.97,  "AO": 85.81,  "AG": 1.1,  "AR": 351.02,  "AM": 8.83,  "AU": 1219.72,  "AT": 366.26,  "AZ": 52.17,  "BS": 7.54,  "BH": 21.73,  "BD": 105.4,  "BB": 3.96,  "BY": 52.89,  "BE": 461.33,  "BZ": 1.43,  "BJ": 6.49,  "BT": 1.4,  "BO": 19.18,  "BA": 16.2,  "BW": 12.5,  "BR": 2023.53,  "BN": 11.96,  "BG": 44.84,  "BF": 8.67,  "BI": 1.47,  "KH": 11.36,  "CM": 21.88,  "CA": 1563.66,  "CV": 1.57,  "CF": 2.11,  "TD": 7.59,  "CL": 199.18,  "CN": 5745.13,  "CO": 283.11,  "KM": 0.56,  "CD": 12.6,  "CG": 11.88,  "CR": 35.02,  "CI": 22.38,  "HR": 59.92,  "CY": 22.75,  "CZ": 195.23,  "DK": 304.56,  "DJ": 1.14,  "DM": 0.38,  "DO": 50.87,  "EC": 61.49,  "EG": 216.83,  "SV": 21.8,  "GQ": 14.55,  "ER": 2.25,  "EE": 19.22,  "ET": 30.94,  "FJ": 3.15,  "FI": 231.98,  "FR": 2555.44,  "GA": 12.56,  "GM": 1.04,  "GE": 11.23,  "DE": 3305.9,  "GH": 18.06,  "GR": 305.01,  "GD": 0.65,  "GT": 40.77,  "GN": 4.34,  "GW": 0.83,  "GY": 2.2,  "HT": 6.5,  "HN": 15.34,  "HK": 226.49,  "HU": 132.28,  "IS": 12.77,  "IN": 1430.02,  "ID": 695.06,  "IR": 337.9,  "IQ": 84.14,  "IE": 204.14,  "IL": 201.25,  "IT": 2036.69,  "JM": 13.74,  "JP": 5390.9,  "JO": 27.13,  "KZ": 129.76,  "KE": 32.42,  "KI": 0.15,  "KR": 986.26,  "UNDEFINED": 5.73,  "KW": 117.32,  "KG": 4.44,  "LA": 6.34,  "LV": 23.39,  "LB": 39.15,  "LS": 1.8,  "LR": 0.98,  "LY": 77.91,  "LT": 35.73,  "LU": 52.43,  "MK": 9.58,  "MG": 8.33,  "MW": 5.04,  "MY": 218.95,  "MV": 1.43,  "ML": 9.08,  "MT": 7.8,  "MR": 3.49,  "MU": 9.43,  "MX": 1004.04,  "MD": 5.36,  "MN": 5.81,  "ME": 3.88,  "MA": 91.7,  "MZ": 10.21,  "MM": 35.65,  "NA": 11.45,  "NP": 15.11,  "NL": 770.31,  "NZ": 138,  "NI": 6.38,  "NE": 5.6,  "NG": 206.66,  "NO": 413.51,  "OM": 53.78,  "PK": 174.79,  "PA": 27.2,  "PG": 8.81,  "PY": 17.17,  "PE": 153.55,  "PH": 189.06,  "PL": 438.88,  "PT": 223.7,  "QA": 126.52,  "RO": 158.39,  "RU": 1476.91,  "RW": 5.69,  "WS": 0.55,  "ST": 0.19,  "SA": 434.44,  "SN": 12.66,  "RS": 38.92,  "SC": 0.92,  "SL": 1.9,  "SG": 217.38,  "SK": 86.26,  "SI": 46.44,  "SB": 0.67,  "ZA": 354.41,  "ES": 1374.78,  "LK": 48.24,  "KN": 0.56,  "LC": 1,  "VC": 0.58,  "SD": 65.93,  "SR": 3.3,  "SZ": 3.17,  "SE": 444.59,  "CH": 522.44,  "SY": 59.63,  "TW": 426.98,  "TJ": 5.58,  "TZ": 22.43,  "TH": 312.61,  "TL": 0.62,  "TG": 3.07,  "TO": 0.3,  "TT": 21.2,  "TN": 43.86,  "TR": 729.05,  "TM": 17,  "UG": 17.12,  "UA": 136.56,  "AE": 239.65,  "GB": 2258.57,  "US": 0,  "UY": 40.71,  "UZ": 37.72,  "VU": 0.72,  "VE": 285.21,  "VN": 101.99,  "YE": 30.02,  "ZM": 15.69,  "ZW": 5.57}
    }

    palette = [1, 10, 100, 1000];

    AtlasMap.map = new jvm.Map({
      map: 'world_mill_en',
      container: $('.atlas-map'),
      markerStyle: {
        initial: {
          fill: '#F8E23B',
          stroke: '#383f47'
        }
      },
      focusOn: {
        x: 0,
        y: 0,
        scale: 0,
        animate: false
      },
      backgroundColor: '#87CEFA',
      zoomButtons: false,
      regionStyle:{hover: {fill: "black"}},
      series: {
        regions: [{
          values: AtlasMap.gdpData,
          attribute: 'fill',
          scale: ['#6cc577', '#348d3e'],
          normalizeFunction: 'polynomial'
        }]
      },
      markers: [
        {latLng: [41.90, 12.45], name: 'Vatican City'},
        {latLng: [43.73, 7.41], name: 'Monaco'},
        {latLng: [-0.52, 166.93], name: 'Nauru'},
        {latLng: [-8.51, 179.21], name: 'Tuvalu'},
        {latLng: [43.93, 12.46], name: 'San Marino'},
        {latLng: [47.14, 9.52], name: 'Liechtenstein'},
        {latLng: [7.11, 171.06], name: 'Marshall Islands'},
        {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
        {latLng: [3.2, 73.22], name: 'Maldives'},
        {latLng: [35.88, 14.5], name: 'Malta'},
        {latLng: [12.05, -61.75], name: 'Grenada'},
        {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
        {latLng: [13.16, -59.55], name: 'Barbados'},
        {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
        {latLng: [-4.61, 55.45], name: 'Seychelles'},
        {latLng: [7.35, 134.46], name: 'Palau'},
        {latLng: [42.5, 1.51], name: 'Andorra'},
        {latLng: [14.01, -60.98], name: 'Saint Lucia'},
        {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
        {latLng: [1.3, 103.8], name: 'Singapore'},
        {latLng: [1.46, 173.03], name: 'Kiribati'},
        {latLng: [-21.13, -175.2], name: 'Tonga'},
        {latLng: [15.3, -61.38], name: 'Dominica'},
        {latLng: [-20.2, 57.5], name: 'Mauritius'},
        {latLng: [26.02, 50.55], name: 'Bahrain'},
        {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'},
        {latLng: [29.98, 31.13], name: 'Pyramids of Giza', type: "point-of-interest"},{latLng: [39.97, 119.8], name: 'Great Wall of China', type: "point-of-interest"},{latLng: [27.18, 78.04], name: 'Taj Mahal', type: "point-of-interest"},{latLng: [-2.33, 34.83], name: 'Serengeti National Park', type: "point-of-interest"},{latLng: [0.0, -90.5], name: 'Galapagos Islands', type: "point-of-interest"},{latLng: [42.77, 5.0], name: 'Grand Canyon', type: "point-of-interest"},{latLng: [-13.16, -72.55], name: 'Machu Picchu', type: "point-of-interest"},{latLng: [-25.69, -54.44], name: 'Iguazu Falls', type: "point-of-interest"},{latLng: [-8.5, 115.0], name: 'Bali', type: "point-of-interest"},{latLng: [-3.17, 35.58], name: 'Ngorongoro Crater', type: "point-of-interest"},{latLng: [-17.99, 146.77], name: 'Great Barrier Reef', type: "point-of-interest"},{latLng: [13.41, 103.87], name: 'Angkor Wat', type: "point-of-interest"},{latLng: [-18.1, 25.84], name: 'Victoria Falls', type: "point-of-interest"},{latLng: [39.92, 116.39], name: 'Forbidden City', type: "point-of-interest"},{latLng: [25.72, 32.66], name: 'Karnak Temple', type: "point-of-interest"},{latLng: [19.69, -98.84], name: 'Teotihuacan', type: "point-of-interest"},{latLng: [-16.5, -151.74], name: 'Bora Bora', type: "point-of-interest"},{latLng: [37.97, 23.73], name: 'Acropolis', type: "point-of-interest"},{latLng: [17.99, -66.5], name: 'Potala Place', type: "point-of-interest"},{latLng: [31.78, 35.23], name: 'Jerusalem Old City', type: "point-of-interest"},{latLng: [-27.95, 119.92], name: 'TerraCotta', type: "point-of-interest"},{latLng: [20.68, -88.57], name: 'Chichen Itza', type: "point-of-interest"},{latLng: [30.33, 35.44], name: 'Petra', type: "point-of-interest"},{latLng: [-45.0, -115.0], name: 'Easter Island', type: "point-of-interest"},{latLng: [38.73, 35.48], name: 'Cappadocia', type: "point-of-interest"},{latLng: [41.89, 12.49], name: 'Colosseum of Rome', type: "point-of-interest"},{latLng: [41.9, 12.45], name: 'St. Peters Basilica', type: "point-of-interest"},{latLng: [30.05, 31.23], name: 'Egyptian Museum', type: "point-of-interest"},{latLng: [-7.61, 110.2], name: 'Borobudur', type: "point-of-interest"},{latLng: [25.74, 32.6], name: 'Valley of the Kings', type: "point-of-interest"},{latLng: [41.9, 12.45], name: 'Sistine Chapel', type: "point-of-interest"},{latLng: [34.1, -118.13], name: 'Alhambra', type: "point-of-interest"},{latLng: [48.86, 2.34], name: 'Louvre Museum', type: "point-of-interest"},{latLng: [48.8, 2.13], name: 'Versailles', type: "point-of-interest"},{latLng: [32.18, -104.44], name: 'Carlsbad Caverns', type: "point-of-interest"},{latLng: [21.43, 39.83], name: 'Mecca', type: "point-of-interest"},{latLng: [27.67, 85.35], name: 'Kathmandu Valley', type: "point-of-interest"},{latLng: [40.78, -73.96], name: 'Metropolitan Museum', type: "point-of-interest"},{latLng: [27.99, 86.93], name: 'Mount Everest', type: "point-of-interest"},{latLng: [13.75, 100.49], name: 'Temple of the Emerald Buddha', type: "point-of-interest"},{latLng: [41.01, 28.98], name: 'Hagia Sophia', type: "point-of-interest"},{latLng: [40.75, 14.48], name: 'Pompeii', type: "point-of-interest"},{latLng: [34.17, 74.75], name: 'Kashmir Valley', type: "point-of-interest"},{latLng: [50.09, 14.42], name: 'Prague Old Town', type: "point-of-interest"},{latLng: [31.62, 74.88], name: 'Golden Temple', type: "point-of-interest"},{latLng: [9.92, 78.12], name: 'Meenakshi', type: "point-of-interest"},{latLng: [48.45, 1.49], name: 'Chartres Cathedral', type: "point-of-interest"},{latLng: [37.88, -4.78], name: 'Mezquita of Cordoba', type: "point-of-interest"},{latLng: [33.51, 36.31], name: 'Damascus Old City & Umayyad', type: "point-of-interest"},{latLng: [42.65, 18.09], name: 'Dubrovnik', type: "point-of-interest"},{latLng: [43.77, 11.26], name: 'Uffizi Gallery', type: "point-of-interest"},{latLng: [38.58, -121.49], name: 'Golden Pavilion', type: "point-of-interest"},{latLng: [55.75, 37.62], name: 'St. Basils', type: "point-of-interest"},{latLng: [22.33, 31.62], name: 'Abu Simbel', type: "point-of-interest"},{latLng: [45.43, 12.34], name: 'St. Marks Basilica & Campanile', type: "point-of-interest"},{latLng: [48.81, 2.36], name: 'Kremlin', type: "point-of-interest"},{latLng: [25.34, 82.99], name: 'Varanasi/Ganges', type: "point-of-interest"},{latLng: [26.0, 13.0], name: 'Sahara Desert', type: "point-of-interest"},{latLng: [43.72, 10.4], name: 'Leaning Tower of Pisa', type: "point-of-interest"},{latLng: [34.01, 36.22], name: 'Baalbek', type: "point-of-interest"},{latLng: [48.64, -1.51], name: 'Mont-St-Michel', type: "point-of-interest"},{latLng: [41.01, 28.98], name: 'Topkapi Palace', type: "point-of-interest"},{latLng: [51.18, -1.83], name: 'Stonehenge', type: "point-of-interest"},{latLng: [5.95, -62.5], name: 'Angel Falls', type: "point-of-interest"},{latLng: [44.6, -110.55], name: 'Yellowstone National Park', type: "point-of-interest"},{latLng: [36.4, 25.46], name: 'Santorini', type: "point-of-interest"},{latLng: [3.16, 101.71], name: 'Petronas Twin Tower', type: "point-of-interest"},{latLng: [40.64, -74.09], name: 'New York Skyline', type: "point-of-interest"},{latLng: [31.63, -8.0], name: 'Marrakech', type: "point-of-interest"},{latLng: [48.86, 2.29], name: 'Eiffel Tower', type: "point-of-interest"},{latLng: [34.33, 77.42], name: 'Ladakh', type: "point-of-interest"},{latLng: [43.1, -79.07], name: 'Niagara Falls', type: "point-of-interest"},{latLng: [51.52, -0.13], name: 'British Museum', type: "point-of-interest"},{latLng: [30.83, 31.46], name: 'Burj Al Arab', type: "point-of-interest"},{latLng: [37.85, -119.56], name: 'Yosemite National Park', type: "point-of-interest"},{latLng: [-25.19, 130.98], name: 'Ayers Rock', type: "point-of-interest"},{latLng: [47.62, 1.52], name: 'Chambord Chateau', type: "point-of-interest"},{latLng: [39.88, 116.4], name: 'Temple of Heaven', type: "point-of-interest"},{latLng: [47.56, 10.75], name: 'Neuschwanstein Castle', type: "point-of-interest"},{latLng: [29.93, 32.56], name: 'Suez Canal', type: "point-of-interest"},{latLng: [31.56, 35.5], name: 'Dead Sea', type: "point-of-interest"},{latLng: [44.3, 9.21], name: 'Portofino', type: "point-of-interest"},{latLng: [20.91, 107.1], name: 'Halong Bay', type: "point-of-interest"},{latLng: [-77.95, 162.0], name: 'Table Mountain', type: "point-of-interest"},{latLng: [33.4, 126.55], name: 'Jeju Island', type: "point-of-interest"},{latLng: [20.35, -74.57], name: 'El Yunque', type: "point-of-interest"},{latLng: [48.36, 7.83], name: 'Black Forest', type: "point-of-interest"},{latLng: [23.51, 120.94], name: 'Yushan National Park', type: "point-of-interest"},{latLng: [5.95, -62.5], name: 'Angel Falls', type: "point-of-interest"},{latLng: [-0.17, -49.0], name: 'Amazon River', type: "point-of-interest"},{latLng: [-17.99, 146.77], name: 'Great Barrier Reef', type: "point-of-interest"},{latLng: [-25.69, -54.44], name: 'Iguazu Falls', type: "point-of-interest"},{latLng: [3.2, 73.0], name: 'Maldives', type: "point-of-interest"},{latLng: [-25.35, 131.04], name: 'Uluru National Park', type: "point-of-interest"},{latLng: [52.97, -9.43], name: 'Cliffs of Moher', type: "point-of-interest"},{latLng: [-44.67, 167.92], name: 'Milford Sound', type: "point-of-interest"},{latLng: [45.98, 7.66], name: 'Matterhorn', type: "point-of-interest"},
        {latLng: [37.77, -122.43], name: 'San Francisco'}
      ],

      onRegionTipShow: function(e, el, code){
        el.html(el.html());
      }
    })
  };

  var addLanguageButtonClickListener = function(){
    $('.language-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.languages);
    AtlasMap.map.series.regions[0].setScale(['#e9ebff', '#1827f4']);
    });
  }

  var addVisaButtonClickListener = function(){
    $('.visa-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.visas);
    AtlasMap.map.series.regions[0].setScale(['#e9ebff', '#1827f4']);
    });
  }

  var addGDPButtonClickListener = function(){
    $('.gdp-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.gdpData);
    AtlasMap.map.series.regions[0].setScale(['#6cc577', '#348d3e']);
    });
  }

 var generateColors = function(){
 var colors = {},
     key;

 for (key in AtlasMap.map.regions) {
   colors[key] = palette[Math.floor(Math.random()*palette.length)];
 }
 return colors;
 }

 var randomColor = function (){
   $('.color-filter').click(function(e){
     e.preventDefault();
     AtlasMap.map.series.regions[0].setScale(['#B2FFB2', '#143314']);
     AtlasMap.map.series.regions[0].setValues(generateColors());
   });
 }

function capitalizeFirstLetter(string) {
    var pieces = string.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}

  var addAutocompleteListener = function(){
    $( '#autocomplete' ).autocomplete({
      source: availableTags
    });
    $('#auto').submit(function(e){
      e.preventDefault();
      var userInput = $('#autocomplete').val();
      var caps = capitalizeFirstLetter(userInput);
      zoomInTo(test[caps]);
    });
  }

  var zoomInTo = function(dataCode){
    zoomTo(dataCode);
    toggleSideDivs();
  }

  var zoomTo = function(dataCode){
    $('.country-info').empty();
    $('.country-destinations').empty();

    var request = $.ajax({
      url: "/countries",
      method: "GET",
      data: {code: dataCode}
    });

    request.done(function(response){
      $('.country-info').append(response);
      $('.atlas-map').vectorMap('set', 'focus', {
        region: dataCode,
        animate: true
      });
    });

    var request2 = $.ajax({
      url: "/destinations",
      method: "GET",
      data: {code: dataCode}
    });

    request2.done(function(response){
      $('.country-destinations').append(response);
      AtlasMap.zoomedIn = true;
      initializeImageCarousel();
    });
  }

  var toggleSideDivs = function(){
    if (AtlasMap.divsShown === false)
    {
      $('.country-destinations').animate({"right":"0px"}, "slow");
      $('.country-info').animate({"left":"0px"}, "slow");
      AtlasMap.divsShown = true;
    }
    else
    {
      $('.country-destinations').animate({"right":"-2000px"}, "slow");
      $('.country-info').animate({"left":"-2000px"}, "slow");
      AtlasMap.divsShown = false;
    }
  }

  var zoomOut = function(){
    $('.atlas-map').vectorMap('set', 'focus', {
      scale: 0, x: 0, y: 0,
      animate: true
    })
    toggleSideDivs();
    AtlasMap.zoomedIn = false;
    currentCounty = null;
  }

  var addCountryClickListener = function() {
    var path = $('path');
      path.mousedown(function(){
        drag = false;
        setTimeout(function(){drag = true}, 250);
      });

      path.mouseup(function(click){
        click.stopPropagation();
        mouseDown = false;
        if (drag === false) {
          AtlasMap.clickedCountry = $(this).attr('data-code');
          if (!AtlasMap.zoomedIn) {
            zoomInTo(AtlasMap.clickedCountry);
            AtlasMap.currentCountry = AtlasMap.clickedCountry;
          } else if (AtlasMap.clickedCountry !== AtlasMap.currentCountry || !AtlasMap.currentCountry) {
            AtlasMap.currentCountry = AtlasMap.clickedCountry;
            zoomTo(AtlasMap.clickedCountry);
          } else {
            zoomOut();
          }
        }
      });
  }

  var addOceanClickListener = function(){
    $('.atlas-map').on('mouseup', function(){
      if (AtlasMap.zoomedIn)
        {
          zoomOut();
        }
    });
  }

  var filterSlider = function(){
    $('.filter-slide-button').click(function() {
      $(this).next().slideToggle();
    });
  }

  var initializeImageCarousel = function(){
    $('.image-carousel').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      fade: true,
      slidesToShow: 1,
      autoplaySpeed: 2500,
      adaptiveHeight: true
    });
  }
}())
