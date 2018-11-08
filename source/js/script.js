// Mobile toggle

var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

toggle.addEventListener('click', function() {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.add('main-nav--closed');
    nav.classList.remove('main-nav--opened');
  }
});

// Input phone masks

$(function(){
  $("#proposal-tel").mask("+7 (999) 999-9999");
  $("#main-tel").mask("+7 (999) 999-9999");
  $("#popup-tel").mask("+7 (999) 999-9999");
  $("#gain-tel-1").mask("+7 (999) 999-9999");
  $("#gain-tel-2").mask("+7 (999) 999-9999");
  $("#gain-tel-3").mask("+7 (999) 999-9999");
});

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    nav: true,
    items: 1,
    loop: true,
  })
});

//Форма главного экрана

var AUTO = [
{
 firm: 'Acura',
 models: ['CL', 'CSX', 'EL', 'ILX', 'Integra', 'Legend', 'MDX', 'NSX', 'RDX', 'RL', 'RLX', 'RSX', 'TL', 'TLX', 'TSX', 'ZDX', 'другая']
},
{
  firm: 'Alfa Romeo',
  models: ['145', '146', '147', '155', '156', '159', '164', '166', '33', '75', 'Brera', 'Giulietta', 'GT', 'GTV', 'MiTo', 'Spider', 'другая']
},
{
  firm: 'Audi',
  models: ['100', '80', 'A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'S4', 'S5', 'S8', 'TT', 'другая']
},
{
  firm: 'BMW',
  models: ['1-series', '3-series', '4-series', '5-series', '6-series', '7-series', 'M3', 'M5', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Z4', 'другая']
},
{
  firm: 'Buick',
  models: ['Century', 'Enclave', 'Encore', 'LaCrosse', 'LeSabre', 'Lucerne', 'Regal', 'Riviera', 'Roadmaster', 'Skylark', 'Terraza', 'другая']
},
{
  firm: 'Cadillac',
  models: ['ATS', 'BLS', 'CT6', 'CTS', 'DeVille', 'Escalade', 'Fleetwood', 'SRX', 'STS', 'XT5', 'другая']
},
{
  firm: 'Chery',
  models: ['A1', 'A11', 'A13', 'A15', 'A19', 'A21', 'A5', 'Amulet A15', 'Arrizo 7', 'B11', 'Bonus', 'Chery', 'CrossEastar', 'Fora A21', 'indiS', 'Kimo', 'M11', 'QQ', 'Tiggo', 'Tiggo 2', 'Tiggo 3', 'Tiggo 5', 'Very', 'другая']
},
{
  firm: 'Chevrolet',
  models: ['Aveo', 'Blazer', 'Camaro', 'Captiva', 'Cobalt', 'Cruze', 'Epica', 'Express', 'Lacetti', 'Lanos', 'Niva', 'Orlando', "Rezzo", 'Spark', 'Tahoe', 'Tracker', 'TrailBlazer', 'Viva', 'другая']
},
{
  firm: 'Chrysler',
  models: ['300C', '300M', 'Cirrus', 'Concorde', 'Crossfire', 'Grand Voyager', 'Interpid', 'Le Baron', 'LHS', 'Neon', 'Pacifica', 'PT Cruiser', 'Saratoga', 'Sebring', 'Stratus', 'Town & Country', 'Vision', 'Voyager', 'другая']
},
{
  firm: 'Citroen',
  models: ['Berlingo', 'C-Crosser', 'C-Elysee', 'C1', 'C2', 'C3', 'C3 Picasso', 'C4', 'C4 Aircross', 'C4 Picasso', 'C5', 'DS3', 'DS4', 'DS5', 'Grand C4 Picasso', 'Jumpy', 'Xsara', 'Xsara Picasso', 'другая']
},
{
  firm: 'Dacia',
  models: ['Dokker', 'Duster', 'Lodgy', 'Logan', 'Logan MCV', 'Logan Pick-Up', 'Logan VAN', 'Sandero', 'Solenza', "SupeRNova", 'другая']
},
{
  firm: 'Daewoo',
  models: ['Damas', 'Espero', 'Evanda', 'Gentra', 'Kalos', 'Lacetti', 'Lanos', 'Leganza', 'Magnus', 'Matiz', 'Nexia', 'Nubira', 'Prince', 'Racer', 'Sens', 'Tacuma', 'Tico', 'Winstorm', 'другая']
},
{
  firm: 'Daihatsu',
  models: ['Atrai', 'Atrai7', 'Be-Go', 'Boon', 'Charade', 'Esse', 'Hijet', 'Mira', 'Mira e:S', 'Move', 'Pyzar', 'Rocky', 'Sirion', 'Storia', 'Tanto', 'Terios', 'YRV', 'другая']
},
{
  firm: 'Datsun',
  models: ['Datsun', 'Go', 'mi-Do', 'on-Do', 'другая']
},
{
  firm: 'Dodge',
  models: ['Avenger', 'Caliber', 'Caravan', 'Challenger', 'Charger', 'Dakota', 'Dart', 'Durango', 'Grand Caravan', 'Interpid', 'Journey', 'Magnum', 'Neon', 'Nitro', 'Ram', 'Stealth', 'Stratus', 'Viper', 'другая']
},
{
  firm: 'DW Hower',
  models: ['H3', 'H5', 'другая']
},
{
  firm: 'Fiat',
  models: ['500', 'Albea', 'Brava', 'Bravo', 'Doblo', 'Fullback', 'Grnde Punto', 'Linea', 'Marea', 'Palio', 'Panda', 'Punto', 'Scudo', 'Sedici', 'Stilo', 'Tempra', 'Tipo', 'Uno', 'другая']
},
{
  firm: 'Ford',
  models: ['C-MAX', 'EcoSport', 'Escape', 'Escort', 'Explorer', 'Fiesta', 'Focus', 'Fusion', 'Galaxy', 'Kuga', 'Maverick', 'Mondeo', 'Mustang', 'Ranger', 'S-MAX', 'Scorpio', 'Sierra', 'Tourneo Connect', 'другая']
},
{
  firm: 'Geely',
  models: ['Atlas', 'CK', 'Emgrand EC7', 'Emgrand EC8', 'Emgrand GT', 'Emgrand X7', 'FC', 'GC6', 'Geely', 'MK', 'MK Cross', 'Otaka', 'Vision', 'другая']
},
{
  firm: 'Great Wall',
  models: ['Coolbear', 'Deer', 'Florid', 'Great Wall', 'Hover', 'Hover H3', 'Hover H5', 'Hover H6', 'Hover M2', 'Hover M4', 'Pegasus', 'Peri', 'Safe', 'Sailor', 'Sing', 'Voleex c30', 'Wingle', 'другая']
},
{
  firm: 'Honda',
  models: ['Accord', 'Airwave', 'Civic', 'Civic Ferio', 'CR-V', 'Domani', 'Fit', 'Fit Shuttle', 'HR-V', 'Insight', 'Inspire', 'Integra', 'Logo', 'Odyssey', 'Partner', 'Stepwgn', 'Stream', 'Torneo', 'другая']
},
{
  firm: 'Hyundai',
  models: ['Accent', 'Avante', 'Creta', 'Elantra', 'Getz', 'Grand Starex', 'H1', 'i30', 'i40', 'ix35', 'Matrix', 'Santa Fe', 'Santa Fe Classic', 'Solaris', 'Sonata', 'Starex', 'Terracan', 'Tucson', 'другая']
},
{
  firm: 'Infinity',
  models: ['EX25', 'EX35', 'FX30d', 'FX35', 'FX37', 'FX45', 'FX50', 'G25', 'G35', 'JX35', 'M35', 'M37', 'Q50', 'QX50', 'QX56', 'QX60', 'QX70', 'QX80', 'другая']
},
{
  firm: 'Jaguar',
  models: ['Daimler', 'E-Pace', 'F-Type', 'I-Pace', 'Jaguar', 'S-type', 'Sovereign', 'X-Type', 'XE', 'XF', 'XJ', 'XJS', 'XK', 'другая']

},
{
  firm: 'Jeep',
  models: ['Cherokee', 'Commander', 'Compass', 'Grand Cherokee', 'Jeep', 'Liberty', 'Patriot', 'Renegade', 'Wrangler', 'другая']
},
{
  firm: 'Kia',
  models: ['Carens', 'ceed', 'Cerato', 'Forte', 'Magentis', 'Mohave', 'Optima', 'Picanto', 'Quoris', 'Rio', 'Sorento', 'Soul', 'Spectra', 'Sportage', 'Stinger', 'Venga', 'другая']
},
{
  firm: 'Lancia',
  models: ['Dedra', 'Delta', 'Kappa', 'Lancia', 'Lybra', 'Montecarlo', 'Musa', 'Phedra', 'Prisma', 'Thema', 'Thesis', 'Y', 'Ypsilon', 'Zeta', 'другая']
},
{
  firm: 'Lexus',
  models: ['ES250', 'GS300', 'GS350', 'GX460', 'GX470', 'IS250', 'LS430', 'LX450d', 'LX470', 'LX570', 'NX200', 'RX270', 'RX300', 'RX330', 'RX350', 'RX400h', 'RX450h', 'другая']
},
{
  firm: 'Lifan',
  models: ['Breez', 'Cebrium', 'Celliya', 'Lifan', 'Murman', 'Myway', 'Smily', 'Solano', 'X50', 'X60', 'X70', 'другая']
},
{
  firm: 'Lotus',
  models: ['Elise', 'Esprit', 'Europa S', 'Evora', 'Exige', 'Lotus', 'Super 7', 'другая']
},
{
  firm: 'Mazda',
  models: ['323', '626', 'Atenza', 'Axela', 'Bongo', 'Capella', 'CX-5', 'CX-7', 'Demio', 'Familia', 'Mazda3', 'Mazda6', 'MPV', 'Premacy', 'RX-8', 'Tribute', 'другая']
},
{
  firm: 'Mercedes-Benz',
  models: ['A-Class', 'B-Class', 'C-Class', 'CL-Class', 'CLK-Class', 'CLS-Class', 'E-Class', 'G-Class', 'GL-Class', 'GLA-Class', 'GLC', 'GLE', 'GLK-Class', 'GLS-Class', 'M-Class', 'S-Class', 'Vito', 'другая']
},
{
  firm: 'Mini',
  models: ['Cabrio', 'Clubman', 'Cooper', 'Countryman', 'Coupe', 'Hatch', 'One', 'Paceman', 'Roadster', 'другая']
},
{
  firm: 'Mitsubishi',
  models: ['Airtek', 'ASX', 'Colt', 'Delica', 'Diamante', 'Galant', 'L200', 'Lancer', 'Libero', 'Mirage', 'Montero', 'Outlander', 'Pajero', 'RVR', 'другая']
},
{
  firm: 'Nissan',
  models: ['AD', 'Almera', 'Cefiro', 'Cube', 'Juke', 'March', 'Murano', 'Note', 'Primera', 'Qashqai', 'Serena', 'Skyline', 'Sunny', 'Teana', 'Terrano', 'Tiida', 'Wingroad', 'X-Trail', 'другая']
},
{
  firm: 'Opel',
  models: ['Antara', 'Ascona', 'Astra', 'Combo', 'Corsa', 'Frontera', 'Insignia', 'Kadett', 'Meriva', 'Mokka', 'Monterey', 'Omega', 'Vectra', 'Vita', 'Vivaro', 'Zafira', 'другая']
},
{
  firm: 'Peugeot',
  models: ['107', '206', '207', '208', '3008', '301', '307', '308', '4007', '406', '407', '408', '5008', '508', '607', 'Partner', 'Peugeot', 'другая']
},
{
  firm: 'Pontiac',
  models: ['6000', 'Aztek', 'Bonneville', 'Fiero', 'Firebird', 'G6', 'Grand Am', 'Grand Prix', 'GTO', 'Lemans', 'Montana', 'Pontiac', 'Solstice', 'Sunfire', 'Torrent', 'Trans AM', 'Trans Sport', 'Vibe', 'другая']
},
{
  firm: 'Renault',
  models: ['Clio', 'Dokker', 'Duster', 'Espace', 'Fluence', 'Grand Scenic', 'Kangoo', 'Kaptur', 'Koleos', 'Laguna', 'Latitude', 'Logan', 'Megane', 'Sandero', 'Scenic', 'Symbol', 'Trafic', 'другая']
},
{
  firm: 'Rover',
  models: ['14', '200', '25', '400', '45', '600', '75', '800', 'Maestro', 'Mayfair', 'MGF', 'Mini', 'Montego', 'Rover', 'Streetwise', 'другая']
},
{
  firm: 'Saab',
  models: ['9-2X', '9-3', '9-4X', '9-5', '9-7X', '900', '9000', '99', 'Saab', 'другая']
},
{
  firm: 'Seat',
  models: ['Alhambra', 'Altea', 'Arona', 'Arosa', 'Ateca', 'Cordoba', 'Exeo', 'Ibiza', 'Inca', 'Leon', 'Marbella', 'Mii', 'Ronda', 'Seat', 'Terra', 'Toledo', 'другая']
},
{
  firm: 'Skoda',
  models: ['Citigo', 'Fabia', 'Favorit', 'Felicia', 'Forman', 'Karoq', 'Kodiaq', 'Octavia', 'Praktik', 'Rapid', 'Roomster', 'Skoda', 'Superb', 'Yeti', 'другая']
},
{
  firm: 'SsangYong',
  models: ['Actyon', 'Chairman', 'Istana', 'Korando', 'Kyron', 'Musso', 'Rexton', 'Rodius', 'SsangYong', 'Stavic', 'Tivoli', 'другая']
},
{
  firm: 'Subaru',
  models: ['B9 Tribeca', 'Exiga', 'Forester', 'Impreza', 'Legacy', 'Outback', 'Pleo', 'R2', 'Stella', 'Traviq', 'Trezia', 'Tribeca', 'XV', 'другая']
},
{
  firm: 'Suzuki',
  models: ['Aerio', 'Alto', 'Cultus', 'Escudo', 'Grand Vitara', 'Jimny', 'Kei', 'Liana', 'Solio', 'Splash', 'Swift', 'SX4', 'Vitara', 'Wagon R', 'другая']
},
{
  firm: 'Toyota',
  models: ['Allion', 'Avensis', 'Caldina', 'Camry', 'Carina', 'Chaser', 'Corolla', 'Corona', 'Crown', 'Harrier', 'Land Cruiser', 'Mark II', 'Prius', 'RAV4', 'Vista', 'Vitz', 'другая']
},
{
  firm: 'Volkswagen',
  models: ['Amarok', 'Beetle', 'Bora', 'Caddy', 'Caravelle', 'Golf', 'Jetta', 'Multivan', 'Passat', 'Polo', 'Scirocco', 'Sharan', 'Tiguan', 'Touareg', 'Touran', 'Transporter', 'другая']
},
{
  firm: 'Volvo',
  models: ['460', '740', '850', '940', '960', 'C30', 'S40', 'S60', 'S70', 'S80', 'S90', 'V40', 'V60', 'V70', 'V90', 'XC60', 'XC70', 'XC90', 'другая']
},
{
  firm: 'Лада',
  models: ['2104', '2105', '2106', '2107', '2108', '2109', '21099', '2110', '2111', '2112', '2114', '2115', 'Vesta', 'Granta', 'Kalina', 'Largus', 'Priora', 'X-Ray', 'Нива', 'другая']
},
{
  firm: 'УАЗ',
  models: ['3151', '3153', '3159', '469', 'Hunter', 'Patriot', 'другая']
},
{
  firm: 'Прочие авто',
  models: []
}];

var AUTO_YEARS = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', 'другое'];

var form = document.querySelector('.main__form');
var brand = form.querySelector('#brand-select');
var year = form.querySelector('#year-select');
var model = form.querySelector('#model-select');

var autoPropertyFirm = 'firm';
var autoPropertyModels = 'models';

//Функция созания элементов option
var createOption = function(optionName, property) {
  var options = [];

  for (var i = 0; i < optionName.length; i++) {
    var option = document.createElement('option');
    if (typeof optionName[i] === 'object') {
      option.appendChild(document.createTextNode(optionName[i][property]));
      option.setAttribute('value', optionName[i][property]);
    } else {
      option.appendChild(document.createTextNode(optionName[i]));
      option.setAttribute('value', optionName[i]);
    }
    options.push(option);
  };
  return options;
};

//Функция созания элементов option для второго списка
var createSecondOption = function(optionName) {
  var options = [];

  for (var i = 0; i < optionName.length; i++) {
    var suboptions = [];

    for (var j = 0; j < optionName[i].models.length; j++) {
      var option = document.createElement('option');
      option.appendChild(document.createTextNode(optionName[i].models[j]));
      option.setAttribute('value', optionName[i].models[j]);
      suboptions.push(option);
    }

    options.push(suboptions);
  };
  return options;
};

//Функция добавления элементов option в DOM
var addOption = function(selectName, arr) {
  for (var i = 0; i < arr.length; i++) {
    selectName.appendChild(arr[i]);
  }
};

//Функция добавления элементов option в DOM для второго списка
var addSecondOption = function() {
  model.options.length = 0;
  var selectedIndex = brand.options.selectedIndex;
  var currentModels = createModels[selectedIndex - 1];
  for (var i = 0; i < currentModels.length; i++) {
    model.appendChild(currentModels[i]);
  };
};

var createBrand = createOption(AUTO, autoPropertyFirm);
var createYear = createOption(AUTO_YEARS, autoPropertyFirm);
var createModels = createSecondOption(AUTO);

addOption(brand, createBrand);
addOption(year, createYear);

brand.addEventListener('change', function() {
  addSecondOption();
});


// MODALS
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var linksJoin = document.querySelectorAll('.join__button');
var mainPopup = document.querySelector('.main-popup');
var popupWrapper = document.querySelector('.popup-wrapper');
var popupClose = mainPopup.querySelector('.popup__close');
var linkInstruction = document.querySelector('.instruction__request');
var linkProposal = document.querySelector('.proposal__yourself-button');
var linkReviews = document.querySelector('.reviews__add');
var linkRegistration = document.querySelector('.main-nav__item-link--registration');
var footerRegistration = document.querySelector('.main-footer__nav-link--registration');
var linkAuto = document.querySelector('.auto__button--yes');

var gainLink1 = document.querySelector('.gain__button--1');
var gainPopup1 = document.querySelector('.gain__popup--1');
var gainClose1 = gainPopup1.querySelector('.popup__close');
var gainLink2 = document.querySelector('.gain__button--2');
var gainPopup2 = document.querySelector('.gain__popup--2');
var gainClose2 = gainPopup2.querySelector('.popup__close');
var gainLink3 = document.querySelector('.gain__button--3');
var gainPopup3 = document.querySelector('.gain__popup--3');
var gainClose3 = gainPopup3.querySelector('.popup__close');

//Функция открытия попапа
var openPopup = function(linkOpenPopup, popup) {
  linkOpenPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--show');
    popupWrapper.classList.add('popup-wrapper--show');

    var popupName = popup.querySelector('input[type="text"]');
    if (!popupName) {
      var popupPhone = popup.querySelector('input[type="tel"]');
      popupPhone.focus();
    } else {
      popupName.focus();
    };

    var form = popup.querySelector('form');
    form.addEventListener('submit', function(evt) {
      if (!popupName.value || !popupPhone.value) {
        evt.preventDefault();
      }
    });

    document.addEventListener('keydown', onPopupEscPress);
  });
};

