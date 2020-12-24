<template>
  <div id="list-users">
    <div class="header">
      <h3>Danh sách {{ title }}</h3>
      <router-link :to="{ name: linkTo }">
        <b-button variant="success" size="sm"
          >Tạo {{ title }}</b-button
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
          <template #cell(id)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <router-link :to="{ name: 'Edit', params: { id: data.value } }">
              <i
                class="fas fa-edit"
                style="font-weight: bold; color: #42b983;"
              ></i
            ></router-link>
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
export default {
  props: {
    title: { type: String, required: true },
    linkTo: { type: String, required: true },
    items: { type: Array, required: true },
    fields: { type: Array, required: true },
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
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.totalRows = this.items.length;
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