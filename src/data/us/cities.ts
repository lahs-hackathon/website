const cities: string[] = [
	'Alexander City',
	'Andalusia',
	'Anniston',
	'Athens',
	'Atmore',
	'Auburn',
	'Bessemer',
	'Birmingham',
	'Chickasaw',
	'Clanton',
	'Cullman',
	'Decatur',
	'Demopolis',
	'Dothan',
	'Enterprise',
	'Eufaula',
	'Florence',
	'Fort Payne',
	'Gadsden',
	'Greenville',
	'Guntersville',
	'Huntsville',
	'Jasper',
	'Marion',
	'Mobile',
	'Montgomery',
	'Opelika',
	'Ozark',
	'Phenix City',
	'Prichard',
	'Scottsboro',
	'Selma',
	'Sheffield',
	'Sylacauga',
	'Talladega',
	'Troy',
	'Tuscaloosa',
	'Tuscumbia',
	'Tuskegee',
	'Anchorage',
	'Cordova',
	'Fairbanks',
	'Haines',
	'Homer',
	'Juneau',
	'Ketchikan',
	'Kodiak',
	'Kotzebue',
	'Nome',
	'Palmer',
	'Seward',
	'Sitka',
	'Skagway',
	'Valdez',
	'Ajo',
	'Avondale',
	'Bisbee',
	'Casa Grande',
	'Chandler',
	'Clifton',
	'Douglas',
	'Flagstaff',
	'Gila Bend',
	'Glendale',
	'Globe',
	'Kingman',
	'Lake Havasu City',
	'Mesa',
	'Nogales',
	'Oraibi',
	'Phoenix',
	'Prescott',
	'Scottsdale',
	'Sierra Vista',
	'Tempe',
	'Tombstone',
	'Tucson',
	'Walpi',
	'Window Rock',
	'Winslow',
	'Yuma',
	'Arkadelphia',
	'Arkansas Post',
	'Batesville',
	'Benton',
	'Blytheville',
	'Camden',
	'Conway',
	'Crossett',
	'El Dorado',
	'Fayetteville',
	'Forrest City',
	'Fort Smith',
	'Harrison',
	'Helena',
	'Hope',
	'Hot Springs',
	'Jacksonville',
	'Jonesboro',
	'Little Rock',
	'Magnolia',
	'Morrilton',
	'Newport',
	'North Little Rock',
	'Osceola',
	'Pine Bluff',
	'Rogers',
	'Searcy',
	'Stuttgart',
	'Van Buren',
	'West Memphis',
	'Alameda',
	'Alhambra',
	'Anaheim',
	'Antioch',
	'Arcadia',
	'Bakersfield',
	'Barstow',
	'Belmont',
	'Berkeley',
	'Beverly Hills',
	'Brea',
	'Buena Park',
	'Burbank',
	'Calexico',
	'Calistoga',
	'Carlsbad',
	'Carmel',
	'Chico',
	'Chula Vista',
	'Claremont',
	'Compton',
	'Concord',
	'Corona',
	'Coronado',
	'Costa Mesa',
	'Culver City',
	'Daly City',
	'Davis',
	'Downey',
	'El Centro',
	'El Cerrito',
	'El Monte',
	'Escondido',
	'Eureka',
	'Fairfield',
	'Fontana',
	'Fremont',
	'Fresno',
	'Fullerton',
	'Garden Grove',
	'Hayward',
	'Hollywood',
	'Huntington Beach',
	'Indio',
	'Inglewood',
	'Irvine',
	'La Habra',
	'Laguna Beach',
	'Lancaster',
	'Livermore',
	'Lodi',
	'Lompoc',
	'Long Beach',
	'Los Angeles',
	'Malibu',
	'Martinez',
	'Marysville',
	'Menlo Park',
	'Merced',
	'Modesto',
	'Monterey',
	'Mountain View',
	'Napa',
	'Needles',
	'Newport Beach',
	'Norwalk',
	'Novato',
	'Oakland',
	'Oceanside',
	'Ojai',
	'Ontario',
	'Orange',
	'Oroville',
	'Oxnard',
	'Pacific Grove',
	'Palm Springs',
	'Palmdale',
	'Palo Alto',
	'Pasadena',
	'Petaluma',
	'Pomona',
	'Port Hueneme',
	'Rancho Cucamonga',
	'Red Bluff',
	'Redding',
	'Redlands',
	'Redondo Beach',
	'Redwood City',
	'Richmond',
	'Riverside',
	'Roseville',
	'Sacramento',
	'Salinas',
	'San Bernardino',
	'San Clemente',
	'San Diego',
	'San Fernando',
	'San Francisco',
	'San Gabriel',
	'San Jose',
	'San Juan Capistrano',
	'San Leandro',
	'San Luis Obispo',
	'San Marino',
	'San Mateo',
	'San Pedro',
	'San Rafael',
	'San Simeon',
	'Santa Ana',
	'Santa Barbara',
	'Santa Clara',
	'Santa Clarita',
	'Santa Cruz',
	'Santa Monica',
	'Santa Rosa',
	'Sausalito',
	'Simi Valley',
	'Sonoma',
	'South San Francisco',
	'Stockton',
	'Sunnyvale',
	'Susanville',
	'Thousand Oaks',
	'Torrance',
	'Turlock',
	'Ukiah',
	'Vallejo',
	'Ventura',
	'Victorville',
	'Visalia',
	'Walnut Creek',
	'Watts',
	'West Covina',
	'Whittier',
	'Woodland',
	'Yorba Linda',
	'Yuba City',
	'Alamosa',
	'Aspen',
	'Aurora',
	'Boulder',
	'Breckenridge',
	'Brighton',
	'Canon City',
	'Central City',
	'Climax',
	'Colorado Springs',
	'Cortez',
	'Cripple Creek',
	'Denver',
	'Durango',
	'Englewood',
	'Estes Park',
	'Fort Collins',
	'Fort Morgan',
	'Georgetown',
	'Glenwood Springs',
	'Golden',
	'Grand Junction',
	'Greeley',
	'Gunnison',
	'La Junta',
	'Leadville',
	'Littleton',
	'Longmont',
	'Loveland',
	'Montrose',
	'Ouray',
	'Pagosa Springs',
	'Pueblo',
	'Silverton',
	'Steamboat Springs',
	'Sterling',
	'Telluride',
	'Trinidad',
	'Vail',
	'Walsenburg',
	'Westminster',
	'Ansonia',
	'Berlin',
	'Bloomfield',
	'Branford',
	'Bridgeport',
	'Bristol',
	'Coventry',
	'Danbury',
	'Darien',
	'Derby',
	'East Hartford',
	'East Haven',
	'Enfield',
	'Farmington',
	'Greenwich',
	'Groton',
	'Guilford',
	'Hamden',
	'Hartford',
	'Lebanon',
	'Litchfield',
	'Manchester',
	'Mansfield',
	'Meriden',
	'Middletown',
	'Milford',
	'Mystic',
	'Naugatuck',
	'New Britain',
	'New Haven',
	'New London',
	'North Haven',
	'Norwich',
	'Old Saybrook',
	'Seymour',
	'Shelton',
	'Simsbury',
	'Southington',
	'Stamford',
	'Stonington',
	'Stratford',
	'Wallingford',
	'Waterbury',
	'Waterford',
	'Watertown',
	'West Hartford',
	'West Haven',
	'Westport',
	'Wethersfield',
	'Willimantic',
	'Windham',
	'Windsor',
	'Windsor Locks',
	'Winsted',
	'Dover',
	'Lewes',
	'New Castle',
	'Newark',
	'Smyrna',
	'Wilmington',
	'Apalachicola',
	'Bartow',
	'Belle Glade',
	'Boca Raton',
	'Bradenton',
	'Cape Coral',
	'Clearwater',
	'Cocoa Beach',
	'Cocoa-Rockledge',
	'Coral Gables',
	'Daytona Beach',
	'De Land',
	'Deerfield Beach',
	'Delray Beach',
	'Fernandina Beach',
	'Fort Lauderdale',
	'Fort Myers',
	'Fort Pierce',
	'Fort Walton Beach',
	'Gainesville',
	'Hallandale Beach',
	'Hialeah',
	'Homestead',
	'Key West',
	'Lake City',
	'Lake Wales',
	'Lakeland',
	'Largo',
	'Melbourne',
	'Miami',
	'Miami Beach',
	'Naples',
	'New Smyrna Beach',
	'Ocala',
	'Orlando',
	'Ormond Beach',
	'Palatka',
	'Palm Bay',
	'Palm Beach',
	'Panama City',
	'Pensacola',
	'Pompano Beach',
	'Saint Augustine',
	'Saint Petersburg',
	'Sanford',
	'Sarasota',
	'Sebring',
	'Tallahassee',
	'Tampa',
	'Tarpon Springs',
	'Titusville',
	'Venice',
	'West Palm Beach',
	'White Springs',
	'Winter Haven',
	'Winter Park',
	'Albany',
	'Americus',
	'Andersonville',
	'Atlanta',
	'Augusta',
	'Bainbridge',
	'Blairsville',
	'Brunswick',
	'Calhoun',
	'Carrollton',
	'Columbus',
	'Dahlonega',
	'Dalton',
	'East Point',
	'Fitzgerald',
	'Fort Valley',
	'La Grange',
	'Macon',
	'Marietta',
	'Milledgeville',
	'Plains',
	'Rome',
	'Savannah',
	'Toccoa',
	'Valdosta',
	'Warm Springs',
	'Warner Robins',
	'Waycross',
	'Hanalei',
	'Hilo',
	'Honaunau',
	'Honolulu',
	'Kahului',
	'Kaneohe',
	'Kapaa',
	'Kawaihae',
	'Lahaina',
	'Laie',
	'Wahiawa',
	'Wailuku',
	'Waimea',
	'Blackfoot',
	'Boise',
	'Bonners Ferry',
	'Caldwell',
	'Coeur d???Alene',
	'Idaho City',
	'Idaho Falls',
	'Kellogg',
	'Lewiston',
	'Moscow',
	'Nampa',
	'Pocatello',
	'Priest River',
	'Rexburg',
	'Sun Valley',
	'Twin Falls',
	'Alton',
	'Arlington Heights',
	'Arthur',
	'Belleville',
	'Belvidere',
	'Bloomington',
	'Brookfield',
	'Cahokia',
	'Cairo',
	'Calumet City',
	'Canton',
	'Carbondale',
	'Carlinville',
	'Carthage',
	'Centralia',
	'Champaign',
	'Charleston',
	'Chester',
	'Chi',
	'Chicago Heights',
	'Cicero',
	'Collinsville',
	'Danville',
	'DeKalb',
	'Des Plaines',
	'Dixon',
	'East Moline',
	'East Saint Louis',
	'Effingham',
	'Elgin',
	'Elmhurst',
	'Evanston',
	'Freeport',
	'Galena',
	'Galesburg',
	'Glen Ellyn',
	'Glenview',
	'Granite City',
	'Harrisburg',
	'Herrin',
	'Highland Park',
	'Joliet',
	'Kankakee',
	'Kaskaskia',
	'Kewanee',
	'La Salle',
	'Lake Forest',
	'Libertyville',
	'Lincoln',
	'Lisle',
	'Lombard',
	'Macomb',
	'Mattoon',
	'Moline',
	'Monmouth',
	'Mount Vernon',
	'Mundelein',
	'Naperville',
	'Nauvoo',
	'Normal',
	'North Chicago',
	'Oak Park',
	'Ottawa',
	'Palatine',
	'Park Forest',
	'Park Ridge',
	'Pekin',
	'Peoria',
	'Petersburg',
	'Pontiac',
	'Quincy',
	'Rantoul',
	'River Forest',
	'Rock Island',
	'Rockford',
	'Salem',
	'Shawneetown',
	'Skokie',
	'South Holland',
	'Springfield',
	'Streator',
	'Summit',
	'Urbana',
	'Vandalia',
	'Virden',
	'Waukegan',
	'Wheaton',
	'Wilmette',
	'Winnetka',
	'Wood River',
	'Zion',
	'Anderson',
	'Bedford',
	'Connersville',
	'Corydon',
	'Crawfordsville',
	'East Chicago',
	'Elkhart',
	'Elwood',
	'Evansville',
	'Fort Wayne',
	'French Lick',
	'Gary',
	'Geneva',
	'Goshen',
	'Greenfield',
	'Hammond',
	'Hobart',
	'Huntington',
	'Indianapolis',
	'Jeffersonville',
	'Kokomo',
	'Lafayette',
	'Madison',
	'Michigan City',
	'Mishawaka',
	'Muncie',
	'Nappanee',
	'Nashville',
	'New Albany',
	'New Harmony',
	'Peru',
	'Plymouth',
	'Santa Claus',
	'Shelbyville',
	'South Bend',
	'Terre Haute',
	'Valparaiso',
	'Vincennes',
	'Wabash',
	'West Lafayette',
	'Amana Colonies',
	'Ames',
	'Boone',
	'Burlington',
	'Cedar Falls',
	'Cedar Rapids',
	'Charles City',
	'Cherokee',
	'Clinton',
	'Council Bluffs',
	'Davenport',
	'Des Moines',
	'Dubuque',
	'Estherville',
	'Fort Dodge',
	'Grinnell',
	'Indianola',
	'Iowa City',
	'Keokuk',
	'Mason City',
	'Mount Pleasant',
	'Muscatine',
	'Newton',
	'Oskaloosa',
	'Ottumwa',
	'Sioux City',
	'Waterloo',
	'Webster City',
	'West Des Moines',
	'Abilene',
	'Arkansas City',
	'Atchison',
	'Chanute',
	'Coffeyville',
	'Council Grove',
	'Dodge City',
	'Emporia',
	'Fort Scott',
	'Garden City',
	'Great Bend',
	'Hays',
	'Hutchinson',
	'Independence',
	'Junction City',
	'Kansas City',
	'Lawrence',
	'Leavenworth',
	'Liberal',
	'Manhattan',
	'McPherson',
	'Medicine Lodge',
	'Olathe',
	'Osawatomie',
	'Overland Park',
	'Pittsburg',
	'Salina',
	'Shawnee',
	'Smith Center',
	'Topeka',
	'Wichita',
	'Ashland',
	'Barbourville',
	'Bardstown',
	'Berea',
	'Boonesborough',
	'Bowling Green',
	'Campbellsville',
	'Covington',
	'Elizabethtown',
	'Frankfort',
	'Harlan',
	'Harrodsburg',
	'Hazard',
	'Henderson',
	'Hodgenville',
	'Hopkinsville',
	'Lexington',
	'Louisville',
	'Mayfield',
	'Maysville',
	'Middlesboro',
	'Owensboro',
	'Paducah',
	'Paris',
	'Abbeville',
	'Alexandria',
	'Bastrop',
	'Baton Rouge',
	'Bogalusa',
	'Bossier City',
	'Gretna',
	'Houma',
	'Lake Charles',
	'Monroe',
	'Morgan City',
	'Natchitoches',
	'New Iberia',
	'New Orleans',
	'Opelousas',
	'Ruston',
	'Saint Martinville',
	'Shreveport',
	'Thibodaux',
	'Bangor',
	'Bar Harbor',
	'Bath',
	'Belfast',
	'Biddeford',
	'Boothbay Harbor',
	'Calais',
	'Caribou',
	'Castine',
	'Eastport',
	'Ellsworth',
	'Fort Kent',
	'Gardiner',
	'Houlton',
	'Kennebunkport',
	'Kittery',
	'Lubec',
	'Machias',
	'Orono',
	'Portland',
	'Presque Isle',
	'Rockland',
	'Rumford',
	'Saco',
	'Scarborough',
	'Waterville',
	'York',
	'Aberdeen',
	'Annapolis',
	'Baltimore',
	'Bethesda-Chevy Chase',
	'Bowie',
	'Cambridge',
	'Catonsville',
	'College Park',
	'Columbia',
	'Cumberland',
	'Easton',
	'Elkton',
	'Emmitsburg',
	'Frederick',
	'Greenbelt',
	'Hagerstown',
	'Hyattsville',
	'Laurel',
	'Ocean City',
	'Rockville',
	'Saint Marys City',
	'Salisbury',
	'Silver Spring',
	'Takoma Park',
	'Towson',
	'Abington',
	'Adams',
	'Amesbury',
	'Amherst',
	'Andover',
	'Arlington',
	'Athol',
	'Attleboro',
	'Barnstable',
	'Beverly',
	'Boston',
	'Bourne',
	'Braintree',
	'Brockton',
	'Brookline',
	'Charlestown',
	'Chelmsford',
	'Chelsea',
	'Chicopee',
	'Cohasset',
	'Danvers',
	'Dartmouth',
	'Dedham',
	'Dennis',
	'Duxbury',
	'Eastham',
	'Edgartown',
	'Everett',
	'Fairhaven',
	'Fall River',
	'Falmouth',
	'Fitchburg',
	'Framingham',
	'Gloucester',
	'Great Barrington',
	'Harwich',
	'Haverhill',
	'Hingham',
	'Holyoke',
	'Hyannis',
	'Ipswich',
	'Lenox',
	'Leominster',
	'Lowell',
	'Ludlow',
	'Lynn',
	'Malden',
	'Marblehead',
	'Marlborough',
	'Medford',
	'Milton',
	'Nahant',
	'Natick',
	'New Bedford',
	'Newburyport',
	'North Adams',
	'Northampton',
	'Norton',
	'Norwood',
	'Peabody',
	'Pittsfield',
	'Provincetown',
	'Randolph',
	'Revere',
	'Sandwich',
	'Saugus',
	'Somerville',
	'South Hadley',
	'Stockbridge',
	'Stoughton',
	'Sturbridge',
	'Sudbury',
	'Taunton',
	'Tewksbury',
	'Truro',
	'Webster',
	'Wellesley',
	'Wellfleet',
	'West Bridgewater',
	'West Springfield',
	'Westfield',
	'Weymouth',
	'Whitman',
	'Williamstown',
	'Woburn',
	'Woods Hole',
	'Worcester',
	'Adrian',
	'Alma',
	'Ann Arbor',
	'Battle Creek',
	'Bay City',
	'Benton Harbor',
	'Bloomfield Hills',
	'Cadillac',
	'Charlevoix',
	'Cheboygan',
	'Dearborn',
	'Detroit',
	'East Lansing',
	'Eastpointe',
	'Ecorse',
	'Escanaba',
	'Flint',
	'Grand Haven',
	'Grand Rapids',
	'Grayling',
	'Grosse Pointe',
	'Hancock',
	'Holland',
	'Houghton',
	'Interlochen',
	'Iron Mountain',
	'Ironwood',
	'Ishpeming',
	'Jackson',
	'Kalamazoo',
	'Lansing',
	'Livonia',
	'Ludington',
	'Mackinaw City',
	'Manistee',
	'Marquette',
	'Menominee',
	'Midland',
	'Mount Clemens',
	'Muskegon',
	'Niles',
	'Petoskey',
	'Port Huron',
	'Royal Oak',
	'Saginaw',
	'Saint Ignace',
	'Saint Joseph',
	'Sault Sainte Marie',
	'Traverse City',
	'Trenton',
	'Warren',
	'Wyandotte',
	'Ypsilanti',
	'Albert Lea',
	'Austin',
	'Bemidji',
	'Brainerd',
	'Crookston',
	'Duluth',
	'Ely',
	'Eveleth',
	'Faribault',
	'Fergus Falls',
	'Hastings',
	'Hibbing',
	'International Falls',
	'Little Falls',
	'Mankato',
	'Minneapolis',
	'Moorhead',
	'New Ulm',
	'Northfield',
	'Owatonna',
	'Pipestone',
	'Red Wing',
	'Rochester',
	'Saint Cloud',
	'Saint Paul',
	'Sauk Centre',
	'South Saint Paul',
	'Stillwater',
	'Willmar',
	'Winona',
	'Mississippi',
	'Bay Saint Louis',
	'Biloxi',
	'Clarksdale',
	'Corinth',
	'Greenwood',
	'Grenada',
	'Gulfport',
	'Hattiesburg',
	'Holly Springs',
	'Meridian',
	'Natchez',
	'Ocean Springs',
	'Oxford',
	'Pascagoula',
	'Pass Christian',
	'Philadelphia',
	'Port Gibson',
	'Starkville',
	'Tupelo',
	'Vicksburg',
	'West Point',
	'Yazoo City',
	'Boonville',
	'Branson',
	'Cape Girardeau',
	'Chillicothe',
	'Clayton',
	'Excelsior Springs',
	'Ferguson',
	'Florissant',
	'Fulton',
	'Hannibal',
	'Jefferson City',
	'Joplin',
	'Kirksville',
	'Lamar',
	'Maryville',
	'Mexico',
	'Monett',
	'Neosho',
	'New Madrid',
	'Rolla',
	'Saint Charles',
	'Saint Louis',
	'Sainte Genevieve',
	'Sedalia',
	'Warrensburg',
	'West Plains',
	'Anaconda',
	'Billings',
	'Bozeman',
	'Butte',
	'Dillon',
	'Fort Benton',
	'Glendive',
	'Great Falls',
	'Havre',
	'Kalispell',
	'Lewistown',
	'Livingston',
	'Miles City',
	'Missoula',
	'Virginia City',
	'Beatrice',
	'Bellevue',
	'Boys Town',
	'Chadron',
	'Grand Island',
	'Kearney',
	'McCook',
	'Minden',
	'Nebraska City',
	'Norfolk',
	'North Platte',
	'Omaha',
	'Plattsmouth',
	'Red Cloud',
	'Sidney',
	'Boulder City',
	'Carson City',
	'Elko',
	'Fallon',
	'Genoa',
	'Goldfield',
	'Las Vegas',
	'North Las Vegas',
	'Reno',
	'Sparks',
	'Winnemucca',
	'Derry',
	'Durham',
	'Exeter',
	'Franklin',
	'Hanover',
	'Hillsborough',
	'Keene',
	'Laconia',
	'Nashua',
	'Peterborough',
	'Portsmouth',
	'Somersworth',
	'Asbury Park',
	'Atlantic City',
	'Bayonne',
	'Bordentown',
	'Bound Brook',
	'Bridgeton',
	'Cape May',
	'Cranford',
	'East Orange',
	'Edison',
	'Elizabeth',
	'Fort Lee',
	'Glassboro',
	'Hackensack',
	'Haddonfield',
	'Hoboken',
	'Irvington',
	'Jersey City',
	'Lakehurst',
	'Lakewood',
	'Long Branch',
	'Millburn',
	'Millville',
	'Montclair',
	'Morristown',
	'Mount Holly',
	'New Brunswick',
	'New Milford',
	'Parsippany???Troy Hills',
	'Passaic',
	'Paterson',
	'Perth Amboy',
	'Plainfield',
	'Princeton',
	'Ridgewood',
	'Roselle',
	'Rutherford',
	'South Orange Village',
	'Totowa',
	'Union',
	'Union City',
	'Vineland',
	'Wayne',
	'Weehawken',
	'West New York',
	'West Orange',
	'Willingboro',
	'Woodbridge',
	'Acoma',
	'Alamogordo',
	'Albuquerque',
	'Artesia',
	'Belen',
	'Clovis',
	'Deming',
	'Gallup',
	'Grants',
	'Hobbs',
	'Las Cruces',
	'Los Alamos',
	'Lovington',
	'Portales',
	'Raton',
	'Roswell',
	'Santa Fe',
	'Shiprock',
	'Silver City',
	'Socorro',
	'Taos',
	'Truth or Consequences',
	'Tucumcari',
	'Amsterdam',
	'Babylon',
	'Batavia',
	'Beacon',
	'Binghamton',
	'Bronx',
	'Brooklyn',
	'Buffalo',
	'Chautauqua',
	'Cheektowaga',
	'Cohoes',
	'Coney Island',
	'Cooperstown',
	'Corning',
	'Cortland',
	'Crown Point',
	'Dunkirk',
	'East Aurora',
	'East Hampton',
	'Eastchester',
	'Elmira',
	'Flushing',
	'Forest Hills',
	'Fredonia',
	'Glens Falls',
	'Gloversville',
	'Great Neck',
	'Hammondsport',
	'Harlem',
	'Hempstead',
	'Herkimer',
	'Hudson',
	'Hyde Park',
	'Ilion',
	'Ithaca',
	'Jamestown',
	'Johnstown',
	'Kingston',
	'Lackawanna',
	'Lake Placid',
	'Levittown',
	'Lockport',
	'Mamaroneck',
	'Massena',
	'Mineola',
	'New Paltz',
	'New Rochelle',
	'New Windsor',
	'New York City',
	'Newburgh',
	'Niagara Falls',
	'North Hempstead',
	'Nyack',
	'Ogdensburg',
	'Olean',
	'Oneida',
	'Oneonta',
	'Ossining',
	'Oswego',
	'Oyster Bay',
	'Palmyra',
	'Peekskill',
	'Plattsburgh',
	'Port Washington',
	'Potsdam',
	'Poughkeepsie',
	'Queens',
	'Rensselaer',
	'Rotterdam',
	'Rye',
	'Sag Harbor',
	'Saranac Lake',
	'Saratoga Springs',
	'Scarsdale',
	'Schenectady',
	'Seneca Falls',
	'Southampton',
	'Staten Island',
	'Stony Brook',
	'Stony Point',
	'Syracuse',
	'Tarrytown',
	'Ticonderoga',
	'Tonawanda',
	'Utica',
	'Watervliet',
	'Watkins Glen',
	'West Seneca',
	'White Plains',
	'Woodstock',
	'Yonkers',
	'Asheboro',
	'Asheville',
	'Beaufort',
	'Chapel Hill',
	'Charlotte',
	'Edenton',
	'Elizabeth City',
	'Gastonia',
	'Goldsboro',
	'Greensboro',
	'Halifax',
	'Hickory',
	'High Point',
	'Kinston',
	'Kitty Hawk',
	'Lumberton',
	'Morehead City',
	'Morganton',
	'Nags Head',
	'New Bern',
	'Pinehurst',
	'Raleigh',
	'Rocky Mount',
	'Shelby',
	'Wilson',
	'Winston-Salem',
	'Bismarck',
	'Devils Lake',
	'Dickinson',
	'Fargo',
	'Grand Forks',
	'Mandan',
	'Minot',
	'Rugby',
	'Valley City',
	'Wahpeton',
	'Williston',
	'Akron',
	'Alliance',
	'Ashtabula',
	'Barberton',
	'Bellefontaine',
	'Cincinnati',
	'Cleveland',
	'Cleveland Heights',
	'Conneaut',
	'Cuyahoga Falls',
	'Dayton',
	'Defiance',
	'Delaware',
	'East Cleveland',
	'East Liverpool',
	'Elyria',
	'Euclid',
	'Findlay',
	'Gallipolis',
	'Hamilton',
	'Kent',
	'Kettering',
	'Lima',
	'Lorain',
	'Martins Ferry',
	'Massillon',
	'Mentor',
	'Milan',
	'New Philadelphia',
	'North College Hill',
	'Oberlin',
	'Painesville',
	'Parma',
	'Piqua',
	'Put-in-Bay',
	'Sandusky',
	'Shaker Heights',
	'Steubenville',
	'Tiffin',
	'Toledo',
	'Wooster',
	'Worthington',
	'Xenia',
	'Yellow Springs',
	'Youngstown',
	'Zanesville',
	'Ada',
	'Altus',
	'Alva',
	'Anadarko',
	'Ardmore',
	'Bartlesville',
	'Bethany',
	'Chickasha',
	'Claremore',
	'Cushing',
	'Duncan',
	'Durant',
	'Edmond',
	'El Reno',
	'Elk City',
	'Enid',
	'Guthrie',
	'Guymon',
	'Holdenville',
	'Hugo',
	'Lawton',
	'McAlester',
	'Midwest City',
	'Moore',
	'Muskogee',
	'Norman',
	'Oklahoma City',
	'Okmulgee',
	'Pauls Valley',
	'Pawhuska',
	'Perry',
	'Ponca City',
	'Pryor',
	'Sallisaw',
	'Sand Springs',
	'Sapulpa',
	'Seminole',
	'Tahlequah',
	'The Village',
	'Tulsa',
	'Vinita',
	'Wewoka',
	'Woodward',
	'Astoria',
	'Baker City',
	'Beaverton',
	'Bend',
	'Brookings',
	'Burns',
	'Coos Bay',
	'Corvallis',
	'Eugene',
	'Grants Pass',
	'Hillsboro',
	'Hood River',
	'John Day',
	'Klamath Falls',
	'La Grande',
	'Lake Oswego',
	'Lakeview',
	'McMinnville',
	'Newberg',
	'Oregon City',
	'Pendleton',
	'Port Orford',
	'Prineville',
	'Redmond',
	'Reedsport',
	'Roseburg',
	'Seaside',
	'The Dalles',
	'Tillamook',
	'Aliquippa',
	'Allentown',
	'Altoona',
	'Ambridge',
	'Bethlehem',
	'Bloomsburg',
	'Bradford',
	'Carlisle',
	'Chambersburg',
	'Erie',
	'Germantown',
	'Gettysburg',
	'Greensburg',
	'Harmony',
	'Hazleton',
	'Hershey',
	'Honesdale',
	'Jeannette',
	'Jim Thorpe',
	'Lock Haven',
	'Lower Southampton',
	'McKeesport',
	'Meadville',
	'Monroeville',
	'Nanticoke',
	'New Hope',
	'New Kensington',
	'Norristown',
	'Oil City',
	'Phoenixville',
	'Pittsburgh',
	'Pottstown',
	'Pottsville',
	'Reading',
	'Scranton',
	'Shamokin',
	'Sharon',
	'State College',
	'Stroudsburg',
	'Sunbury',
	'Swarthmore',
	'Tamaqua',
	'Uniontown',
	'West Chester',
	'Wilkes-Barre',
	'Williamsport',
	'Barrington',
	'Central Falls',
	'Cranston',
	'East Greenwich',
	'East Providence',
	'Narragansett',
	'North Kingstown',
	'Pawtucket',
	'Providence',
	'South Kingstown',
	'Tiverton',
	'Warwick',
	'Westerly',
	'Wickford',
	'Woonsocket',
	'Aiken',
	'Darlington',
	'Gaffney',
	'Hartsville',
	'Myrtle Beach',
	'Orangeburg',
	'Rock Hill',
	'Spartanburg',
	'Sumter',
	'Belle Fourche',
	'Custer',
	'De Smet',
	'Deadwood',
	'Huron',
	'Lead',
	'Milbank',
	'Mitchell',
	'Mobridge',
	'Pierre',
	'Rapid City',
	'Sioux Falls',
	'Spearfish',
	'Sturgis',
	'Vermillion',
	'Yankton',
	'Alcoa',
	'Chattanooga',
	'Clarksville',
	'Cookeville',
	'Elizabethton',
	'Gallatin',
	'Gatlinburg',
	'Greeneville',
	'Johnson City',
	'Jonesborough',
	'Kingsport',
	'Knoxville',
	'Memphis',
	'Murfreesboro',
	'Norris',
	'Oak Ridge',
	'Tullahoma',
	'Alpine',
	'Amarillo',
	'Baytown',
	'Beaumont',
	'Big Spring',
	'Borger',
	'Brownsville',
	'Bryan',
	'Canyon',
	'Cleburne',
	'College Station',
	'Corpus Christi',
	'Crystal City',
	'Dallas',
	'Del Rio',
	'Denison',
	'Denton',
	'Eagle Pass',
	'Edinburg',
	'El Paso',
	'Fort Worth',
	'Galveston',
	'Garland',
	'Goliad',
	'Harlingen',
	'Houston',
	'Irving',
	'Kilgore',
	'Killeen',
	'Kingsville',
	'Laredo',
	'Longview',
	'Lubbock',
	'Lufkin',
	'Marshall',
	'McAllen',
	'McKinney',
	'Mesquite',
	'Mission',
	'Nacogdoches',
	'New Braunfels',
	'Odessa',
	'Pampa',
	'Pecos',
	'Pharr',
	'Plainview',
	'Plano',
	'Port Arthur',
	'Port Lavaca',
	'Richardson',
	'San Angelo',
	'San Antonio',
	'San Felipe',
	'San Marcos',
	'Sherman',
	'Sweetwater',
	'Temple',
	'Texarkana',
	'Texas City',
	'Tyler',
	'Uvalde',
	'Victoria',
	'Waco',
	'Weatherford',
	'Wichita Falls',
	'Ysleta',
	'Alta',
	'American Fork',
	'Bountiful',
	'Brigham City',
	'Cedar City',
	'Clearfield',
	'Delta',
	'Fillmore',
	'Green River',
	'Heber City',
	'Kanab',
	'Layton',
	'Lehi',
	'Logan',
	'Manti',
	'Moab',
	'Monticello',
	'Murray',
	'Nephi',
	'Ogden',
	'Orderville',
	'Orem',
	'Panguitch',
	'Park City',
	'Payson',
	'Price',
	'Provo',
	'Saint George',
	'Salt Lake City',
	'Spanish Fork',
	'Springville',
	'Tooele',
	'Vernal',
	'Barre',
	'Bellows Falls',
	'Bennington',
	'Brattleboro',
	'Essex',
	'Middlebury',
	'Montpelier',
	'Rutland',
	'Saint Albans',
	'Saint Johnsbury',
	'Winooski',
	'Abingdon',
	'Charlottesville',
	'Chesapeake',
	'Fairfax',
	'Falls Church',
	'Fredericksburg',
	'Hampton',
	'Hopewell',
	'Lynchburg',
	'Manassas',
	'Martinsville',
	'New Market',
	'Newport News',
	'Reston',
	'Roanoke',
	'Staunton',
	'Suffolk',
	'Virginia Beach',
	'Waynesboro',
	'Williamsburg',
	'Winchester',
	'Washington',
	'Anacortes',
	'Bellingham',
	'Bremerton',
	'Coulee Dam',
	'Coupeville',
	'Ellensburg',
	'Ephrata',
	'Hoquiam',
	'Kelso',
	'Kennewick',
	'Moses Lake',
	'Oak Harbor',
	'Olympia',
	'Pasco',
	'Point Roberts',
	'Port Angeles',
	'Pullman',
	'Puyallup',
	'Renton',
	'Richland',
	'Seattle',
	'Spokane',
	'Tacoma',
	'Vancouver',
	'Walla Walla',
	'Wenatchee',
	'Yakima',
	'Beckley',
	'Bluefield',
	'Buckhannon',
	'Charles Town',
	'Clarksburg',
	'Elkins',
	'Fairmont',
	'Grafton',
	'Harpers Ferry',
	'Hinton',
	'Keyser',
	'Lewisburg',
	'Martinsburg',
	'Morgantown',
	'Moundsville',
	'New Martinsville',
	'Parkersburg',
	'Philippi',
	'Point Pleasant',
	'Romney',
	'Shepherdstown',
	'South Charleston',
	'Summersville',
	'Weirton',
	'Welch',
	'Wellsburg',
	'Weston',
	'Wheeling',
	'White Sulphur Springs',
	'Williamson',
	'Appleton',
	'Baraboo',
	'Beloit',
	'Eau Claire',
	'Fond du Lac',
	'Green Bay',
	'Janesville',
	'Kenosha',
	'La Crosse',
	'Lake Geneva',
	'Manitowoc',
	'Marinette',
	'Menasha',
	'Milwaukee',
	'Neenah',
	'New Glarus',
	'Oconto',
	'Oshkosh',
	'Peshtigo',
	'Portage',
	'Prairie du Chien',
	'Racine',
	'Rhinelander',
	'Ripon',
	'Sheboygan',
	'Spring Green',
	'Stevens Point',
	'Sturgeon Bay',
	'Superior',
	'Waukesha',
	'Wausau',
	'Wauwatosa',
	'West Allis',
	'West Bend',
	'Wisconsin Dells',
	'Casper',
	'Cheyenne',
	'Cody',
	'Gillette',
	'Lander',
	'Laramie',
	'Newcastle',
	'Powell',
	'Rawlins',
	'Riverton',
	'Rock Springs',
	'Sheridan',
	'Ten Sleep',
	'Thermopolis',
	'Torrington',
	'Worland',
	'Los Altos'
];

export default cities ;