//Функция закрытия попапа
var closePopup = function(linkClosePopup, popup) {
  linkClosePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--show');
    popupWrapper.classList.remove('popup-wrapper--show');
    document.removeEventListener('keydown', onPopupEscPress);
  });
};

//Закрытие всех попапов
var closeAll = function() {
  var popups = document.querySelectorAll('.popup');
  for (var i = 0; i < popups.length; i++) {
    popups[i].classList.remove('popup--show');
  }
  popupWrapper.classList.remove('popup-wrapper--show');
}

//Функция для закрытия попапов с помощью ESC
var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement.tagName.toLowerCase() !== 'input') {
    closeAll();
  }
};

popupWrapper.addEventListener("click", function(evt) {
  if (document.activeElement.tagName.toLowerCase() !== 'input') {
    closeAll(); 
  }
});

for (var i = 0; i < linksJoin.length; i++) {
  openPopup(linksJoin[i], mainPopup);
};

openPopup(gainLink1, gainPopup1);
closePopup(gainClose1, gainPopup1);

openPopup(gainLink2, gainPopup2);
closePopup(gainClose2, gainPopup2);

openPopup(gainLink3, gainPopup3);
closePopup(gainClose3, gainPopup3);

openPopup(linkAuto, mainPopup);
openPopup(linkProposal, mainPopup);
openPopup(linkReviews, mainPopup);
openPopup(linkRegistration, mainPopup);
openPopup(footerRegistration, mainPopup);
openPopup(linkInstruction, mainPopup);
closePopup(popupClose, mainPopup);
