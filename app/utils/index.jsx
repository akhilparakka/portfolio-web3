import { defineChain } from "@reown/appkit/networks";

export const customNetwork = defineChain({
  id: 31337,
  caipNetworkId: "eip155:31337",
  chainNamespace: "eip155",
  testnet: true,
  name: "Anvil",
  nativeCurrency: {
    decimals: 18,
    name: "tEther",
    symbol: "tETH",
  },
  rpcUrls: {
    public: { http: ["http://localhost:8545"] },
    default: {
      http: ["http://127.0.0.1:8545"],
    },
  },
});
