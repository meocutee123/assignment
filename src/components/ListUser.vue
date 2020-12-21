<template>
  <div id="list-users">
    <div class="header">
      <h3>Danh sách {{data.name}}</h3>
      <router-link to="create">
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
          :items="data.items"
          :fields="data.fields"
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
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      filter: null,
      filterOn: [],
      pageOptions: [5, 10, 15, 20, { value: 100, text: "Show all" }],
////////////////
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
