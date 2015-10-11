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
        position: [10, 90],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Kul Tiras',
        position: [160, 95],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Celes',
        position: [170, 70],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Alterac',
        position: [220, 40],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'El Toris',
        position: [260, 90],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Azel',
        position: [310, 20],
        jurisdiction: 'Independent'
      },
      {
        name: 'Arbazan',
        position: [340, 10],
        jurisdiction: 'Independent'
      },
      {
        name: 'Starbase 204',
        position: [345, 80],
        jurisdiction: 'Federation'
      },
      {
        name: 'Theta Minsar',
        position: [350, 90],
        jurisdiction: 'Federation'
      },
      {
        name: 'Theta Cygni',
        position: [350, 60],
        jurisdiction: 'Federation'
      },
      {
        name: 'Byzell',
        position: [390, 20],
        jurisdiction: 'Federation'
      },
      {
        name: 'Corinth',
        position: [435, 35],
        jurisdiction: 'Federation'
      },
      {
        name: 'Delta',
        position: [440, 90],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kilka',
        position: [505, 45],
        jurisdiction: 'Federation'
      },
      {
        name: 'Lyrata',
        position: [530, 50],
        jurisdiction: 'Federation'
      },
      {
        name: 'Ka\'Tula',
        position: [550, 70],
        jurisdiction: 'Federation'
      },
      {
        name: 'Starbase 241',
        position: [570, 90],
        jurisdiction: 'Federation'
      },
      {
        name: 'Gildebron',
        position: [590, 40],
        jurisdiction: 'Alteran Expanse'
      },
      {
        name: 'Ciden',
        position: [630, 90],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Cheron',
        position: [650, 70],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Romulus',
        position: [670, 90],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Rho Tucanae',
        position: [840, 70],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'Cortaynus',
        position: [860, 40],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'Gacrux',
        position: [870, 80],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'T\'Met',
        position: [895, 30],
        jurisdiction: 'Garidian Republic'
      },
      {
        name: 'T\'Bak',
        position: [950, 70],
        jurisdiction: 'Garidian Republic'
      },

      // Row 2 of Map

      {
        name: 'Nathrazim',
        position: [40, 110],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Adin Kel',
        position: [140, 140],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Tirsfal',
        position: [170, 180],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Kaldir',
        position: [170, 110],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Nahal Kaitos',
        position: [205, 120],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'J\'Larre',
        position: [240, 150],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tethe-Alla',
        position: [240, 190],
        jurisdiction: 'Independent'
      },
      {
        name: 'Amizor',
        position: [290, 170],
        jurisdiction: 'Independent'
      },
      {
        name: 'Starbase 54',
        position: [330, 140],
        jurisdiction: 'Federation'
      },
      {
        name: 'Corneria',
        position: [350, 105],
        jurisdiction: 'Federation'
      },
      {
        name: 'Terminia',
        position: [390, 130],
        jurisdiction: 'Federation'
      },
      {
        name: 'Ohniaka',
        position: [460, 105],
        jurisdiction: 'Federation'
      },
      {
        name: 'Zetar',
        position: [440, 170],
        jurisdiction: 'Federation'
      },
      {
        name: 'Sauria',
        position: [480, 120],
        jurisdiction: 'Federation'
      },
      {
        name: 'Ivor',
        position: [510, 150],
        jurisdiction: 'Federation'
      },
      {
        name: 'Lukaris',
        position: [540, 140],
        jurisdiction: 'Federation'
      },
      {
        name: 'Bolarus',
        position: [550, 170],
        jurisdiction: 'Federation'
      },
      {
        name: 'Aurillac',
        position: [595, 110],
        jurisdiction: 'Federation'
      },
      {
        name: 'Dessica',
        position: [595, 180],
        jurisdiction: 'Federation'
      },
      {
        name: 'Devron',
        position: [605, 195],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Trikkala',
        position: [710, 190],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Celinar',
        position: [760, 150],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Haakona',
        position: [840, 130],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Dimovius',
        position: [905, 170],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Pretorian',
        position: [930, 190],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Laraq',
        position: [920, 110],
        jurisdiction: 'Romulan Empire'
      },

      // Row 3 of Map
      {
        name: 'Reza-Karun',
        position: [40, 210],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Matherital',
        position: [90, 280],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Shengra Nel',
        position: [170, 240],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tukatu',
        position: [190, 260],
        jurisdiction: 'Independent'
      },
      {
        name: 'Maxia',
        position: [280, 220],
        jurisdiction: 'Independent'
      },
      {
        name: 'Forren',
        position: [290, 260],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tarkalia',
        position: [330, 210],
        jurisdiction: 'Federation'
      },
      {
        name: 'Denobula',
        position: [390, 280],
        jurisdiction: 'Federation'
      },
      {
        name: 'Vega',
        position: [390, 250],
        jurisdiction: 'Federation'
      },
      {
        name: 'Inferna',
        position: [390, 230],
        jurisdiction: 'Federation'
      },
      {
        name: 'Tellar',
        position: [440, 290],
        jurisdiction: 'Federation'
      },
      {
        name: 'Memory Alpha',
        position: [460, 210],
        jurisdiction: 'Federation'
      },
      {
        name: 'Sol',
        position: [500, 300],
        jurisdiction: 'Federation'
      },
      {
        name: 'Alpha Centauri',
        position: [520, 280],
        jurisdiction: 'Federation'
      },
      {
        name: 'Draylax',
        position: [530, 250],
        jurisdiction: 'Federation'
      },
      {
        name: 'Babel',
        position: [550, 290],
        jurisdiction: 'Federation'
      },
      {
        name: 'Benzar',
        position: [550, 220],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kolaran',
        position: [610, 230],
        jurisdiction: 'Federation'
      },
      {
        name: 'Calder',
        position: [630, 240],
        jurisdiction: 'Federation'
      },
      {
        name: 'Oscelliet',
        position: [640, 250],
        jurisdiction: 'Federation'
      },
      {
        name: 'Draken',
        position: [640, 270],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kaleb',
        position: [650, 280],
        jurisdiction: 'Federation'
      },
      {
        name: 'Nelvana',
        position: [680, 270],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Alinor',
        position: [690, 280],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Talon',
        position: [730, 230],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Vendor',
        position: [740, 250],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Glintara',
        position: [780, 290],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Algorab',
        position: [790, 250],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Achenar',
        position: [840, 240],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Penthara',
        position: [890, 240],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Cheltax',
        position: [930, 270],
        jurisdiction: 'Romulan Empire'
      },

      // Row 4 of Map

      {
        name: 'Sylvarrant',
        position: [70, 320],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Voltar',
        position: [40, 340],
        jurisdiction: 'Elorg Bloc'
      },
      {
        name: 'Felton',
        position: [20, 390],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Athos',
        position: [130, 400],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Delof',
        position: [130, 350],
        jurisdiction: 'Independent'
      },
      {
        name: 'Alpha 441',
        position: [170, 390],
        jurisdiction: 'Independent'
      },
      {
        name: 'Lamenda',
        position: [190, 350],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Tzenketh',
        position: [270, 350],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Temecklia',
        position: [290, 390],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Barisa',
        position: [300, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'AR-558',
        position: [330, 330],
        jurisdiction: 'Federation'
      },
      {
        name: 'Mizar',
        position: [340, 380],
        jurisdiction: 'Federation'
      },
      {
        name: 'Sira Adun',
        position: [370, 390],
        jurisdiction: 'Federation'
      },
      {
        name: 'Terra Nova',
        position: [430, 350],
        jurisdiction: 'Federation'
      },
      {
        name: 'Starbase 74',
        position: [460, 390],
        jurisdiction: 'Federation'
      },
      {
        name: 'Axanar',
        position: [480, 320],
        jurisdiction: 'Federation'
      },
      {
        name: 'Wolf 359',
        position: [530, 320],
        jurisdiction: 'Federation'
      },
      {
        name: 'Andoria',
        position: [535, 340],
        jurisdiction: 'Federation'
      },
      {
        name: 'Vulcan',
        position: [530, 360],
        jurisdiction: 'Federation'
      },
      {
        name: 'Weytahn',
        position: [600, 350],
        jurisdiction: 'Federation'
      },
      {
        name: 'Efrosia',
        position: [610, 400],
        jurisdiction: 'Federation'
      },
      {
        name: 'Horst',
        position: [640, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'Taugus',
        position: [670, 330],
        jurisdiction: 'Federation'
      },
      {
        name: 'Qualor',
        position: [710, 340],
        jurisdiction: 'Federation'
      },
      {
        name: 'Jolanisar',
        position: [720, 310],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Jantral',
        position: [720, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'Algeron',
        position: [750, 330],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Galorndon Core',
        position: [750, 340],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Tomed',
        position: [770, 370],
        jurisdiction: 'Federation'
      },
      {
        name: 'Outpost 23',
        position: [820, 390],
        jurisdiction: 'Federation'
      },
      {
        name: 'Alpha Onias',
        position: [840, 360],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Uniroth',
        position: [860, 370],
        jurisdiction: 'Romulan Empire'
      },
      {
        name: 'Al\'Asayan',
        position: [940, 380],
        jurisdiction: 'Romulan Empire'
      },

      // Row 5 of Map

      {
        name: 'Lazon',
        position: [10, 440],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Actrium',
        position: [80, 410],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Adarak',
        position: [60, 450],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Kora',
        position: [70, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Quinor',
        position: [90, 430],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Monac',
        position: [110, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Torros',
        position: [130, 490],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Marva',
        position: [170, 420],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Olmerak',
        position: [180, 430],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Cardassia',
        position: [190, 460],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Empok Nor',
        position: [220, 410],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Korma',
        position: [210, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Deep Space 9',
        position: [240, 440],
        jurisdiction: 'Independent'
      },
      {
        name: 'Bajor',
        position: [250, 460],
        jurisdiction: 'Independent'
      },
      {
        name: 'Kobliad',
        position: [290, 410],
        jurisdiction: 'Tzenkethi Coalition'
      },
      {
        name: 'Loval',
        position: [220, 490],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Xepolite',
        position: [280, 480],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Lyshan',
        position: [305, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Trill',
        position: [330, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kabrel',
        position: [340, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kalandra',
        position: [360, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Quatal',
        position: [350, 490],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Lya Station Alpha',
        position: [380, 480],
        jurisdiction: 'Federation'
      },
      {
        name: 'Kressari',
        position: [390, 470],
        jurisdiction: 'Federation'
      },
      {
        name: 'Draylon',
        position: [410, 430],
        jurisdiction: 'Federation'
      },
      {
        name: 'Bynaus',
        position: [440, 450],
        jurisdiction: 'Federation'
      },
      {
        name: 'Orion',
        position: [530, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Coridan',
        position: [520, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Rigel',
        position: [590, 450],
        jurisdiction: 'Federation'
      },
      {
        name: 'Nausicaa',
        position: [640, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Regulus',
        position: [680, 480],
        jurisdiction: 'Federation'
      },
      {
        name: 'Celes',
        position: [690, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Midrian',
        position: [720, 490],
        jurisdiction: 'Federation'
      },
      {
        name: 'Japori',
        position: [790, 460],
        jurisdiction: 'Federation'
      },
      {
        name: 'Veytan',
        position: [810, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Jouret',
        position: [820, 420],
        jurisdiction: 'Federation'
      },
      {
        name: 'Starbase 234',
        position: [840, 480],
        jurisdiction: 'Federation'
      },
      {
        name: 'Acmar',
        position: [860, 440],
        jurisdiction: 'Federation'
      },
      {
        name: 'Stabase 84',
        position: [890, 430],
        jurisdiction: 'Federation'
      },
      {
        name: 'Nimbus',
        position: [940, 440],
        jurisdiction: 'Independent'
      },
      {
        name: 'Chi\'Dan',
        position: [960, 480],
        jurisdiction: 'Klingon Empire'
      },

      // Row 6 of Map

      {
        name: 'Dopa',
        position: [20, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Sarpedion',
        position: [70, 510],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Orias',
        position: [90, 520],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Velos',
        position: [110, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Pentath',
        position: [150, 510],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Soukara',
        position: [170, 530],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Juhraya',
        position: [160, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Tracken',
        position: [180, 590],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Omekla',
        position: [190, 550],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Celtris',
        position: [190, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Amleth',
        position: [220, 520],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Rakal',
        position: [240, 510],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Aschelon',
        position: [260, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Kelrabi',
        position: [270, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Argus Array',
        position: [290, 590],
        jurisdiction: 'Federation'
      },
      {
        name: 'Chin\'Toka',
        position: [340, 520],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Setlik',
        position: [320, 570],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Cuellar',
        position: [330, 550],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Veloz',
        position: [360, 540],
        jurisdiction: 'Cardassian Union'
      },
      {
        name: 'Solarion',
        position: [390, 520],
        jurisdiction: 'Federation'
      },
      {
        name: 'Argolis',
        position: [390, 510],
        jurisdiction: 'Federation'
      },
      {
        name: 'Minos Korva',
        position: [380, 550],
        jurisdiction: 'Federation'
      },
      {
        name: 'Malcor',
        position: [420, 580],
        jurisdiction: 'Federation'
      },
      {
        name: 'Betazed',
        position: [440, 540],
        jurisdiction: 'Federation'
      },
      {
        name: 'Capella',
        position: [445, 500],
        jurisdiction: 'Federation'
      },
      {
        name: 'Dakala',
        position: [450, 520],
        jurisdiction: 'Federation'
      },
      {
        name: 'Tandar',
        position: [480, 560],
        jurisdiction: 'Federation'
      },
      {
        name: 'Mazar',
        position: [520, 505],
        jurisdiction: 'Federation'
      },
      {
        name: 'Risa',
        position: [540, 520],
        jurisdiction: 'Federation'
      },
      {
        name: 'Castor',
        position: [545, 540],
        jurisdiction: 'Federation'
      },
      {
        name: 'Elora',
        position: [560, 580],
        jurisdiction: 'Federation'
      },
      {
        name: 'Son\'A',
        position: [590, 590],
        jurisdiction: 'Independent'
      },
      {
        name: 'Tarlac',
        position: [590, 580],
        jurisdiction: 'Independent'
      },
      {
        name: 'Baku',
        position: [590, 550],
        jurisdiction: 'Independent'
      },
      {
        name: 'Kendra',
        position: [615, 520],
        jurisdiction: 'Independent'
      },
      {
        name: 'Suliban',
        position: [640, 540],
        jurisdiction: 'Independent'
      },
      {
        name: 'Obruli',
        position: [670, 590],
        jurisdiction: 'Independent'
      },
      {
        name: 'Turkana',
        position: [710, 570],
        jurisdiction: 'Independent'
      },
      {
        name: 'Yaraka',
        position: [740, 540],
        jurisdiction: 'Independent'
      },
      {
        name: 'Verix',
        position: [770, 580],
        jurisdiction: 'Independent'
      },
      {
        name: 'Khitomer',
        position: [880, 540],
        jurisdiction: 'Klingon Empire'
      },
      {
        name: 'Morska',
        position: [890, 580],
        jurisdiction: 'Klingon Empire'
      },
      {
        name: 'Rura Penthe',
        position: [910, 590],
        jurisdiction: 'Klingon Empire'
      },
      {
        name: 'Qo\' Nos',
        position: [960, 580],
        jurisdiction: 'Klingon Empire'
      },
    ];
  }
}

module.exports = Stars;
