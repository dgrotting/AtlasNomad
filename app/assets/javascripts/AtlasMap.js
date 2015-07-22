//mouseDown refers to JVectorMap map.js file
mouseDown = false;

(function(){
  var markers = [
        {latLng: [41.90, 12.45], name: 'Vatican City', type: "micro-nation"}, {latLng: [43.73, 7.41], name: 'Monaco', type: "micro-nation"}, {latLng: [-0.52, 166.93], name: 'Nauru', type: "micro-nation"}, {latLng: [-8.51, 179.21], name: 'Tuvalu', type: "micro-nation"}, {latLng: [43.93, 12.46], name: 'San Marino', type: "micro-nation"}, {latLng: [47.14, 9.52], name: 'Liechtenstein', type: "micro-nation"}, {latLng: [7.11, 171.06], name: 'Marshall Islands', type: "micro-nation"}, {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis', type: "micro-nation"}, {latLng: [3.2, 73.22], name: 'Maldives', type: "micro-nation"}, {latLng: [35.88, 14.5], name: 'Malta', type: "micro-nation"}, {latLng: [12.05, -61.75], name: 'Grenada', type: "micro-nation"}, {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines', type: "micro-nation"}, {latLng: [13.16, -59.55], name: 'Barbados', type: "micro-nation"}, {latLng: [17.11, -61.85], name: 'Antigua and Barbuda', type: "micro-nation"}, {latLng: [-4.61, 55.45], name: 'Seychelles', type: "micro-nation"}, {latLng: [7.35, 134.46], name: 'Palau', type: "micro-nation"}, {latLng: [42.5, 1.51], name: 'Andorra', type: "micro-nation"}, {latLng: [14.01, -60.98], name: 'Saint Lucia', type: "micro-nation"}, {latLng: [6.91, 158.18], name: 'Federated States of Micronesia', type: "micro-nation"}, {latLng: [1.3, 103.8], name: 'Singapore', type: "micro-nation"}, {latLng: [1.46, 173.03], name: 'Kiribati', type: "micro-nation"}, {latLng: [-21.13, -175.2], name: 'Tonga', type: "micro-nation"}, {latLng: [15.3, -61.38], name: 'Dominica', type: "micro-nation"}, {latLng: [-20.2, 57.5], name: 'Mauritius', type: "micro-nation"}, {latLng: [26.02, 50.55], name: 'Bahrain', type: "micro-nation"}, {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe', type: "micro-nation"}, {latLng: [37.77, -122.43], name: 'San Francisco', type: "micro-nation"},
        {latLng: [57.14, -2.1], name: 'Aberdeen', type: "capital"},{latLng: [-34.93, 138.6], name: 'Adelaide', type: "capital"},{latLng: [36.75, 3.04], name: 'Algiers', type: "capital"},{latLng: [52.37, 4.89], name: 'Amsterdam', type: "capital"},{latLng: [39.92, 32.85], name: 'Ankara', type: "capital"},{latLng: [-25.3, -57.64], name: 'Asunción', type: "capital"},{latLng: [37.98, 23.72], name: 'Athens', type: "capital"},{latLng: [-36.87, 174.77], name: 'Auckland', type: "capital"},{latLng: [13.75, 100.5], name: 'Bangkok', type: "capital"},{latLng: [41.39, 2.16], name: 'Barcelona', type: "capital"},{latLng: [39.91, 116.4], name: 'Beijing', type: "capital"},{latLng: [-1.46, -48.5], name: 'Belém', type: "capital"},{latLng: [54.58, -5.93], name: 'Belfast', type: "capital"},{latLng: [44.8, 20.47], name: 'Belgrade', type: "capital"},{latLng: [52.52, 13.41], name: 'Berlin', type: "capital"},{latLng: [52.48, -1.9], name: 'Birmingham', type: "capital"},{latLng: [4.61, -74.08], name: 'Bogotá', type: "capital"},{latLng: [19.07, 72.88], name: 'Bombay', type: "capital"},{latLng: [44.84, -0.58], name: 'Bordeaux', type: "capital"},{latLng: [53.08, 8.81], name: 'Bremen', type: "capital"},{latLng: [-27.47, 153.03], name: 'Brisbane', type: "capital"},{latLng: [51.46, -2.6], name: 'Bristol', type: "capital"},{latLng: [50.85, 4.35], name: 'Brussels', type: "capital"},{latLng: [44.43, 26.11], name: 'Bucharest', type: "capital"},{latLng: [47.5, 19.04], name: 'Budapest', type: "capital"},{latLng: [-34.61, -58.38], name: 'Buenos Aires', type: "capital"},{latLng: [30.06, 31.25], name: 'Cairo', type: "capital"},{latLng: [22.56, 88.36], name: 'Calcutta', type: "capital"},{latLng: [46.2, 6.15], name: 'Canton', type: "capital"},{latLng: [-33.93, 18.42], name: 'Cape Town', type: "capital"},{latLng: [10.49, -66.88], name: 'Caracas', type: "capital"},{latLng: [4.93, -52.33], name: 'Cayenne', type: "capital"},{latLng: [28.64, -106.09], name: 'Chihuahua', type: "capital"},{latLng: [29.56, 106.55], name: 'Chongqing', type: "capital"},{latLng: [55.68, 12.57], name: 'Copenhagen', type: "capital"},{latLng: [-31.41, -64.18], name: 'Córdoba', type: "capital"},{latLng: [14.69, -17.44], name: 'Dakar', type: "capital"},{latLng: [-12.46, 130.84], name: 'Darwin', type: "capital"},{latLng: [11.59, 43.15], name: 'Djibouti', type: "capital"},{latLng: [53.33, -6.25], name: 'Dublin', type: "capital"},{latLng: [-29.86, 31.03], name: 'Durban', type: "capital"},{latLng: [55.95, -3.2], name: 'Edinburgh', type: "capital"},{latLng: [50.12, 8.68], name: 'Frankfurt', type: "capital"},{latLng: [6.8, -58.16], name: 'Georgetown', type: "capital"},{latLng: [55.87, -4.26], name: 'Glasgow', type: "capital"},{latLng: [14.64, -90.51], name: 'Guatemala City', type: "capital"},{latLng: [-2.21, -79.91], name: 'Guayaquil', type: "capital"},{latLng: [53.58, 10.02], name: 'Hamburg', type: "capital"},{latLng: [70.66, 23.68], name: 'Hammerfest', type: "capital"},{latLng: [23.13, -82.38], name: 'Havana', type: "capital"},{latLng: [60.17, 24.94], name: 'Helsinki', type: "capital"},{latLng: [-42.88, 147.33], name: 'Hobart', type: "capital"},{latLng: [22.29, 114.16], name: 'Hong Kong', type: "capital"},{latLng: [-20.22, -70.14], name: 'Iquique', type: "capital"},{latLng: [52.3, 104.3], name: 'Irkutsk', type: "capital"},{latLng: [-6.21, 106.85], name: 'Jakarta', type: "capital"},{latLng: [-26.2, 28.04], name: 'Johannesburg', type: "capital"},{latLng: [18.0, -76.79], name: 'Kingston', type: "capital"},{latLng: [-4.33, 15.31], name: 'Kinshasa', type: "capital"},{latLng: [3.14, 101.69], name: 'Kuala Lumpur', type: "capital"},{latLng: [-16.5, -68.15], name: 'La Paz', type: "capital"},{latLng: [53.8, -1.55], name: 'Leeds', type: "capital"},{latLng: [-12.04, -77.03], name: 'Lima', type: "capital"},{latLng: [38.72, -9.13], name: 'Lisbon', type: "capital"},{latLng: [51.51, -0.13], name: 'London', type: "capital"},{latLng: [-77.63, 162.5], name: 'Lyons', type: "capital"},{latLng: [40.42, -3.7], name: 'Madrid', type: "capital"},{latLng: [53.48, -2.24], name: 'Manchester', type: "capital"},{latLng: [14.6, 120.98], name: 'Manila', type: "capital"},{latLng: [47.07, 3.01], name: 'Marseilles', type: "capital"},{latLng: [23.23, -106.41], name: 'Mazatlán', type: "capital"},{latLng: [21.43, 39.83], name: 'Mecca', type: "capital"},{latLng: [-37.81, 144.96], name: 'Melbourne', type: "capital"},{latLng: [19.43, -99.13], name: 'Mexico City', type: "capital"},{latLng: [-34.9, -56.19], name: 'Montevideo', type: "capital"},{latLng: [55.75, 37.62], name: 'Moscow', type: "capital"},{latLng: [48.14, 11.58], name: 'Munich', type: "capital"},{latLng: [32.74, 129.87], name: 'Nagasaki', type: "capital"},{latLng: [35.18, 136.91], name: 'Nagoya', type: "capital"},{latLng: [-1.28, 36.82], name: 'Nairobi', type: "capital"},{latLng: [32.06, 118.78], name: 'Nanjing (Nanking)', type: "capital"},{latLng: [28.65, 77.23], name: 'New Delhi', type: "capital"},{latLng: [46.48, 30.73], name: 'Odessa', type: "capital"},{latLng: [59.91, 10.75], name: 'Oslo', type: "capital"},{latLng: [8.99, -79.52], name: 'Panama City', type: "capital"},{latLng: [5.87, -55.17], name: 'Paramaribo', type: "capital"},{latLng: [48.85, 2.35], name: 'Paris', type: "capital"},{latLng: [-31.95, 115.86], name: 'Perth', type: "capital"},{latLng: [50.37, -4.14], name: 'Plymouth', type: "capital"},{latLng: [-9.44, 147.18], name: 'Port Moresby', type: "capital"},{latLng: [50.09, 14.42], name: 'Prague', type: "capital"},{latLng: [16.81, 96.16], name: 'Rangoon', type: "capital"},{latLng: [64.14, -21.9], name: 'Reykjavík', type: "capital"},{latLng: [-22.9, -43.21], name: 'Rio de Janeiro', type: "capital"},{latLng: [41.89, 12.51], name: 'Rome', type: "capital"},{latLng: [13.83, -88.92], name: 'Salvador', type: "capital"},{latLng: [-33.46, -70.65], name: 'Santiago', type: "capital"},{latLng: [59.94, 30.31], name: 'St. Petersburg', type: "capital"},{latLng: [-23.55, -46.64], name: 'São Paulo', type: "capital"},{latLng: [31.22, 121.46], name: 'Shanghai', type: "capital"},{latLng: [1.37, 103.8], name: 'Singapore', type: "capital"},{latLng: [42.7, 23.32], name: 'Sofia', type: "capital"},{latLng: [59.33, 18.06], name: 'Stockholm', type: "capital"},{latLng: [-33.87, 151.21], name: 'Sydney', type: "capital"},{latLng: [-18.91, 47.54], name: 'Tananarive', type: "capital"},{latLng: [35.69, 51.42], name: 'Teheran', type: "capital"},{latLng: [35.69, 139.69], name: 'Tokyo', type: "capital"},{latLng: [32.88, 13.19], name: 'Tripoli', type: "capital"},{latLng: [48.21, 16.37], name: 'Vienna', type: "capital"},{latLng: [43.11, 131.87], name: 'Vladivostok', type: "capital"},{latLng: [52.23, 21.01], name: 'Warsaw', type: "capital"},{latLng: [-41.29, 174.78], name: 'Wellington', type: "capital"},{latLng: [47.37, 8.55], name: 'Zürich'},
        {latLng: [29.98, 31.13], name: 'Pyramids of Giza', type: "point-of-interest"},{latLng: [39.97, 119.8], name: 'Great Wall of China', type: "point-of-interest"},{latLng: [27.18, 78.04], name: 'Taj Mahal', type: "point-of-interest"},{latLng: [-2.33, 34.83], name: 'Serengeti National Park', type: "point-of-interest"},{latLng: [0.0, -90.5], name: 'Galapagos Islands', type: "point-of-interest"},{latLng: [42.77, 5.0], name: 'Grand Canyon', type: "point-of-interest"},{latLng: [-13.16, -72.55], name: 'Machu Picchu', type: "point-of-interest"},{latLng: [-25.69, -54.44], name: 'Iguazu Falls', type: "point-of-interest"},{latLng: [-8.5, 115.0], name: 'Bali', type: "point-of-interest"},{latLng: [-3.17, 35.58], name: 'Ngorongoro Crater', type: "point-of-interest"},{latLng: [-17.99, 146.77], name: 'Great Barrier Reef', type: "point-of-interest"},{latLng: [13.41, 103.87], name: 'Angkor Wat', type: "point-of-interest"},{latLng: [-18.1, 25.84], name: 'Victoria Falls', type: "point-of-interest"},{latLng: [39.92, 116.39], name: 'Forbidden City', type: "point-of-interest"},{latLng: [25.72, 32.66], name: 'Karnak Temple', type: "point-of-interest"},{latLng: [19.69, -98.84], name: 'Teotihuacan', type: "point-of-interest"},{latLng: [-16.5, -151.74], name: 'Bora Bora', type: "point-of-interest"},{latLng: [37.97, 23.73], name: 'Acropolis', type: "point-of-interest"},{latLng: [17.99, -66.5], name: 'Potala Place', type: "point-of-interest"},{latLng: [31.78, 35.23], name: 'Jerusalem Old City', type: "point-of-interest"},{latLng: [-27.95, 119.92], name: 'TerraCotta', type: "point-of-interest"},{latLng: [20.68, -88.57], name: 'Chichen Itza', type: "point-of-interest"},{latLng: [30.33, 35.44], name: 'Petra', type: "point-of-interest"},{latLng: [-45.0, -115.0], name: 'Easter Island', type: "point-of-interest"},{latLng: [38.73, 35.48], name: 'Cappadocia', type: "point-of-interest"},{latLng: [41.89, 12.49], name: 'Colosseum of Rome', type: "point-of-interest"},{latLng: [41.9, 12.45], name: 'St. Peters Basilica', type: "point-of-interest"},{latLng: [30.05, 31.23], name: 'Egyptian Museum', type: "point-of-interest"},{latLng: [-7.61, 110.2], name: 'Borobudur', type: "point-of-interest"},{latLng: [25.74, 32.6], name: 'Valley of the Kings', type: "point-of-interest"},{latLng: [41.9, 12.45], name: 'Sistine Chapel', type: "point-of-interest"},{latLng: [34.1, -118.13], name: 'Alhambra', type: "point-of-interest"},{latLng: [48.86, 2.34], name: 'Louvre Museum', type: "point-of-interest"},{latLng: [48.8, 2.13], name: 'Versailles', type: "point-of-interest"},{latLng: [32.18, -104.44], name: 'Carlsbad Caverns', type: "point-of-interest"},{latLng: [21.43, 39.83], name: 'Mecca', type: "point-of-interest"},{latLng: [27.67, 85.35], name: 'Kathmandu Valley', type: "point-of-interest"},{latLng: [40.78, -73.96], name: 'Metropolitan Museum', type: "point-of-interest"},{latLng: [27.99, 86.93], name: 'Mount Everest', type: "point-of-interest"},{latLng: [13.75, 100.49], name: 'Temple of the Emerald Buddha', type: "point-of-interest"},{latLng: [41.01, 28.98], name: 'Hagia Sophia', type: "point-of-interest"},{latLng: [40.75, 14.48], name: 'Pompeii', type: "point-of-interest"},{latLng: [34.17, 74.75], name: 'Kashmir Valley', type: "point-of-interest"},{latLng: [50.09, 14.42], name: 'Prague Old Town', type: "point-of-interest"},{latLng: [31.62, 74.88], name: 'Golden Temple', type: "point-of-interest"},{latLng: [9.92, 78.12], name: 'Meenakshi', type: "point-of-interest"},{latLng: [48.45, 1.49], name: 'Chartres Cathedral', type: "point-of-interest"},{latLng: [37.88, -4.78], name: 'Mezquita of Cordoba', type: "point-of-interest"},{latLng: [33.51, 36.31], name: 'Damascus Old City & Umayyad', type: "point-of-interest"},{latLng: [42.65, 18.09], name: 'Dubrovnik', type: "point-of-interest"},{latLng: [43.77, 11.26], name: 'Uffizi Gallery', type: "point-of-interest"},{latLng: [38.58, -121.49], name: 'Golden Pavilion', type: "point-of-interest"},{latLng: [55.75, 37.62], name: 'St. Basils', type: "point-of-interest"},{latLng: [22.33, 31.62], name: 'Abu Simbel', type: "point-of-interest"},{latLng: [45.43, 12.34], name: 'St. Marks Basilica & Campanile', type: "point-of-interest"},{latLng: [48.81, 2.36], name: 'Kremlin', type: "point-of-interest"},{latLng: [25.34, 82.99], name: 'Varanasi/Ganges', type: "point-of-interest"},{latLng: [26.0, 13.0], name: 'Sahara Desert', type: "point-of-interest"},{latLng: [43.72, 10.4], name: 'Leaning Tower of Pisa', type: "point-of-interest"},{latLng: [34.01, 36.22], name: 'Baalbek', type: "point-of-interest"},{latLng: [48.64, -1.51], name: 'Mont-St-Michel', type: "point-of-interest"},{latLng: [41.01, 28.98], name: 'Topkapi Palace', type: "point-of-interest"},{latLng: [51.18, -1.83], name: 'Stonehenge', type: "point-of-interest"},{latLng: [5.95, -62.5], name: 'Angel Falls', type: "point-of-interest"},{latLng: [44.6, -110.55], name: 'Yellowstone National Park', type: "point-of-interest"},{latLng: [36.4, 25.46], name: 'Santorini', type: "point-of-interest"},{latLng: [3.16, 101.71], name: 'Petronas Twin Tower', type: "point-of-interest"},{latLng: [40.64, -74.09], name: 'New York Skyline', type: "point-of-interest"},{latLng: [31.63, -8.0], name: 'Marrakech', type: "point-of-interest"},{latLng: [48.86, 2.29], name: 'Eiffel Tower', type: "point-of-interest"},{latLng: [34.33, 77.42], name: 'Ladakh', type: "point-of-interest"},{latLng: [43.1, -79.07], name: 'Niagara Falls', type: "point-of-interest"},{latLng: [51.52, -0.13], name: 'British Museum', type: "point-of-interest"},{latLng: [30.83, 31.46], name: 'Burj Al Arab', type: "point-of-interest"},{latLng: [37.85, -119.56], name: 'Yosemite National Park', type: "point-of-interest"},{latLng: [-25.19, 130.98], name: 'Ayers Rock', type: "point-of-interest"},{latLng: [47.62, 1.52], name: 'Chambord Chateau', type: "point-of-interest"},{latLng: [39.88, 116.4], name: 'Temple of Heaven', type: "point-of-interest"},{latLng: [47.56, 10.75], name: 'Neuschwanstein Castle', type: "point-of-interest"},{latLng: [29.93, 32.56], name: 'Suez Canal', type: "point-of-interest"},{latLng: [31.56, 35.5], name: 'Dead Sea', type: "point-of-interest"},{latLng: [44.3, 9.21], name: 'Portofino', type: "point-of-interest"},{latLng: [20.91, 107.1], name: 'Halong Bay', type: "point-of-interest"},{latLng: [-77.95, 162.0], name: 'Table Mountain', type: "point-of-interest"},{latLng: [33.4, 126.55], name: 'Jeju Island', type: "point-of-interest"},{latLng: [20.35, -74.57], name: 'El Yunque', type: "point-of-interest"},{latLng: [48.36, 7.83], name: 'Black Forest', type: "point-of-interest"},{latLng: [23.51, 120.94], name: 'Yushan National Park', type: "point-of-interest"},{latLng: [5.95, -62.5], name: 'Angel Falls', type: "point-of-interest"},{latLng: [-0.17, -49.0], name: 'Amazon River', type: "point-of-interest"},{latLng: [-17.99, 146.77], name: 'Great Barrier Reef', type: "point-of-interest"},{latLng: [-25.69, -54.44], name: 'Iguazu Falls', type: "point-of-interest"},{latLng: [3.2, 73.0], name: 'Maldives', type: "point-of-interest"},{latLng: [-25.35, 131.04], name: 'Uluru National Park', type: "point-of-interest"},{latLng: [52.97, -9.43], name: 'Cliffs of Moher', type: "point-of-interest"},{latLng: [-44.67, 167.92], name: 'Milford Sound', type: "point-of-interest"},{latLng: [45.98, 7.66], name: 'Matterhorn',type: "point-of-interest"}
      ];
  $('document').ready(function(){
    makeMap();
    addAutocompleteListener();
    addCountryClickListener();
    addOceanClickListener();
    addLanguageButtonClickListener();
    addVisaButtonClickListener();
    addRandomColorButtonClickListener();
    addGDPButtonClickListener();
    filterSlider();
    sf();
  })


  var makeMap = function(){
    AtlasMap = {
      zoomedIn: false,
      currentCountry: null,
      clickedCountry: null,
      divsShown: false,
      languages: { "BD": 1000000, "BE": 0.1, "BF": 0.1, "BG": 0.1, "BA": 0.1, "BN": 0.1, "BO": 0.1, "JP": 0.1, "BI": 1000000, "BJ": 0.1, "BT": 0.1, "JM": 1000000, "BW": 1000000, "BR": 0.1, "BS": 1000000, "BY": 0.1, "BZ": 1000000, "RU": 0.1, "RW": 1000000, "RS": 0.1, "LT": 0.1, "LU": 0.1, "LR": 1000000, "RO": 0.1, "GW": 0.1, "GT": 0.1, "GR": 0.1, "GQ": 0.1, "GY": 1000000, "GE": 0.1, "GB": 1000000, "GA": 0.1, "GN": 0.1, "GM": 0.1, "GL": 0.1, "KW": 0.1, "GH": 1000000, "OM": 0.1, "_1": 1000000, "_0": 0.1, "JO": 0.1, "HR": 0.1, "HT": 1000000, "HU": 0.1, "HN": 0.1, "PR": 1000000, "PS": 0.1, "PT": 0.1, "PY": 0.1, "PA": 0.1, "PG": 1000000, "PE": 0.1, "PK": 1000000, "PH": 1000000, "PL": 0.1, "ZM": 1000000, "EH": 0.1, "EE": 0.1, "EG": 0.1, "ZA": 1000000, "EC": 0.1, "AL": 0.1, "AO": 0.1, "KZ": 0.1, "ET": 0.1, "ZW": 1000000, "ES": 0.1, "ER": 1000000, "ME": 0.1, "MD": 0.1, "MG": 0.1, "MA": 0.1, "UZ": 0.1, "MM": 0.1, "ML": 0.1, "MN": 0.1, "MK": 0.1, "MW": 0.1, "MR": 0.1, "UG": 1000000, "MY": 0.1, "MX": 0.1, "VU": 0.1, "FR": 0.1, "FI": 0.1, "FJ": 1000000, "FK": 0.1, "NI": 0.1, "NL": 0.1, "NO": 0.1, "NA": 1000000, "NC": 0.1, "NE": 0.1, "NG": 1000000, "NZ": 1000000, "NP": 0.1, "CI": 0.1, "CH": 0.1, "CO": 0.1, "CN": 0.1, "CM": 1000000, "CL": 0.1, "CA": 1000000, "CG": 0.1, "CF": 0.1, "CD": 0.1, "CZ": 0.1, "CY": 0.1, "CR": 0.1, "CU": 0.1, "SZ": 1000000, "SY": 0.1, "KG": 0.1, "KE": 1000000, "SS": 1000000, "SR": 0.1, "KH": 0.1, "SV": 0.1, "SK": 0.1, "KR": 0.1, "SI": 0.1, "KP": 0.1, "SO": 0.1, "SN": 0.1, "SL": 1000000, "SB": 0.1, "SA": 0.1, "SE": 0.1, "SD": 1000000, "DO": 1000000, "DJ": 0.1, "DK": 0.1, "DE": 0.1, "YE": 0.1, "AT": 0.1, "DZ": 0.1, "US": 1000000, "LV": 0.1, "UY": 0.1, "LB": 0.1, "LA": 0.1, "TW": 0.1, "TT": 1000000, "TR": 0.1, "LK": 1000000, "TN": 0.1, "TL": 0.1, "TM": 0.1, "TJ": 0.1, "LS": 1000000, "TH": 0.1, "TF": 0.1, "TG": 0.1, "TD": 0.1, "LY": 0.1, "AE": 0.1, "VE": 0.1, "AF": 0.1, "IQ": 0.1, "IS": 0.1, "IR": 0.1, "AM": 0.1, "IT": 0.1, "VN": 0.1, "AR": 0.1, "AU": 1000000, "IL": 1000000, "IN": 1000000, "TZ": 1000000, "AZ": 0.1, "IE": 1000000, "ID": 0.1, "UA": 0.1, "QA": 0.1, "MZ": 1},
      visas: { "BD": 0.1, "BE": 1000000, "BF": 0.1, "BG": 1000000, "BA": 1000000, "BN": 1000000, "BO": 0.1, "JP": 1000000, "BI": 0.1, "BJ": 0.1, "BT": 0.1, "JM": 1000000, "BW": 1000000, "BR": 0.1, "BS": 1000000, "BY": 0.1, "BZ": 1000000, "RU": 0.1, "RW": 0.1, "RS": 1000000, "LT": 1000000, "LU": 1000000, "LR": 0.1, "RO": 1000000, "GW": 0.1, "GT": 0.1, "GR": 1000000, "GQ": 0.1, "GY": 1000000, "GE": 0.1, "GB": 1000000, "GA": 0.1, "GN": 0.1, "GM": 0.1, "GL": 1000000, "KW": 0.1, "GH": 0.1, "OM": 0.1, "_1": 1000000, "_0": 0.1, "JO": 0.1, "HR": 1000000, "HT": 1000000, "HU": 1000000, "HN": 1000000, "PR": 1000000, "PS": 0.1, "PT": 1000000, "PY": 0.1, "PA": 1000000, "PG": 1000000, "PE": 1000000, "PK": 0.1, "PH": 1000000, "PL": 1000000, "ZM": 1000000, "EH": 0.1, "EE": 1000000, "EG": 0.1, "ZA": 1000000, "EC": 1000000, "AL": 1000000, "AO": 0.1, "KZ": 1000000, "ET": 0.1, "ZW": 1000000, "ES": 1000000, "ER": 1000000, "ME": 1000000, "MD": 1000000, "MG": 0.1, "MA": 1000000, "UZ": 0.1, "MM": 0.1, "ML": 0.1, "MN": 1000000, "MK": 1000000, "MW": 1000000, "MR": 0.1, "UG": 1000000, "MY": 1000000, "MX": 1000000, "VU": 1000000, "FR": 1000000, "FI": 1000000, "FJ": 1000000, "FK": 1000000, "NI": 1000000, "NL": 1000000, "NO": 1000000, "NA": 0.1, "NC": 0.1, "NE": 0.1, "NG": 0.1, "NZ": 1000000, "NP": 0.1, "CI": 0.1, "CH": 1000000, "CO": 1000000, "CN": 0.1, "CM": 0.1, "CL": 1000000, "CA": 1000000, "CG": 0.1, "CF": 0.1, "CD": 0.1, "CZ": 1000000, "CY": 1000000, "CR": 1000000, "CU": 0.1, "SZ": 1000000, "SY": 0.1, "KG": 1000000, "KE": 1000000, "SS": 1000000, "SR": 0.1, "KH": 0.1, "SV": 1000000, "SK": 0.1, "KR": 1000000, "SI": 1000000, "KP": 0.1, "SO": 1000000, "SN": 0.1, "SL": 0.1, "SB": 1000000, "SA": 0.1, "SE": 1000000, "SD": 0.1, "DO": 1000000, "DJ": 1000000, "DK": 1000000, "DE": 1000000, "YE": 0.1, "AT": 1000000, "DZ": 0.1, "US": 1000000, "LV": 1000000, "UY": 1000000, "LB": 0.1, "LA": 0.1, "TW": 1000000, "TT": 1000000, "TR": 0.1, "LK": 0.1, "TN": 1000000, "TL": 0.1, "TM": 0.1, "TJ": 0.1, "LS": 1000000, "TH": 1000000, "TF": 1000000, "TG": 1000000, "TD": 0.1, "LY": 0.1, "AE": 1000000, "VE": 0.1, "AF": 0.1, "IQ": 0.1, "IS": 1000000, "IR": 0.1, "AM": 1000000, "IT": 1000000, "VN": 0.1, "AR": 0.1, "AU": 1000000, "IL": 1000000, "IN": 0.1, "TZ": 0.1, "AZ": 0.1, "IE": 1000000, "ID": 1000000, "UA": 1000000, "QA": 0.1, "MZ": 1},
      gdpData: {"AF": 16.63,  "AL": 11.58,  "DZ": 158.97,  "AO": 85.81,  "AG": 1.1,  "AR": 351.02,  "AM": 8.83,  "AU": 1219.72,  "AT": 366.26,  "AZ": 52.17,  "BS": 7.54,  "BH": 21.73,  "BD": 105.4,  "BB": 3.96,  "BY": 52.89,  "BE": 461.33,  "BZ": 1.43,  "BJ": 6.49,  "BT": 1.4,  "BO": 19.18,  "BA": 16.2,  "BW": 12.5,  "BR": 2023.53,  "BN": 11.96,  "BG": 44.84,  "BF": 8.67,  "BI": 1.47,  "KH": 11.36,  "CM": 21.88,  "CA": 1563.66, "CU": 0.55, "CV": 1.57,  "CF": 2.11,  "TD": 7.59,  "CL": 199.18,  "CN": 5745.13,  "CO": 283.11,  "KM": 0.56,  "CD": 12.6,  "CG": 11.88,  "CR": 35.02,  "CI": 22.38,  "HR": 59.92,  "CY": 22.75,  "CZ": 195.23,  "DK": 304.56,  "DJ": 1.14,  "DM": 0.38,  "DO": 50.87,  "EC": 61.49,  "EG": 216.83,  "SV": 21.8,  "GQ": 14.55,  "ER": 2.25,  "EE": 19.22, "EH": 0.55,  "ET": 30.94,  "FJ": 3.15,  "FI": 231.98,  "FR": 2555.44,  "GA": 12.56,  "GM": 1.04,  "GE": 11.23,  "DE": 3305.9,  "FK": 0.55, "GH": 18.06,  "GR": 305.01,  "GD": 0.65,  "GT": 40.77,  "GN": 4.34,  "GW": 0.83,  "GY": 2.2,  "HT": 6.5,  "HN": 15.34,  "HK": 226.49,  "HU": 132.28,  "IS": 12.77,  "IN": 1430.02,  "ID": 695.06,  "IR": 337.9,  "IQ": 84.14,  "IE": 204.14,  "IL": 201.25,  "IT": 2036.69,  "JM": 13.74,  "JP": 5390.9,  "JO": 27.13,  "KZ": 129.76,  "KE": 32.42,  "KI": 0.15,  "KR": 986.26,  "UNDEFINED": 5.73,  "KW": 117.32,  "KG": 4.44,  "KP": 0.55, "LA": 6.34,  "LV": 23.39,  "LB": 39.15,  "LS": 1.8,  "LR": 0.98,  "LY": 77.91,  "LT": 35.73,  "LU": 52.43,  "MK": 9.58,  "MG": 8.33,  "MW": 5.04,  "MY": 218.95,  "MV": 1.43,  "ML": 9.08,  "MT": 7.8,  "MR": 3.49,  "MU": 9.43,  "MX": 1004.04,  "MD": 5.36,  "MN": 5.81,  "ME": 3.88,  "MA": 91.7,  "MZ": 10.21,  "MM": 35.65,  "NA": 11.45, "NC": 0.55, "NP": 15.11,  "NL": 770.31,  "NZ": 138,  "NI": 6.38,  "NE": 5.6,  "NG": 206.66,  "NO": 413.51,  "OM": 53.78,  "PK": 174.79,  "PA": 27.2,  "PG": 8.81,  "PY": 17.17,  "PE": 153.55,  "PH": 189.06,  "PL": 438.88,  "PT": 223.7,  "QA": 126.52,  "RO": 158.39,  "RU": 1476.91,  "RW": 5.69,  "WS": 0.55,  "ST": 0.19,  "SA": 434.44,  "SN": 12.66,  "RS": 38.92,  "SC": 0.92,  "SL": 1.9,  "SG": 217.38,  "SK": 86.26,  "SI": 46.44,  "SB": 0.67, "TF": 0.55, "ZA": 354.41,  "ES": 1374.78,  "LK": 48.24,  "KN": 0.56,  "LC": 1,  "VC": 0.58,  "SD": 65.93, "SO": 0.55, "SR": 3.3, "SS": 0.55,  "SZ": 3.17,  "SE": 444.59,  "CH": 522.44,  "SY": 59.63,  "TW": 426.98,  "TJ": 5.58,  "TZ": 22.43,  "TH": 312.61,  "TL": 0.62,  "TG": 3.07,  "TO": 0.3,  "TT": 21.2,  "TN": 43.86,  "TR": 729.05,  "TM": 17,  "UG": 17.12,  "UA": 136.56,  "AE": 239.65,  "GB": 2258.57,  "US": 14624,  "UY": 40.71,  "UZ": 37.72,  "VU": 0.72,  "VE": 285.21,  "VN": 101.99,  "YE": 30.02,  "ZM": 15.69,  "ZW": 5.57, "_1": 0.55, "_2": 0.55}
    }

    AtlasMap.map = new jvm.Map({
      map: 'world_mill_en',
      container: $('.atlas-map'),
      markers: markers,
      markerStyle: {
        initial: {
          fill: '#F8E23B',
          stroke: '#383f47'
        }
      },
      labels: {
        markers: {
          render: function(index){
            return markers[index].name;
          },
          offsets: function(index){
            var offset = markers[index]['offsets'] || [0, 0];
            return [offset[0] - 7, offset[1] + 3];
          }
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
      onRegionTipShow: function(e, el, code){
        el.html(el.html());
      }
    })
  };

  var addLanguageButtonClickListener = function(){
    $('.language-filter').click(function(){
      AtlasMap.map.series.regions[0].setValues(AtlasMap.languages);
      AtlasMap.map.series.regions[0].setScale(['#dddddd', '#a70202']);
    });
  }

  var addRandomColorButtonClickListener = function(){
    var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854'];
    var countries = $('path');

    $('.random-filter').click(function(){
      for (x=0;x<countries.length;x++){
        var randomColor = palette[Math.floor(Math.random()*5)];
        countries[x].setAttribute("fill",randomColor);
      }
      var randomColor = palette[Math.floor(Math.random()*5)];
      $('map').setAttribute("backgroundColor",randomColor);

    })
  }

  var addVisaButtonClickListener = function(){
    $('.visa-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.visas);
    AtlasMap.map.series.regions[0].setScale(['#a70202', '#dddddd']);
    });
  }

  var addGDPButtonClickListener = function(){
    $('.gdp-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.gdpData);
    AtlasMap.map.series.regions[0].setScale(['#6cc577', '#348d3e']);
    $('.jvectormap-container').css("background-image", "none");
    });
  }

 var sf = function(){
  $("circle[data-index='26']").click(function(e){
    e.preventDefault();
    $('.jvectormap-container').css("background-image", "url('/assets/SF.svg.png')");
  })
 }


  var capitalizeFirstLetter = function(string) {
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
    })

    setTimeout(function(){
      $('.image-carousel').slick('setPosition', 0);
    }, 100);

  // $('.image-carousel').slick("setPosition", 0);
  }
}())
