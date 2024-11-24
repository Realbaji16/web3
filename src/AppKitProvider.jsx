// AppKitProvider.jsx
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, binanceSmartChain } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Setup queryClient
const queryClient = new QueryClient()

// Get projectId from https://cloud.reown.com
const projectId = 'd2f77c4d02e80369db90e212c11917bf'

// Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: '', // origin must match your domain & subdomain
  icons: ['']
}

// Set the networks
const networks = [mainnet, arbitrum, binanceSmartChain]

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  auth: {
   
    
  },
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false, // default to true
    socials: [], // provide an empty array of SocialProvider values
  }
})

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
