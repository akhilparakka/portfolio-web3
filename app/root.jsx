import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { AppKitProvider } from "./context";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Links />
      </head>
      <AppKitProvider>
        <Analytics />
        <body>
          <Outlet />
          <ScrollRestoration />
          <SpeedInsights />
          <Scripts />
        </body>
      </AppKitProvider>
    </html>
  );
}
