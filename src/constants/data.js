export const imagesData = [
  { url: "1.png", name: "Protective gloves", checked: false },
  { url: "2.png", name: "Safety glasses", checked: false },
  { url: "3.png", name: "Ear protection", checked: false },
  { url: "4.png", name: "Mask protection", checked: false },
  { url: "5.png", name: "Knee pads", checked: false },
  { url: "6.png", name: "Safety shoes", checked: false },
  { url: "7.png", name: "Coverall", checked: false },
  { url: "8.png", name: "His-Vis Jacket", checked: false },
  { url: "9.png", name: "Safety Harness", checked: false },
  { url: "10.png", name: "Face Shield", checked: false },
  { url: "12.png", name: "Hard Hat", checked: false },
  { url: "13.png", name: "Welding helmet", checked: false },
];

export const workersData = [
  {
    id: 1,
    name: "John Doe",
    position: "Engineer",
    imgUrl: "worker.png",
    companyIcon: "company.png",
    violationsCount: 3,
    violations: [
      false,
      [
        {
          date: "2024-02-01",
          number: 1,
          description:
            "Minor delay in project.\nOccurred during testing phase.\nResolved quickly.",
        },
      ],
      false,
      false,
      [
        {
          date: "2024-04-01",
          number: 1,
          description:
            "Late submission of report.\nDue to data collection delay.\nManaged and submitted.",
        },
        {
          date: "2024-04-02",
          number: 2,
          description:
            "Another delay in submission.\nHandled promptly.\nNo major impact.",
        },
      ],
      false,
      [
        {
          date: "2024-06-01",
          number: 1,
          description:
            "Minor error in code.\nFixed within a day.\nNo major impact.",
        },
        {
          date: "2024-06-02",
          number: 2,
          description:
            "Second error in code.\nManaged promptly.\nNo disruptions.",
        },
        {
          date: "2024-06-03",
          number: 3,
          description:
            "Third code error.\nAddressed quickly.\nNo further problems.",
        },
      ],
      false,
      false,
      false,
      false,
      [
        {
          date: "2024-12-01",
          number: 1,
          description: "Another minor issue.\nFixed quickly.\nNo major impact.",
        },
      ],
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    imgUrl: "worker.png",
    companyIcon: "company.png",
    violationsCount: 4,
    violations: [
      false,
      false,
      [
        {
          date: "2024-03-01",
          number: 1,
          description:
            "Missed deadline for a project.\nDue to client changes.\nResolved with an extension.",
        },
        {
          date: "2024-03-02",
          number: 2,
          description:
            "Second deadline issue.\nHandled appropriately.\nClient satisfied.",
        },
      ],
      false,
      false,
      [
        {
          date: "2024-05-01",
          number: 1,
          description:
            "Budget exceeded by 10%.\nDue to unforeseen costs.\nAdjusted next phase.",
        },
      ],
      [
        {
          date: "2024-06-01",
          number: 1,
          description:
            "Client complaint received.\nIssue resolved satisfactorily.\nDocumented for future reference.",
        },
        {
          date: "2024-06-02",
          number: 2,
          description: "Second complaint.\nHandled properly.\nClient happy.",
        },
        {
          date: "2024-06-03",
          number: 3,
          description: "Third complaint.\nResolved efficiently.\nNo issues.",
        },
      ],
      false,
      false,
      [
        {
          date: "2024-09-01",
          number: 1,
          description:
            "Minor design issue.\nCorrected immediately.\nNo further impact.",
        },
      ],
      false,
      false,
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Architect",
    imgUrl: "worker.png",
    companyIcon: "company.png",
    violationsCount: 2,
    violations: [
      false,
      [
        {
          date: "2024-02-01",
          number: 1,
          description:
            "Design flaw discovered.\nRectified before construction.\nMinimal impact.",
        },
        {
          date: "2024-02-02",
          number: 2,
          description:
            "Second design flaw.\nHandled on time.\nNo further issues.",
        },
      ],
      false,
      false,
      [
        {
          date: "2024-04-01",
          number: 1,
          description:
            "Late submission of blueprints.\nCaused by technical issues.\nDeadline extended.",
        },
      ],
      false,
      false,
      [
        {
          date: "2024-06-01",
          number: 1,
          description:
            "Another blueprint issue.\nHandled promptly.\nNo disruptions.",
        },
        {
          date: "2024-06-02",
          number: 2,
          description:
            "Second blueprint delay.\nAddressed effectively.\nNo major impact.",
        },
      ],
      false,
      false,
      false,
      false,
    ],
  },
  {
    id: 4,
    name: "Bob Brown",
    position: "Electrician",
    imgUrl: "worker.png",
    companyIcon: "company.png",
    violationsCount: 5,
    violations: [
      [
        {
          date: "2024-01-01",
          number: 1,
          description:
            "Safety violation.\nImproper PPE usage.\nAddressed with training.",
        },
        {
          date: "2024-01-02",
          number: 2,
          description:
            "Second safety issue.\nHandled promptly.\nTraining provided.",
        },
      ],
      false,
      false,
      false,
      [
        {
          date: "2024-04-01",
          number: 1,
          description:
            "Electrical fault detected.\nFixed promptly.\nNo injuries reported.",
        },
      ],
      [
        {
          date: "2024-05-01",
          number: 1,
          description:
            "Minor wiring issue.\nResolved quickly.\nMinimal impact.",
        },
      ],
      false,
      [
        {
          date: "2024-07-01",
          number: 1,
          description:
            "Another wiring issue.\nAddressed promptly.\nNo major disruption.",
        },
        {
          date: "2024-07-02",
          number: 2,
          description: "Second wiring problem.\nHandled quickly.\nNo issues.",
        },
        {
          date: "2024-07-03",
          number: 3,
          description:
            "Third wiring problem.\nResolved efficiently.\nNo further problems.",
        },
      ],
      false,
      false,
      false,
      [
        {
          date: "2024-11-01",
          number: 1,
          description:
            "Client complaint.\nResolved satisfactorily.\nNo further issues.",
        },
      ],
    ],
  },
  {
    id: 5,
    name: "Charlie Davis",
    position: "Plumber",
    imgUrl: "worker.png",
    companyIcon: "company.png",
    violationsCount: 3,
    violations: [
      false,
      [
        {
          date: "2024-02-01",
          number: 1,
          description:
            "Leak detected in pipeline.\nFixed within a day.\nMinimal disruption.",
        },
      ],
      false,
      [
        {
          date: "2024-04-01",
          number: 1,
          description:
            "Incorrect pipe fitting.\nReplaced immediately.\nIssue resolved.",
        },
        {
          date: "2024-04-02",
          number: 2,
          description:
            "Second fitting issue.\nHandled on time.\nNo further problems.",
        },
      ],
      false,
      false,
      false,
      [
        {
          date: "2024-07-01",
          number: 1,
          description:
            "Delayed maintenance check.\nCompleted next day.\nNo major issues.",
        },
      ],
      false,
      [
        {
          date: "2024-09-01",
          number: 1,
          description:
            "Another pipeline issue.\nHandled promptly.\nNo major disruption.",
        },
        {
          date: "2024-09-02",
          number: 2,
          description:
            "Second pipeline issue.\nManaged effectively.\nNo disruptions.",
        },
      ],
      false,
      false,
    ],
  },
  {
    id: 6,
    name: "Diana Evans",
    position: "Surveyor",
    imgUrl: "worker.png",
    companyIcon: "company.png",
    violationsCount: 1,
    violations: [
      false,
      false,
      [
        {
          date: "2024-03-01",
          number: 1,
          description:
            "Incorrect survey data.\nRework needed.\nManaged promptly.",
        },
        {
          date: "2024-03-02",
          number: 2,
          description:
            "Second survey error.\nHandled quickly.\nNo further issues.",
        },
      ],
      false,
      false,
      [
        {
          date: "2024-06-01",
          number: 1,
          description:
            "Another survey issue.\nRectified immediately.\nNo disruptions.",
        },
      ],
      false,
      false,
      false,
      [
        {
          date: "2024-09-01",
          number: 1,
          description:
            "Client complaint about survey.\nResolved satisfactorily.\nNo further issues.",
        },
        {
          date: "2024-09-02",
          number: 2,
          description:
            "Second client complaint.\nManaged effectively.\nClient happy.",
        },
      ],
      false,
      false,
    ],
  },
];
