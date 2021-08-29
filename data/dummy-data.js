import Departments from '../models/Departments';
import category from '../models/category';



export const DEPARTMENTS =[

    new Departments("computer","1","https://image.freepik.com/free-photo/black-desk-laptop-computer-with-color-pink-purple-light-display_37129-939.jpg"),
    new Departments("tv","2","https://as1.ftcdn.net/jpg/02/44/41/84/500_F_244418444_v9oIBicZw4Tn5S9Zvze4YcscFmCXOHS9.jpg"),
    new Departments("phone","3","https://image.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg"),
    new Departments("oven","4","https://image.freepik.com/free-photo/pizza-oven-with-fire-restaurant_1147-93.jpg"),
    new Departments("games","5","https://image.freepik.com/free-vector/games-time-neon-text-with-gamepad_1262-15457.jpg"),
    new Departments("VacuumCleaner","6","https://image.freepik.com/free-vector/realistic-bright-electrical-vacuum-cleaner-with-telescopic-suction-pipe-living-room_1284-32870.jpg")
];


export const CATEGORY =[
    new category(["1"],"https://img.freepik.com/free-psd/laptop-computer-device-with-screen-mock-up-black-room_110893-1668.jpg?size=338&ext=jpg","computer-i3",1500,"low performance","14 Inches",15,"bad coputer","1.1"),
    new category(["1"],"https://image.freepik.com/free-psd/website-template-laptop-screen_53876-57297.jpg","computer-i5",2000,"good performance","15.6 Inches",15,"good coputer","1.2"),
    new category(["1"],"https://image.freepik.com/free-psd/realistic-premium-15-inch-notebook-pro-web-ui-application-photoshop-mock-up-front-view_39605-171.jpg","computer-i7",2500,"exelent performance","15.6 Inches",15,"good coputer","1.3"),
    new category(["1"],"https://image.freepik.com/free-psd/laptop-mockup-table-with-plants_23-2147955548.jpg","computer-i9",3000,"best performance","17 Inches",15,"good coputer","1.4"),

    new category(["2"],"https://img.freepik.com/free-psd/mockup-glowing-tv-screen-brick-wall_47840-1557.jpg?size=338&ext=jpg","tv-42",1500,"good performance","42 Inches",15,"exelent tv","2.1"),
    new category(["2"],"https://image.freepik.com/free-psd/4k-television-mock-up_1022-45.jpg","tv-50",1500,"good performance","50 Inches",15,"exelent tv","2.2"),
    new category(["2"],"https://image.freepik.com/free-photo/mockup-tv-wall-mounted-living-room-room-with-white-wall-3d-rendering_41470-3279.jpg","tv-55",1500,"good performance","55 Inches",15,"exelent tv","2.3"),
    new category(["2"],"https://image.freepik.com/free-vector/tv-screen-wall-with-neon-light_134830-819.jpg","tv-60",1500,"good performance","60 Inches",15,"exelent tv","2.4"),

    new category(["3"],"https://image.freepik.com/free-psd/close-up-mobile-screen_23-2148915401.jpg","sumsong",1500,"good performance","6.5 Inches",15,"bad phone","3.1"),
    new category(["3"],"https://image.freepik.com/free-psd/phone-screen-ui-ux-app-presentation-mockup_165789-302.jpg","xiaomi",1500,"good performance","6.5 Inches",15,"good phone","3.2"),
    new category(["3"],"https://image.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg","one+one",1500,"good performance","6.5 Inches",15,"good phone","3.3"),
    new category(["3"],"https://image.freepik.com/free-psd/hand-holding-smartphone-mock-up_23-2148963459.jpg","nokia",1500,"good performance","6.5 Inches",15,"good phone","3.4"),

    new category(["4"],"https://img.freepik.com/free-vector/vector-gas-oven_105325-401.jpg?size=338&ext=jpg","oven black",1500,"good performance","20 KG",15,"good oven","4.1"),
    new category(["4"],"https://image.freepik.com/free-photo/girl-puts-baking-sheet-oven_134616-68.jpg","oven silver",1500,"good performance","15 KG",15,"good oven","4.2"),
    new category(["4"],"https://image.freepik.com/free-photo/luxurious-new-black-kitchen-with-modern-appliances_153977-1272.jpg","oven red",1500,"good performance","12 KG",15,"good oven","4.3"),
    new category(["4"],"https://image.freepik.com/free-photo/rear-view-two-kids-chef-hat-looking-cookie-tray-oven_23-2148044486.jpg","oven orenge",1500,"good performance","9 kg",15,"good oven","4.4"),

    new category(["5"],"https://img.freepik.com/free-photo/men-playing-video-games_137573-639.jpg?size=338&ext=jpg","COD",1500,"good performance","50 GB",15,"GOOD GANE!","5.1"),
    new category(["5"],"https://image.freepik.com/free-vector/game-logo-text-effect_79603-1818.jpg","GTA",1500,"good performance","40 GB",15,"GOOD GANE!","5.2"),
    new category(["5"],"https://image.freepik.com/free-vector/champion-text-effect_17005-1052.jpg","CAR",1500,"good performance","77 GB",15,"GOOD GANE!","5.3"),
    new category(["5"],"https://image.freepik.com/free-vector/golden-titans-text-effect_17005-895.jpg","PUZZLE",1500,"good performance","12 GB",15,"GOOD GANE!","5.4"),

    new category(["6"],"https://image.freepik.com/free-vector/set-realistic-vacuum-cleaners-various-types_1284-32867.jpg","IROBOT",1500,"good performance","5 KG",15,"GOOD","6.1"),
    new category(["6"],"https://as1.ftcdn.net/jpg/00/11/54/66/500_F_11546613_LV2i5vMdmDzbjMGC5HXKsPO6Bl35Tbhe.jpg","xiaomi",1500,"good performance","7 KG Inches",15,"GOOD GOOD","6.2"),
    new category(["6"],"https://as2.ftcdn.net/jpg/02/16/73/47/500_F_216734710_6lAZXPqpdIT6DuYzaNEJcG7qROpxl2qh.jpg","SHARK",1500,"good performance","6 KG",15," GOOD!!!","6.3"),
    new category(["6"],"https://as2.ftcdn.net/jpg/04/35/59/35/500_F_435593540_UqDhBjKJYmh08Lf2Ctndr7y666BsM1Dg.jpg","DAYSON",1500,"good performance","12 KG",15," GOOD","6.4"),


];



