export default {
  name: "product",
  fields: [
    {
      // A column that needs custom formatting,
      // calling formatter 'fullName' in this app
      key: "name",
      label: "Tên sản phẩm",
    },
    {
      label: "Ngày tạo",
      key: "createdDate",
    },
    {
      label: "Ngày cập nhật gần đây",
      key: "updatedDate",
    },
    {
      label: "Giá",
      key: "price",
    },
    {
      label: "product",
      key: "status",
      formatter: (value, key, item) => {
        if (item.status) {
          return "Hoạt động";
        }
        return "Không hoạt động";
      },
    },
    {
      label: "Thao tác",
      key: "id",
    },
  ],
  items: [
    {
      id: 1,
      name: "Persian cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "9.99",
      status: false,
    },
    {
      id: 2,
      name: "Maine Coon",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "4.99",
      status: false,
    },
    {
      id: 3,
      name: "Bengal cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "4.69",
      status: false,
    },
    {
      id: 4,
      name: "Siamese cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "28.99",
      status: false,
    },
    {
      id: 5,
      name: "British Shorthair",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "249.99",
      status: false,
    },
    {
      id: 6,
      name: "Sphynx cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "10.99",
      status: false,
    },
    {
      id: 7,
      name: "Ragdoll",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "12.99",
      status: false,
    },
    {
      id: 8,
      name: "Scottish fold",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "3.99",
      status: false,
    },
    {
      id: 9,
      name: "Munchkin cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "1.99",
      status: false,
    },
    {
      id: 10,
      name: "Savannah cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "49.99",
      status: false,
    },
    {
      id: 11,
      name: "Siberian cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "29.99",
      status: false,
    },
    {
      id: 12,
      name: "Russian blue",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "14.99",
      status: false,
    },
    {
      id: 13,
      name: "Norvigian Forest cat",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "8.99",
      status: false,
    },
    {
      id: 14,
      name: "Turkish Angora",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "19.99",
      status: false,
    },
    {
      id: 15,
      name: "Birman",
      createdDate: "12/21/2020, 00:00:00 AM",
      updatedDate: "12/21/2020, 00:00:00 AM",
      price: "29.99",
      status: false,
    },
  ],
};
