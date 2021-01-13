const navLayout = [
  {
    buttonIcon: "gear-fill",
    buttonTittle: "Settings",
    role: ['admin', 'user'],
    attrs: [
      {
        linkTo: "User",
        linkTittle: "Users",
        role: ["admin"],
      },
      {
        linkTo: "Home",
        linkTittle: "Products",
        role: ['user', 'admin']
      },
    ],
  },
  {
    buttonIcon: "calculator-fill",
    buttonTittle: "Manage",
    attrs: [],
    role: ['admin']
  },
];

export { navLayout };
