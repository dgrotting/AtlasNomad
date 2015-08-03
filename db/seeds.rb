# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'mechanize'

mechanize = Mechanize.new

countries =
{"BD"=>"bangladesh",
 "BE"=>"belgium",
 "BF"=>"burkina-faso",
 "BG"=>"bulgaria",
 "BA"=>"bosnia-herzegovina",
 "BN"=>"brunei",
 "BO"=>"bolivia",
 "JP"=>"japan",
 "BI"=>"burundi",
 "BJ"=>"benin",
 "BT"=>"bhutan",
 "JM"=>"jamaica",
 "BW"=>"botswana",
 "BR"=>"brazil",
 "BS"=>"the-bahamas",
 "BY"=>"belarus",
 "BZ"=>"belize",
 "RU"=>"russia",
 "RW"=>"rwanda",
 "RS"=>"serbia",
 "LT"=>"lithuania",
 "LU"=>"luxembourg",
 "LR"=>"liberia",
 "RO"=>"romania",
 "GW"=>"guinea-bissau",
 "GT"=>"guatemala",
 "GR"=>"greece",
 "GQ"=>"equatorial-guinea",
 "GY"=>"guyana",
 "GE"=>"georgia",
 "GB"=>"united-kingdom",
 "GA"=>"gabon",
 "GN"=>"guinea",
 "GM"=>"the-gambia",
 "GL"=>"denmark",
 "KW"=>"kuwait",
 "GH"=>"ghana",
 "OM"=>"oman",
 "_1"=>"somalia",
 "_0"=>"kosovo",
 "JO"=>"jordan",
 "HR"=>"croatia",
 "HT"=>"haiti",
 "HU"=>"hungary",
 "HN"=>"honduras",
 # "PR"=>"puerto-rico",
 # "PS"=>"palestine",
 "PT"=>"Portugal",
 "PY"=>"paraguay",
 "PA"=>"panama",
 "PG"=>"papua-new-guinea",
 "PE"=>"peru",
 "PK"=>"pakistan",
 "PH"=>"philippines",
 "PL"=>"poland",
 "-99"=>"cyprus",
 "ZM"=>"zambia",
 # "EH"=>"w.-sahara",
 "EE"=>"estonia",
 "EG"=>"egypt",
 "ZA"=>"south-africa",
 "EC"=>"ecuador",
 "AL"=>"albania",
 "AO"=>"angola",
 "KZ"=>"kazakhstan",
 "ET"=>"ethiopia",
 "ZW"=>"zimbabwe",
 "ES"=>"spain",
 "ER"=>"eritrea",
 "ME"=>"montenegro",
 "MD"=>"moldova",
 "MG"=>"madagascar",
 "MA"=>"morocco",
 "UZ"=>"uzbekistan",
 "MM"=>"burma",
 "ML"=>"mali",
 "MN"=>"mongolia",
 "MK"=>"macedonia",
 "MW"=>"malawi",
 "MR"=>"mauritania",
 "UG"=>"uganda",
 "MY"=>"malaysia",
 "MX"=>"mexico",
 "VU"=>"vanuatu",
 "FR"=>"france",
 "FI"=>"finland",
 "FJ"=>"fiji",
 "FK"=>"united-kingdom",
 "NI"=>"nicaragua",
 "NL"=>"netherlands",
 "NO"=>"norway",
 "NA"=>"namibia",
 "NC"=>"new-caledonia",
 "NE"=>"niger",
 "NG"=>"nigeria",
 "NZ"=>"new-zealand",
 "NP"=>"nepal",
 "CI"=>"cote-divoire",
 "CH"=>"switzerland-and-liechtenstein",
 "CO"=>"colombia",
 "CN"=>"china",
 "CM"=>"cameroon",
 "CL"=>"chile",
 "CA"=>"canada",
 "CG"=>"congo-kinshasa",
 "CF"=>"central-african-republic",
 "CD"=>"congo-kinshasa",
 "CZ"=>"czech-republic",
 "CY"=>"cyprus",
 "CR"=>"costa-rica",
 "CU"=>"cuba",
 "SZ"=>"swaziland",
 "SY"=>"syria",
 "KG"=>"kyrgyzstan",
 "KE"=>"kenya",
 "SS"=>"sudan",
 "SR"=>"suriname",
 "KH"=>"cambodia",
 "SV"=>"el-salvador",
 "SK"=>"slovakia",
 "KR"=>"korea-south",
 "SI"=>"slovenia",
 "KP"=>"korea-north",
 "SO"=>"somalia",
 "SN"=>"senegal",
 "SL"=>"sierra-leone",
 "SB"=>"solomon-islands.",
 "SA"=>"saudi-arabia",
 "SE"=>"sweden",
 "SD"=>"sudan",
 "DO"=>"dominican-republic",
 "DJ"=>"djibouti",
 "DK"=>"denmark",
 "DE"=>"germany",
 "YE"=>"yemen",
 "AT"=>"austria",
 "DZ"=>"algeria",
 # "US"=>"united-states",
 "LV"=>"latvia",
 "UY"=>"uruguay",
 "LB"=>"lebanon",
 "LA"=>"laos",
 "TW"=>"taiwan",
 "TT"=>"trinidad-tobago",
 "TR"=>"turkey",
 "LK"=>"sri-lanka",
 "TN"=>"tunisia",
 "TL"=>"timor-leste",
 "TM"=>"turkmenistan",
 "TJ"=>"tajikistan",
 "LS"=>"lesotho",
 "TH"=>"thailand",
 "TF"=>"antarctica",
 "TG"=>"togo",
 "TD"=>"chad",
 "LY"=>"libya",
 "AE"=>"united-arab-emirates",
 "VE"=>"venezuela",
 "AF"=>"afghanistan",
 "IQ"=>"iraq",
 "IS"=>"iceland",
 "IR"=>"iran",
 "AM"=>"armenia",
 "IT"=>"italy",
 "VN"=>"vietnam",
 "AR"=>"argentina",
 "AU"=>"australia",
 # "IL"=>"israel",
 "IN"=>"india",
 "TZ"=>"tanzania",
 "AZ"=>"azerbaijan",
 "IE"=>"ireland",
 "ID"=>"indonesia",
 "UA"=>"ukraine",
 "QA"=>"qatar",
 "MZ"=>"mozambique"}

 files = [
"db/factbook/countrypdf_ae.txt",
"db/factbook/countrypdf_af.txt",
"db/factbook/countrypdf_ag.txt",
"db/factbook/countrypdf_aj.txt",
"db/factbook/countrypdf_al.txt",
"db/factbook/countrypdf_am.txt",
"db/factbook/countrypdf_ao.txt",
"db/factbook/countrypdf_ar.txt",
"db/factbook/countrypdf_as.txt",
"db/factbook/countrypdf_au.txt",
"db/factbook/countrypdf_ay.txt",
"db/factbook/countrypdf_bc.txt",
"db/factbook/countrypdf_be.txt",
"db/factbook/countrypdf_bf.txt",
"db/factbook/countrypdf_bg.txt",
"db/factbook/countrypdf_bh.txt",
"db/factbook/countrypdf_bk.txt",
"db/factbook/countrypdf_bl.txt",
"db/factbook/countrypdf_bm.txt",
"db/factbook/countrypdf_bn.txt",
"db/factbook/countrypdf_bo.txt",
"db/factbook/countrypdf_bp.txt",
"db/factbook/countrypdf_br.txt",
"db/factbook/countrypdf_bt.txt",
"db/factbook/countrypdf_bu.txt",
"db/factbook/countrypdf_bx.txt",
"db/factbook/countrypdf_by.txt",
"db/factbook/countrypdf_ca.txt",
"db/factbook/countrypdf_cb.txt",
"db/factbook/countrypdf_cd.txt",
"db/factbook/countrypdf_ce.txt",
"db/factbook/countrypdf_cg.txt",
"db/factbook/countrypdf_ch.txt",
"db/factbook/countrypdf_ci.txt",
"db/factbook/countrypdf_cm.txt",
"db/factbook/countrypdf_co.txt",
"db/factbook/countrypdf_cs.txt",
"db/factbook/countrypdf_ct.txt",
"db/factbook/countrypdf_cu.txt",
"db/factbook/countrypdf_cy.txt",
"db/factbook/countrypdf_da.txt",
"db/factbook/countrypdf_dj.txt",
"db/factbook/countrypdf_dr.txt",
"db/factbook/countrypdf_ec.txt",
"db/factbook/countrypdf_eg.txt",
"db/factbook/countrypdf_ei.txt",
"db/factbook/countrypdf_ek.txt",
"db/factbook/countrypdf_en.txt",
"db/factbook/countrypdf_er.txt",
"db/factbook/countrypdf_es.txt",
"db/factbook/countrypdf_et.txt",
"db/factbook/countrypdf_ez.txt",
"db/factbook/countrypdf_fi.txt",
"db/factbook/countrypdf_fj.txt",
"db/factbook/countrypdf_fk.txt",
"db/factbook/countrypdf_fr.txt",
"db/factbook/countrypdf_ga.txt",
"db/factbook/countrypdf_gb.txt",
"db/factbook/countrypdf_gg.txt",
"db/factbook/countrypdf_gh.txt",
"db/factbook/countrypdf_gl.txt",
"db/factbook/countrypdf_gm.txt",
"db/factbook/countrypdf_gr.txt",
"db/factbook/countrypdf_gt.txt",
"db/factbook/countrypdf_gv.txt",
"db/factbook/countrypdf_gy.txt",
"db/factbook/countrypdf_ha.txt",
"db/factbook/countrypdf_ho.txt",
"db/factbook/countrypdf_hr.txt",
"db/factbook/countrypdf_hu.txt",
"db/factbook/countrypdf_ic.txt",
"db/factbook/countrypdf_id.txt",
"db/factbook/countrypdf_in.txt",
"db/factbook/countrypdf_ir.txt",
"db/factbook/countrypdf_is.txt",
"db/factbook/countrypdf_it.txt",
"db/factbook/countrypdf_iv.txt",
"db/factbook/countrypdf_iz.txt",
"db/factbook/countrypdf_ja.txt",
"db/factbook/countrypdf_jm.txt",
"db/factbook/countrypdf_jo.txt",
"db/factbook/countrypdf_ke.txt",
"db/factbook/countrypdf_kg.txt",
"db/factbook/countrypdf_kn.txt",
"db/factbook/countrypdf_ks.txt",
"db/factbook/countrypdf_ku.txt",
"db/factbook/countrypdf_kv.txt",
"db/factbook/countrypdf_kz.txt",
"db/factbook/countrypdf_la.txt",
"db/factbook/countrypdf_le.txt",
"db/factbook/countrypdf_lg.txt",
"db/factbook/countrypdf_lh.txt",
"db/factbook/countrypdf_li.txt",
"db/factbook/countrypdf_lo.txt",
"db/factbook/countrypdf_lt.txt",
"db/factbook/countrypdf_lu.txt",
"db/factbook/countrypdf_ly.txt",
"db/factbook/countrypdf_ma.txt",
"db/factbook/countrypdf_md.txt",
"db/factbook/countrypdf_mg.txt",
"db/factbook/countrypdf_mi.txt",
"db/factbook/countrypdf_mj.txt",
"db/factbook/countrypdf_mk.txt",
"db/factbook/countrypdf_ml.txt",
"db/factbook/countrypdf_mo.txt",
"db/factbook/countrypdf_mr.txt",
"db/factbook/countrypdf_mu.txt",
"db/factbook/countrypdf_mx.txt",
"db/factbook/countrypdf_my.txt",
"db/factbook/countrypdf_mz.txt",
"db/factbook/countrypdf_nc.txt",
"db/factbook/countrypdf_ng.txt",
"db/factbook/countrypdf_nh.txt",
"db/factbook/countrypdf_ni.txt",
"db/factbook/countrypdf_nl.txt",
"db/factbook/countrypdf_no.txt",
"db/factbook/countrypdf_np.txt",
"db/factbook/countrypdf_ns.txt",
"db/factbook/countrypdf_nu.txt",
"db/factbook/countrypdf_nz.txt",
"db/factbook/countrypdf_od.txt",
"db/factbook/countrypdf_pa.txt",
"db/factbook/countrypdf_pe.txt",
"db/factbook/countrypdf_pk.txt",
"db/factbook/countrypdf_pl.txt",
"db/factbook/countrypdf_pm.txt",
"db/factbook/countrypdf_po.txt",
"db/factbook/countrypdf_pp.txt",
"db/factbook/countrypdf_pu.txt",
"db/factbook/countrypdf_qa.txt",
"db/factbook/countrypdf_ri.txt",
"db/factbook/countrypdf_ro.txt",
"db/factbook/countrypdf_rp.txt",
"db/factbook/countrypdf_rq.txt",
"db/factbook/countrypdf_rs.txt",
"db/factbook/countrypdf_rw.txt",
"db/factbook/countrypdf_sa.txt",
"db/factbook/countrypdf_sf.txt",
"db/factbook/countrypdf_sg.txt",
"db/factbook/countrypdf_si.txt",
"db/factbook/countrypdf_sl.txt",
"db/factbook/countrypdf_so.txt",
"db/factbook/countrypdf_sp.txt",
"db/factbook/countrypdf_su.txt",
"db/factbook/countrypdf_sw.txt",
"db/factbook/countrypdf_sy.txt",
"db/factbook/countrypdf_sz.txt",
"db/factbook/countrypdf_td.txt",
"db/factbook/countrypdf_th.txt",
"db/factbook/countrypdf_ti.txt",
"db/factbook/countrypdf_to.txt",
"db/factbook/countrypdf_ts.txt",
"db/factbook/countrypdf_tt.txt",
"db/factbook/countrypdf_tu.txt",
"db/factbook/countrypdf_tw.txt",
"db/factbook/countrypdf_tx.txt",
"db/factbook/countrypdf_tz.txt",
"db/factbook/countrypdf_ug.txt",
"db/factbook/countrypdf_uk.txt",
"db/factbook/countrypdf_up.txt",
"db/factbook/countrypdf_us.txt",
"db/factbook/countrypdf_uv.txt",
"db/factbook/countrypdf_uy.txt",
"db/factbook/countrypdf_uz.txt",
"db/factbook/countrypdf_ve.txt",
"db/factbook/countrypdf_vm.txt",
"db/factbook/countrypdf_wa.txt",
"db/factbook/countrypdf_wi.txt",
"db/factbook/countrypdf_wz.txt",
"db/factbook/countrypdf_ym.txt",
"db/factbook/countrypdf_za.txt",
"db/factbook/countrypdf_zi.txt"]

