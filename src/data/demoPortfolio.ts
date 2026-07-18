export const demoPortfolio = {
  name: "PRIS Demo Portfolio v1",
  projects: [
    {
      id: "P-001",
      name: "Combined Cycle Power Plant A",
      progress: 62,
      health: "Warning",
      riskScore: 68,
      risks: ["Schedule", "Procurement"]
    },
    {
      id: "P-002",
      name: "Solar Project B",
      progress: 78,
      health: "Good",
      riskScore: 32,
      risks: ["Supplier"]
    },
    {
      id: "P-003",
      name: "Transmission Project C",
      progress: 45,
      health: "Critical",
      riskScore: 84,
      risks: ["Schedule", "Resource"]
    }
  ],
  alerts: [
    {
      level: "Critical",
      message: "Supplier delay may impact multiple portfolio projects."
    },
    {
      level: "Medium",
      message: "Resource conflict detected between Project A and Project C."
    }
  ]
};
