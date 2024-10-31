export function initTelegramApp() {
  if (window.Telegram?.WebApp) {
    const webApp = window.Telegram.WebApp;
    
    // Initialize the Web App
    webApp.ready();
    
    // Expand to full height
    webApp.expand();
    
    // Set up theme
    document.documentElement.style.setProperty(
      '--tg-theme-bg-color',
      webApp.backgroundColor || '#1a1a1a'
    );
    document.documentElement.style.setProperty(
      '--tg-theme-text-color',
      webApp.textColor || '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--tg-theme-button-color',
      webApp.buttonColor || '#2ea6ff'
    );
    document.documentElement.style.setProperty(
      '--tg-theme-button-text-color',
      webApp.buttonTextColor || '#ffffff'
    );
  }
}

export function isTelegramWebApp(): boolean {
  return !!window.Telegram?.WebApp;
}