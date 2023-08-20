const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: false,
    modal: true,
  });

  // win.loadURL("https://www.ai.12320.com");
  win.loadURL(
    "https://apaas.feishuapp.cn/ae/user/pc/package_aPaaS__c/aadeydw26jcwi",
  );
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
