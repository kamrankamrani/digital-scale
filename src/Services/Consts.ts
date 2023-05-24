export const WEBSOCKET_IP_ADDRESS = "ws://127.0.0.1:4000";
// export const WEBSOCKET_IP_ADDRESS = "ws://192.168.1.6:4000";
// export const WEBSOCKET_IP_ADDRESS = "ws://172.30.42.209:4000";

const WEBSERVER_IP = "http://127.0.0.1:8080";

export const STORE_API_ADRESS = "http://31.47.58.35:5004"; //snapp api

export const RPI_PRINT_API = `${WEBSERVER_IP}/printlabel`;

export const RPI_TARE_API = `${WEBSERVER_IP}/tare`;

// export const RPI_SEND_IMAGE = `${WEBSERVER_IP}/upload`;
export const RPI_SEND_IMAGE = `${STORE_API_ADRESS}/tarazo`;

export const UI_SERVER_ADDRESS = "http://localhost:5000";

export const PersianLayout = {
  default: [
    "÷ 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
    "{tab} ض ص ث ق ف غ ع ه خ ح ج چ \\",
    "{lock} ش س ی ب ل ا ت ن م ک گ {جستجو}",
    "{shift} ظ ط ز ر ذ د ئ و . / {shift}",
    ".com @ {space}",
  ],
  shift: [
    "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
    "{tab} Q W E R T Y U I O P { } |",
    '{lock} A S D F G H J K L : " {enter}',
    "{shift} Z X C V B N M &lt; &gt; ? {shift}",
    ".com @ {space}",
  ],
};
