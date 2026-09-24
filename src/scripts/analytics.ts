type EventParams = Record<string, string>;

type AnalyticsWindow = Window & {
  zaraz?: {
    track?: (eventName: string, properties: EventParams) => Promise<unknown> | unknown;
  };
  gtag?: (command: 'event', eventName: string, params: EventParams) => void;
};

/**
 * Sends a custom event to every analytics destination present on the page.
 * GA4 gets snake_case params so they can be registered as custom dimensions as-is.
 */
export const sendAnalyticsEvent = (
  eventName: string,
  zarazPayload: EventParams,
  ga4Params: EventParams,
) => {
  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.zaraz?.track === 'function') {
    void analyticsWindow.zaraz.track(eventName, zarazPayload);
  }

  if (typeof analyticsWindow.gtag === 'function') {
    analyticsWindow.gtag('event', eventName, ga4Params);
  }
};
