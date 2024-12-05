import { cookieStorage, createStorage } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, sepolia, bscTestnet } from "@reown/appkit/networks";

export const projectId = "421a0579705e440536ac9fd845379f2c";

export const networks = [mainnet, arbitrum, sepolia, bscTestnet];

export const wagmiAdapter = new WagmiAdapter({
  storage: new createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  networks,
  projectId,
});

export const config = wagmiAdapter.wagmiConfig;