worldbook = {
"AE" => "United Arab Emirates",
"AF" => "Afghanistan",
"DZ" => "Algeria",
"AZ" => "Azerbaijan",
"AL" => "Albania",
"AM" => "Armenia",
"AO" => "Angola",
"AR" => "Argentina",
"AU" => "Australia",
"AT" => "Austria",
"TF" => "Antarctica",
"BW" => "Botswana",
"BE" => "Belgium",
"BS" => "The Bahamas",
"BD" => "Bangladesh",
"BZ" => "Belize",
"BA" => "Bosnia and Herzegovina",
"BO" => "Bolivia",
"MM" => "Burma",
"BJ" => "Benin",
"BY" => "Belarus",
"BR" => "Brazil",
"BT" => "Bhutan",
"BG" => "Bulgaria",
"BN" => "Brunei",
"BI" => "Burundi",
"CA" => "Canada",
"KH" => "Cambodia",
"TD" => "Chad",
"LK" => "Sri Lanka",
"CG" => "Congo, Democratic Republic of the",
"CN" => "China",
"CL" => "Chile",
"CM" => "Cameroon",
"CO" => "Colombia",
"CR" => "Costa Rica",
"CF" => "Central African Republic",
"CU" => "Cuba",
"-99" => "Cyprus",
"DK" => "Denmark",
"DJ" => "Djibouti",
"DO" => "Dominican Republic",
"EC" => "Ecuador",
"EG" => "Egypt",
"IE" => "Ireland",
"GQ" => "Equatorial Guinea",
"EE" => "Estonia",
"ER" => "Eritrea",
"SV" => "El Salvador",
"ET" => "Ethiopia",
"CZ" => "Czech Republic",
"FI" => "Finland",
"FJ" => "Fiji",
"FK" => "Falkland Islands (Islas Malvinas)",
"FR" => "France",
"GM" => "The Gambia",
"GA" => "Gabon",
"GE" => "Georgia",
"GH" => "Ghana",
"GL" => "Greenland",
"DE" => "Germany",
"GR" => "Greece",
"GT" => "Guatemala",
"GN" => "Guinea",
"GY" => "Guyana",
"HT" => "Haiti",
"HN" => "Honduras",
"HR" => "Croatia",
"HU" => "Hungary",
"IS" => "Iceland",
"ID" => "Indonesia",
"IN" => "India",
"IR" => "Iran",
"IL" => "Israel",
"IT" => "Italy",
"CI" => "Cote d'Ivoire",
"IQ" => "Iraq",
"JP" => "Japan",
"JM" => "Jamaica",
"JO" => "Jordan",
"KE" => "Kenya",
"KG" => "Kyrgyzstan",
"KP" => "Korea, North",
"KR" => "Korea, South",
"KW" => "Kuwait",
"_0" => "Kosovo",
"KZ" => "Kazakhstan",
"LA" => "Laos",
"LB" => "Lebanon",
"LV" => "Latvia",
"LT" => "Lithuania",
"LR" => "Liberia",
"SK" => "Slovakia",
"LS" => "Lesotho",
"LU" => "Luxembourg",
"LY" => "Libya",
"MG" => "Madagascar",
"MD" => "Moldova",
"MN" => "Mongolia",
"MW" => "Malawi",
"ME" => "Montenegro",
"MK" => "Macedonia",
"ML" => "Mali",
"MA" => "Morocco",
"MR" => "Mauritania",
"OM" => "Oman",
"MX" => "Mexico",
"MY" => "Malaysia",
"MZ" => "Mozambique",
"NC" => "New Caledonia",
"NE" => "Niger",
"VU" => "Vanuatu",
"NI" => "Nigeria",
"NL" => "Netherlands",
"NO" => "Norway",
"NP" => "Nepal",
"SR" => "Suriname",
"NG" => "Nicaragua",
"NZ" => "New Zealand",
"SS" => "South Sudan",
"PY" => "Paraguay",
"PE" => "Peru",
"PK" => "Pakistan",
"PL" => "Poland",
"PA" => "Panama",
"PT" => "Portugal",
"PG" => "Papua New Guinea",
"GW" => "Guinea-Bissau",
"QA" => "Qatar",
"RS" => "Serbia",
"RO" => "Romania",
"PH" => "Philippines",
"PR" => "Puerto Rico",
"RU" => "Russia",
"RW" => "Rwanda",
"SA" => "Saudi Arabia",
"ZA" => "South Africa",
"SN" => "Senegal",
"SI" => "Slovenia",
"SL" => "Sierra Leone",
"SB" => "Solomon Islands",
"SO" => "Somalia",
"ES" => "Spain",
"SD" => "Sudan",
"SE" => "Sweden",
"SY" => "Syria",
"CH" => "Switzerland",
"TT" => "Trinidad and Tobago",
"TH" => "Thailand",
"TJ" => "Tajikistan",
"TG" => "Togo",
"TN" => "Tunisia",
"TL" => "Timor-Leste",
"TR" => "Turkey",
"TW" => "Taiwan",
"TM" => "Turkmenistan",
"TZ" => "Tanzania",
"UG" => "Uganda",
"GB" => "United Kingdom",
"UA" => "Ukraine",
"US" => "United States",
"BF" => "Burkina Faso",
"UY" => "Uruguay",
"UZ" => "Uzbekistan",
"VE" => "Venezuela",
"VN" => "Vietnam",
"NA" => "Namibia",
"EH" => "Western Sahara",
"SZ" => "Swaziland",
"YE" => "Yemen",
"ZM" => "Zambia",
"ZW" => "Zimbabwe",
}


