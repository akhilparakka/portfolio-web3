import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <SpeedInsights />
        <Scripts />
      </body>
    </html>
  );
}
