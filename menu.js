const { Menu, MenuItem } = require("electron");
const menu = new Menu();

var menu = Menu.buildFromTemplate([
  {
    label: "Menu",
    submenu: [
      { label: "Adjust Notification Value" },
      { label: "CoinMarketCap" },
      { label: "Exit" }
    ]
  }
]);
Menu.setApplicationMenu(menu);
