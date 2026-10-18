import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement scrolling; stub it so route changes don't log errors.
window.scrollTo = () => {};