countries.each_key do |code|
	page = mechanize.get("http://travel.state.gov/content/passports/english/country/#{countries[code]}.html")
	p countries[code]
	flag = "http://travel.state.gov" + page.at('.flag').attributes['src'].value
	name = page.at('h1').text.strip
	name = "Greenland" if code == "GL"
	name = "Falkland Islands" if code == "FK"
	name = "South Sudan" if code == "SS"
	name = "United Kingdom" if code == "GB"
	Country.create(
		name: name,
		official_name: page.at('.official_name').text.strip.gsub("Official Name: ", ""),
		code: code,
		flag: flag,
		passport_validity: page.at('.quick_fact1 > p').text.strip,
		passport_pages: page.at('.quick_fact2 > p').text.strip,
		tourist_visa: page.at('.quick_fact3 > p').text.strip,
		vaccinations: page.at('.quick_fact4 > p').text.strip,
		entry_currency: page.at('.quick_fact5 > p').text.strip,
		exit_currency: page.at('.quick_fact6 > p').text.strip
	)
end

	Country.create(
		name: "Puerto Rico",
		official_name: "Puerto Rico",
		code: "PR",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/2000px-Flag_of_Puerto_Rico.svg.png",
		passport_validity: "Same as U.S.",
		passport_pages: "Same as U.S.",
		tourist_visa: "Same as U.S.",
		vaccinations: "Same as U.S.",
		entry_currency: "Same as U.S.",
		exit_currency: "Same as U.S."
	)

	Country.create(
		name: "Palestine",
		official_name: "Palestine",
		code: "PS",
		flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Palestine_flag.jpg",
		passport_validity: "Same as Isral (Not a joke)",
		passport_pages: "Same as Isral (Not a joke)",
		tourist_visa: "Same as Isral (Not a joke)",
		vaccinations: "Same as Isral (Not a joke)",
		entry_currency: "Same as Isral (Not a joke)",
		exit_currency: "Same as Isral (Not a joke)"
	)

	Country.create(
		name: "West Sahara",
		official_name: "West Sahara",
		code: "EH",
		flag: "http://www.mapsofworld.com/flags/images/world-flags/western-sahara-flag.jpg",
		passport_validity: "Not recommeneded for travel",
		passport_pages: "Not recommeneded for travel",
		tourist_visa: "Not recommeneded for travel",
		vaccinations: "Not recommeneded for travel",
		entry_currency: "Not recommeneded for travel",
		exit_currency: "Not recommeneded for travel"
	)

	Country.create(
		name: "United States",
		official_name: "The United States of America",
		code: "US",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_flag_48_stars.svg/220px-US_flag_48_stars.svg.png",
		passport_validity: "Atlas Nomad is designed to be used by US passport holders",
		passport_pages: "N/A",
		tourist_visa: "No visa required for passport holders",
		vaccinations: "N/A",
		entry_currency: "N/A",
		exit_currency: "N/A"
	)

	Country.create(
		name: "Israel",
		official_name: "Israel",
		code: "IL",
		flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
		passport_validity: "Six months",
		passport_pages: "One page required for entry stamp",
		tourist_visa: "Yes, but you can obtain at the port of entry",
		vaccinations: "Polio vaccination up to 1 year before travel is recommended.",
		entry_currency: "None",
		exit_currency: "None"
	)

	world = worldbook.invert

	files.each do |file|
		p file
		text = File.read(file)
		(/(?<=Introduction:: ).*(?=Background)/).match(text) == nil ?
		name = (/(?<=Introduction :: ).*(?=Background)/).match(text)[0].chomp :
		name = (/(?<=Introduction:: ).*(?=Background)/).match(text)[0].chomp
		name = "Tunisia" if name == "T unisia"
		name = "Taiwan" if name == "T aiwan"
		name = "Togo" if name == "T ogo"
		name = "Venezuela" if name == "V enezuela"
		name = "Yemen" if name == "Y emen"
		name = "The Bahamas" if name == "Bahamas, The"
		name = "The Gambia" if name == "Gambia, The"
		if name != "Antarctica"
			(/(?<=Capital:).*(?=geographic)/).match(text) == nil ?
			capital = (/(?<=Capital:).*(?=time)/).match(text)[0].chomp :
			capital = (/(?<=Capital:).*(?=geographic)/).match(text)[0].chomp
			capital.gsub('name: ', '')
		else
			capital = nil
		end
		(/(?<=Natural resources:\r).*(?=Land)/).match(text) == nil ?
		nat = (/(?<=Natural resources:\r).*(?=People)/).match(text)[0].chomp :
		nat = (/(?<=Natural resources:\r).*(?=Land)/).match(text)[0].chomp
		name == "Antarctica" ? lang = "All" : lang = (/(?<=Languages:\r).*(?=Religions)/).match(text)[0].chomp
		name == "Antarctica" ? rel = "All" : rel = (/(?<=Religions:\r).*(?=Population:)/).match(text)[0].chomp
		count = Country.where(code: world[name]).first
		count.update_attributes({
			climate: (/(?<=Climate:\r).*(?=Terrain)/).match(text)[0].chomp,
			terrain: (/(?<=Terrain:\r).*(?=Elevation)/).match(text)[0].chomp,
			nat_res: nat,
			languages: lang,
			religions: rel,
			capital: capital,
		})
		count.update_attribute(:climate, count.climate.slice!(0..199)) if count.climate.length > 200
		count.update_attribute(:terrain, count.terrain.slice!(0..199)) if count.terrain.length > 200
		count.update_attribute(:nat_res, count.nat_res.slice!(0..199)) if count.nat_res.length > 200
		count.update_attribute(:languages, count.languages.slice!(0..199)) if count.languages.length > 200
		count.update_attribute(:religions, count.religions.slice!(0..199)) if count.religions.length > 200
		(count.update_attribute(:capital, count.capital.slice!(0..199)) if count.capital.length > 200) if count.name != "Antarctica"
		count.save
	end

