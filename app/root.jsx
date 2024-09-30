import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

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

const queryClient = new QueryClient();
const projectId = "421a0579705e440536ac9fd845379f2c";

const metadata = {
  name: "Azuki",
  description: "Azuki Example",
  url: "https://portfolio-web3-zeta.vercel.app/",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const networks = [mainnet];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  termsConditionsUrl: false,
  showWallets: false,
  features: {
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
  },
  themeVariables: {
    "--w3m-color-mix": "#000000",
    "--w3m-color-mix-strength": 40,
    "--w3m-font-family": "Work Sans",
  },
});

export default function App() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <html lang="en">
        <head>
          <Meta />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <SpeedInsights />
          <Scripts />
        </body>
      </html>
    </WagmiProvider>
  );
}
