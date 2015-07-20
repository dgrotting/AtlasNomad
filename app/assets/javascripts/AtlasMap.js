var zoomedIn = false,
    currentCountry = null,
    clickedCountry = null,
    drag = false,
    divsShown = false,
    mouseDown = false;

$('document').ready(function(){
  makeMap();
  addAutocompleteListener();
  addCountryClickListener();
  addOceanClickListener();
  changeLanguage();
  initializeImageCarousel();
})

function makeMap(){
  AtlasMap = {};
  AtlasMap.gdpData = {
    "AF": 16.63,  "AL": 11.58,  "DZ": 158.97,  "AO": 85.81,  "AG": 1.1,  "AR": 351.02,  "AM": 8.83,  "AU": 1219.72,  "AT": 366.26,  "AZ": 52.17,  "BS": 7.54,  "BH": 21.73,  "BD": 105.4,  "BB": 3.96,  "BY": 52.89,  "BE": 461.33,  "BZ": 1.43,  "BJ": 6.49,  "BT": 1.4,  "BO": 19.18,  "BA": 16.2,  "BW": 12.5,  "BR": 2023.53,  "BN": 11.96,  "BG": 44.84,  "BF": 8.67,  "BI": 1.47,  "KH": 11.36,  "CM": 21.88,  "CA": 1563.66,  "CV": 1.57,  "CF": 2.11,  "TD": 7.59,  "CL": 199.18,  "CN": 5745.13,  "CO": 283.11,  "KM": 0.56,  "CD": 12.6,  "CG": 11.88,  "CR": 35.02,  "CI": 22.38,  "HR": 59.92,  "CY": 22.75,  "CZ": 195.23,  "DK": 304.56,  "DJ": 1.14,  "DM": 0.38,  "DO": 50.87,  "EC": 61.49,  "EG": 216.83,  "SV": 21.8,  "GQ": 14.55,  "ER": 2.25,  "EE": 19.22,  "ET": 30.94,  "FJ": 3.15,  "FI": 231.98,  "FR": 2555.44,  "GA": 12.56,  "GM": 1.04,  "GE": 11.23,  "DE": 3305.9,  "GH": 18.06,  "GR": 305.01,  "GD": 0.65,  "GT": 40.77,  "GN": 4.34,  "GW": 0.83,  "GY": 2.2,  "HT": 6.5,  "HN": 15.34,  "HK": 226.49,  "HU": 132.28,  "IS": 12.77,  "IN": 1430.02,  "ID": 695.06,  "IR": 337.9,  "IQ": 84.14,  "IE": 204.14,  "IL": 201.25,  "IT": 2036.69,  "JM": 13.74,  "JP": 5390.9,  "JO": 27.13,  "KZ": 129.76,  "KE": 32.42,  "KI": 0.15,  "KR": 986.26,  "UNDEFINED": 5.73,  "KW": 117.32,  "KG": 4.44,  "LA": 6.34,  "LV": 23.39,  "LB": 39.15,  "LS": 1.8,  "LR": 0.98,  "LY": 77.91,  "LT": 35.73,  "LU": 52.43,  "MK": 9.58,  "MG": 8.33,  "MW": 5.04,  "MY": 218.95,  "MV": 1.43,  "ML": 9.08,  "MT": 7.8,  "MR": 3.49,  "MU": 9.43,  "MX": 1004.04,  "MD": 5.36,  "MN": 5.81,  "ME": 3.88,  "MA": 91.7,  "MZ": 10.21,  "MM": 35.65,  "NA": 11.45,  "NP": 15.11,  "NL": 770.31,  "NZ": 138,  "NI": 6.38,  "NE": 5.6,  "NG": 206.66,  "NO": 413.51,  "OM": 53.78,  "PK": 174.79,  "PA": 27.2,  "PG": 8.81,  "PY": 17.17,  "PE": 153.55,  "PH": 189.06,  "PL": 438.88,  "PT": 223.7,  "QA": 126.52,  "RO": 158.39,  "RU": 1476.91,  "RW": 5.69,  "WS": 0.55,  "ST": 0.19,  "SA": 434.44,  "SN": 12.66,  "RS": 38.92,  "SC": 0.92,  "SL": 1.9,  "SG": 217.38,  "SK": 86.26,  "SI": 46.44,  "SB": 0.67,  "ZA": 354.41,  "ES": 1374.78,  "LK": 48.24,  "KN": 0.56,  "LC": 1,  "VC": 0.58,  "SD": 65.93,  "SR": 3.3,  "SZ": 3.17,  "SE": 444.59,  "CH": 522.44,  "SY": 59.63,  "TW": 426.98,  "TJ": 5.58,  "TZ": 22.43,  "TH": 312.61,  "TL": 0.62,  "TG": 3.07,  "TO": 0.3,  "TT": 21.2,  "TN": 43.86,  "TR": 729.05,  "TM": 17,  "UG": 17.12,  "UA": 136.56,  "AE": 239.65,  "GB": 2258.57,  "US": 0,  "UY": 40.71,  "UZ": 37.72,  "VU": 0.72,  "VE": 285.21,  "VN": 101.99,  "YE": 30.02,  "ZM": 15.69,  "ZW": 5.57
  };

  AtlasMap.langues = { "BD": 1000, "BE": 1000, "BF": 1000, "BG": 1000, "BA": 1000, "BN": 1000, "BO": 1000, "JP": 1000, "BI": 1000, "BJ": 1000, "BT": 1000, "JM": 1000, "BW": 1000, "BR": 1000, "BS": 1000, "BY": 1000, "BZ": 1000, "RU": 1000, "RW": 1000, "RS": 1000, "LT": 1000, "LU": 1000, "LR": 1000, "RO": 1000, "GW": 1000, "GT": 1000, "GR": 1000, "GQ": 1000, "GY": 1000, "GE": 1000, "GB": 1000, "GA": 1000, "GN": 1000, "GM": 1000, "GL": 1000, "KW": 1000, "GH": 1000, "OM": 1000, "_0": 1000, "JO": 1000, "HR": 1000, "HT": 1000, "HU": 1000, "HN": 1000, "PR": 1000, "PS": 1000, "PT": 1000, "PY": 1000, "PA": 1000, "PG": 1000, "PE": 1000, "PK": 1000, "PH": 1000, "PL": 1000, "ZM": 1000, "EH": 1000, "EE": 1000, "EG": 1000, "ZA": 1000, "EC": 1000, "AL": 1000, "AO": 1000, "KZ": 1000, "ET": 1000, "ZW": 1000, "ES": 1000, "ER": 1000, "ME": 1000, "MD": 1000, "MG": 1000, "MA": 1000, "UZ": 1000, "MM": 1000, "ML": 1000, "MN": 1000, "MK": 1000, "MW": 1000, "MR": 1000, "UG": 1000, "MY": 1000, "MX": 1000, "VU": 1000, "FR": 1000, "FI": 1000, "FJ": 1000, "FK": 1000, "NI": 1000, "NL": 1000, "NO": 1000, "NA": 1000, "NC": 1000, "NE": 1000, "NG": 1000, "NZ": 1000, "NP": 1000, "CI": 1000, "CH": 1000, "CO": 1, "CN": 1, "CM": 1, "CL": 1, "CA": 1, "CG": 1, "CF": 1, "CD": 1, "CZ": 1, "CY": 1, "CR": 1, "CU": 1, "SZ": 1, "SY": 1, "KG": 1, "KE": 1, "SS": 1, "SR": 1, "KH": 1, "SV": 1, "SK": 1, "KR": 1, "SI": 1, "KP": 1, "SO": 1, "SN": 1, "SL": 1, "SB": 1, "SA": 1, "SE": 1, "SD": 1, "DO": 1, "DJ": 1, "DK": 1, "DE": 1, "YE": 1, "AT": 1, "DZ": 1, "US": 1, "LV": 1, "UY": 1, "LB": 1, "LA": 1, "TW": 1, "TT": 1, "TR": 1, "LK": 1, "TN": 1, "TL": 1, "TM": 1, "TJ": 1, "LS": 1, "TH": 1, "TF": 1, "TG": 1, "TD": 1, "LY": 1, "AE": 1, "VE": 1, "AF": 1, "IQ": 1, "IS": 1, "IR": 1, "AM": 1, "IT": 1, "VN": 1, "AR": 1, "AU": 1, "IL": 1, "IN": 1, "TZ": 1, "AZ": 1, "IE": 1, "ID": 1, "UA": 1, "QA": 1, "MZ": 1};


  map = new jvm.Map({
    map: 'world_mill_en',
    container: $('.atlas-map'),
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
};



function changeLanguage(){
  $('.language').click(function(e){
  e.preventDefault();
  debugger
  map.series.regions[0].setValues(AtlasMap.langues);
  });
}


function addAutocompleteListener(){
  $( '#autocomplete' ).autocomplete({
    source: availableTags
  });
  $('#auto').submit(function(event){
    event.preventDefault();
    zoomTo(test[$('#autocomplete').val()]);
  });
}

function zoomInTo(dataCode){
  zoomTo(dataCode);
  toggleSideDivs();
}

function zoomTo(dataCode){
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
    zoomedIn = true;
    initializeImageCarousel();
  });

}

