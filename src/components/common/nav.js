const navLayout = [
  {
    buttonIcon: "gear-fill",
    buttonTittle: "Settings",
    role: ['admin', 'user'],
    attrs: [
      {
        linkTo: "Home",
        linkTittle: "Users",
        role: ["admin"],
      },
      {
        linkTo: "Product",
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