power = [
["Afghanistan", "220V 50Hz", ['C', 'F']],
["Albania", "230V 50Hz", ['C', 'F']],
["Algeria", "230V 50Hz", ['C', 'F']],
["Angola", "220V 50Hz", ['C']],
["Argentina", "220V 50Hz", ['C', 'I']],
["Armenia", "230V 50Hz", ['C', 'F']],
["Australia", "230V 50Hz", ['I']],
["Austria", "230V 50Hz", ['C', 'F']],
["Azerbaijan", "220V 50Hz", ['C', 'F']],
["The Bahamas", "120V 60Hz", ['A', 'B']],
["Bangladesh", "220V 50Hz", ['A', 'C', 'D', 'G', 'K']],
["Belarus", "220V 50Hz", ['C', 'F']],
["Belgium", "230V 50Hz", ['C', 'E']],
["Belize", "110V, 220V 60Hz", ['A', 'B', 'G']],
["Benin", "220V 50Hz", ['C', 'E']],
["Bhutan", "230V 50Hz", ['C', 'D', 'G']],
["Bolivia", "230V 50Hz", ['A', 'C']],
["Bosnia and Herzegovina", "230V 50Hz", ['C', 'F']],
["Botswana", "230V 50Hz", ['D', 'G']],
["Brazil", "127 V/220V 60Hz", ['C', 'N']],
["Bulgaria", "230V 50Hz", ['C', 'F']],
["Burkina Faso", "220V 50Hz", ['C', 'E']],
["Burma", "230V 50Hz", ['A', 'C', 'D', 'G', 'I']],
["Burundi", "220V 50Hz", ['C', 'E']],
["Cambodia", "230V 50Hz", ['A', 'C', 'G']],
["Cameroon", "220V 50Hz", ['C', 'E']],
["Canada", "120V 60Hz", ['A', 'B']],
["Central African Republic", "220V 50Hz", ['C', 'E']],
["Chad", "220V 50Hz", ['C', 'D', 'E', 'F']],
["Chile", "220V 50Hz", ['C', 'L']],
["China", "220V 50Hz", ['A', 'C', 'I']],
["Colombia", "110V 60Hz", ['A', 'B']],
["Democratic Republic of the Congo", "220V 50Hz", ['C', 'D', 'E']],
["Costa Rica", "120V 60Hz", ['A', 'B']],
["Côte d'Ivoire", "220V 50Hz", ['C', 'E']],
["Croatia", "230V 50Hz", ['C', 'F']],
["Cuba", "110V, 220V 60Hz", ['A', 'B', 'C', 'L']],
["Cyprus", "230V 50Hz", ['G']],
["Czech Republic", "230V 50Hz", ['C', 'E']],
["Denmark", "230V 50Hz", ['C', 'E', 'F', 'K']],
["Djibouti", "220V 50Hz", ['C', 'E']],
["Dominican Republic", "120V 60Hz", ['A', 'B']],
["Timor-Leste", "220V 50Hz", ['C', 'E', 'F', 'I']],
["Ecuador", "120V 60Hz", ['A', 'B']],
["Egypt", "220V 50Hz", ['C', 'F']],
["El Salvador", "120V 60Hz", ['A', 'B']],
["Equatorial Guinea", "220V 50Hz", ['C', 'E']],
["Eritrea", "230V 50Hz", ['C', 'L']],
["Estonia", "230V 50Hz", ['C', 'F']],
["Ethiopia", "220V 50Hz", ['C', 'F']],
["Falkland Islands", "240V 50Hz", ["G"]],
["Fiji", "240V 50Hz", ['I']],
["Finland", "230V 50Hz", ['C', 'F']],
["France", "230V 50Hz", ['C', 'E']],
["Gabon", "220V 50Hz", ['C']],
["Georgia", "220V 50Hz", ['C', 'F']],
["Germany", "230V 50Hz", ['C', 'F']],
["Ghana", "230V 50Hz", ['D', 'G']],
["Greece", "230V 50Hz", ['C', 'F']],
["Greenland", "230V 50Hz", ['C', 'E', 'F', 'K']],
["Guatemala", "120V 60Hz", ['A', 'B']],
["Guinea", "220V 50Hz", ['C', 'F', 'K']],
["Guinea-Bissau", "220V 50Hz", ["C"]],
["Guyana", "120V, 240V 60Hz", ['A', 'B', 'D', 'G']],
["Haiti", "110V 60Hz", ['A', 'B']],
["Honduras", "120V 60Hz", ['A', 'B']],
["Hungary", "230V 50Hz", ['C', 'F']],
["Iceland", "230V 50Hz", ['C', 'F']],
["India", "230V 50Hz", ['C', 'D', 'M']],
["Indonesia", "230V 50Hz", ['C', 'F']],
["Iran", "230V 50Hz", ['C', 'F']],
["Iraq", "230V 50Hz", ['C', 'D', 'G']],
["Ireland", "230V 50Hz", ['G']],
["Israel", "230V 50Hz", ['C', 'H']],
["Italy", "230V 50Hz", ['C', 'F', 'L']],
["Jamaica", "110V 50Hz", ['A', 'B']],
["Japan", "100V 50Hz, 60Hz", ['A', 'B']],
["Jordan", "230V 50Hz", ['C', 'D', 'F', 'G', 'J']],
["Kazakhstan", "220V 50Hz", ['C', 'F']],
["Kenya", "240V 50Hz", ['G']],
["North Korea", "220V 50Hz", ['C']],
["South Korea", "220V 60Hz", ['C', 'F']],
["Kosovo", "230V 50Hz", ['C', 'F']],
["Kuwait", "240V 50Hz", ["G"]],
["Kyrgyzstan", "220V 50Hz", ['C', 'F']],
["Laos", "230V 50Hz", ['A', 'B', 'C', 'E', 'F']],
["Latvia", "230V 50Hz", ['C', 'F']],
["Lebanon", "230V 50Hz", ['C', 'D', 'G']],
["Lesotho", "220V 50Hz", ['M']],
["Liberia", "120V 60Hz", ['A', 'B']],
["Libya", "230V 50Hz", ['C', 'L']],
["Lithuania", "230V 50Hz", ['C', 'F']],
["Luxembourg", "230V 50Hz", ['C', 'F']],
["Macedonia", "230V 50Hz", ['C', 'F']],
["Madagascar", "220V 50Hz", ['C', 'E']],
["Malawi", "230V 50Hz", ['G']],
["Malaysia", "240V 50Hz", ['G']],
["Mali", "220V 50Hz", ['C', 'E']],
["Mauritania", "220V 50Hz", ['C']],
["Mexico", "127 V 60Hz", ['A', 'B']],
["Moldova", "230V 50Hz", ['C', 'F']],
["Mongolia", "230V 50Hz", ['C', 'E']],
["Montenegro", "230V 50Hz", ['C', 'F']],
["Morocco", "220V 50Hz", ['C', 'E']],
["Mozambique", "220V 50Hz", ['C', 'F', 'M']],
["Namibia", "220V 50Hz", ['D', 'M']],
["Nepal", "230V 50Hz", ['C', 'D', 'M']],
["Netherlands", "230V 50Hz", ['C', 'F']],
["New Caledonia", "220V 50Hz", ['C', 'F']],
["New Zealand", "230V 50Hz", ['I']],
["Nicaragua", "120V 60Hz", ['A', 'B']],
["Niger", "220V 50Hz", ['C', 'D', 'E', 'F']],
["Nigeria", "230V 50Hz", ['D', 'G']],
["Norway", "230V 50Hz", ['C', 'F']],
["Oman", "240V 50Hz", ['G']],
["Pakistan", "230V 50Hz", ['C', 'D']],
["Palestine", "230V 50Hz", ['C', 'H']],
["Panama", "120V 60Hz", ['A', 'B']],
["Papua New Guinea", "240V 50Hz", ['I']],
["Paraguay", "220V 50Hz", ["C"]],
["Peru", "220V 60Hz", ['A', 'C']],
["Philippines", "220V 60Hz", ['A', 'B', 'C']],
["Poland", "230V 50Hz", ['C', 'E']],
["Portugal", "230V 50Hz", ['C', 'F']],
["Puerto Rico", "120V 60Hz", ['A', 'B']],
["Qatar", "240V 50Hz", ['G']],
["Romania", "230V 50Hz", ['C', 'F']],
["Russia", "220V 50Hz", ['C', 'F']],
["Rwanda", "230V 50Hz", ['C', 'J']],
["Saudi Arabia", "230V 60Hz", ['G']],
["Senegal", "230V 50Hz", ['C', 'D', 'E', 'K']],
["Serbia", "230V 50Hz", ['C', 'F']],
["Sierra Leone", "230V 50Hz", ['D', 'G']],
["Slovakia", "230V 50Hz", ['C', 'E']],
["Slovenia", "230V 50Hz", ['C', 'F']],
["Solomon Islands", "230V 50Hz", ['G', 'I']],
["Somalia", "220V 50Hz", ['C']],
["South Africa", "230V 50Hz", ['C', 'D', 'M', 'N']],
["South Sudan", "230V 50Hz", ['C', 'D']],
["Spain", "230V 50Hz", ['C', 'F']],
["Sri Lanka", "230V 50Hz", ['D', 'G']],
["Sudan", "230V 50Hz", ['C', 'D']],
["Suriname", "127 V, 230V 60Hz", ['A', 'B', 'C', 'F']],
["Swaziland", "230V 50Hz", ['M']],
["Sweden", "230V 50Hz", ['C', 'F']],
["Switzerland", "230V 50Hz", ['C', 'J']],
["Syria", "220V 50Hz", ['C', 'E', 'L']],
["Taiwan", "110V 60Hz", ['A', 'B']],
["Tajikistan", "220V 50Hz", ['C', 'F']],
["Tanzania", "230V 50Hz", ['D', 'G']],
["Thailand", "230V 50Hz", ['A', 'B', 'C', 'O']],
["Togo", "220V 50Hz", ['C']],
["Trinidad and Tobago", "115V 60Hz", ['A', 'B']],
["Tunisia", "230V 50Hz", ['C', 'E']],
["Turkey", "230V 50Hz", ['C', 'F']],
["Turkmenistan", "220V 50Hz", ['C', 'F']],
["Uganda", "240V 50Hz", ['G']],
["Ukraine", "230V 50Hz", ['C', 'F']],
["United Arab Emirates", "230V 50Hz", ['G']],
["United Kingdom", "230V 50Hz", ['G']],
["United States", "120V 60Hz", ['A', 'B']],
["Uruguay", "220V 50Hz", ['C', 'F', 'L']],
["Uzbekistan", "220V 50Hz", ['C', 'F']],
["Vanuatu", "230V 50Hz", ['I']],
["Venezuela", "120V 60Hz", ['A', 'B']],
["Vietnam", "220V 50Hz", ['A', 'C', 'D']],
["Yemen", "230V 50Hz", ['A', 'D', 'G']],
["Zambia", "230V 50Hz", ['C', 'D', 'G']],
["Zimbabwe", "240V 50Hz", ['D', 'G']]
]

