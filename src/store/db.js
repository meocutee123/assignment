export default{
  name: 'người dùng',
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
          key: "action",
        },
      ],
      items: [
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        }
      ]
}