AtlasMap = {}

AtlasMap.gdpData = {
  "AF": 16.63,  "AL": 11.58,  "DZ": 158.97,  "AO": 85.81,  "AG": 1.1,  "AR": 351.02,  "AM": 8.83,  "AU": 1219.72,  "AT": 366.26,  "AZ": 52.17,  "BS": 7.54,  "BH": 21.73,  "BD": 105.4,  "BB": 3.96,  "BY": 52.89,  "BE": 461.33,  "BZ": 1.43,  "BJ": 6.49,  "BT": 1.4,  "BO": 19.18,  "BA": 16.2,  "BW": 12.5,  "BR": 2023.53,  "BN": 11.96,  "BG": 44.84,  "BF": 8.67,  "BI": 1.47,  "KH": 11.36,  "CM": 21.88,  "CA": 1563.66,  "CV": 1.57,  "CF": 2.11,  "TD": 7.59,  "CL": 199.18,  "CN": 5745.13,  "CO": 283.11,  "KM": 0.56,  "CD": 12.6,  "CG": 11.88,  "CR": 35.02,  "CI": 22.38,  "HR": 59.92,  "CY": 22.75,  "CZ": 195.23,  "DK": 304.56,  "DJ": 1.14,  "DM": 0.38,  "DO": 50.87,  "EC": 61.49,  "EG": 216.83,  "SV": 21.8,  "GQ": 14.55,  "ER": 2.25,  "EE": 19.22,  "ET": 30.94,  "FJ": 3.15,  "FI": 231.98,  "FR": 2555.44,  "GA": 12.56,  "GM": 1.04,  "GE": 11.23,  "DE": 3305.9,  "GH": 18.06,  "GR": 305.01,  "GD": 0.65,  "GT": 40.77,  "GN": 4.34,  "GW": 0.83,  "GY": 2.2,  "HT": 6.5,  "HN": 15.34,  "HK": 226.49,  "HU": 132.28,  "IS": 12.77,  "IN": 1430.02,  "ID": 695.06,  "IR": 337.9,  "IQ": 84.14,  "IE": 204.14,  "IL": 201.25,  "IT": 2036.69,  "JM": 13.74,  "JP": 5390.9,  "JO": 27.13,  "KZ": 129.76,  "KE": 32.42,  "KI": 0.15,  "KR": 986.26,  "UNDEFINED": 5.73,  "KW": 117.32,  "KG": 4.44,  "LA": 6.34,  "LV": 23.39,  "LB": 39.15,  "LS": 1.8,  "LR": 0.98,  "LY": 77.91,  "LT": 35.73,  "LU": 52.43,  "MK": 9.58,  "MG": 8.33,  "MW": 5.04,  "MY": 218.95,  "MV": 1.43,  "ML": 9.08,  "MT": 7.8,  "MR": 3.49,  "MU": 9.43,  "MX": 1004.04,  "MD": 5.36,  "MN": 5.81,  "ME": 3.88,  "MA": 91.7,  "MZ": 10.21,  "MM": 35.65,  "NA": 11.45,  "NP": 15.11,  "NL": 770.31,  "NZ": 138,  "NI": 6.38,  "NE": 5.6,  "NG": 206.66,  "NO": 413.51,  "OM": 53.78,  "PK": 174.79,  "PA": 27.2,  "PG": 8.81,  "PY": 17.17,  "PE": 153.55,  "PH": 189.06,  "PL": 438.88,  "PT": 223.7,  "QA": 126.52,  "RO": 158.39,  "RU": 1476.91,  "RW": 5.69,  "WS": 0.55,  "ST": 0.19,  "SA": 434.44,  "SN": 12.66,  "RS": 38.92,  "SC": 0.92,  "SL": 1.9,  "SG": 217.38,  "SK": 86.26,  "SI": 46.44,  "SB": 0.67,  "ZA": 354.41,  "ES": 1374.78,  "LK": 48.24,  "KN": 0.56,  "LC": 1,  "VC": 0.58,  "SD": 65.93,  "SR": 3.3,  "SZ": 3.17,  "SE": 444.59,  "CH": 522.44,  "SY": 59.63,  "TW": 426.98,  "TJ": 5.58,  "TZ": 22.43,  "TH": 312.61,  "TL": 0.62,  "TG": 3.07,  "TO": 0.3,  "TT": 21.2,  "TN": 43.86,  "TR": 729.05,  "TM": 17,  "UG": 17.12,  "UA": 136.56,  "AE": 239.65,  "GB": 2258.57,  "US": 0,  "UY": 40.71,  "UZ": 37.72,  "VU": 0.72,  "VE": 285.21,  "VN": 101.99,  "YE": 30.02,  "ZM": 15.69,  "ZW": 5.57
};