power.each do |line|
	p line
	count = Country.where(name: line[0]).first
	line[2].include?('A') || line[2].include?('B') ?
	converter = false :
	converter = true
	count.update_attributes(
		volts: line[1],
		sockets: line[2].join(", "),
		need_converter: converter
		 )
	count.save
end

bmi = [
["Argentina", "$3.25"],
["Australia", "$4.32"],
["Brazil", "$5.21"],
["United Kingdom", "$4.37"],
["Canada", "$4.64"],
["Chile", "$3.35"],
["China", "$2.77"],
["Colombia", "$3.34"],
["Costa Rica", "$4.01"],
["Czech Republic", "$2.92"],
["Denmark", "$5.38"],
["Egypt", "$2.30"],
# ["Euro area", "4.26"],
# ["Hong Kong", "2.43"],
["Hungary", "$3.17"],
["India", "$1.89"],
["Indonesia", "$2.24"],
["Israel", "$4.45"],
["Japan", "$3.14"],
["Malaysia", "$2.11"],
["Mexico", "$3.35"],
["New Zealand", "$4.49"],
["Norway", "$6.30"],
["Pakistan", "$2.98"],
["Peru", "$3.32"],
["Philippines", "$3.67"],
["Poland", "$2.48"],
["Russia", "$1.36"],
["Saudi Arabia", "$2.93"],
["South Africa", "$2.22"],
["South Korea", "$3.78"],
["Sri Lanka", "$2.65"],
["Sweden", "$4.97"],
["Switzerland", "$7.54"],
["Taiwan", "$2.51"],
["Thailand", "$3.04"],
["Turkey", "$3.96"],
["United Arab Emirates", "$3.54"],
["Ukraine", "$1.20"],
["United States", "$4.79"],
["Uruguay", "$4.63"],
["Venezuela", "$2.53"],
["Vietnam", "$2.81"],
["Austria", "$3.93"],
["Belgium", "$4.29"],
["Estonia", "$3.36"],
["Finland", "$4.75"],
["France", "$4.52"],
["Germany", "$4.25"],
["Greece", "$3.53"],
["Ireland", "$4.04"],
["Italy", "$4.46"],
["Netherlands", "$4.00"],
["Portugal", "$3.48"],
["Spain", "$4.23"]
]

