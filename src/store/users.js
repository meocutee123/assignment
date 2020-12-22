export default{
  name: 'user',
    fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "Tên đầy đủ",
          formatter: "fullName",
        },
        // A regular column
        {
          label: "Tên đăng nhập",
          key: "userName",
        },
        {
          label: "Ngày tạo",
          key: "createdDate",
        },
        {
          label: "Trạng thái",
          key: "status",
          formatter: (value, key, item) => {
            if (item.status) {
              return "Đang làm";
            }
            return "Nghỉ việc";
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
          name: { first: "Lalisa", last: "Manoban" },
          userName: "lalalalisa",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: true,

        },
        {
          id: 2,
          name: { first: "Jennie", last: "Kim" },
          userName: "jennirubyjane",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 3,
          name: { first: "Park", last: "Chaeyoung" },
          userName: "rosanepark",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 4,
          name: { first: "Kim", last: "Jisoo" },
          userName: "jisooturtlerabitkim",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 5,
          name: { first: "Im", last: "Nayeon" },
          userName: "CEOLim",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 6,
          name: { first: "Minatozaki", last: "Sana" },
          userName: "sanashyshyshy",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 7,
          name: { first: "Chou", last: "Tzuyu" },
          userName: "beautyqueen",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 8,
          name: { first: "Hirai", last: "Momo" },
          userName: "dancingmachine",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 9,
          name: { first: "Myoui", last: "Mina" },
          userName: "penguin",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 10,
          name: { first: "Joo", last: "Jeongyeon" },
          userName: "shorthairgirlcrush",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 11,
          name: { first: "Park", last: "Jihyo" },
          userName: "goddess",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 12,
          name: { first: "Kim", last: "Dahyun" },
          userName: "tofu",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        {
          id: 13,
          name: { first: "Son", last: "Chaeyoung" },
          userName: "strawbery",
          createdDate: "12/21/2020, 00:00:00 AM",
          status: false,

        },
        
      ]
}