$(function(){

  var zoomedIn = false;
  $('.atlas-map').vectorMap({
    map: 'world_mill_en',
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
        scale: ['#6cc577', '#348d3e'],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionTipShow: function(e, el, code){
      el.html(el.html());
    }
  });




test = {"Bangladesh": "BD", "Belgium": "BE", "Burkina Faso": "BF", "Bulgaria": "BG", "Bosnia and Herz.": "BA", "Brunei": "BN", "Bolivia": "BO", "Japan": "JP", "Burundi": "BI", "Benin": "BJ", "Bhutan": "BT", "Jamaica": "JM", "Botswana": "BW", "Brazil": "BR", "Bahamas": "BS", "Belarus": "BY", "Belize": "BZ", "Russia": "RU", "Rwanda": "RW", "Serbia": "RS", "Lithuania": "LT", "Luxembourg": "LU", "Liberia": "LR", "Romania": "RO", "Guinea-Bissau": "GW", "Guatemala": "GT", "Greece": "GR", "Eq. Guinea": "GQ", "Guyana": "GY", "Georgia": "GE", "United Kingdom": "GB", "Gabon": "GA", "Guinea": "GN", "Gambia": "GM", "Greenland": "GL", "Kuwait": "KW", "Ghana": "GH", "Oman": "OM", "Somaliland": "_1", "Kosovo": "_0", "Jordan": "JO", "Croatia": "HR", "Haiti": "HT", "Hungary": "HU", "Honduras": "HN", "Puerto Rico": "PR", "Palestine": "PS", "Portugal": "PT", "Paraguay": "PY", "Panama": "PA", "Papua New Guinea": "PG", "Peru": "PE", "Pakistan": "PK", "Philippines": "PH", "Poland": "PL", "N. Cyprus": "-9", "Zambia": "ZM", "W. Sahara": "EH", "Estonia": "EE", "Egypt": "EG", "South Africa": "ZA", "Ecuador": "EC", "Albania": "AL", "Angola": "AO", "Kazakhstan": "KZ", "Ethiopia": "ET", "Zimbabwe": "ZW", "Spain": "ES", "Eritrea": "ER", "Montenegro": "ME", "Moldova": "MD", "Madagascar": "MG", "Morocco": "MA", "Uzbekistan": "UZ", "Myanmar": "MM", "Mali": "ML", "Mongolia": "MN", "Macedonia": "MK", "Malawi": "MW", "Mauritania": "MR", "Uganda": "UG", "Malaysia": "MY", "Mexico": "MX", "Vanuatu": "VU", "France": "FR", "Finland": "FI", "Fiji": "FJ", "Falkland Is.": "FK", "Nicaragua": "NI", "Netherlands": "NL", "Norway": "NO", "Namibia": "NA", "New Caledonia": "NC", "Niger": "NE", "Nigeria": "NG", "New Zealand": "NZ", "Nepal": "NP", "Côte dIvoire": "CI", "Switzerland": "CH", "Colombia": "CO", "China": "CN", "Cameroon": "CM", "Chile": "CL", "Canada": "CA", "Congo": "CG", "Central African Rep.": "CF", "Dem. Rep. Congo": "CD", "Czech Rep.": "CZ", "Cyprus": "CY", "Costa Rica": "CR", "Cuba": "CU", "Swaziland": "SZ", "Syria": "SY", "Kyrgyzstan": "KG", "Kenya": "KE", "S. Sudan": "SS", "Suriname": "SR", "Cambodia": "KH", "El Salvador": "SV", "Slovakia": "SK", "Korea": "KR", "Slovenia": "SI", "Dem. Rep. Korea": "KP", "Somalia": "SO", "Senegal": "SN", "Sierra Leone": "SL", "Solomon Is.": "SB", "Saudi Arabia": "SA", "Sweden": "SE", "Sudan": "SD", "Dominican Rep.": "DO", "Djibouti": "DJ", "Denmark": "DK", "Germany": "DE", "Yemen": "YE", "Austria": "AT", "Algeria": "DZ", "United States": "US", "Latvia": "LV", "Uruguay": "UY", "Lebanon": "LB", "Lao PDR": "LA", "Taiwan": "TW", "Trinidad and Tobago": "TT", "Turkey": "TR", "Sri Lanka": "LK", "Tunisia": "TN", "Timor-Leste": "TL", "Turkmenistan": "TM", "Tajikistan": "TJ", "Lesotho": "LS", "Thailand": "TH", "Fr. S. Antarctic Lands": "TF", "Togo": "TG", "Chad": "TD", "Libya": "LY", "United Arab Emirates": "AE", "Venezuela": "VE", "Afghanistan": "AF", "Iraq": "IQ", "Iceland": "IS", "Iran": "IR", "Armenia": "AM", "Italy": "IT", "Vietnam": "VN", "Argentina": "AR", "Australia": "AU", "Israel": "IL", "India": "IN", "Tanzania": "TZ", "Azerbaijan": "AZ", "Ireland": "IE", "Indonesia": "ID", "Ukraine": "UA", "Qatar": "QA", "Mozambique": "MZ"};


availableTags = [
{"data": "BD", "value": "Bangladesh"},
{"data": "BE", "value": "Belgium"},
{"data": "BF", "value": "Burkina Faso"},
{"data": "BG", "value": "Bulgaria"},
{"data": "BA", "value": "Bosnia and Herz."},
{"data": "BN", "value": "Brunei"},
{"data": "BO", "value": "Bolivia"},
{"data": "JP", "value": "Japan"},
{"data": "BI", "value": "Burundi"},
{"data": "BJ", "value": "Benin"},
{"data": "BT", "value": "Bhutan"},
{"data": "JM", "value": "Jamaica"},
{"data": "BW", "value": "Botswana"},
{"data": "BR", "value": "Brazil"},
{"data": "BS", "value": "Bahamas"},
{"data": "BY", "value": "Belarus"},
{"data": "BZ", "value": "Belize"},
{"data": "RU", "value": "Russia"},
{"data": "RW", "value": "Rwanda"},
{"data": "RS", "value": "Serbia"},
{"data": "LT", "value": "Lithuania"},
{"data": "LU", "value": "Luxembourg"},
{"data": "LR", "value": "Liberia"},
{"data": "RO", "value": "Romania"},
{"data": "GW", "value": "Guinea-Bissau"},
{"data": "GT", "value": "Guatemala"},
{"data": "GR", "value": "Greece"},
{"data": "GQ", "value": "Eq. Guinea"},
{"data": "GY", "value": "Guyana"},
{"data": "GE", "value": "Georgia"},
{"data": "GB", "value": "United Kingdom"},
{"data": "GA", "value": "Gabon"},
{"data": "GN", "value": "Guinea"},
{"data": "GM", "value": "Gambia"},
{"data": "GL", "value": "Greenland"},
{"data": "KW", "value": "Kuwait"},
{"data": "GH", "value": "Ghana"},
{"data": "OM", "value": "Oman"},
{"data": "_1", "value": "Somaliland"},
{"data": "_0", "value": "Kosovo"},
{"data": "JO", "value": "Jordan"},
{"data": "HR", "value": "Croatia"},
{"data": "HT", "value": "Haiti"},
{"data": "HU", "value": "Hungary"},
{"data": "HN", "value": "Honduras"},
{"data": "PR", "value": "Puerto Rico"},
{"data": "PS", "value": "Palestine"},
{"data": "PT", "value": "Portugal"},
{"data": "PY", "value": "Paraguay"},
{"data": "PA", "value": "Panama"},
{"data": "PG", "value": "Papua New Guinea"},
{"data": "PE", "value": "Peru"},
{"data": "PK", "value": "Pakistan"},
{"data": "PH", "value": "Philippines"},
{"data": "PL", "value": "Poland"},
{"data": "-99", "value": "N. Cyprus"},
{"data": "ZM", "value": "Zambia"},
{"data": "EH", "value": "W. Sahara"},
{"data": "EE", "value": "Estonia"},
{"data": "EG", "value": "Egypt"},
{"data": "ZA", "value": "South Africa"},
{"data": "EC", "value": "Ecuador"},
{"data": "AL", "value": "Albania"},
{"data": "AO", "value": "Angola"},
{"data": "KZ", "value": "Kazakhstan"},
{"data": "ET", "value": "Ethiopia"},
{"data": "ZW", "value": "Zimbabwe"},
{"data": "ES", "value": "Spain"},
{"data": "ER", "value": "Eritrea"},
{"data": "ME", "value": "Montenegro"},
{"data": "MD", "value": "Moldova"},
{"data": "MG", "value": "Madagascar"},
{"data": "MA", "value": "Morocco"},
{"data": "UZ", "value": "Uzbekistan"},
{"data": "MM", "value": "Myanmar"},
{"data": "ML", "value": "Mali"},
{"data": "MN", "value": "Mongolia"},
{"data": "MK", "value": "Macedonia"},
{"data": "MW", "value": "Malawi"},
{"data": "MR", "value": "Mauritania"},
{"data": "UG", "value": "Uganda"},
{"data": "MY", "value": "Malaysia"},
{"data": "MX", "value": "Mexico"},
{"data": "VU", "value": "Vanuatu"},
{"data": "FR", "value": "France"},
{"data": "FI", "value": "Finland"},
{"data": "FJ", "value": "Fiji"},
{"data": "FK", "value": "Falkland Is."},
{"data": "NI", "value": "Nicaragua"},
{"data": "NL", "value": "Netherlands"},
{"data": "NO", "value": "Norway"},
{"data": "NA", "value": "Namibia"},
{"data": "NC", "value": "New Caledonia"},
{"data": "NE", "value": "Niger"},
{"data": "NG", "value": "Nigeria"},
{"data": "NZ", "value": "New Zealand"},
{"data": "NP", "value": "Nepal"},
{"data": "CI", "value": "Côte d Ivoire"},
{"data": "CH", "value": "Switzerland"},
{"data": "CO", "value": "Colombia"},
{"data": "CN", "value": "China"},
{"data": "CM", "value": "Cameroon"},
{"data": "CL", "value": "Chile"},
{"data": "CA", "value": "Canada"},
{"data": "CG", "value": "Congo"},
{"data": "CF", "value": "Central African Rep."},
{"data": "CD", "value": "Dem. Rep. Congo"},
{"data": "CZ", "value": "Czech Rep."},
{"data": "CY", "value": "Cyprus"},
{"data": "CR", "value": "Costa Rica"},
{"data": "CU", "value": "Cuba"},
{"data": "SZ", "value": "Swaziland"},
{"data": "SY", "value": "Syria"},
{"data": "KG", "value": "Kyrgyzstan"},
{"data": "KE", "value": "Kenya"},
{"data": "SS", "value": "S. Sudan"},
{"data": "SR", "value": "Suriname"},
{"data": "KH", "value": "Cambodia"},
{"data": "SV", "value": "El Salvador"},
{"data": "SK", "value": "Slovakia"},
{"data": "KR", "value": "Korea"},
{"data": "SI", "value": "Slovenia"},
{"data": "KP", "value": "Dem. Rep. Korea"},
{"data": "SO", "value": "Somalia"},
{"data": "SN", "value": "Senegal"},
{"data": "SL", "value": "Sierra Leone"},
{"data": "SB", "value": "Solomon Is."},
{"data": "SA", "value": "Saudi Arabia"},
{"data": "SE", "value": "Sweden"},
{"data": "SD", "value": "Sudan"},
{"data": "DO", "value": "Dominican Rep."},
{"data": "DJ", "value": "Djibouti"},
{"data": "DK", "value": "Denmark"},
{"data": "DE", "value": "Germany"},
{"data": "YE", "value": "Yemen"},
{"data": "AT", "value": "Austria"},
{"data": "DZ", "value": "Algeria"},
{"data": "US", "value": "United States"},
{"data": "LV", "value": "Latvia"},
{"data": "UY", "value": "Uruguay"},
{"data": "LB", "value": "Lebanon"},
{"data": "LA", "value": "Lao PDR"},
{"data": "TW", "value": "Taiwan"},
{"data": "TT", "value": "Trinidad and Tobago"},
{"data": "TR", "value": "Turkey"},
{"data": "LK", "value": "Sri Lanka"},
{"data": "TN", "value": "Tunisia"},
{"data": "TL", "value": "Timor-Leste"},
{"data": "TM", "value": "Turkmenistan"},
{"data": "TJ", "value": "Tajikistan"},
{"data": "LS", "value": "Lesotho"},
{"data": "TH", "value": "Thailand"},
{"data": "TF", "value": "Fr. S. Antarctic Lands"},
{"data": "TG", "value": "Togo"},
{"data": "TD", "value": "Chad"},
{"data": "LY", "value": "Libya"},
{"data": "AE", "value": "United Arab Emirates"},
{"data": "VE", "value": "Venezuela"},
{"data": "AF", "value": "Afghanistan"},
{"data": "IQ", "value": "Iraq"},
{"data": "IS", "value": "Iceland"},
{"data": "IR", "value": "Iran"},
{"data": "AM", "value": "Armenia"},
{"data": "IT", "value": "Italy"},
{"data": "VN", "value": "Vietnam"},
{"data": "AR", "value": "Argentina"},
{"data": "AU", "value": "Australia"},
{"data": "IL", "value": "Israel"},
{"data": "IN", "value": "India"},
{"data": "TZ", "value": "Tanzania"},
{"data": "AZ", "value": "Azerbaijan"},
{"data": "IE", "value": "Ireland"},
{"data": "ID", "value": "Indonesia"},
{"data": "UA", "value": "Ukraine"},
{"data": "QA", "value": "Qatar"},
{"data": "MZ", "value": "Mozambique"}

];



    $( '#autocomplete' ).autocomplete({
      source: availableTags
    });


    $('#auto').submit(function(event){
      event.preventDefault();
      $('.atlas-map').vectorMap('set', 'focus', {region: test[$('#autocomplete').val()] , animate: true});
      });






  $('path').click(function(){
    var dataCode = $(this).attr('data-code');
    if (!zoomedIn){
      $.ajax({
      url: "/countries",
      method: "GET",
      data: {code: dataCode}
    }).done(function(response){
        $('.country-info').append(response);
    });
    $(this).closest('.atlas-map').vectorMap('set', 'focus', {
        region: dataCode,
        animate: true
      })
      $('.country-info').animate({"right":"0px"}, "slow");
      zoomedIn = true;
      }
    else {
      $('.country-info').empty();
      $(this).closest('.atlas-map').vectorMap('set', 'focus', {
      scale: 0, x: 0, y: 0,
      animate: true
      })
      $('.country-info').animate({"right":"-2000px"}, "slow");
      zoomedIn = false;

    }
  });
});
