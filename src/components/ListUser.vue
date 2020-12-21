<template>
  <div id="list-users">
    <div class="header">
      <h3>Danh sách người dùng</h3>
      <router-link to="/create">
        <b-button variant="success" size="sm"
          >Tạo người dùng</b-button
        ></router-link
      >
    </div>
    <b-row class="mt-3">
      <b-col sm="6" md="6">
        <b-form-group class="mb-0">
          <b-form-select
            v-model="perPage"
            :options="pageOptions"
            size="sm"
            class="w-auto"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="6" md="6">
        <b-form-group class="w-50 ml-auto">
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Tìm kiếm"
            ></b-form-input>
            <b-button
              size="sm"
              variant="success"
              :disabled="!filter"
              @click="filter = ''"
              >Xóa</b-button
            >
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col sm="12" md="12">
        <b-table
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
        >
          <template #cell(action)="">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <a href="#" class="ml-5">
              <b-icon
                icon="pencil"
                aria-hidden="true"
                variant="success"
              ></b-icon
            ></a>
          </template>
        </b-table>
      </b-col>
      <b-col sm="12" md="12">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0 w-25 ml-auto"
        ></b-pagination
      ></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      filter: null,
      filterOn: [],
      pageOptions: [5, 10, 15, 20, { value: 100, text: "Show all" }],
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
        },
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "John", last: "Doe" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
        {
          name: { first: "Meo", last: "Cutee" },
          userName: "dickerson",
          createdDate: "12/14/2020, 3:06:55 PM",
          status: false,
          action: "Edit",
        },
      ],
    };
  },
  methods: {
    fullName(value) {
      return `${value.first} ${value.last}`;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scope>
#list-users {
  background-color: white;
  padding: 10px;
  .header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