bmi.each do |country|
	p country
	count = Country.where(name: country[0]).first
	count.update_attribute(:bmi, country[1])
	count.save
end

ppp_2014 = {
"Afghanistan" => "$3.33",
"Albania" => "$2.50",
"Algeria" => "$2.50",
"Angola" => "$1.25",
"Armenia" => "$2.50",
"Australia" => "$0.71",
"Austria" => "$0.91",
"Azerbaijan" => "$2.00",
"The Bahamas" => "$1.11",
"Bangladesh" => "$3.33",
"Belarus" => "$2.50",
"Belgium" => "$0.91",
"Belize" => "$1.66",
"Benin" => "$2.50",
"Bhutan" => "$3.33",
"Bolivia" => "$2.00",
"Bosnia and Herzegovina" => "$2.00",
"Botswana" => "$2.50",
"Brazil" => "$1.43",
"Bulgaria" => "$2.00",
"Burkina Faso" => "$2.50",
"Burundi" => "$2.50",
"Cambodia" => "$3.33",
"Cameroon" => "$2.00",
"Canada" => "$0.91",
"Central African Republic" => "$1.66",
"Chad" => "$2.00",
"Chile" => "$1.43",
"China" => "$1.66",
"Colombia" => "$1.66",
"Democratic Republic of the Congo" => "$1.66",
"Costa Rica" => "$1.43",
"Côte d'Ivoire" => "$2.00",
"Croatia" => "$1.66",
"Cuba" => "$3.33",
"Cyprus" => "$1.11",
"Czech Republic" => "$1.66",
"Denmark" => "$0.71",
"Djibouti" => "$1.66",
"Dominican Republic" => "$2.00",
"Ecuador" => "$1.66",
"Egypt" => "$3.33",
"El Salvador" => "$2.00",
"Equatorial Guinea" => "$1.66",
"Eritrea" => "$2.00",
"Estonia" => "$1.43",
"Ethiopia" => "$2.50",
"Fiji" => "$1.66",
"Finland" => "$0.83",
"France" => "$0.91",
"Gabon" => "$2.00",
"The Gambia" => "$3.33",
"Georgia" => "$2.00",
"Germany" => "$1.00",
"Ghana" => "$2.50",
"Greece" => "$1.25",
"Guatemala" => "$2.00",
"Guinea" => "$2.50",
"Guinea-Bissau" => "$2.50",
"Guyana" => "$1.66",
"Haiti" => "$2.00",
"Honduras" => "$2.00",
"Hungary" => "$1.66",
"Iceland" => "$0.83",
"India" => "$3.33",
"Indonesia" => "$3.33",
"Iran" => "$3.33",
"Iraq" => "$2.50",
"Ireland" => "$0.91",
"Israel" => "$0.91",
"Italy" => "$1.00",
"Jamaica" => "$1.66",
"Japan" => "$1.00",
"Jordan" => "$2.50",
"Kazakhstan" => "$2.00",
"Kenya" => "$2.00",
"South Korea" => "$1.25",
"Kosovo" => "$2.50",
"Kuwait" => "$1.66",
"Laos" => "$3.33",
"Latvia" => "$1.43",
"Lebanon" => "$1.66",
"Lesotho" => "$2.50",
"Liberia" => "$2.00",
"Libya" => "$2.50",
"Lithuania" => "$1.66",
"Luxembourg" => "$0.83",
"Macedonia" => "$2.50",
"Madagascar" => "$3.33",
"Malawi" => "$3.33",
"Malaysia" => "$2.50",
"Mali" => "$2.50",
"Mauritania" => "$3.33",
"Mexico" => "$1.66",
"Moldova" => "$2.50",
"Mongolia" => "$3.33",
"Montenegro" => "$2.00",
"Morocco" => "$2.50",
"Mozambique" => "$2.00",
"Namibia" => "$1.66",
"Nepal" => "$3.33",
"Netherlands" => "$0.91",
"New Zealand" => "$0.83",
"Nicaragua" => "$2.50",
"Niger" => "$2.00",
"Nigeria" => "$2.00",
"Norway" => "$0.67",
"Oman" => "$2.00",
"Pakistan" => "$3.33",
"Panama" => "$1.66",
"Papua New Guinea" => "$1.25",
"Paraguay" => "$2.00",
"Peru" => "$2.00",
"Philippines" => "$2.50",
"Poland" => "$1.66",
"Portugal" => "$1.25",
"Puerto Rico" => "$1.25",
"Qatar" => "$1.43",
"Romania" => "$2.00",
"Russia" => "$2.00",
"Rwanda" => "$2.50",
"Saudi Arabia" => "$2.00",
"Senegal" => "$2.00",
"Serbia" => "$2.00",
"Sierra Leone" => "$2.50",
"Slovenia" => "$1.25",
"Solomon Islands" => "$1.00",
"South Africa" => "$2.00",
"South Sudan" => "$2.50",
"Spain" => "$1.11",
"Sri Lanka" => "$3.33",
"Sudan" => "$2.00",
"Suriname" => "$1.66",
"Swaziland" => "$2.50",
"Sweden" => "$0.77",
"Switzerland" => "$0.67",
"Tajikistan" => "$2.50",
"Tanzania" => "$2.50",
"Thailand" => "$2.50",
"Timor-Leste" => "$1.66",
"Togo" => "$2.50",
"Trinidad and Tobago" => "$1.66",
"Tunisia" => "$2.50",
"Turkey" => "$2.00",
"Turkmenistan" => "$1.66",
"Uganda" => "$2.50",
"Ukraine" => "$2.50",
"United Arab Emirates" => "$1.43",
"United Kingdom" => "$0.83",
"United States" => "$1.00",
"Uruguay" => "$1.25",
"Uzbekistan" => "$2.50",
"Vanuatu" => "$0.91",
"Venezuela" => "$1.11",
"Vietnam" => "$2.50",
"Yemen" => "$2.50",
"Zambia" => "$2.50",
"Zimbabwe" => "$2.00"
}

