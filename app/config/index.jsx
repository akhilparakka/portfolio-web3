import { cookieStorage, createStorage } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { sepolia } from "@reown/appkit/networks";
import { customNetwork } from "../utils";

export const projectId = "421a0579705e440536ac9fd845379f2c";

export const networks = [sepolia];

export const wagmiAdapter = new WagmiAdapter({
  storage: new createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  networks,
  projectId,
});

export const config = wagmiAdapter.wagmiConfig;
