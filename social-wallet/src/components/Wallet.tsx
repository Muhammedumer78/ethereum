'use client';
import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { polygonMumbai } from '@wagmi/core/chains';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { twitchWallet, twitterWallet } from '@zerodevapp/wagmi/rainbowkit';
import { googleWallet, discordWallet } from '@zerodevapp/wagmi/rainbowkit';
import { facebookWallet, githubWallet } from '@zerodevapp/wagmi/rainbowkit';
export const RainbowKitWallet = () => {
  const connectors = connectorsForWallets([
    {
      groupName: 'Social',
      wallets: [
        googleWallet({
          options: { projectId: "22ba6528-5dee-4d30-a2c9-391e4201a111" },
        }),
        facebookWallet({
          options: { projectId: "22ba6528-5dee-4d30-a2c9-391e4201a111" },
        }),
        githubWallet({
          options: { projectId: "22ba6528-5dee-4d30-a2c9-391e4201a111" },
        }),
        discordWallet({
          options: { projectId: "22ba6528-5dee-4d30-a2c9-391e4201a111" },
        }),
        twitchWallet({
          options: { projectId: "22ba6528-5dee-4d30-a2c9-391e4201a111" },
        }),
        twitterWallet({
          options: { projectId: "22ba6528-5dee-4d30-a2c9-391e4201a111" },
        }),
      ],
    },
  ]);
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize={'compact'}>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};