const navLayout = [
  {
    buttonIcon: "gear-fill",
    buttonTittle: "THIS LINK IS ABLE TO SEE BY BOTH USERS AND ADMINISTRATORS",
    role: ['admin', 'user'],
    attrs: [
      {
        linkTo: "Home",
        linkTittle: "THIS LINK CAN ONLY BEING SAW BY ADMINISTRATORS",
        role: ["admin"],
      },
      {
        linkTo: "Product",
        linkTittle: "THIS LINK IS ABLE TO SEE BY BOTH USERS AND ADMINISTRATORS",
        role: ['user', 'admin']
      },
      {
        linkTo: "Home",
        linkTittle: "THIS LINK CAN ONLY BEING SAW BY ADMINISTRATORS",
        role: ["admin"],
      },
      {
        linkTo: "Product",
        linkTittle: "THIS LINK DOES NOT HAVE ROLE ATTRIBUTE",
      },
    ],
  },
  {
    buttonIcon: "calculator-fill",
    buttonTittle: "THIS LINK CAN ONLY BENG SAW BY ADMINISTRATORS",
    role: ['admin'],
    attrs: [],
  },
];

export { navLayout };
