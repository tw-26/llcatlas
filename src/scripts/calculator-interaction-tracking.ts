type CalculatorPayload = {
  calculator: string;
  action: 'start' | 'result_view' | 'result_cta_click';
  resultTier: string;
  sourcePath: string;
};

type ZarazWindow = Window & {
  zaraz?: {
    track?: (eventName: string, properties: CalculatorPayload) => Promise<unknown> | unknown;
  };
};

const startedCalculators = new Set<string>();
const viewedResults = new Set<string>();

const getCalculatorRoot = (target: EventTarget | null): HTMLElement | null => {
  if (!(target instanceof Element)) return null;

  return target.closest<HTMLElement>('[data-calculator-root]');
};

const getCalculatorName = (root: HTMLElement | null) =>
  root?.dataset.calculatorName || 'unknown';

const trackCalculatorEvent = (payload: CalculatorPayload) => {
  window.dispatchEvent(new CustomEvent('llcatlas:calculator-interaction', { detail: payload }));

  const zaraz = (window as ZarazWindow).zaraz;
  if (typeof zaraz?.track === 'function') {
    void zaraz.track('calculator_interaction', payload);
  }
};

const trackStart = (target: EventTarget | null) => {
  const root = getCalculatorRoot(target);
  const calculator = getCalculatorName(root);
  if (!root || startedCalculators.has(calculator)) return;

  startedCalculators.add(calculator);
  trackCalculatorEvent({
    calculator,
    action: 'start',
    resultTier: 'none',
    sourcePath: window.location.pathname,
  });
};

const trackVisibleResults = () => {
  document.querySelectorAll<HTMLElement>('[data-calculator-result]').forEach((result) => {
    const root = result.closest<HTMLElement>('[data-calculator-root]');
    const calculator = getCalculatorName(root);
    const resultTier = result.dataset.resultTier ?? 'none';
    const key = `${calculator}:${resultTier}`;
    if (viewedResults.has(key)) return;

    viewedResults.add(key);
    trackCalculatorEvent({
      calculator,
      action: 'result_view',
      resultTier,
      sourcePath: window.location.pathname,
    });
  });
};

document.addEventListener('input', (event) => trackStart(event.target));
document.addEventListener('change', (event) => trackStart(event.target));
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const cta = target.closest<HTMLElement>('[data-calculator-result-cta]');
  if (!cta) return;

  const root = cta.closest<HTMLElement>('[data-calculator-root]');
  trackCalculatorEvent({
    calculator: cta.dataset.calculatorResultCta || getCalculatorName(root),
    action: 'result_cta_click',
    resultTier: cta.dataset.resultTier ?? 'none',
    sourcePath: window.location.pathname,
  });
});

const observer = new MutationObserver(trackVisibleResults);
observer.observe(document.documentElement, { childList: true, subtree: true });
trackVisibleResults();