ppp_2014.each do |country, price|
	p country
	count = Country.where(name: country).first
	count.update_attribute(:ppp, price)
	count.save
end

######################################
## WARNINGS ##
######################################

warning_page = mechanize.get("http://travel.state.gov/content/passports/english/alertswarnings.html")

table = warning_page.at('table > tbody')

trs = table.css('tr')
links = trs.css('a')

array = []

trs.each do |tr|
	tr.css('td').each do |line|
		array << line.text.strip
	end
end

warning_array = array.each_slice(3).to_a
i = 0
warning_array.each do |warning|
	warning << links[i].attributes["href"].value
	i += 1
end

warning_array.each do |warning|
	p warning
	search = warning[2].gsub(" Travel Warning", "") if warning[0] == "Warning"
	country = Country.where(name: search).first
	country == nil ? country = 0 : country = country.id
	Warning.create(
		country_id: country,
		warning_type: warning[0],
		date: warning[1],
		location: warning[2],
		warning_link: "http://travel.state.gov#{warning[3]}"
		)
end




######################################
## DESTINATIONS ##
######################################

destinations = [
"bangladesh",
"belgium",
"burkina-faso",
"bulgaria",
"http://www.lonelyplanet.com/bosnia-and-hercegovina/things-to-do/top-things-to-do-in-bosnia-hercegovina",
"brunei-darussalam",
"bolivia",
"japan",
# "burundi",
"benin",
"bhutan",
"jamaica",
"botswana",
"brazil",
"the-bahamas",
"belarus",
"belize",
"russia",
"rwanda",
"serbia",
"lithuania",
"luxembourg",
# "liberia",
"romania",
# "guinea-bissau",
"guatemala",
"greece",
# "guinea",
"http://www.lonelyplanet.com/the-guianas/guyana/things-to-do/top-things-to-do-in-guyana",
"georgia",
"england",
"gabon",
# "guinea",
"the-gambia",
"denmark",
"kuwait",
"ghana",
"oman",
# "somalia",
"kosovo",
"jordan",
"croatia",
"haiti",
"hungary",
"honduras",
"puerto-rico",
# "palestine",
"portugal",
"paraguay",
"panama",
"papua-new-guinea",
"peru",
"pakistan",
"http://www.lonelyplanet.com/philippines/things-to-do/top-things-to-do-in-the-philippines",
"poland",
"cyprus",
"zambia",
# "w.-sahara",
"estonia",
"egypt",
"south-africa",
# "ecuador",
"albania",
# "angola",
"kazakhstan",
"ethiopia",
"zimbabwe",
"spain",
"eritrea",
"montenegro",
"moldova",
"madagascar",
"morocco",
"uzbekistan",
"http://www.lonelyplanet.com/myanmar-burma/things-to-do/top-things-to-do-in-myanmar",
# "mali",
"mongolia",
"macedonia",
"malawi",
# "mauritania",
# "uganda",
"malaysia",
"mexico",
"vanuatu",
"france",
"finland",
"fiji",
# "england",
"nicaragua",
"the-netherlands",
"norway",
"namibia",
"new-caledonia",
"niger",
"nigeria",
"new-zealand",
"nepal",
"http://www.lonelyplanet.com/cote-divoire/things-to-do/top-things-to-do-in-cote-d-ivoire",
"switzerland",
"colombia",
"china",
"cameroon",
"chile",
"canada",
"http://www.lonelyplanet.com/congo/things-to-do/top-things-to-do-in-the-republic-of-congo",
# "central-african-republic",
"http://www.lonelyplanet.com/congo/things-to-do/top-things-to-do-in-the-republic-of-congo",
"http://www.lonelyplanet.com/czech-republic/things-to-do/top-things-to-do-in-the-czech-republic",
"cyprus",
"costa-rica",
"cuba",
"swaziland",
# "syria",
"kyrgyzstan",
# "kenya",
"sudan",
"http://www.lonelyplanet.com/the-guianas/suriname/things-to-do/top-things-to-do-in-suriname",
"cambodia",
"el-salvador",
# "slovakia",
"south-korea",
"slovenia",
# "korea-north",
# "somalia",
"senegal",
"sierra-leone",
"http://www.lonelyplanet.com/solomon-islands/things-to-do/top-things-to-do-in-solomon-islands",
"saudi-arabia",
"sweden",
"sudan",
# "http://www.lonelyplanet.com/dominican-republic/things-to-do/top-things-to-do-in-the-dominican-republic",
"djibouti",
"denmark",
"germany",
"yemen",
"austria",
"algeria",
"http://www.lonelyplanet.com/usa/things-to-do/top-things-to-do-in-the-usa",
"latvia",
"uruguay",
"lebanon",
"laos",
"taiwan",
# "http://www.lonelyplanet.com/trinidad-and-tobago/things-to-do/top-things-to-do-in-trinidad-tobago",
"turkey",
"sri-lanka",
"tunisia",
# "east-timor", Commented out because it 404s
"turkmenistan",
"tajikistan",
"lesotho",
"thailand",
# "antarctica",
"togo",
# "chad",
"libya",
"united-arab-emirates",
"venezuela",
"afghanistan",
# "iraq",
"iceland",
# "iran",
"armenia",
"italy",
"vietnam",
"argentina",
"australia",
# "israel",
"india",
"tanzania",
"azerbaijan",
"ireland",
"indonesia",
"ukraine",
"qatar",
"mozambique"]

