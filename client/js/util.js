function Util() {

}

Util.prototype.say = function (msg) {

    alert(msg);
}

var feedMap = [{"i":"0","value":"82","v1":"37","v2":"6","v3":"69"},{"i":"1","value":"47","v1":"6","v2":"38","v3":"108"},{"i":"2","value":"45","v1":"68","v2":"106","v3":"18"},{"i":"3","value":"73","v1":"13","v2":"53","v3":"102"},{"i":"4","value":"39","v1":"17","v2":"67","v3":"55"},{"i":"5","value":"112","v1":"60","v2":"55","v3":"50"},{"i":"6","value":"115","v1":"61","v2":"5","v3":"21"},{"i":"7","value":"68","v1":"85","v2":"48","v3":"110"},{"i":"8","value":"82","v1":"85","v2":"104","v3":"53"},{"i":"9","value":"64","v1":"85","v2":"57","v3":"43"},{"i":"10","value":"115","v1":"92","v2":"98","v3":"51"},{"i":"11","value":"66","v1":"54","v2":"37","v3":"34"},{"i":"12","value":"4","v1":"10","v2":"25","v3":"50"},{"i":"13","value":"109","v1":"66","v2":"69","v3":"62"},{"i":"14","value":"68","v1":"53","v2":"55","v3":"100"},{"i":"15","value":"7","v1":"104","v2":"7","v3":"10"},{"i":"16","value":"91","v1":"36","v2":"5","v3":"109"},{"i":"17","value":"4","v1":"39","v2":"17","v3":"107"},{"i":"18","value":"93","v1":"87","v2":"17","v3":"20"},{"i":"19","value":"57","v1":"109","v2":"67","v3":"23"},{"i":"20","value":"120","v1":"86","v2":"20","v3":"99"},{"i":"21","value":"115","v1":"46","v2":"103","v3":"66"},{"i":"22","value":"46","v1":"70","v2":"66","v3":"35"},{"i":"23","value":"77","v1":"45","v2":"86","v3":"38"},{"i":"24","value":"76","v1":"6","v2":"8","v3":"94"},{"i":"25","value":"5","v1":"105","v2":"94","v3":"27"},{"i":"26","value":"17","v1":"26","v2":"48","v3":"96"},{"i":"27","value":"44","v1":"38","v2":"68","v3":"62"},{"i":"28","value":"9","v1":"63","v2":"94","v3":"74"},{"i":"29","value":"51","v1":"71","v2":"70","v3":"53"},{"i":"30","value":"23","v1":"43","v2":"96","v3":"29"},{"i":"31","value":"22","v1":"69","v2":"59","v3":"83"},{"i":"32","value":"36","v1":"83","v2":"18","v3":"66"},{"i":"33","value":"69","v1":"38","v2":"72","v3":"61"},{"i":"34","value":"48","v1":"68","v2":"44","v3":"82"},{"i":"35","value":"25","v1":"58","v2":"82","v3":"105"},{"i":"36","value":"109","v1":"96","v2":"90","v3":"69"},{"i":"37","value":"90","v1":"63","v2":"16","v3":"87"},{"i":"38","value":"72","v1":"89","v2":"37","v3":"86"},{"i":"39","value":"9","v1":"43","v2":"79","v3":"34"},{"i":"40","value":"21","v1":"58","v2":"63","v3":"77"},{"i":"41","value":"83","v1":"88","v2":"26","v3":"18"},{"i":"42","value":"101","v1":"34","v2":"85","v3":"42"},{"i":"43","value":"76","v1":"60","v2":"38","v3":"21"},{"i":"44","value":"52","v1":"59","v2":"33","v3":"118"},{"i":"45","value":"67","v1":"25","v2":"105","v3":"38"},{"i":"46","value":"113","v1":"89","v2":"16","v3":"28"},{"i":"47","value":"34","v1":"37","v2":"99","v3":"24"},{"i":"48","value":"53","v1":"86","v2":"106","v3":"31"},{"i":"49","value":"33","v1":"47","v2":"8","v3":"117"},{"i":"50","value":"86","v1":"108","v2":"62","v3":"23"},{"i":"51","value":"24","v1":"107","v2":"8","v3":"93"},{"i":"52","value":"87","v1":"18","v2":"114","v3":"93"},{"i":"53","value":"18","v1":"20","v2":"37","v3":"61"},{"i":"54","value":"45","v1":"11","v2":"45","v3":"78"},{"i":"55","value":"65","v1":"55","v2":"58","v3":"92"},{"i":"56","value":"50","v1":"67","v2":"95","v3":"14"},{"i":"57","value":"110","v1":"41","v2":"104","v3":"62"},{"i":"58","value":"109","v1":"78","v2":"14","v3":"88"},{"i":"59","value":"113","v1":"111","v2":"16","v3":"88"},{"i":"60","value":"69","v1":"31","v2":"17","v3":"114"},{"i":"61","value":"12","v1":"114","v2":"106","v3":"27"},{"i":"62","value":"114","v1":"16","v2":"9","v3":"32"},{"i":"63","value":"33","v1":"102","v2":"26","v3":"34"},{"i":"64","value":"6","v1":"103","v2":"21","v3":"83"},{"i":"65","value":"118","v1":"63","v2":"99","v3":"82"},{"i":"66","value":"91","v1":"89","v2":"93","v3":"34"},{"i":"67","value":"118","v1":"87","v2":"16","v3":"114"},{"i":"68","value":"102","v1":"110","v2":"112","v3":"36"},{"i":"69","value":"70","v1":"113","v2":"12","v3":"47"},{"i":"70","value":"46","v1":"98","v2":"88","v3":"100"},{"i":"71","value":"15","v1":"106","v2":"96","v3":"39"},{"i":"72","value":"21","v1":"73","v2":"64","v3":"59"},{"i":"73","value":"6","v1":"97","v2":"80","v3":"114"},{"i":"74","value":"95","v1":"85","v2":"75","v3":"7"},{"i":"75","value":"104","v1":"67","v2":"47","v3":"119"},{"i":"76","value":"29","v1":"51","v2":"10","v3":"73"},{"i":"77","value":"107","v1":"110","v2":"29","v3":"117"},{"i":"78","value":"9","v1":"84","v2":"101","v3":"7"},{"i":"79","value":"36","v1":"12","v2":"99","v3":"53"},{"i":"80","value":"101","v1":"59","v2":"20","v3":"15"},{"i":"81","value":"38","v1":"41","v2":"13","v3":"51"},{"i":"82","value":"114","v1":"116","v2":"9","v3":"4"},{"i":"83","value":"56","v1":"72","v2":"92","v3":"106"},{"i":"84","value":"66","v1":"82","v2":"105","v3":"32"},{"i":"85","value":"46","v1":"73","v2":"26","v3":"101"},{"i":"86","value":"47","v1":"106","v2":"47","v3":"52"},{"i":"87","value":"89","v1":"5","v2":"77","v3":"21"},{"i":"88","value":"111","v1":"16","v2":"107","v3":"14"},{"i":"89","value":"26","v1":"53","v2":"69","v3":"113"},{"i":"90","value":"46","v1":"4","v2":"116","v3":"87"},{"i":"91","value":"8","v1":"54","v2":"105","v3":"69"},{"i":"92","value":"68","v1":"20","v2":"36","v3":"98"},{"i":"93","value":"57","v1":"36","v2":"100","v3":"51"},{"i":"94","value":"27","v1":"48","v2":"50","v3":"117"},{"i":"95","value":"7","v1":"40","v2":"39","v3":"56"},{"i":"96","value":"19","v1":"94","v2":"111","v3":"49"},{"i":"97","value":"11","v1":"17","v2":"32","v3":"8"},{"i":"98","value":"66","v1":"112","v2":"34","v3":"120"},{"i":"99","value":"93","v1":"90","v2":"95","v3":"43"}];

