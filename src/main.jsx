import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://e1951769309d3b21db667d2f68b6ee0a@o4508228092166144.ingest.de.sentry.io/4508228094132304",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: React.useEffect
        }),
        Sentry.replayIntegration(),
    ],
    // Tracing
    replaysOnErrorSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    replaysSessionSampleRate: 0.1,
    // Session Replay
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/], // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    tracesSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
