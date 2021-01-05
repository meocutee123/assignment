<template>
  <div id="list">
    <div class="header">
      <h3>{{ title.name }}</h3>
      <router-link v-if="isAuth.role == 'admin'" :to="{ name: linkTo }">
        <b-button variant="success" size="sm">{{
          title.button
        }}</b-button></router-link
      >
    </div>
    <b-row class="mt-3">
      <b-col sm="6" md="6">
        <b-form-group class="mb-0">
          <b-form-select
            v-model="perPageLocal"
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
          sticky-header="650px"
          borderless
          striped
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPageLocal"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
          show-empty
        >
          <template v-slot:cell(id)="data">
            <slot name="cell(id)" v-bind="data"> </slot>
          </template>
        </b-table>
      </b-col>
      <b-col sm="12" md="12">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPageLocal"
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
import isAuth from "@/mixins/auth.js";
export default {
  mixins: [isAuth],
  props: {
    title: { type: Object, required: true },
    linkTo: { type: String, required: true },
    items: { type: Array, required: true },
    fields: { type: Array, required: true },
    perPage: { type: Number, required: true },
    pageOptions: { type: Array, required: true },
  },
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      filter: null,
      filterOn: [],
      perPageLocal: this.perPage,
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
    autoRun() {
      this.fields.push({
        label: "Thao tác",
        key: "id",
      });
    },
  },
  mounted() {
    this.totalRows = this.items.length;
    if (this.isAuth.role == "admin") {
      this.autoRun();
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#list {
  background-color: white;
  padding: 10px;
  margin: 0 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