var countries_list = [
        {
            name: 'Afghanistan',
            code: 'AF'
        },
        {
            name: 'Åland Islands',
            code: 'AX'
        },
        {
            name: 'Albania',
            code: 'AL'
        },
        {
            name: 'Algeria',
            code: 'DZ'
        },
        {
            name: 'American Samoa',
            code: 'AS'
        },
        {
            name: 'Andorra',
            code: 'AD'
        },
        {
            name: 'Angola',
            code: 'AO'
        },
        {
            name: 'Anguilla',
            code: 'AI'
        },
        {
            name: 'Antarctica',
            code: 'AQ'
        },
        {
            name: 'Antigua and Barbuda',
            code: 'AG'
        },
        {
            name: 'Argentina',
            code: 'AR'
        },
        {
            name: 'Armenia',
            code: 'AM'
        },
        {
            name: 'Aruba',
            code: 'AW'
        },
        {
            name: 'Australia',
            code: 'AU'
        },
        {
            name: 'Austria',
            code: 'AT'
        },
        {
            name: 'Azerbaijan',
            code: 'AZ'
        },
        {
            name: 'Bahamas',
            code: 'BS'
        },
        {
            name: 'Bahrain',
            code: 'BH'
        },
        {
            name: 'Bangladesh',
            code: 'BD'
        },
        {
            name: 'Barbados',
            code: 'BB'
        },
        {
            name: 'Belarus',
            code: 'BY'
        },
        {
            name: 'Belgium',
            code: 'BE'
        },
        {
            name: 'Belize',
            code: 'BZ'
        },
        {
            name: 'Benin',
            code: 'BJ'
        },
        {
            name: 'Bermuda',
            code: 'BM'
        },
        {
            name: 'Bhutan',
            code: 'BT'
        },
        {
            name: 'Bolivia',
            code: 'BO'
        },
        {
            name: 'Bosnia and Herzegovina',
            code: 'BA'
        },
        {
            name: 'Botswana',
            code: 'BW'
        },
        {
            name: 'Bouvet Island',
            code: 'BV'
        },
        {
            name: 'Brazil',
            code: 'BR'
        },
        {
            name: 'British Indian Ocean Territory',
            code: 'IO'
        },
        {
            name: 'Brunei Darussalam',
            code: 'BN'
        },
        {
            name: 'Bulgaria',
            code: 'BG'
        },
        {
            name: 'Burkina Faso',
            code: 'BF'
        },
        {
            name: 'Burundi',
            code: 'BI'
        },
        {
            name: 'Cambodia',
            code: 'KH'
        },
        {
            name: 'Cameroon',
            code: 'CM'
        },
        {
            name: 'Canada',
            code: 'CA'
        },
        {
            name: 'Cape Verde',
            code: 'CV'
        },
        {
            name: 'Cayman Islands',
            code: 'KY'
        },
        {
            name: 'Central African Republic',
            code: 'CF'
        },
        {
            name: 'Chad',
            code: 'TD'
        },
        {
            name: 'Chile',
            code: 'CL'
        },
        {
            name: 'China',
            code: 'CN'
        },
        {
            name: 'Christmas Island',
            code: 'CX'
        },
        {
            name: 'Cocos (Keeling) Islands',
            code: 'CC'
        },
        {
            name: 'Colombia',
            code: 'CO'
        },
        {
            name: 'Comoros',
            code: 'KM'
        },
        {
            name: 'Congo',
            code: 'CG'
        },
        {
            name: 'Congo, The Democratic Republic of the',
            code: 'CD'
        },
        {
            name: 'Cook Islands',
            code: 'CK'
        },
        {
            name: 'Costa Rica',
            code: 'CR'
        },
        {
            name: 'Cote D\'Ivoire',
            code: 'CI'
        },
        {
            name: 'Croatia',
            code: 'HR'
        },
        {
            name: 'Cuba',
            code: 'CU'
        },
        {
            name: 'Cyprus',
            code: 'CY'
        },
        {
            name: 'Czech Republic',
            code: 'CZ'
        },
        {
            name: 'Denmark',
            code: 'DK'
        },
        {
            name: 'Djibouti',
            code: 'DJ'
        },
        {
            name: 'Dominica',
            code: 'DM'
        },
        {
            name: 'Dominican Republic',
            code: 'DO'
        },
        {
            name: 'Ecuador',
            code: 'EC'
        },
        {
            name: 'Egypt',
            code: 'EG'
        },
        {
            name: 'El Salvador',
            code: 'SV'
        },
        {
            name: 'Equatorial Guinea',
            code: 'GQ'
        },
        {
            name: 'Eritrea',
            code: 'ER'
        },
        {
            name: 'Estonia',
            code: 'EE'
        },
        {
            name: 'Ethiopia',
            code: 'ET'
        },
        {
            name: 'Falkland Islands (Malvinas)',
            code: 'FK'
        },
        {
            name: 'Faroe Islands',
            code: 'FO'
        },
        {
            name: 'Fiji',
            code: 'FJ'
        },
        {
            name: 'Finland',
            code: 'FI'
        },
        {
            name: 'France',
            code: 'FR'
        },
        {
            name: 'French Guiana',
            code: 'GF'
        },
        {
            name: 'French Polynesia',
            code: 'PF'
        },
        {
            name: 'French Southern Territories',
            code: 'TF'
        },
        {
            name: 'Gabon',
            code: 'GA'
        },
        {
            name: 'Gambia',
            code: 'GM'
        },
        {
            name: 'Georgia',
            code: 'GE'
        },
        {
            name: 'Germany',
            code: 'DE'
        },
        {
            name: 'Ghana',
            code: 'GH'
        },
        {
            name: 'Gibraltar',
            code: 'GI'
        },
        {
            name: 'Greece',
            code: 'GR'
        },
        {
            name: 'Greenland',
            code: 'GL'
        },
        {
            name: 'Grenada',
            code: 'GD'
        },
        {
            name: 'Guadeloupe',
            code: 'GP'
        },
        {
            name: 'Guam',
            code: 'GU'
        },
        {
            name: 'Guatemala',
            code: 'GT'
        },
        {
            name: 'Guernsey',
            code: 'GG'
        },
        {
            name: 'Guinea',
            code: 'GN'
        },
        {
            name: 'Guinea-Bissau',
            code: 'GW'
        },
        {
            name: 'Guyana',
            code: 'GY'
        },
        {
            name: 'Haiti',
            code: 'HT'
        },
        {
            name: 'Heard Island and Mcdonald Islands',
            code: 'HM'
        },
        {
            name: 'Holy See (Vatican City State)',
            code: 'VA'
        },
        {
            name: 'Honduras',
            code: 'HN'
        },
        {
            name: 'Hong Kong',
            code: 'HK'
        },
        {
            name: 'Hungary',
            code: 'HU'
        },
        {
            name: 'Iceland',
            code: 'IS'
        },
        {
            name: 'India',
            code: 'IN'
        },
        {
            name: 'Indonesia',
            code: 'ID'
        },
        {
            name: 'Iran, Islamic Republic Of',
            code: 'IR'
        },
        {
            name: 'Iraq',
            code: 'IQ'
        },
        {
            name: 'Ireland',
            code: 'IE'
        },
        {
            name: 'Isle of Man',
            code: 'IM'
        },
        {
            name: 'Israel',
            code: 'IL'
        },
        {
            name: 'Italy',
            code: 'IT'
        },
        {
            name: 'Jamaica',
            code: 'JM'
        },
        {
            name: 'Japan',
            code: 'JP'
        },
        {
            name: 'Jersey',
            code: 'JE'
        },
        {
            name: 'Jordan',
            code: 'JO'
        },
        {
            name: 'Kazakhstan',
            code: 'KZ'
        },
        {
            name: 'Kenya',
            code: 'KE'
        },
        {
            name: 'Kiribati',
            code: 'KI'
        },
        {
            name: 'Korea, Democratic People\'s Republic of',
            code: 'KP'
        },
        {
            name: 'Korea, Republic of',
            code: 'KR'
        },
        {
            name: 'Kuwait',
            code: 'KW'
        },
        {
            name: 'Kyrgyzstan',
            code: 'KG'
        },
        {
            name: 'Lao People\'s Democratic Republic',
            code: 'LA'
        },
        {
            name: 'Latvia',
            code: 'LV'
        },
        {
            name: 'Lebanon',
            code: 'LB'
        },
        {
            name: 'Lesotho',
            code: 'LS'
        },
        {
            name: 'Liberia',
            code: 'LR'
        },
        {
            name: 'Libyan Arab Jamahiriya',
            code: 'LY'
        },
        {
            name: 'Liechtenstein',
            code: 'LI'
        },
        {
            name: 'Lithuania',
            code: 'LT'
        },
        {
            name: 'Luxembourg',
            code: 'LU'
        },
        {
            name: 'Macao',
            code: 'MO'
        },
        {
            name: 'Macedonia, The Former Yugoslav Republic of',
            code: 'MK'
        },
        {
            name: 'Madagascar',
            code: 'MG'
        },
        {
            name: 'Malawi',
            code: 'MW'
        },
        {
            name: 'Malaysia',
            code: 'MY'
        },
        {
            name: 'Maldives',
            code: 'MV'
        },
        {
            name: 'Mali',
            code: 'ML'
        },
        {
            name: 'Malta',
            code: 'MT'
        },
        {
            name: 'Marshall Islands',
            code: 'MH'
        },
        {
            name: 'Martinique',
            code: 'MQ'
        },
        {
            name: 'Mauritania',
            code: 'MR'
        },
        {
            name: 'Mauritius',
            code: 'MU'
        },
        {
            name: 'Mayotte',
            code: 'YT'
        },
        {
            name: 'Mexico',
            code: 'MX'
        },
        {
            name: 'Micronesia, Federated States of',
            code: 'FM'
        },
        {
            name: 'Moldova, Republic of',
            code: 'MD'
        },
        {
            name: 'Monaco',
            code: 'MC'
        },
        {
            name: 'Mongolia',
            code: 'MN'
        },
        {
            name: 'Montserrat',
            code: 'MS'
        },
        {
            name: 'Morocco',
            code: 'MA'
        },
        {
            name: 'Mozambique',
            code: 'MZ'
        },
        {
            name: 'Myanmar',
            code: 'MM'
        },
        {
            name: 'Namibia',
            code: 'NA'
        },
        {
            name: 'Nauru',
            code: 'NR'
        },
        {
            name: 'Nepal',
            code: 'NP'
        },
        {
            name: 'Netherlands',
            code: 'NL'
        },
        {
            name: 'Netherlands Antilles',
            code: 'AN'
        },
        {
            name: 'New Caledonia',
            code: 'NC'
        },
        {
            name: 'New Zealand',
            code: 'NZ'
        },
        {
            name: 'Nicaragua',
            code: 'NI'
        },
        {
            name: 'Niger',
            code: 'NE'
        },
        {
            name: 'Nigeria',
            code: 'NG'
        },
        {
            name: 'Niue',
            code: 'NU'
        },
        {
            name: 'Norfolk Island',
            code: 'NF'
        },
        {
            name: 'Northern Mariana Islands',
            code: 'MP'
        },
        {
            name: 'Norway',
            code: 'NO'
        },
        {
            name: 'Oman',
            code: 'OM'
        },
        {
            name: 'Pakistan',
            code: 'PK'
        },
        {
            name: 'Palau',
            code: 'PW'
        },
        {
            name: 'Palestinian Territory, Occupied',
            code: 'PS'
        },
        {
            name: 'Panama',
            code: 'PA'
        },
        {
            name: 'Papua New Guinea',
            code: 'PG'
        },
        {
            name: 'Paraguay',
            code: 'PY'
        },
        {
            name: 'Peru',
            code: 'PE'
        },
        {
            name: 'Philippines',
            code: 'PH'
        },
        {
            name: 'Pitcairn',
            code: 'PN'
        },
        {
            name: 'Poland',
            code: 'PL'
        },
        {
            name: 'Portugal',
            code: 'PT'
        },
        {
            name: 'Puerto Rico',
            code: 'PR'
        },
        {
            name: 'Qatar',
            code: 'QA'
        },
        {
            name: 'Reunion',
            code: 'RE'
        },
        {
            name: 'Romania',
            code: 'RO'
        },
        {
            name: 'Russian Federation',
            code: 'RU'
        },
        {
            name: 'Rwanda',
            code: 'RW'
        },
        {
            name: 'Saint Helena',
            code: 'SH'
        },
        {
            name: 'Saint Kitts and Nevis',
            code: 'KN'
        },
        {
            name: 'Saint Lucia',
            code: 'LC'
        },
        {
            name: 'Saint Pierre and Miquelon',
            code: 'PM'
        },
        {
            name: 'Saint Vincent and the Grenadines',
            code: 'VC'
        },
        {
            name: 'Samoa',
            code: 'WS'
        },
        {
            name: 'San Marino',
            code: 'SM'
        },
        {
            name: 'Sao Tome and Principe',
            code: 'ST'
        },
        {
            name: 'Saudi Arabia',
            code: 'SA'
        },
        {
            name: 'Senegal',
            code: 'SN'
        },
        {
            name: 'Serbia and Montenegro',
            code: 'CS'
        },
        {
            name: 'Seychelles',
            code: 'SC'
        },
        {
            name: 'Sierra Leone',
            code: 'SL'
        },
        {
            name: 'Singapore',
            code: 'SG'
        },
        {
            name: 'Slovakia',
            code: 'SK'
        },
        {
            name: 'Slovenia',
            code: 'SI'
        },
        {
            name: 'Solomon Islands',
            code: 'SB'
        },
        {
            name: 'Somalia',
            code: 'SO'
        },
        {
            name: 'South Africa',
            code: 'ZA'
        },
        {
            name: 'South Georgia and the South Sandwich Islands',
            code: 'GS'
        },
        {
            name: 'Spain',
            code: 'ES'
        },
        {
            name: 'Sri Lanka',
            code: 'LK'
        },
        {
            name: 'Sudan',
            code: 'SD'
        },
        {
            name: 'Suriname',
            code: 'SR'
        },
        {
            name: 'Svalbard and Jan Mayen',
            code: 'SJ'
        },
        {
            name: 'Swaziland',
            code: 'SZ'
        },
        {
            name: 'Sweden',
            code: 'SE'
        },
        {
            name: 'Switzerland',
            code: 'CH'
        },
        {
            name: 'Syrian Arab Republic',
            code: 'SY'
        },
        {
            name: 'Taiwan, Province of China',
            code: 'TW'
        },
        {
            name: 'Tajikistan',
            code: 'TJ'
        },
        {
            name: 'Tanzania, United Republic of',
            code: 'TZ'
        },
        {
            name: 'Thailand',
            code: 'TH'
        },
        {
            name: 'Timor-Leste',
            code: 'TL'
        },
        {
            name: 'Togo',
            code: 'TG'
        },
        {
            name: 'Tokelau',
            code: 'TK'
        },
        {
            name: 'Tonga',
            code: 'TO'
        },
        {
            name: 'Trinidad and Tobago',
            code: 'TT'
        },
        {
            name: 'Tunisia',
            code: 'TN'
        },
        {
            name: 'Turkey',
            code: 'TR'
        },
        {
            name: 'Turkmenistan',
            code: 'TM'
        },
        {
            name: 'Turks and Caicos Islands',
            code: 'TC'
        },
        {
            name: 'Tuvalu',
            code: 'TV'
        },
        {
            name: 'Uganda',
            code: 'UG'
        },
        {
            name: 'Ukraine',
            code: 'UA'
        },
        {
            name: 'United Arab Emirates',
            code: 'AE'
        },
        {
            name: 'United Kingdom',
            code: 'GB'
        },
        {
            name: 'United States',
            code: 'US'
        },
        {
            name: 'United States Minor Outlying Islands',
            code: 'UM'
        },
        {
            name: 'Uruguay',
            code: 'UY'
        },
        {
            name: 'Uzbekistan',
            code: 'UZ'
        },
        {
            name: 'Vanuatu',
            code: 'VU'
        },
        {
            name: 'Venezuela',
            code: 'VE'
        },
        {
            name: 'Vietnam',
            code: 'VN'
        },
        {
            name: 'Virgin Islands, British',
            code: 'VG'
        },
        {
            name: 'Virgin Islands, U.S.',
            code: 'VI'
        },
        {
            name: 'Wallis and Futuna',
            code: 'WF'
        },
        {
            name: 'Western Sahara',
            code: 'EH'
        },
        {
            name: 'Yemen',
            code: 'YE'
        },
        {
            name: 'Zambia',
            code: 'ZM'
        },
        {
            name: 'Zimbabwe',
            code: 'ZW'
        }
  ];