<template>
  <div id="list-users">
    <div class="header">
      <h3>
        Danh sách
        <span v-if="data === 'products'"> sản phẩm</span>
        <span v-else> người dùng</span>
      </h3>
      <router-link v-if="data != 'products'" :to="{ name: 'Create' }">
        <b-button variant="success" size="sm"
          >Tạo người dùng</b-button
        ></router-link
      >
      <router-link v-else :to="{ name: 'CreateProduct' }">
        <b-button variant="success" size="sm"
          >Tạo sản phẩm</b-button
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
          v-if="data === 'products'"
          :items="products.items"
          :fields="products.fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
        >
          <template #cell(action)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <router-link
              :to="{ name: 'Edit', params: { id: data.value } }"
              class="ml-3"
            >
              <i
                class="fas fa-edit"
                style="font-weight: bold; color: #42b983;"
              ></i>
            </router-link>
          </template>
        </b-table>

        <b-table
          v-else
          :items="users.items"
          :fields="users.fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
        >
          <template #cell(id)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <router-link
              :to="{ name: 'Edit', params: { id: data.value } }"
              class="ml-3"
            >
              <i
                class="fas fa-edit"
                style="font-weight: bold; color: #42b983;"
              ></i>
            </router-link>
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
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["data"],
  computed: {
    ...mapState(["users", "products"]),
  },
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 20,
      filter: null,
      filterOn: [],
      pageOptions: [20, 50, 100, { value: 1000, text: "Show all" }],
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
  mounted() {
    // Set the initial number of items
    this.totalRows = this.users.items.length;
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
.page-item.active .page-link {  
    background-color: #42b983 !important;  
    border-color: #42b983 !important;  
}
}
</style>
