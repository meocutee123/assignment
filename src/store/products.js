export default{
  name: 'sản phẩm',
    fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "product",
          formatter: "fullName",
        },
        // A regular column
        {
          label: "product",
          key: "userName",
        },
        {
          label: "product",
          key: "createdDate",
        },
        {
          label: "product",
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
          name: { first: "Mac", last: "Donald" },
          userName: "macdonal",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        
      ],
}