type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: AnalyticsParams) => void
  }
}

export function trackEvent(name: string, params?: AnalyticsParams) {
  window.gtag?.('event', name, params)
}