destinations.each do |country|
	p country
	country.length > 50 ? url = country : url = "http://www.lonelyplanet.com/#{country}/things-to-do/top-things-to-do-in-#{country}"
	page = mechanize.get(url)
	thing = page.at('.stack__content')
	places = thing.css('.card__mask')
	places.each do |place|
		code = countries.key(country)
		id = Country.where(code: code).first.id if Country.where(code: code).first != nil
		# countries.key(country) == nil ? id = nil : id = Country.where(name: country.capitalize).first.id if Country.where(name: country.capitalize).first != nil
		Destination.create(
			country_id: id,
			name: place.css('.card__content__title').children.text.lstrip.chomp,
			desc: place.css('.card__content__desc').children[1].children.text.lstrip.chomp
		)
	end
end

######################################
## IMAGES ##
######################################

destinations = [
"bangladesh",
"belgium",
"burkina-faso",
"bulgaria",
"bosnia-and-hercegovina",
"brunei-darussalam",
"bolivia",
"japan",
# "burundi",
"benin",
"bhutan",
"jamaica",
"botswana",
"brazil",
"the-bahamas",
"belarus",
"belize",
"russia",
"rwanda",
"serbia",
"lithuania",
"luxembourg",
"liberia",
"romania",
# "guinea-bissau",
"guatemala",
"greece",
# "equatorial-guinea",
# "guyana",
"georgia",
"england",
"gabon",
# "guinea",
"the-gambia",
"denmark",
"kuwait",
"ghana",
"oman",
"somalia",
# "kosovo",
"jordan",
"croatia",
"haiti",
"hungary",
"honduras",
"puerto-rico",
# "palestine",
"portugal",
# "paraguay",
"panama",
"papua-new-guinea",
"peru",
"pakistan",
"philippines",
"poland",
"cyprus",
"zambia",
# "w.-sahara",
"estonia",
"egypt",
"south-africa",
"ecuador",
"albania",
"angola",
"kazakhstan",
"ethiopia",
"zimbabwe",
"spain",
"eritrea",
"montenegro",
"moldova",
"madagascar",
"morocco",
"uzbekistan",
"myanmar-burma",
"mali",
"mongolia",
"macedonia",
"malawi",
# "mauritania",
"uganda",
"malaysia",
"mexico",
"vanuatu",
"france",
"finland",
"fiji",
# "england",
"nicaragua",
"the-netherlands",
"norway",
"namibia",
# "new-caledonia",
"niger",
"nigeria",
"new-zealand",
"nepal",
"cote-divoire",
"switzerland",
"colombia",
"china",
# "cameroon",
"chile",
"canada",
# "http://www.lonelyplanet.com/congo/things-to-do/top-things-to-do-in-the-republic-of-congo",
# "central-african-republic",
# "http://www.lonelyplanet.com/congo/things-to-do/top-things-to-do-in-the-republic-of-congo",
"czech-republic",
"cyprus",
"costa-rica",
"cuba",
"swaziland",
"syria",
"kyrgyzstan",
"kenya",
# "sudan",
"the-guianas",
"cambodia",
"el-salvador",
"slovakia",
"south-korea",
"slovenia",
# "korea-north",
"somalia",
"senegal",
"sierra-leone",
"solomon-islands",
"saudi-arabia",
"sweden",
# "sudan",
"dominican-republic",
"djibouti",
"denmark",
"germany",
"yemen",
"austria",
"algeria",
"usa",
"latvia",
"uruguay",
"lebanon",
"laos",
"taiwan",
# "http://www.lonelyplanet.com/trinidad-and-tobago/things-to-do/top-things-to-do-in-trinidad-tobago",
"turkey",
"sri-lanka",
"tunisia",
"east-timor",
# "turkmenistan",
# "tajikistan",
"lesotho",
"thailand",
"antarctica",
"togo",
# "chad",
"libya",
"united-arab-emirates",
"venezuela",
"afghanistan",
# "iraq",
"iceland",
"iran",
# "armenia",
"italy",
"vietnam",
"argentina",
"australia",
"http://www.lonelyplanet.com/israel-the-palestinian-territories/israel/images",
"india",
"tanzania",
"azerbaijan",
"ireland",
"indonesia",
"ukraine",
"qatar",
"mozambique"]

destinations.each do |country|
	p country
	country.length > 50 ? url = country : url = "http://www.lonelyplanet.com/#{country}/images"
	page = mechanize.get(url)
	images = page.at('.slider__container')

	url == "http://www.lonelyplanet.com/israel-the-palestinian-territories/israel/images" ? code = "IL" : code = countries.key(country)
	id = Country.where(code: code).first.id if Country.where(code: code).first != nil
	Image.create(
		country_id: id,
		desc: images.css('div.gallery__slide.is-current').css('img').first[:alt],
		url: images.css('div.gallery__slide.is-current').css('img').first[:src].gsub("//images-resrc.staticlp.com/S=W1000M,H700M/O=85/", "")
		)

	collection = images.css('div.gallery__slide.is-hidden').css('img')
	p collection.length
	if collection.length > 9
		i = 0
		9.times do
			url = collection[i][:"data-src"].gsub("//images-resrc.staticlp.com/S=W1000M,H700M/O=85/", "")
			Image.create(
				country_id: id,
				desc: collection[i][:alt],
				url: url
			)
			i += 1
		end
	else
		collection.each do |place|
			url = place[:"data-src"].gsub("//images-resrc.staticlp.com/S=W1000M,H700M/O=85/", "")
			Image.create(
				country_id: id,
				desc: place[:alt],
				url: url
			)
		end
	end
end
