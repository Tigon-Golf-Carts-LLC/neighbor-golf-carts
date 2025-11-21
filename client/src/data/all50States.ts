export interface City {
  name: string;
  slug: string;
  type: 'city' | 'town' | 'community' | 'suburb';
}

export interface State {
  name: string;
  abbreviation: string;
  slug: string;
  cities: City[];
}

export const ALL_50_STATES: State[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
    slug: "alabama",
    cities: [
      { name: "Birmingham", slug: "birmingham", type: "city" },
      { name: "Montgomery", slug: "montgomery", type: "city" },
      { name: "Mobile", slug: "mobile", type: "city" },
      { name: "Huntsville", slug: "huntsville", type: "city" },
      { name: "Tuscaloosa", slug: "tuscaloosa", type: "city" },
      { name: "Hoover", slug: "hoover", type: "city" }
    ]
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    slug: "alaska",
    cities: [
      { name: "Anchorage", slug: "anchorage", type: "city" },
      { name: "Fairbanks", slug: "fairbanks", type: "city" },
      { name: "Juneau", slug: "juneau", type: "city" },
      { name: "Sitka", slug: "sitka", type: "city" },
      { name: "Ketchikan", slug: "ketchikan", type: "city" }
    ]
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    slug: "arizona",
    cities: [
      { name: "Phoenix", slug: "phoenix", type: "city" },
      { name: "Tucson", slug: "tucson", type: "city" },
      { name: "Mesa", slug: "mesa", type: "city" },
      { name: "Scottsdale", slug: "scottsdale", type: "city" },
      { name: "Chandler", slug: "chandler", type: "city" },
      { name: "Glendale", slug: "glendale", type: "city" },
      { name: "Gilbert", slug: "gilbert", type: "city" },
      { name: "Tempe", slug: "tempe", type: "city" },
      { name: "Peoria", slug: "peoria", type: "city" },
      { name: "Surprise", slug: "surprise", type: "city" }
    ]
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    slug: "arkansas",
    cities: [
      { name: "Little Rock", slug: "little-rock", type: "city" },
      { name: "Fort Smith", slug: "fort-smith", type: "city" },
      { name: "Fayetteville", slug: "fayetteville", type: "city" },
      { name: "Springdale", slug: "springdale", type: "city" },
      { name: "Jonesboro", slug: "jonesboro", type: "city" }
    ]
  },
  {
    name: "California",
    abbreviation: "CA",
    slug: "california",
    cities: [
      { name: "Los Angeles", slug: "los-angeles", type: "city" },
      { name: "San Diego", slug: "san-diego", type: "city" },
      { name: "San Jose", slug: "san-jose", type: "city" },
      { name: "San Francisco", slug: "san-francisco", type: "city" },
      { name: "Fresno", slug: "fresno", type: "city" },
      { name: "Sacramento", slug: "sacramento", type: "city" },
      { name: "Long Beach", slug: "long-beach", type: "city" },
      { name: "Oakland", slug: "oakland", type: "city" },
      { name: "Bakersfield", slug: "bakersfield", type: "city" },
      { name: "Anaheim", slug: "anaheim", type: "city" },
      { name: "Santa Ana", slug: "santa-ana", type: "city" },
      { name: "Riverside", slug: "riverside", type: "city" }
    ]
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    slug: "colorado",
    cities: [
      { name: "Denver", slug: "denver", type: "city" },
      { name: "Colorado Springs", slug: "colorado-springs", type: "city" },
      { name: "Aurora", slug: "aurora", type: "city" },
      { name: "Fort Collins", slug: "fort-collins", type: "city" },
      { name: "Lakewood", slug: "lakewood", type: "city" },
      { name: "Thornton", slug: "thornton", type: "city" },
      { name: "Arvada", slug: "arvada", type: "city" },
      { name: "Westminster", slug: "westminster", type: "city" }
    ]
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    slug: "connecticut",
    cities: [
      { name: "Bridgeport", slug: "bridgeport", type: "city" },
      { name: "New Haven", slug: "new-haven", type: "city" },
      { name: "Hartford", slug: "hartford", type: "city" },
      { name: "Stamford", slug: "stamford", type: "city" },
      { name: "Waterbury", slug: "waterbury", type: "city" },
      { name: "Norwalk", slug: "norwalk", type: "city" }
    ]
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    slug: "delaware",
    cities: [
      { name: "Wilmington", slug: "wilmington", type: "city" },
      { name: "Dover", slug: "dover", type: "city" },
      { name: "Newark", slug: "newark", type: "city" },
      { name: "Middletown", slug: "middletown", type: "city" },
      { name: "Smyrna", slug: "smyrna", type: "city" }
    ]
  },
  {
    name: "Florida",
    abbreviation: "FL",
    slug: "florida",
    cities: [
      { name: "Jacksonville", slug: "jacksonville", type: "city" },
      { name: "Miami", slug: "miami", type: "city" },
      { name: "Tampa", slug: "tampa", type: "city" },
      { name: "Orlando", slug: "orlando", type: "city" },
      { name: "St. Petersburg", slug: "st-petersburg", type: "city" },
      { name: "Hialeah", slug: "hialeah", type: "city" },
      { name: "Tallahassee", slug: "tallahassee", type: "city" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale", type: "city" },
      { name: "Port St. Lucie", slug: "port-st-lucie", type: "city" },
      { name: "Cape Coral", slug: "cape-coral", type: "city" },
      { name: "Pembroke Pines", slug: "pembroke-pines", type: "city" },
      { name: "Hollywood", slug: "hollywood", type: "city" }
    ]
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    slug: "georgia",
    cities: [
      { name: "Atlanta", slug: "atlanta", type: "city" },
      { name: "Augusta", slug: "augusta", type: "city" },
      { name: "Columbus", slug: "columbus", type: "city" },
      { name: "Macon", slug: "macon", type: "city" },
      { name: "Savannah", slug: "savannah", type: "city" },
      { name: "Athens", slug: "athens", type: "city" },
      { name: "Sandy Springs", slug: "sandy-springs", type: "city" },
      { name: "Roswell", slug: "roswell", type: "city" }
    ]
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    slug: "hawaii",
    cities: [
      { name: "Honolulu", slug: "honolulu", type: "city" },
      { name: "Pearl City", slug: "pearl-city", type: "city" },
      { name: "Hilo", slug: "hilo", type: "city" },
      { name: "Kailua", slug: "kailua", type: "city" },
      { name: "Waipahu", slug: "waipahu", type: "city" }
    ]
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    slug: "idaho",
    cities: [
      { name: "Boise", slug: "boise", type: "city" },
      { name: "Meridian", slug: "meridian", type: "city" },
      { name: "Nampa", slug: "nampa", type: "city" },
      { name: "Idaho Falls", slug: "idaho-falls", type: "city" },
      { name: "Pocatello", slug: "pocatello", type: "city" }
    ]
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    slug: "illinois",
    cities: [
      { name: "Chicago", slug: "chicago", type: "city" },
      { name: "Aurora", slug: "aurora", type: "city" },
      { name: "Rockford", slug: "rockford", type: "city" },
      { name: "Joliet", slug: "joliet", type: "city" },
      { name: "Naperville", slug: "naperville", type: "city" },
      { name: "Springfield", slug: "springfield", type: "city" },
      { name: "Peoria", slug: "peoria", type: "city" },
      { name: "Elgin", slug: "elgin", type: "city" }
    ]
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    slug: "indiana",
    cities: [
      { name: "Indianapolis", slug: "indianapolis", type: "city" },
      { name: "Fort Wayne", slug: "fort-wayne", type: "city" },
      { name: "Evansville", slug: "evansville", type: "city" },
      { name: "South Bend", slug: "south-bend", type: "city" },
      { name: "Carmel", slug: "carmel", type: "city" },
      { name: "Fishers", slug: "fishers", type: "city" }
    ]
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    slug: "iowa",
    cities: [
      { name: "Des Moines", slug: "des-moines", type: "city" },
      { name: "Cedar Rapids", slug: "cedar-rapids", type: "city" },
      { name: "Davenport", slug: "davenport", type: "city" },
      { name: "Sioux City", slug: "sioux-city", type: "city" },
      { name: "Iowa City", slug: "iowa-city", type: "city" }
    ]
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    slug: "kansas",
    cities: [
      { name: "Wichita", slug: "wichita", type: "city" },
      { name: "Overland Park", slug: "overland-park", type: "city" },
      { name: "Kansas City", slug: "kansas-city", type: "city" },
      { name: "Olathe", slug: "olathe", type: "city" },
      { name: "Topeka", slug: "topeka", type: "city" }
    ]
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    slug: "kentucky",
    cities: [
      { name: "Louisville", slug: "louisville", type: "city" },
      { name: "Lexington", slug: "lexington", type: "city" },
      { name: "Bowling Green", slug: "bowling-green", type: "city" },
      { name: "Owensboro", slug: "owensboro", type: "city" },
      { name: "Covington", slug: "covington", type: "city" }
    ]
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    slug: "louisiana",
    cities: [
      { name: "New Orleans", slug: "new-orleans", type: "city" },
      { name: "Baton Rouge", slug: "baton-rouge", type: "city" },
      { name: "Shreveport", slug: "shreveport", type: "city" },
      { name: "Lafayette", slug: "lafayette", type: "city" },
      { name: "Lake Charles", slug: "lake-charles", type: "city" }
    ]
  },
  {
    name: "Maine",
    abbreviation: "ME",
    slug: "maine",
    cities: [
      { name: "Portland", slug: "portland", type: "city" },
      { name: "Lewiston", slug: "lewiston", type: "city" },
      { name: "Bangor", slug: "bangor", type: "city" },
      { name: "South Portland", slug: "south-portland", type: "city" },
      { name: "Auburn", slug: "auburn", type: "city" }
    ]
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    slug: "maryland",
    cities: [
      { name: "Baltimore", slug: "baltimore", type: "city" },
      { name: "Frederick", slug: "frederick", type: "city" },
      { name: "Rockville", slug: "rockville", type: "city" },
      { name: "Gaithersburg", slug: "gaithersburg", type: "city" },
      { name: "Bowie", slug: "bowie", type: "city" },
      { name: "Annapolis", slug: "annapolis", type: "city" }
    ]
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    slug: "massachusetts",
    cities: [
      { name: "Boston", slug: "boston", type: "city" },
      { name: "Worcester", slug: "worcester", type: "city" },
      { name: "Springfield", slug: "springfield", type: "city" },
      { name: "Cambridge", slug: "cambridge", type: "city" },
      { name: "Lowell", slug: "lowell", type: "city" },
      { name: "Brockton", slug: "brockton", type: "city" }
    ]
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    slug: "michigan",
    cities: [
      { name: "Detroit", slug: "detroit", type: "city" },
      { name: "Grand Rapids", slug: "grand-rapids", type: "city" },
      { name: "Warren", slug: "warren", type: "city" },
      { name: "Sterling Heights", slug: "sterling-heights", type: "city" },
      { name: "Ann Arbor", slug: "ann-arbor", type: "city" },
      { name: "Lansing", slug: "lansing", type: "city" }
    ]
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    slug: "minnesota",
    cities: [
      { name: "Minneapolis", slug: "minneapolis", type: "city" },
      { name: "St. Paul", slug: "st-paul", type: "city" },
      { name: "Rochester", slug: "rochester", type: "city" },
      { name: "Duluth", slug: "duluth", type: "city" },
      { name: "Bloomington", slug: "bloomington", type: "city" }
    ]
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    slug: "mississippi",
    cities: [
      { name: "Jackson", slug: "jackson", type: "city" },
      { name: "Gulfport", slug: "gulfport", type: "city" },
      { name: "Southaven", slug: "southaven", type: "city" },
      { name: "Hattiesburg", slug: "hattiesburg", type: "city" },
      { name: "Biloxi", slug: "biloxi", type: "city" }
    ]
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    slug: "missouri",
    cities: [
      { name: "Kansas City", slug: "kansas-city", type: "city" },
      { name: "St. Louis", slug: "st-louis", type: "city" },
      { name: "Springfield", slug: "springfield", type: "city" },
      { name: "Columbia", slug: "columbia", type: "city" },
      { name: "Independence", slug: "independence", type: "city" }
    ]
  },
  {
    name: "Montana",
    abbreviation: "MT",
    slug: "montana",
    cities: [
      { name: "Billings", slug: "billings", type: "city" },
      { name: "Missoula", slug: "missoula", type: "city" },
      { name: "Great Falls", slug: "great-falls", type: "city" },
      { name: "Bozeman", slug: "bozeman", type: "city" },
      { name: "Helena", slug: "helena", type: "city" }
    ]
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    slug: "nebraska",
    cities: [
      { name: "Omaha", slug: "omaha", type: "city" },
      { name: "Lincoln", slug: "lincoln", type: "city" },
      { name: "Bellevue", slug: "bellevue", type: "city" },
      { name: "Grand Island", slug: "grand-island", type: "city" },
      { name: "Kearney", slug: "kearney", type: "city" }
    ]
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    slug: "nevada",
    cities: [
      { name: "Las Vegas", slug: "las-vegas", type: "city" },
      { name: "Henderson", slug: "henderson", type: "city" },
      { name: "Reno", slug: "reno", type: "city" },
      { name: "North Las Vegas", slug: "north-las-vegas", type: "city" },
      { name: "Sparks", slug: "sparks", type: "city" }
    ]
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    slug: "new-hampshire",
    cities: [
      { name: "Manchester", slug: "manchester", type: "city" },
      { name: "Nashua", slug: "nashua", type: "city" },
      { name: "Concord", slug: "concord", type: "city" },
      { name: "Derry", slug: "derry", type: "town" },
      { name: "Rochester", slug: "rochester", type: "city" }
    ]
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    slug: "new-jersey",
    cities: [
      { name: "Newark", slug: "newark", type: "city" },
      { name: "Jersey City", slug: "jersey-city", type: "city" },
      { name: "Paterson", slug: "paterson", type: "city" },
      { name: "Elizabeth", slug: "elizabeth", type: "city" },
      { name: "Edison", slug: "edison", type: "city" },
      { name: "Woodbridge", slug: "woodbridge", type: "town" }
    ]
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    slug: "new-mexico",
    cities: [
      { name: "Albuquerque", slug: "albuquerque", type: "city" },
      { name: "Las Cruces", slug: "las-cruces", type: "city" },
      { name: "Rio Rancho", slug: "rio-rancho", type: "city" },
      { name: "Santa Fe", slug: "santa-fe", type: "city" },
      { name: "Roswell", slug: "roswell", type: "city" }
    ]
  },
  {
    name: "New York",
    abbreviation: "NY",
    slug: "new-york",
    cities: [
      { name: "New York City", slug: "new-york-city", type: "city" },
      { name: "Buffalo", slug: "buffalo", type: "city" },
      { name: "Rochester", slug: "rochester", type: "city" },
      { name: "Yonkers", slug: "yonkers", type: "city" },
      { name: "Syracuse", slug: "syracuse", type: "city" },
      { name: "Albany", slug: "albany", type: "city" }
    ]
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    slug: "north-carolina",
    cities: [
      { name: "Charlotte", slug: "charlotte", type: "city" },
      { name: "Raleigh", slug: "raleigh", type: "city" },
      { name: "Greensboro", slug: "greensboro", type: "city" },
      { name: "Durham", slug: "durham", type: "city" },
      { name: "Winston-Salem", slug: "winston-salem", type: "city" },
      { name: "Fayetteville", slug: "fayetteville", type: "city" }
    ]
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    slug: "north-dakota",
    cities: [
      { name: "Fargo", slug: "fargo", type: "city" },
      { name: "Bismarck", slug: "bismarck", type: "city" },
      { name: "Grand Forks", slug: "grand-forks", type: "city" },
      { name: "Minot", slug: "minot", type: "city" },
      { name: "West Fargo", slug: "west-fargo", type: "city" }
    ]
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    slug: "ohio",
    cities: [
      { name: "Columbus", slug: "columbus", type: "city" },
      { name: "Cleveland", slug: "cleveland", type: "city" },
      { name: "Cincinnati", slug: "cincinnati", type: "city" },
      { name: "Toledo", slug: "toledo", type: "city" },
      { name: "Akron", slug: "akron", type: "city" },
      { name: "Dayton", slug: "dayton", type: "city" }
    ]
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    slug: "oklahoma",
    cities: [
      { name: "Oklahoma City", slug: "oklahoma-city", type: "city" },
      { name: "Tulsa", slug: "tulsa", type: "city" },
      { name: "Norman", slug: "norman", type: "city" },
      { name: "Broken Arrow", slug: "broken-arrow", type: "city" },
      { name: "Lawton", slug: "lawton", type: "city" }
    ]
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    slug: "oregon",
    cities: [
      { name: "Portland", slug: "portland", type: "city" },
      { name: "Salem", slug: "salem", type: "city" },
      { name: "Eugene", slug: "eugene", type: "city" },
      { name: "Gresham", slug: "gresham", type: "city" },
      { name: "Hillsboro", slug: "hillsboro", type: "city" }
    ]
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    slug: "pennsylvania",
    cities: [
      { name: "Philadelphia", slug: "philadelphia", type: "city" },
      { name: "Pittsburgh", slug: "pittsburgh", type: "city" },
      { name: "Allentown", slug: "allentown", type: "city" },
      { name: "Erie", slug: "erie", type: "city" },
      { name: "Reading", slug: "reading", type: "city" },
      { name: "Scranton", slug: "scranton", type: "city" }
    ]
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    slug: "rhode-island",
    cities: [
      { name: "Providence", slug: "providence", type: "city" },
      { name: "Warwick", slug: "warwick", type: "city" },
      { name: "Cranston", slug: "cranston", type: "city" },
      { name: "Pawtucket", slug: "pawtucket", type: "city" },
      { name: "East Providence", slug: "east-providence", type: "city" }
    ]
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    slug: "south-carolina",
    cities: [
      { name: "Columbia", slug: "columbia", type: "city" },
      { name: "Charleston", slug: "charleston", type: "city" },
      { name: "North Charleston", slug: "north-charleston", type: "city" },
      { name: "Mount Pleasant", slug: "mount-pleasant", type: "city" },
      { name: "Rock Hill", slug: "rock-hill", type: "city" }
    ]
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    slug: "south-dakota",
    cities: [
      { name: "Sioux Falls", slug: "sioux-falls", type: "city" },
      { name: "Rapid City", slug: "rapid-city", type: "city" },
      { name: "Aberdeen", slug: "aberdeen", type: "city" },
      { name: "Brookings", slug: "brookings", type: "city" },
      { name: "Watertown", slug: "watertown", type: "city" }
    ]
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    slug: "tennessee",
    cities: [
      { name: "Nashville", slug: "nashville", type: "city" },
      { name: "Memphis", slug: "memphis", type: "city" },
      { name: "Knoxville", slug: "knoxville", type: "city" },
      { name: "Chattanooga", slug: "chattanooga", type: "city" },
      { name: "Clarksville", slug: "clarksville", type: "city" }
    ]
  },
  {
    name: "Texas",
    abbreviation: "TX",
    slug: "texas",
    cities: [
      { name: "Houston", slug: "houston", type: "city" },
      { name: "San Antonio", slug: "san-antonio", type: "city" },
      { name: "Dallas", slug: "dallas", type: "city" },
      { name: "Austin", slug: "austin", type: "city" },
      { name: "Fort Worth", slug: "fort-worth", type: "city" },
      { name: "El Paso", slug: "el-paso", type: "city" },
      { name: "Arlington", slug: "arlington", type: "city" },
      { name: "Corpus Christi", slug: "corpus-christi", type: "city" },
      { name: "Plano", slug: "plano", type: "city" },
      { name: "Laredo", slug: "laredo", type: "city" }
    ]
  },
  {
    name: "Utah",
    abbreviation: "UT",
    slug: "utah",
    cities: [
      { name: "Salt Lake City", slug: "salt-lake-city", type: "city" },
      { name: "West Valley City", slug: "west-valley-city", type: "city" },
      { name: "Provo", slug: "provo", type: "city" },
      { name: "West Jordan", slug: "west-jordan", type: "city" },
      { name: "Orem", slug: "orem", type: "city" }
    ]
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    slug: "vermont",
    cities: [
      { name: "Burlington", slug: "burlington", type: "city" },
      { name: "South Burlington", slug: "south-burlington", type: "city" },
      { name: "Rutland", slug: "rutland", type: "city" },
      { name: "Barre", slug: "barre", type: "city" },
      { name: "Montpelier", slug: "montpelier", type: "city" }
    ]
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    slug: "virginia",
    cities: [
      { name: "Virginia Beach", slug: "virginia-beach", type: "city" },
      { name: "Norfolk", slug: "norfolk", type: "city" },
      { name: "Chesapeake", slug: "chesapeake", type: "city" },
      { name: "Richmond", slug: "richmond", type: "city" },
      { name: "Newport News", slug: "newport-news", type: "city" },
      { name: "Alexandria", slug: "alexandria", type: "city" }
    ]
  },
  {
    name: "Washington",
    abbreviation: "WA",
    slug: "washington",
    cities: [
      { name: "Seattle", slug: "seattle", type: "city" },
      { name: "Spokane", slug: "spokane", type: "city" },
      { name: "Tacoma", slug: "tacoma", type: "city" },
      { name: "Vancouver", slug: "vancouver", type: "city" },
      { name: "Bellevue", slug: "bellevue", type: "city" },
      { name: "Everett", slug: "everett", type: "city" }
    ]
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    slug: "west-virginia",
    cities: [
      { name: "Charleston", slug: "charleston", type: "city" },
      { name: "Huntington", slug: "huntington", type: "city" },
      { name: "Morgantown", slug: "morgantown", type: "city" },
      { name: "Parkersburg", slug: "parkersburg", type: "city" },
      { name: "Wheeling", slug: "wheeling", type: "city" }
    ]
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    slug: "wisconsin",
    cities: [
      { name: "Milwaukee", slug: "milwaukee", type: "city" },
      { name: "Madison", slug: "madison", type: "city" },
      { name: "Green Bay", slug: "green-bay", type: "city" },
      { name: "Kenosha", slug: "kenosha", type: "city" },
      { name: "Racine", slug: "racine", type: "city" }
    ]
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    slug: "wyoming",
    cities: [
      { name: "Cheyenne", slug: "cheyenne", type: "city" },
      { name: "Casper", slug: "casper", type: "city" },
      { name: "Laramie", slug: "laramie", type: "city" },
      { name: "Gillette", slug: "gillette", type: "city" },
      { name: "Rock Springs", slug: "rock-springs", type: "city" }
    ]
  }
];
