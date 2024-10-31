interface WebApp {
  ready: () => void;
  expand: () => void;
  close: () => void;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

interface TelegramWebApp {
  WebApp: WebApp;
}

declare global {
  interface Window {
    Telegram?: TelegramWebApp;
  }
}