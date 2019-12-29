const config = {
  ipfs: {
    preload: {
      enabled: false
    },
    config: {
      Addresses: {
        Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star']
      }
    }
  }
}

export default config
