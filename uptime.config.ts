const pageConfig = {
  title: "CF-WEB Status Page",
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'atiankong',
      name: 'atiankong',
      method: 'GET',
      target: 'https://atiankong.serv00.net',
      timeout: 30000,
     },
    {
      id: 'tiankong2024',
      name: 'tiankong2024',
      method: 'GET',
      target: 'https://tiankong2024.serv00.net',
      timeout: 30000,
     },
    {
      id: 'atk233',
      name: 'atk233',
      method: 'GET',
      target: 'https://atk233.serv00.net',
      timeout: 30000,
     },
        {
      id: 'alecferrell',
      name: 'alecferrell',
      method: 'GET',
      target: 'https://alecferrell.serv00.net',
      timeout: 30000,
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
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