function toggleSideDivs(){
  if (divsShown === false){
    $('.country-destinations').animate({"right":"0px"}, "slow");
    $('.country-info').animate({"left":"0px"}, "slow");
    divsShown = true;
    console.log("true")
  }
  else {
    $('.country-destinations').animate({"right":"-2000px"}, "slow");
    $('.country-info').animate({"left":"-2000px"}, "slow");
    divsShown = false;
    console.log("false")
  }
}

function zoomOut(){
    // console.log('zoomed');
  $('.atlas-map').vectorMap('set', 'focus', {
    scale: 0, x: 0, y: 0,
    animate: true
  })
  toggleSideDivs();
  zoomedIn = false;
  currentCounty = null;
}

function addCountryClickListener() {
  var path = $('path');

  path.mousedown(function(){
    drag = false;
    setTimeout(function(){drag = true}, 250);
  });

  path.mouseup(function(click){
    click.stopPropagation();
    var mouseDown = false;

    if (drag === false) {
      var clickedCountry = $(this).attr('data-code');
      if (!zoomedIn) {
        zoomInTo(clickedCountry);
        currentCountry = clickedCountry;
      } else if (clickedCountry !== currentCountry || !currentCountry) {
        currentCountry = clickedCountry;
        zoomTo(clickedCountry);
      } else {
        zoomOut();
      }
    }
  });

}

function addOceanClickListener(){
  $('.atlas-map').on('mouseup', function(){
    zoomOut();
  });
}

function initializeImageCarousel(){
  $('.image-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  console.log('imagecarouselworks');
}
