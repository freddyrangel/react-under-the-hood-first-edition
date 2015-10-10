var uuid = require('node-uuid');

var Stars = {
  getStarData: function() {
    var rawData = this.rawData();
    var dataWithUUIDs = rawData.map(this.addUUID);
    return dataWithUUIDs;
  },

  addUUID: function(star) {
    star.id = uuid.v4();
    return star;
  },

  rawData: function() {
    return [
      // Row 1 of Map
      {
        name: 'Breen',
        coordinates: [10, 90],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Kul Tiras',
        coordinates: [160, 95],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Celes',
        coordinates: [170, 70],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Alterac',
        coordinates: [220, 40],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'El Toris',
        coordinates: [260, 90],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Azel',
        coordinates: [310, 20],
        jurisdiction: 'Independent'
      },
      {
        name: 'Arbazan',
        coordinates: [340, 10],
        jurisdiction: 'Independent'
      },
      {
        name: 'Starbase 204',
        coordinates: [345, 80],
        jurisdiction: 'Federation'
      },
      {
        name: 'Theta Minsar',
        coordinates: [350, 90],
        jurisdiction: 'Federation'
      },
      {
        name: 'Theta Cygni',
        coordinates: [350, 60],
        jurisdiction: 'Federation'
      },
      {
        name: 'Byzell',
        coordinates: [390, 20],
        jurisdiction: 'Federation'
      },
      {
        name: 'Corinth',
        coordinates: [435, 35],
        jurisdiction: 'Federation'
      },
      {
        name: 'Delta',
        coordinates: [440, 90],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kilka',
        coordinates: [505, 45],
        jurisdiction: 'Federation'
      },
      {
        name: 'Lyrata',
        coordinates: [530, 50],
        jurisdiction: 'Federation'
      },
      {
        name: 'Ka\'Tula',
        coordinates: [550, 70],
        jurisdiction: 'Federation'
      },
      {
        name: 'Starbase 241',
        coordinates: [570, 90],
        jurisdiction: 'Federation'
      },
      {
        name: 'Gildebron',
        coordinates: [590, 40],
        jurisdiction: 'Alteran Expanse'
      },
      {
        name: 'Ciden',
        coordinates: [630, 90],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Cheron',
        coordinates: [650, 70],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Romulus',
        coordinates: [670, 90],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Rho Tucanae',
        coordinates: [840, 70],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'Cortaynus',
        coordinates: [860, 40],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'Gacrux',
        coordinates: [870, 80],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'T\'Met',
        coordinates: [895, 30],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'T\'Bak',
        coordinates: [950, 70],
        jurisdiction: 'Garidian Republic'
      },

      // Row 2 of Map

      {
        name: 'Nathrazim',
        coordinates: [40, 110],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Adin Kel',
        coordinates: [140, 140],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Tirsfal',
        coordinates: [170, 180],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Kaldir',
        coordinates: [170, 110],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Nahal Kaitos',
        coordinates: [205, 120],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'J\'Larre',
        coordinates: [240, 150],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tethe-Alla',
        coordinates: [240, 190],
        jurisdiction: 'Independent'
      },
      {
        name: 'Amizor',
        coordinates: [290, 170],
        jurisdiction: 'Independent'
      },
      {
        name: 'Starbase 54',
        coordinates: [330, 140],
        jurisdiction: 'Federation'
      },
      {
        name: 'Corneria',
        coordinates: [350, 105],
        jurisdiction: 'Federation'
      },
      {
        name: 'Terminia',
        coordinates: [390, 130],
        jurisdiction: 'Federation'
      },
      {
        name: 'Ohniaka',
        coordinates: [460, 105],
        jurisdiction: 'Federation'
      },
      {
        name: 'Zetar',
        coordinates: [440, 170],
        jurisdiction: 'Federation'
      },
      {
        name: 'Sauria',
        coordinates: [480, 120],
        jurisdiction: 'Federation'
      },
      {
        name: 'Ivor',
        coordinates: [510, 150],
        jurisdiction: 'Federation'
      },
      {
        name: 'Lukaris',
        coordinates: [540, 140],
        jurisdiction: 'Federation'
      },
      {
        name: 'Bolarus',
        coordinates: [550, 170],
        jurisdiction: 'Federation'
      },
      {
        name: 'Aurillac',
        coordinates: [595, 110],
        jurisdiction: 'Federation'
      },
      {
        name: 'Dessica',
        coordinates: [595, 180],
        jurisdiction: 'Federation'
      },
      {
        name: 'Devron',
        coordinates: [605, 195],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Trikkala',
        coordinates: [710, 190],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Celinar',
        coordinates: [760, 150],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Haakona',
        coordinates: [840, 130],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Dimovius',
        coordinates: [905, 170],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Pretorian',
        coordinates: [930, 190],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Laraq',
        coordinates: [920, 110],
        jurisdiction: 'Romulan Empire'
      },

      // Row 3 of Map
      {
        name: 'Reza-Karun',
        coordinates: [40, 210],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Matherital',
        coordinates: [90, 280],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Shengra Nel',
        coordinates: [170, 240],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tukatu',
        coordinates: [190, 260],
        jurisdiction: 'Independent'
      },
      {
        name: 'Maxia',
        coordinates: [280, 220],
        jurisdiction: 'Independent'
      },
      {
        name: 'Forren',
        coordinates: [290, 260],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tarkalia',
        coordinates: [330, 210],
        jurisdiction: 'Federation'
      },
      {
        name: 'Denobula',
        coordinates: [390, 280],
        jurisdiction: 'Federation'
      },
      {
        name: 'Vega',
        coordinates: [390, 250],
        jurisdiction: 'Federation'
      },
      {
        name: 'Inferna',
        coordinates: [390, 230],
        jurisdiction: 'Federation'
      },
      {
        name: 'Tellar',
        coordinates: [440, 290],
        jurisdiction: 'Federation'
      },
      {
        name: 'Memory Alpha',
        coordinates: [460, 210],
        jurisdiction: 'Federation'
      },
      {
        name: 'Sol',
        coordinates: [499, 299],
        jurisdiction: 'Federation'
      },
      {
        name: 'Alpha Centauri',
        coordinates: [520, 280],
        jurisdiction: 'Federation'
      },
      {
        name: 'Draylax',
        coordinates: [530, 250],
        jurisdiction: 'Federation'
      },
      {
        name: 'Babel',
        coordinates: [550, 290],
        jurisdiction: 'Federation'
      },
      {
        name: 'Benzar',
        coordinates: [550, 220],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kolaran',
        coordinates: [610, 230],
        jurisdiction: 'Federation'
      },
      {
        name: 'Calder',
        coordinates: [630, 240],
        jurisdiction: 'Federation'
      },
      {
        name: 'Oscelliet',
        coordinates: [640, 250],
        jurisdiction: 'Federation'
      },
      {
        name: 'Draken',
        coordinates: [640, 270],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kaleb',
        coordinates: [650, 280],
        jurisdiction: 'Federation'
      },
      {
        name: 'Nelvana',
        coordinates: [680, 270],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Alinor',
        coordinates: [690, 280],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Talon',
        coordinates: [730, 230],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Vendor',
        coordinates: [740, 250],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Glintara',
        coordinates: [780, 290],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Algorab',
        coordinates: [790, 250],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Achenar',
        coordinates: [840, 240],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Penthara',
        coordinates: [890, 240],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Cheltax',
        coordinates: [930, 270],
        jurisdiction: 'Romulan Empire'
      },

      // Row 4 of Map

      {
        name: 'Sylvarrant',
        coordinates: [70, 320],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Voltar',
        coordinates: [40, 340],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Felton',
        coordinates: [20, 390],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Athos',
        coordinates: [130, 400],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Delof',
        coordinates: [130, 350],
        jurisdiction: 'Independent'
      },
      {
        name: 'Alpha 441',
        coordinates: [170, 390],
        jurisdiction: 'Independent'
      },
      {
        name: 'Lamenda',
        coordinates: [190, 350],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Tzenketh',
        coordinates: [270, 350],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Temecklia',
        coordinates: [290, 390],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Barisa',
        coordinates: [300, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'AR-558',
        coordinates: [330, 330],
        jurisdiction: 'Federation'
      },
      {
        name: 'Mizar',
        coordinates: [340, 380],
        jurisdiction: 'Federation'
      },
      {
        name: 'Sira Adun',
        coordinates: [370, 390],
        jurisdiction: 'Federation'
      },
      {
        name: 'Terra Nova',
        coordinates: [430, 350],
        jurisdiction: 'Federation'
      },
      {
        name: 'Starbase 74',
        coordinates: [460, 390],
        jurisdiction: 'Federation'
      },
      {
        name: 'Axanar',
        coordinates: [480, 320],
        jurisdiction: 'Federation'
      },
      {
        name: 'Wolf 359',
        coordinates: [530, 320],
        jurisdiction: 'Federation'
      },
      {
        name: 'Andoria',
        coordinates: [535, 340],
        jurisdiction: 'Federation'
      },
      {
        name: 'Vulcan',
        coordinates: [530, 360],
        jurisdiction: 'Federation'
      },
      {
        name: 'Weytahn',
        coordinates: [600, 350],
        jurisdiction: 'Federation'
      },
      {
        name: 'Efrosia',
        coordinates: [610, 400],
        jurisdiction: 'Federation'
      },
      {
        name: 'Horst',
        coordinates: [640, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'Taugus',
        coordinates: [670, 330],
        jurisdiction: 'Federation'
      },
      {
        name: 'Qualor',
        coordinates: [710, 340],
        jurisdiction: 'Federation'
      },
      {
        name: 'Jolanisar',
        coordinates: [720, 310],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Jantral',
        coordinates: [720, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'Algeron',
        coordinates: [750, 330],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Galorndon Core',
        coordinates: [750, 340],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Tomed',
        coordinates: [770, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'Outpost 23',
        coordinates: [820, 390],
        jurisdiction: 'Federation'
      },
      {
        name: 'Alpha Onias',
        coordinates: [840, 360],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Uniroth',
        coordinates: [860, 370],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Al\'Asayan',
        coordinates: [940, 380],
        jurisdiction: 'Romulan Empire'
      },

      // Row 5 of Map

      {
        name: 'Lazon',
        coordinates: [10, 440],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Actrium',
        coordinates: [80, 410],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Adarak',
        coordinates: [60, 450],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Kora',
        coordinates: [70, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Quinor',
        coordinates: [90, 430],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Monac',
        coordinates: [110, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Torros',
        coordinates: [130, 490],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Marva',
        coordinates: [170, 420],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Olmerak',
        coordinates: [180, 430],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Cardassia',
        coordinates: [190, 460],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Empok Nor',
        coordinates: [220, 410],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Korma',
        coordinates: [210, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Deep Space 9',
        coordinates: [240, 440],
        jurisdiction: 'Independent'
      },
      {
        name: 'Bajor',
        coordinates: [250, 460],
        jurisdiction: 'Independent'
      },
      {
        name: 'Kobliad',
        coordinates: [290, 410],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Loval',
        coordinates: [220, 490],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Xepolite',
        coordinates: [280, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Lyshan',
        coordinates: [305, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Trill',
        coordinates: [330, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kabrel',
        coordinates: [340, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kalandra',
        coordinates: [360, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Quatal',
        coordinates: [350, 490],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Lya Station Alpha',
        coordinates: [380, 480],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kressari',
        coordinates: [390, 470],
        jurisdiction: 'Federation'
      },
      {
        name: 'Draylon',
        coordinates: [410, 430],
        jurisdiction: 'Federation'
      },
      {
        name: 'Bynaus',
        coordinates: [440, 450],
        jurisdiction: 'Federation'
      },
      {
        name: 'Orion',
        coordinates: [530, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Coridan',
        coordinates: [520, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Rigel',
        coordinates: [590, 450],
        jurisdiction: 'Federation'
      },
      {
        name: 'Nausicaa',
        coordinates: [640, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Regulus',
        coordinates: [680, 480],
        jurisdiction: 'Federation'
      },
      {
        name: 'Celes',
        coordinates: [690, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Midrian',
        coordinates: [720, 490],
        jurisdiction: 'Federation'
      },
      {
        name: 'Japori',
        coordinates: [790, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Veytan',
        coordinates: [810, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Jouret',
        coordinates: [820, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Starbase 234',
        coordinates: [840, 480],
        jurisdiction: 'Federation'
      },
      {
        name: 'Acmar',
        coordinates: [860, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Stabase 84',
        coordinates: [890, 430],
        jurisdiction: 'Federation'
      },
      {
        name: 'Nimbus',
        coordinates: [940, 440],
        jurisdiction: 'Independent'
      },
      {
        name: 'Chi\'Dan',
        coordinates: [960, 480],
        jurisdiction: 'Klingon Empire'
      },

      // Row 6 of Map

      {
        name: 'Dopa',
        coordinates: [20, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Sarpedion',
        coordinates: [70, 510],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Orias',
        coordinates: [90, 520],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Velos',
        coordinates: [110, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Pentath',
        coordinates: [150, 510],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Soukara',
        coordinates: [170, 530],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Juhraya',
        coordinates: [160, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Tracken',
        coordinates: [180, 590],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Omekla',
        coordinates: [190, 550],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Celtris',
        coordinates: [190, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Amleth',
        coordinates: [220, 520],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Rakal',
        coordinates: [240, 510],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Aschelon',
        coordinates: [260, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Kelrabi',
        coordinates: [270, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Argus Array',
        coordinates: [290, 590],
        jurisdiction: 'Federation'
      },
      {
        name: 'Chin\'Toka',
        coordinates: [340, 520],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Setlik',
        coordinates: [320, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Cuellar',
        coordinates: [330, 550],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Veloz',
        coordinates: [360, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Solarion',
        coordinates: [390, 520],
        jurisdiction: 'Federation'
      },
      {
        name: 'Argolis',
        coordinates: [390, 510],
        jurisdiction: 'Federation'
      },
      {
        name: 'Minos Korva',
        coordinates: [380, 550],
        jurisdiction: 'Federation'
      },
      {
        name: 'Malcor',
        coordinates: [420, 580],
        jurisdiction: 'Federation'
      },
      {
        name: 'Betazed',
        coordinates: [440, 540],
        jurisdiction: 'Federation'
      },
      {
        name: 'Capella',
        coordinates: [445, 500],
        jurisdiction: 'Federation'
      },
      {
        name: 'Dakala',
        coordinates: [450, 520],
        jurisdiction: 'Federation'
      },
      {
        name: 'Tandar',
        coordinates: [480, 560],
        jurisdiction: 'Federation'
      },
      {
        name: 'Mazar',
        coordinates: [520, 505],
        jurisdiction: 'Federation'
      },
      {
        name: 'Risa',
        coordinates: [540, 520],
        jurisdiction: 'Federation'
      },
      {
        name: 'Castor',
        coordinates: [545, 540],
        jurisdiction: 'Federation'
      },
      {
        name: 'Elora',
        coordinates: [560, 580],
        jurisdiction: 'Federation'
      },
      {
        name: 'Son\'A',
        coordinates: [590, 590],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tarlac',
        coordinates: [590, 580],
        jurisdiction: 'Independent'
      },
      {
        name: 'Baku',
        coordinates: [590, 550],
        jurisdiction: 'Independent'
      },
      {
        name: 'Kendra',
        coordinates: [615, 520],
        jurisdiction: 'Independent'
      },
      {
        name: 'Suliban',
        coordinates: [640, 540],
        jurisdiction: 'Independent'
      },
      {
        name: 'Obruli',
        coordinates: [670, 590],
        jurisdiction: 'Independent'
      },
      {
        name: 'Turkana',
        coordinates: [710, 570],
        jurisdiction: 'Independent'
      },
      {
        name: 'Yaraka',
        coordinates: [740, 540],
        jurisdiction: 'Independent'
      },
      {
        name: 'Verix',
        coordinates: [770, 580],
        jurisdiction: 'Independent'
      },
      {
        name: 'Khitomer',
        coordinates: [880, 540],
        jurisdiction: 'Klingon Empire'
      },
      {
        name: 'Morska',
        coordinates: [890, 580],
        jurisdiction: 'Klingon Empire'
      },
      {
        name: 'Rura Penthe',
        coordinates: [910, 590],
        jurisdiction: 'Klingon Empire'
      },
      {
        name: 'Qo\' Nos',
        coordinates: [960, 580],
        jurisdiction: 'Klingon Empire'
      },
    ];
  }
}

module.exports = Stars;
