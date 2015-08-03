//mouseDown refers to JVectorMap map.js file
mouseDown = false;

(function(){
  var KEYCODE_ESC = 27;
  var markers = [
        {latLng: [24.47, 54.37], name: 'Abu Dhabi'},{latLng: [34.53, 69.17], name: 'Kabul'},{latLng: [40.38, 49.89], name: 'Baku'},{latLng: [41.33, 19.82], name: 'Tirana'},{latLng: [40.18, 44.51], name: 'Yerevan'},{latLng: [-8.84, 13.23], name: 'Luanda'},{latLng: [-24.65, 25.91], name: 'Gaborone'},{latLng: [25.06, -77.34], name: 'Nassau'},{latLng: [23.71, 90.41], name: 'Dhaka'},{latLng: [17.25, -88.77], name: 'Belmopan'},{latLng: [43.85, 18.36], name: 'Sarajevo'},{latLng: [19.75, 96.13], name: 'Naypyidaw'},{latLng: [6.5, 2.6], name: 'Porto Novo'},{latLng: [53.9, 27.57], name: 'Minsk'},{latLng: [27.47, 89.64], name: 'Thimphu'},{latLng: [4.94, 114.95], name: 'Bandar Seri Begawan'},{latLng: [-3.38, 29.36], name: 'Bujumbura'},{latLng: [45.41, -75.7], name: 'Ottawa'},{latLng: [11.56, 104.92], name: 'Phnom Penh'},{latLng: [12.11, 15.04], name: 'NDjamena'},{latLng: [6.88, 79.91], name: 'Sri Jayawardenepura Kotte'},{latLng: [-4.27, 15.28], name: 'Brazzaville'},{latLng: [3.87, 11.52], name: 'Yaounde'},{latLng: [9.93, -84.08], name: 'San Jose'},{latLng: [-4.33, 15.31], name: 'Kinshasa'},{latLng: [35.18, 33.36], name: 'Nicosia'},{latLng: [18.5, -69.99], name: 'Santo Domingo'},{latLng: [3.75, 8.78], name: 'Malabo'},{latLng: [59.44, 24.75], name: 'Tallinn'},{latLng: [15.34, 38.93], name: 'Asmara'},{latLng: [13.69, -89.19], name: 'San Salvador'},{latLng: [9.02, 38.75], name: 'Addis Ababa'},{latLng: [-18.14, 178.44], name: 'Suva'},{latLng: [13.45, -16.58], name: 'Banjul'},{latLng: [0.39, 9.45], name: 'Libreville'},{latLng: [41.69, 44.83], name: 'Tbilisi'},{latLng: [5.56, -0.2], name: 'Accra'},{latLng: [9.54, -13.68], name: 'Conakry'},{latLng: [18.54, -72.33], name: 'Port au Prince'},{latLng: [14.08, -87.21], name: 'Tegucigalpa'},{latLng: [45.81, 15.98], name: 'Zagreb'},{latLng: [31.78, 35.22], name: 'Jerusalem'},{latLng: [6.82, -5.28], name: 'Yamoussoukro'},{latLng: [33.34, 44.4], name: 'Baghdad'},{latLng: [31.96, 35.95], name: 'Amman'},{latLng: [39.03, 125.75], name: 'Pyongyang'},{latLng: [37.57, 126.98], name: 'Seoul'},{latLng: [29.37, 47.98], name: 'Kuwait City'},{latLng: [42.67, 21.17], name: 'Pristina'},{latLng: [51.18, 71.45], name: 'Astana'},{latLng: [17.97, 102.6], name: 'Vientiane'},{latLng: [33.89, 35.49], name: 'Beirut'},{latLng: [56.95, 24.11], name: 'Riga'},{latLng: [54.69, 25.28], name: 'Vilnius'},{latLng: [6.3, -10.8], name: 'Monrovia'},{latLng: [48.15, 17.11], name: 'Bratislava'},{latLng: [-29.32, 27.48], name: 'Maseru'},{latLng: [49.61, 6.13], name: 'Luxembourg'},{latLng: [47.01, 28.86], name: 'Chisinau'},{latLng: [47.91, 106.88], name: 'Ulan Bator'},{latLng: [-13.97, 33.79], name: 'Lilongwe'},{latLng: [42.44, 19.26], name: 'Podgorica'},{latLng: [42.0, 21.43], name: 'Skopje'},{latLng: [12.65, -8.0], name: 'Bamako'},{latLng: [34.01, -6.83], name: 'Rabat'},{latLng: [18.09, -15.98], name: 'Nouakchott'},{latLng: [23.61, 58.59], name: 'Muscat'},{latLng: [-25.97, 32.58], name: 'Maputo'},{latLng: [-22.28, 166.46], name: 'Noumea'},{latLng: [13.51, 2.11], name: 'Niamey'},{latLng: [-17.73, 168.32], name: 'Port Vila'},{latLng: [9.06, 7.5], name: 'Abuja'},{latLng: [27.7, 85.32], name: 'Kathmandu'},{latLng: [12.13, -86.25], name: 'Managua'},{latLng: [4.85, 31.58], name: 'Juba'},{latLng: [33.72, 73.04], name: 'Islamabad'},{latLng: [11.86, -15.6], name: 'Bissau'},{latLng: [25.28, 51.52], name: 'Doha'},{latLng: [18.47, -66.11], name: 'San Juan'},{latLng: [-1.95, 30.06], name: 'Kigali'},{latLng: [46.05, 14.51], name: 'Ljubljana'},{latLng: [8.48, -13.23], name: 'Freetown'},{latLng: [-9.43, 159.95], name: 'Honiara'},{latLng: [2.04, 45.34], name: 'Mogadishu'},{latLng: [15.55, 32.53], name: 'Khartoum'},{latLng: [33.51, 36.29], name: 'Damascus'},{latLng: [10.67, -61.52], name: 'Port of Spain'},{latLng: [38.54, 68.78], name: 'Dushanbe'},{latLng: [6.14, 1.21], name: 'Lome'},{latLng: [36.82, 10.17], name: 'Tunis'},{latLng: [-8.56, 125.57], name: 'Dili'},{latLng: [25.05, 121.53], name: 'Taipei'},{latLng: [37.95, 58.38], name: 'Ashgabat'},{latLng: [-6.17, 35.74], name: 'Dodoma'},{latLng: [0.32, 32.58], name: 'Kampala'},{latLng: [51.51, -0.13], name: 'London'},{latLng: [38.9, -77.04], name: 'Washington D.C.'},{latLng: [12.37, -1.53], name: 'Ouagadougou'},{latLng: [41.26, 69.22], name: 'Tashkent'},{latLng: [21.02, 105.84], name: 'Hanoi'},{latLng: [-22.56, 17.08], name: 'Windhoek'},{latLng: [-26.32, 31.13], name: 'MBabane'},{latLng: [15.35, 44.21], name: 'Sanaa'},{latLng: [-15.41, 28.29], name: 'Lusaka'},{latLng: [-17.83, 31.05], name: 'Harare'},{latLng: [37.6,58.2], name: 'Ashgabat', type:'capital'},{latLng: [57.14, -2.1], name: 'Aberdeen', type: "capital"},{latLng: [-34.93, 138.6], name: 'Adelaide', type: "capital"},{latLng: [36.75, 3.04], name: 'Algiers', type: "capital"},{latLng: [52.37, 4.89], name: 'Amsterdam', type: "capital"},{latLng: [39.92, 32.85], name: 'Ankara', type: "capital"},{latLng: [-25.3, -57.64], name: 'Asunción', type: "capital"},{latLng: [37.98, 23.72], name: 'Athens', type: "capital"},{latLng: [-36.87, 174.77], name: 'Auckland', type: "capital"},{latLng: [13.75, 100.5], name: 'Bangkok', type: "capital"},{latLng: [41.39, 2.16], name: 'Barcelona', type: "capital"},{latLng: [39.91, 116.4], name: 'Beijing', type: "capital"},{latLng: [-1.46, -48.5], name: 'Belém', type: "capital"},{latLng: [54.58, -5.93], name: 'Belfast', type: "capital"},{latLng: [44.8, 20.47], name: 'Belgrade', type: "capital"},{latLng: [52.52, 13.41], name: 'Berlin', type: "capital"},{latLng: [52.48, -1.9], name: 'Birmingham', type: "capital"},{latLng: [4.61, -74.08], name: 'Bogotá', type: "capital"},{latLng: [19.07, 72.88], name: 'Brick\'s house', type: "capital"},{latLng: [44.84, -0.58], name: 'Bordeaux', type: "capital"},{latLng: [53.08, 8.81], name: 'Bremen', type: "capital"},{latLng: [-27.47, 153.03], name: 'Brisbane', type: "capital"},{latLng: [51.46, -2.6], name: 'Bristol', type: "capital"},{latLng: [50.85, 4.35], name: 'Brussels', type: "capital"},{latLng: [44.43, 26.11], name: 'Bucharest', type: "capital"},{latLng: [47.5, 19.04], name: 'Budapest', type: "capital"},{latLng: [-34.61, -58.38], name: 'Buenos Aires', type: "capital"},{latLng: [30.06, 31.25], name: 'Cairo', type: "capital"},{latLng: [22.56, 88.36], name: 'Calcutta', type: "capital"},{latLng: [46.2, 6.15], name: 'Canton', type: "capital"},{latLng: [-33.93, 18.42], name: 'Cape Town', type: "capital"},{latLng: [10.49, -66.88], name: 'Caracas', type: "capital"},{latLng: [4.93, -52.33], name: 'Cayenne', type: "capital"},{latLng: [28.64, -106.09], name: 'Chihuahua', type: "capital"},{latLng: [29.56, 106.55], name: 'Chongqing', type: "capital"},{latLng: [55.68, 12.57], name: 'Copenhagen', type: "capital"},{latLng: [-31.41, -64.18], name: 'Córdoba', type: "capital"},{latLng: [14.69, -17.44], name: 'Dakar', type: "capital"},{latLng: [-12.46, 130.84], name: 'Darwin', type: "capital"},{latLng: [11.59, 43.15], name: 'Djibouti', type: "capital"},{latLng: [53.33, -6.25], name: 'Dublin', type: "capital"},{latLng: [-29.86, 31.03], name: 'Durban', type: "capital"},{latLng: [55.95, -3.2], name: 'Edinburgh', type: "capital"},{latLng: [50.12, 8.68], name: 'Frankfurt', type: "capital"},{latLng: [6.8, -58.16], name: 'Georgetown', type: "capital"},{latLng: [55.87, -4.26], name: 'Glasgow', type: "capital"},{latLng: [14.64, -90.51], name: 'Guatemala City', type: "capital"},{latLng: [-2.21, -79.91], name: 'Guayaquil', type: "capital"},{latLng: [53.58, 10.02], name: 'Hamburg', type: "capital"},{latLng: [70.66, 23.68], name: 'Hammerfest', type: "capital"},{latLng: [23.13, -82.38], name: 'Havana', type: "capital"},{latLng: [60.17, 24.94], name: 'Helsinki', type: "capital"},{latLng: [-42.88, 147.33], name: 'Hobart', type: "capital"},{latLng: [22.29, 114.16], name: 'Hong Kong', type: "capital"},{latLng: [-20.22, -70.14], name: 'Iquique', type: "capital"},{latLng: [52.3, 104.3], name: 'Irkutsk', type: "capital"},{latLng: [-6.21, 106.85], name: 'Jakarta', type: "capital"},{latLng: [-26.2, 28.04], name: 'Johannesburg', type: "capital"},{latLng: [18.0, -76.79], name: 'Kingston', type: "capital"},{latLng: [-4.33, 15.31], name: 'Kinshasa', type: "capital"},{latLng: [3.14, 101.69], name: 'Kuala Lumpur', type: "capital"},{latLng: [-16.5, -68.15], name: 'La Paz', type: "capital"},{latLng: [53.8, -1.55], name: 'Leeds', type: "capital"},{latLng: [-12.04, -77.03], name: 'Lima', type: "capital"},{latLng: [38.72, -9.13], name: 'Lisbon', type: "capital"},{latLng: [51.51, -0.13], name: 'London', type: "capital"},{latLng: [-77.63, 162.5], name: 'Lyons', type: "capital"},{latLng: [40.42, -3.7], name: 'Madrid', type: "capital"},{latLng: [53.48, -2.24], name: 'Manchester', type: "capital"},{latLng: [14.6, 120.98], name: 'Manila', type: "capital"},{latLng: [47.07, 3.01], name: 'Marseilles', type: "capital"},{latLng: [23.23, -106.41], name: 'Mazatlán', type: "capital"},{latLng: [21.43, 39.83], name: 'Mecca', type: "capital"},{latLng: [-37.81, 144.96], name: 'Melbourne', type: "capital"},{latLng: [19.43, -99.13], name: 'Mexico City', type: "capital"},{latLng: [-34.9, -56.19], name: 'Montevideo', type: "capital"},{latLng: [55.75, 37.62], name: 'Moscow', type: "capital"},{latLng: [48.14, 11.58], name: 'Munich', type: "capital"},{latLng: [32.74, 129.87], name: 'Nagasaki', type: "capital"},{latLng: [35.18, 136.91], name: 'Nagoya', type: "capital"},{latLng: [-1.28, 36.82], name: 'Nairobi', type: "capital"},{latLng: [32.06, 118.78], name: 'Nanjing (Nanking)', type: "capital"},{latLng: [28.65, 77.23], name: 'New Delhi', type: "capital"},{latLng: [46.48, 30.73], name: 'Odessa', type: "capital"},{latLng: [59.91, 10.75], name: 'Oslo', type: "capital"},{latLng: [8.99, -79.52], name: 'Panama City', type: "capital"},{latLng: [5.87, -55.17], name: 'Paramaribo', type: "capital"},{latLng: [48.85, 2.35], name: 'Paris', type: "capital"},{latLng: [-31.95, 115.86], name: 'Perth', type: "capital"},{latLng: [50.37, -4.14], name: 'Plymouth', type: "capital"},{latLng: [-9.44, 147.18], name: 'Port Moresby', type: "capital"},{latLng: [50.09, 14.42], name: 'Prague', type: "capital"},{latLng: [16.81, 96.16], name: 'Rangoon', type: "capital"},{latLng: [64.14, -21.9], name: 'Reykjavík', type: "capital"},{latLng: [-22.9, -43.21], name: 'Rio de Janeiro', type: "capital"},{latLng: [41.89, 12.51], name: 'Rome', type: "capital"},{latLng: [13.83, -88.92], name: 'Salvador', type: "capital"},{latLng: [-33.46, -70.65], name: 'Santiago', type: "capital"},{latLng: [59.94, 30.31], name: 'St. Petersburg', type: "capital"},{latLng: [-23.55, -46.64], name: 'São Paulo', type: "capital"},{latLng: [31.22, 121.46], name: 'Shanghai', type: "capital"},{latLng: [1.37, 103.8], name: 'Singapore', type: "capital"},{latLng: [42.7, 23.32], name: 'Sofia', type: "capital"},{latLng: [59.33, 18.06], name: 'Stockholm', type: "capital"},{latLng: [-33.87, 151.21], name: 'Sydney', type: "capital"},{latLng: [-18.91, 47.54], name: 'Tananarive', type: "capital"},{latLng: [35.69, 51.42], name: 'Teheran', type: "capital"},{latLng: [35.69, 139.69], name: 'Tokyo', type: "capital"},{latLng: [32.88, 13.19], name: 'Tripoli', type: "capital"},{latLng: [48.21, 16.37], name: 'Vienna', type: "capital"},{latLng: [43.11, 131.87], name: 'Vladivostok', type: "capital"},{latLng: [52.23, 21.01], name: 'Warsaw', type: "capital"},{latLng: [-41.29, 174.78], name: 'Wellington', type: "capital"},{latLng: [47.37, 8.55], name: 'Zürich'},{latLng: [37.77,-122.43], name: 'San Francisco'}
      ];
  $('document').ready(function(){

    makeMap();
    addEscapeButtonClickListener();
    addAutocompleteListener();
    addCountryClickListener();
    addOceanClickListener();
    addLanguageButtonClickListener();
    addVisaButtonClickListener();
    addRandomColorButtonClickListener();
    addGDPButtonClickListener();
    addPPPButtonClickListener();
    addbigMacButtonClickListener();
    filterSlider();
    sf();
    initializeModal();
  })


  $(document).on('click', '#modalClose', function() {
   $('#dialog').dialog('close');
  });


  var makeMap = function(){
    AtlasMap = {
      zoomedIn: false,
      currentCountry: null,
      clickedCountry: null,
      divsShown: false,
      languages: {
        "BD": 1000000,
        "BE": 0.1,
        "BF": 0.1,
        "BG": 0.1,
        "BA": 0.1,
        "BN": 0.1,
        "BO": 0.1,
        "JP": 0.1,
        "BI": 1000000,
        "BJ": 0.1,
        "BT": 0.1,
        "JM": 1000000,
        "BW": 1000000,
        "BR": 0.1,
        "BS": 1000000,
        "BY": 0.1,
        "BZ": 1000000,
        "RU": 0.1,
        "RW": 1000000,
        "RS": 0.1,
        "LT": 0.1,
        "LU": 0.1,
        "LR": 1000000,
        "RO": 0.1,
        "GW": 0.1,
        "GT": 0.1,
        "GR": 0.1,
        "GQ": 0.1,
        "GY": 1000000,
        "GE": 0.1,
        "GB": 1000000,
        "GA": 0.1,
        "GN": 0.1,
        "GM": 0.1,
        "GL": 0.1,
        "KW": 0.1,
        "GH": 1000000,
        "OM": 0.1,
        "_1": 1000000,
        "_0": 0.1,
        "JO": 0.1,
        "HR": 0.1,
        "HT": 1000000,
        "HU": 0.1,
        "HN": 0.1,
        "PR": 1000000,
        "PS": 0.1,
        "PT": 0.1,
        "PY": 0.1,
        "PA": 0.1,
        "PG": 1000000,
        "PE": 0.1,
        "PK": 1000000,
        "PH": 1000000,
        "PL": 0.1,
        "ZM": 1000000,
        "EH": 0.1,
        "EE": 0.1,
        "EG": 0.1,
        "ZA": 1000000,
        "EC": 0.1,
        "AL": 0.1,
        "AO": 0.1,
        "KZ": 0.1,
        "ET": 0.1,
        "ZW": 1000000,
        "ES": 0.1,
        "ER": 1000000,
        "ME": 0.1,
        "MD": 0.1,
        "MG": 0.1,
        "MA": 0.1,
        "UZ": 0.1,
        "MM": 0.1,
        "ML": 0.1,
        "MN": 0.1,
        "MK": 0.1,
        "MW": 0.1,
        "MR": 0.1,
        "UG": 1000000,
        "MY": 0.1,
        "MX": 0.1,
        "VU": 0.1,
        "FR": 0.1,
        "FI": 0.1,
        "FJ": 1000000,
        "FK": 0.1,
        "NI": 0.1,
        "NL": 0.1,
        "NO": 0.1,
        "NA": 1000000,
        "NC": 0.1,
        "NE": 0.1,
        "NG": 1000000,
        "NZ": 1000000,
        "NP": 0.1,
        "CI": 0.1,
        "CH": 0.1,
        "CO": 0.1,
        "CN": 0.1,
        "CM": 1000000,
        "CL": 0.1,
        "CA": 1000000,
        "CG": 0.1,
        "CF": 0.1,
        "CD": 0.1,
        "CZ": 0.1,
        "CY": 0.1,
        "CR": 0.1,
        "CU": 0.1,
        "SZ": 1000000,
        "SY": 0.1,
        "KG": 0.1,
        "KE": 1000000,
        "SS": 1000000,
        "SR": 0.1,
        "KH": 0.1,
        "SV": 0.1,
        "SK": 0.1,
        "KR": 0.1,
        "SI": 0.1,
        "KP": 0.1,
        "SO": 0.1,
        "SN": 0.1,
        "SL": 1000000,
        "SB": 0.1,
        "SA": 0.1,
        "SE": 0.1,
        "SD": 1000000,
        "DO": 1000000,
        "DJ": 0.1,
        "DK": 0.1,
        "DE": 0.1,
        "YE": 0.1,
        "AT": 0.1,
        "DZ": 0.1,
        "US": 1000000,
        "LV": 0.1,
        "UY": 0.1,
        "LB": 0.1,
        "LA": 0.1,
        "TW": 0.1,
        "TT": 1000000,
        "TR": 0.1,
        "LK": 1000000,
        "TN": 0.1,
        "TL": 0.1,
        "TM": 0.1,
        "TJ": 0.1,
        "LS": 1000000,
        "TH": 0.1,
        "TF": 0.1,
        "TG": 0.1,
        "TD": 0.1,
        "LY": 0.1,
        "AE": 0.1,
        "VE": 0.1,
        "AF": 0.1,
        "IQ": 0.1,
        "IS": 0.1,
        "IR": 0.1,
        "AM": 0.1,
        "IT": 0.1,
        "VN": 0.1,
        "AR": 0.1,
        "AU": 1000000,
        "IL": 1000000,
        "IN": 1000000,
        "TZ": 1000000,
        "AZ": 0.1,
        "IE": 1000000,
        "ID": 0.1,
        "UA": 0.1,
        "QA": 0.1,
        "MZ": 1
      },


      visas: {
        "BD": 0.1,
        "BE": 1000000,
        "BF": 0.1,
        "BG": 1000000,
        "BA": 1000000,
        "BN": 1000000,
        "BO": 0.1,
        "JP": 1000000,
        "BI": 0.1,
        "BJ": 0.1,
        "BT": 0.1,
        "JM": 1000000,
        "BW": 1000000,
        "BR": 0.1,
        "BS": 1000000,
        "BY": 0.1,
        "BZ": 1000000,
        "RU": 0.1,
        "RW": 0.1,
        "RS": 1000000,
        "LT": 1000000,
        "LU": 1000000,
        "LR": 0.1,
        "RO": 1000000,
        "GW": 0.1,
        "GT": 0.1,
        "GR": 1000000,
        "GQ": 0.1,
        "GY": 1000000,
        "GE": 0.1,
        "GB": 1000000,
        "GA": 0.1,
        "GN": 0.1,
        "GM": 0.1,
        "GL": 1000000,
        "KW": 0.1,
        "GH": 0.1,
        "OM": 0.1,
        "_1": 1000000,
        "_0": 0.1,
        "JO": 0.1,
        "HR": 1000000,
        "HT": 1000000,
        "HU": 1000000,
        "HN": 1000000,
        "PR": 1000000,
        "PS": 0.1,
        "PT": 1000000,
        "PY": 0.1,
        "PA": 1000000,
        "PG": 1000000,
        "PE": 1000000,
        "PK": 0.1,
        "PH": 1000000,
        "PL": 1000000,
        "ZM": 1000000,
        "EH": 0.1,
        "EE": 1000000,
        "EG": 0.1,
        "ZA": 1000000,
        "EC": 1000000,
        "AL": 1000000,
        "AO": 0.1,
        "KZ": 1000000,
        "ET": 0.1,
        "ZW": 1000000,
        "ES": 1000000,
        "ER": 1000000,
        "ME": 1000000,
        "MD": 1000000,
        "MG": 0.1,
        "MA": 1000000,
        "UZ": 0.1,
        "MM": 0.1,
        "ML": 0.1,
        "MN": 1000000,
        "MK": 1000000,
        "MW": 1000000,
        "MR": 0.1,
        "UG": 1000000,
        "MY": 1000000,
        "MX": 1000000,
        "VU": 1000000,
        "FR": 1000000,
        "FI": 1000000,
        "FJ": 1000000,
        "FK": 1000000,
        "NI": 1000000,
        "NL": 1000000,
        "NO": 1000000,
        "NA": 0.1,
        "NC": 0.1,
        "NE": 0.1,
        "NG": 0.1,
        "NZ": 1000000,
        "NP": 0.1,
        "CI": 0.1,
        "CH": 1000000,
        "CO": 1000000,
        "CN": 0.1,
        "CM": 0.1,
        "CL": 1000000,
        "CA": 1000000,
        "CG": 0.1,
        "CF": 0.1,
        "CD": 0.1,
        "CZ": 1000000,
        "CY": 1000000,
        "CR": 1000000,
        "CU": 0.1,
        "SZ": 1000000,
        "SY": 0.1,
        "KG": 1000000,
        "KE": 1000000,
        "SS": 1000000,
        "SR": 0.1,
        "KH": 0.1,
        "SV": 1000000,
        "SK": 0.1,
        "KR": 1000000,
        "SI": 1000000,
        "KP": 0.1,
        "SO": 1000000,
        "SN": 0.1,
        "SL": 0.1,
        "SB": 1000000,
        "SA": 0.1,
        "SE": 1000000,
        "SD": 0.1,
        "DO": 1000000,
        "DJ": 1000000,
        "DK": 1000000,
        "DE": 1000000,
        "YE": 0.1,
        "AT": 1000000,
        "DZ": 0.1,
        "US": 1000000,
        "LV": 1000000,
        "UY": 1000000,
        "LB": 0.1,
        "LA": 0.1,
        "TW": 1000000,
        "TT": 1000000,
        "TR": 0.1,
        "LK": 0.1,
        "TN": 1000000,
        "TL": 0.1,
        "TM": 0.1,
        "TJ": 0.1,
        "LS": 1000000,
        "TH": 1000000,
        "TF": 1000000,
        "TG": 1000000,
        "TD": 0.1,
        "LY": 0.1,
        "AE": 1000000,
        "VE": 0.1,
        "AF": 0.1,
        "IQ": 0.1,
        "IS": 1000000,
        "IR": 0.1,
        "AM": 1000000,
        "IT": 1000000,
        "VN": 0.1,
        "AR": 0.1,
        "AU": 1000000,
        "IL": 1000000,
        "IN": 0.1,
        "TZ": 0.1,
        "AZ": 0.1,
        "IE": 1000000,
        "ID": 1000000,
        "UA": 1000000,
        "QA": 0.1,
        "MZ": 1
      },

      gdpData: {
        "AF": 16.63,
        "AL": 11.58,
        "DZ": 158.97,
        "AO": 85.81,
        "AG": 1.1,
        "AR": 351.02,
        "AM": 8.83,
        "AU": 1219.72,
        "AT": 366.26,
        "AZ": 52.17,
        "BS": 7.54,
        "BH": 21.73,
        "BD": 105.4,
        "BB": 3.96,
        "BY": 52.89,
        "BE": 461.33,
        "BZ": 1.43,
        "BJ": 6.49,
        "BT": 1.4,
        "BO": 19.18,
        "BA": 16.2,
        "BW": 12.5,
        "BR": 2023.53,
        "BN": 11.96,
        "BG": 44.84,
        "BF": 8.67,
        "BI": 1.47,
        "KH": 11.36,
        "CM": 21.88,
        "CA": 1563.66,
        "CU": 0.55,
        "CV": 1.57,
        "CF": 2.11,
        "TD": 7.59,
        "CL": 199.18,
        "CN": 5745.13,
        "CO": 283.11,
        "KM": 0.56,
        "CD": 12.6,
        "CG": 11.88,
        "CR": 35.02,
        "CI": 22.38,
        "HR": 59.92,
        "CY": 22.75,
        "CZ": 195.23,
        "DK": 304.56,
        "DJ": 1.14,
        "DM": 0.38,
        "DO": 50.87,
        "EC": 61.49,
        "EG": 216.83,
        "SV": 21.8,
        "GQ": 14.55,
        "ER": 2.25,
        "EE": 19.22,
        "EH": 0.55,
        "ET": 30.94,
        "FJ": 3.15,
        "FI": 231.98,
        "FR": 2555.44,
        "GA": 12.56,
        "GM": 1.04,
        "GE": 11.23,
        "DE": 3305.9,
        "FK": 0.55,
        "GH": 18.06,
        "GR": 305.01,
        "GD": 0.65,
        "GL": .1,
        "GT": 40.77,
        "GN": 4.34,
        "GW": 0.83,
        "GY": 2.2,
        "HT": 6.5,
        "HN": 15.34,
        "HK": 226.49,
        "HU": 132.28,
        "IS": 12.77,
        "IN": 1430.02,
        "ID": 695.06,
        "IR": 337.9,
        "IQ": 84.14,
        "IE": 204.14,
        "IL": 201.25,
        "IT": 2036.69,
        "JM": 13.74,
        "JP": 5390.9,
        "JO": 27.13,
        "KZ": 129.76,
        "KE": 32.42,
        "KI": 0.15,
        "KR": 986.26,
        "UNDEFINED": 5.73,
        "KW": 117.32,
        "KG": 4.44,
        "KP": 0.55,
        "LA": 6.34,
        "LV": 23.39,
        "LB": 39.15,
        "LS": 1.8,
        "LR": 0.98,
        "LY": 77.91,
        "LT": 35.73,
        "LU": 52.43,
        "MK": 9.58,
        "MG": 8.33,
        "MW": 5.04,
        "MY": 218.95,
        "MV": 1.43,
        "ML": 9.08,
        "MT": 7.8,
        "MR": 3.49,
        "MU": 9.43,
        "MX": 1004.04,
        "MD": 5.36,
        "MN": 5.81,
        "ME": 3.88,
        "MA": 91.7,
        "MZ": 10.21,
        "MM": 35.65,
        "NA": 11.45,
        "NC": 0.55,
        "NP": 15.11,
        "NL": 770.31,
        "NZ": 138,
        "NI": 6.38,
        "NE": 5.6,
        "NG": 206.66,
        "NO": 413.51,
        "OM": 53.78,
        "PK": 174.79,
        "PA": 27.2,
        "PG": 8.81,
        "PY": 17.17,
        "PE": 153.55,
        "PH": 189.06,
        "PL": 438.88,
        "PT": 223.7,
        "QA": 126.52,
        "RO": 158.39,
        "RU": 1476.91,
        "RW": 5.69,
        "WS": 0.55,
        "ST": 0.19,
        "SA": 434.44,
        "SN": 12.66,
        "RS": 38.92,
        "SC": 0.92,
        "SL": 1.9,
        "SG": 217.38,
        "SK": 86.26,
        "SI": 46.44,
        "SB": 0.67,
        "TF": 0.55,
        "ZA": 354.41,
        "ES": 1374.78,
        "LK": 48.24,
        "KN": 0.56,
        "LC": 1,
        "VC": 0.58,
        "SD": 65.93,
        "SO": 0.55,
        "SR": 3.3,
        "SS": 0.55,
        "PS": 2.2,
        "SZ": 3.17,
        "SE": 444.59,
        "CH": 522.44,
        "SY": 59.63,
        "TW": 426.98,
        "TJ": 5.58,
        "TZ": 22.43,
        "TH": 312.61,
        "TL": 0.62,
        "TG": 3.07,
        "TO": 0.3,
        "TT": 21.2,
        "TN": 43.86,
        "TR": 729.05,
        "TM": 17,
        "UG": 17.12,
        "UA": 136.56,
        "AE": 239.65,
        "GB": 2258.57,
        "US": 14624,
        "UY": 40.71,
        "UZ": 37.72,
        "VU": 0.72,
        "VE": 285.21,
        "VN": 101.99,
        "YE": 30.02,
        "ZM": 15.69,
        "ZW": 5.57,
        "_1": 0.55,
        "_2": 0.55,
        "PR": 0.55
      },


      bigMacData: {
        "BD": 0.1,
        "BE": 1000000,
        "BF": 0.1,
        "BG": 0.1,
        "BA": 0.1,
        "BN": 0.1,
        "BO": 0.1,
        "JP": 1000000,
        "BI": 0.1,
        "BJ": 0.1,
        "BT": 0.1,
        "JM": 0.1,
        "BW": 0.1,
        "BR": 0.1,
        "BS": 0.1,
        "BY": 0.1,
        "BZ": 0.1,
        "RU": 0.1,
        "RW": 0.1,
        "RS": 0.1,
        "LT": 0.1,
        "LU": 1000000,
        "LR": 0.1,
        "RO": 0.1,
        "GW": 0.1,
        "GT": 0.1,
        "GR": 0.1,
        "GQ": 0.1,
        "GY": 0.1,
        "GE": 0.1,
        "GB": 1000000,
        "GA": 0.1,
        "GN": 0.1,
        "GM": 0.1,
        "GL": 0.1,
        "KW": 0.1,
        "GH": 0.1,
        "OM": 0.1,
        "_1": 0.1,
        "_0": 0.1,
        "JO": 0.1,
        "HR": 0.1,
        "HT": 0.1,
        "HU": 0.1,
        "HN": 0.1,
        "PR": 0.1,
        "PS": 0.1,
        "PT": 0.1,
        "PY": 0.1,
        "PA": 0.1,
        "PG": 0.1,
        "PE": 0.1,
        "PK": 0.1,
        "PH": 0.1,
        "PL": 0.1,
        "ZM": 0.1,
        "EH": 0.1,
        "EE": 0.1,
        "EG": 0.1,
        "ZA": 0.1,
        "EC": 0.1,
        "AL": 0.1,
        "AO": 0.1,
        "KZ": 0.1,
        "ET": 0.1,
        "ZW": 0.1,
        "ES": 0.1,
        "ER": 0.1,
        "ME": 0.1,
        "MD": 0.1,
        "MG": 0.1,
        "MA": 0.1,
        "UZ": 0.1,
        "MM": 0.1,
        "ML": 0.1,
        "MN": 0.1,
        "MK": 0.1,
        "MW": 0.1,
        "MR": 0.1,
        "UG": 0.1,
        "MY": 0.1,
        "MX": 0.1,
        "VU": 0.1,
        "FR": 1000000,
        "FI": 0.1,
        "FJ": 0.1,
        "FK": 0.1,
        "NI": 0.1,
        "NL": 0.1,
        "NO": 1000000,
        "NA": 0.1,
        "NC": 0.1,
        "NE": 0.1,
        "NG": 0.1,
        "NZ": 1000000,
        "NP": 0.1,
        "CI": 0.1,
        "CH": 1000000,
        "CO": 0.1,
        "CN": 0.1,
        "CM": 0.1,
        "CL": 0.1,
        "CA": 1000000,
        "CG": 0.1,
        "CF": 0.1,
        "CD": 0.1,
        "CZ": 0.1,
        "CY": 0.1,
        "CR": 0.1,
        "CU": 0.1,
        "SZ": 0.1,
        "SY": 0.1,
        "KG": 0.1,
        "KE": 0.1,
        "SS": 0.1,
        "SR": 0.1,
        "KH": 0.1,
        "SV": 0.1,
        "SK": 0.1,
        "KR": 1000000,
        "SI": 0.1,
        "KP": 0.1,
        "SO": 0.1,
        "SN": 0.1,
        "SL": 0.1,
        "SB": 0.1,
        "SA": 0.1,
        "SE": 1000000,
        "SD": 0.1,
        "DO": 0.1,
        "DJ": 0.1,
        "DK": 1000000,
        "DE": 1000000,
        "YE": 0.1,
        "AT": 0.1,
        "DZ": 0.1,
        "US": 0.1,
        "LV": 0.1,
        "UY": 1000000,
        "LB": 0.1,
        "LA": 0.1,
        "TW": 0.1,
        "TT": 0.1,
        "TR": 0.1,
        "LK": 0.1,
        "TN": 0.1,
        "TL": 0.1,
        "TM": 0.1,
        "TJ": 0.1,
        "LS": 0.1,
        "TH": 0.1,
        "TF": 0.1,
        "TG": 0.1,
        "TD": 0.1,
        "LY": 0.1,
        "AE": 0.1,
        "VE": 1000000,
        "AF": 0.1,
        "IQ": 0.1,
        "IS": 1000000,
        "IR": 0.1,
        "AM": 0.1,
        "IT": 1000000,
        "VN": 0.1,
        "AR": 0.1,
        "AU": 1000000,
        "IL": 1000000,
        "IN": 0.1,
        "TZ": 0.1,
        "AZ": 0.1,
        "IE": 0.1,
        "ID": 0.1,
        "UA": 0.1,
        "QA": 0.1,
        "MZ": 1
      },

      pppData: {
"AF": 6590.636786811169,
"AL": 1838.265625,
"DZ": 1838.265625,
"AO": 129.746337890625,
"AM": 1838.265625,
"AU": 25.002110044520997,
"AT": 48.551226272641024,
"AZ": 729.0,
"BS": 88.24593963276108,
"BD": 6590.636786811169,
"BY": 1838.265625,
"BE": 48.551226272641024,
"BZ": 354.2336546412161,
"BJ": 1838.265625,
"BT": 6590.636786811169,
"BO": 729.0,
"BA": 729.0,
"BW": 1838.265625,
"BR": 205.89113209464887,
"BG": 729.0,
"BF": 1838.265625,
"BI": 1838.265625,
"KH": 6590.636786811169,
"CM": 729.0,
"CA": 48.551226272641024,
"CF": 354.2336546412161,
"TD": 729.0,
"CL": 205.89113209464887,
"CN": 354.2336546412161,
"CO": 354.2336546412161,
"CR": 205.89113209464887,
"HR": 354.2336546412161,
"CU": 6590.636786811169,
"-99": 88.24593963276108,
"CZ": 354.2336546412161,
"DK": 25.002110044520997,
"DJ": 354.2336546412161,
"DO": 729.0,
"EC": 354.2336546412161,
"EG": 6590.636786811169,
"SV": 729.0,
"GQ": 354.2336546412161,
"ER": 729.0,
"EE": 205.89113209464887,
"ET": 1838.265625,
"FJ": 354.2336546412161,
"FI": 37.55835290916901,
"FR": 48.551226272641024,
"GA": 729.0,
"GM": 6590.636786811169,
"GE": 729.0,
"DE": 64.0,
"GH": 1838.265625,
"GR": 129.746337890625,
"GT": 729.0,
"GN": 1838.265625,
"GW": 1838.265625,
"GY": 354.2336546412161,
"HT": 729.0,
"HN": 729.0,
"HU": 354.2336546412161,
"IS": 37.55835290916901,
"IN": 6590.636786811169,
"ID": 6590.636786811169,
"IR": 6590.636786811169,
"IQ": 1838.265625,
"IE": 48.551226272641024,
"IL": 48.551226272641024,
"IT": 64.0,
"JM": 354.2336546412161,
"JP": 64.0,
"JO": 1838.265625,
"KZ": 729.0,
"KE": 729.0,
"_0": 1838.265625,
"KW": 354.2336546412161,
"LA": 6590.636786811169,
"LV": 205.89113209464887,
"LB": 354.2336546412161,
"LS": 1838.265625,
"LR": 729.0,
"LY": 1838.265625,
"LT": 354.2336546412161,
"LU": 37.55835290916901,
"MK": 1838.265625,
"MG": 6590.636786811169,
"MW": 6590.636786811169,
"MY": 1838.265625,
"ML": 1838.265625,
"MR": 6590.636786811169,
"MX": 354.2336546412161,
"MD": 1838.265625,
"MN": 6590.636786811169,
"ME": 729.0,
"MA": 1838.265625,
"MZ": 729.0,
"NA": 354.2336546412161,
"NP": 6590.636786811169,
"NL": 48.551226272641024,
"NZ": 37.55835290916901,
"NG": 1838.265625,
"NE": 729.0,
"NI": 729.0,
"NO": 21.691961596368994,
"OM": 729.0,
"PK": 6590.636786811169,
"PA": 354.2336546412161,
"PG": 129.746337890625,
"PY": 729.0,
"PE": 729.0,
"PH": 1838.265625,
"PL": 354.2336546412161,
"PT": 129.746337890625,
"PR": 129.746337890625,
"QA": 205.89113209464887,
"RO": 729.0,
"RU": 729.0,
"RW": 1838.265625,
"SA": 729.0,
"SN": 729.0,
"RS": 729.0,
"SL": 1838.265625,
"SI": 129.746337890625,
"SB": 64.0,
"ZA": 729.0,
"SS": 1838.265625,
"ES": 88.24593963276108,
"LK": 6590.636786811169,
"SD": 729.0,
"SR": 354.2336546412161,
"SZ": 1838.265625,
"SE": 30.749609024289,
"CH": 21.691961596368994,
"TJ": 1838.265625,
"TZ": 1838.265625,
"TH": 1838.265625,
"TL": 354.2336546412161,
"TG": 1838.265625,
"TT": 354.2336546412161,
"TN": 1838.265625,
"TR": 729.0,
"TM": 354.2336546412161,
"UG": 1838.265625,
"UA": 1838.265625,
"AE": 205.89113209464887,
"GB": 37.55835290916901,
"US": 64.0,
"UY": 129.746337890625,
"UZ": 1838.265625,
"VU": 48.551226272641024,
"VE": 88.24593963276108,
"VN": 1838.265625,
"YE": 1838.265625,
"ZM": 1838.265625,
"ZW": 729.0,
"BN": 64.0,
"GL": 64.0,
"_1": 64.0,
"PS": 64.0,
"EH": 64.0,
"MM": 64.0,
"FK": 64.0,
"NC": 64.0,
"CI": 64.0,
"CG": 64.0,
"CD": 64.0,
"CY": 64.0,
"SY": 64.0,
"KG": 64.0,
"SK": 64.0,
"KR": 64.0,
"KP": 64.0,
"SO": 64.0,
"TW": 64.0,
"TF": 64.0,
"AR": 64.0
      }

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
      focusOn: {
        x: 0,
        y: 0,
        scale: 0,
        animate: false
      },
      backgroundColor: '#87CEFA',
      zoomButtons: false,
      regionStyle:{hover: {fill: "#1f5525"}},
      series: {
        regions: [{
          values: AtlasMap.gdpData,
          attribute: 'fill',
          scale: ['#6cc577', '#348d3e'],
          normalizeFunction: 'polynomial',
        }]
      },
      onRegionTipShow: function(e, el, code){
        el.html(el.html());
      }
    })
  };

  var addEscapeButtonClickListener = function(){
    $(document).keydown(function(e){
      if(e.keyCode == KEYCODE_ESC)
        {
          zoomOut();
        }
    });
  }


  // var overrideApplyTransform = function(){
  //           // Store a reference to the original remove method.
  //           var originalRemoveMethod = jQuery.fn.remove;
  //           // Define overriding method.
  //           jQuery.fn.remove = function(){
  //               // Log the fact that we are calling our override.
  //               console.log( "Override method" );
  //               // Execute the original method.
  //               originalRemoveMethod.apply( this, arguments );
  //           }
  //       });

  var addLanguageButtonClickListener = function(){
    $('.language-filter').click(function(){
      AtlasMap.map.series.regions[0].setValues(AtlasMap.languages);
      AtlasMap.map.series.regions[0].setScale(['#dddddd', '#287f2c']);
      $('.jvectormap-legend-cnt').css("display","none");
      $('.jvectormap-container').css("background-image", "none");
    });
  }

  var addRandomColorButtonClickListener = function(){

    var palette = [
    "#AD3B3B",
    "#D76D6D",
    "#841717",
    "#AD6F3B",
    "#D79D6D",
    "#844817",
    "#236868",
    "#418181",
    "#0E4F4F",
    "#2F8A2F",
    "#57AC57",
    "#136913",];
    var countries = $('path');

    $('.random-filter').click(function(){
      for (x=0;x<countries.length;x++){
        var randomColor = palette[Math.floor(Math.random()*12)];
        countries[x].setAttribute("fill",randomColor);
      }
      var randomColor = palette[Math.floor(Math.random()*12)];
      $('.jvectormap-legend-cnt').css("display","none");
      $('map').setAttribute("backgroundColor",randomColor);
    });
  }

  var addVisaButtonClickListener = function(){
    $('.visa-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.visas);
    AtlasMap.map.series.regions[0].setScale(['#287f2c', '#dddddd']);
    $('.jvectormap-container').css("background-image", "none");
    $('.jvectormap-legend-cnt').css("display","none");
    });
  }

  var addbigMacButtonClickListener = function(){
    $('.bigMac-filter').click(function(){
      AtlasMap.map.series.regions[0].setValues(AtlasMap.bigMacData);
      AtlasMap.map.series.regions[0].setScale(['#287f2c', '#FF0000']);
      $('.jvectormap-legend-cnt').css("display","block");
      $('.jvectormap-container').css("background-image", "none");
    });
  }

  var addGDPButtonClickListener = function(){
    $('.gdp-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.gdpData);
    AtlasMap.map.series.regions[0].setScale(['#6cc577', '#348d3e']);
    $('.jvectormap-container').css("background-image", "none");
    $('.jvectormap-legend-cnt').css("display","none");
    });
  }

  var addPPPButtonClickListener = function(){
    $('.ppp-filter').click(function(){
    AtlasMap.map.series.regions[0].setValues(AtlasMap.pppData);
    AtlasMap.map.series.regions[0].setScale(
       ["#003000",
       // "#2D8A2D",
       // "#0B5E0B",
       "#5EB45E"]);
    $('.jvectormap-container').css("background-image", "none");
    $('.jvectormap-legend-cnt').css("display","none");
    });
  }

  var sf = function(){
    $("circle[data-index='219']").click(function(e){
      e.preventDefault();
      $('.jvectormap-container').css("background-image", "url('/assets/SF.svg.png')");
      setTimeout(function(){$('.jvectormap-container').css("background-image", "none")},1000)
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
      source: availableTags,
      autoFocus: true,
    });
    $('#auto').submit(function(e){
      e.preventDefault();
      var userInput = $('#autocomplete').val();
      var caps = capitalizeFirstLetter(userInput);
      zoomInTo(test[caps]);
    });
    $('.search-button').on('click', function(e){
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
      $('.country-destinations').css("display","block");
      $('.country-destinations').animate({"right":"0px"}, "slow");
      $('.country-info').animate({"left":"0px"}, "slow");
      AtlasMap.divsShown = true;
    }
    else
    {
      $('.country-destinations').animate({"right":"-2000px"}, "slow");
      setTimeout(function(){$('.country-destinations').css("display","none")}, 200);
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
    var drag = false;
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

  var initializeModal = function(){
    $( "#dialog" ).dialog({
        modal: true,
        hide: { effect: "fade", duration: 1000 },
        autoOpen: true,
        width: $(window).width()-400,
        height: $(window).height()-200,
        modal: true,
        fluid: true, //new option
        resizable: false,
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
    }, 200);
  }
}())
