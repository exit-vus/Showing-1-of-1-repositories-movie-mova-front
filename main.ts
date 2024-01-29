import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // React 개발 서버의 URL을 로드
  mainWindow.loadURL('http://localhost:3000');

  // 개발자 도구 열기
  mainWindow.webContents.openDevTools();

  // 창이 닫힐 때 발생하는 이벤트
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 애플리케이션이 준비되면 창을 생성
app.whenReady().then(createWindow);

// macOS에서 모든 창이 닫히면 애플리케이션 종료
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// macOS에서 애플리케이션이 활성화되면 창 생성
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
