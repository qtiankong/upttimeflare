const pageConfig = {
  title: "CF-WEB Status Page",
    links: [
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'gcp1',
      name: 'gcp1',
      method: 'TCP_PING',
      target: '35.212.191.250:65522',
     },
    {
      id: 'gcp2',
      name: 'gcp2',
      method: 'TCP_PING',
      target: '35.212.157.81:22',
     },
    {
      id: 'atiankong',
      name: 'atiankong',
      method: 'GET',
      target: 'https://atiankong.serv00.net',
     },
    {
      id: 'tiankong2024',
      name: 'tiankong2024',
      method: 'GET',
      target: 'https://tiankong2024.serv00.net',
     },
    {
      id: 'atk233',
      name: 'atk233',
      method: 'GET',
      target: 'https://atk233.serv00.net',
     },
        {
      id: 'alecferrell',
      name: 'alecferrell',
      method: 'GET',
      target: 'https://alecferrell.serv00.net',
     },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}


export { pageConfig, workerConfig }
