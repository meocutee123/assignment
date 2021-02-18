<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :items="users"
      :classes="classes"
      :fields="fields"
      :perPage="perPage"
      :pageOptions="pageOptions"
      :tableStatus="tableStatus"
    >
      <template #cell(id)="data">
        <router-link v-if="data.value" :to="{ name: 'Edit', params: { id: data.value } }">
          <i
            class="fas fa-edit ml-3"
            style="font-weight: bold; color: #42b983;"
          ></i>
        </router-link>
        <i
          class="fas fa-trash-alt ml-3"
          @click="Remove(data.value)"
          style="font-weight: bold; color: red;"
        ></i>
      </template>
    </Table>
  </div>
</template>
<script>
import Table from "@/elements/Table";
import mixins from "@/mixins/index.js";
import { mapState } from 'vuex';
export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        name: "List users",
        button: "Create new",
      },
      linkTo: "Create",
      classes: "btn-41b883",
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "Full name",
          formatter: "fullName",
        },
        // A regular column
        {
          label: "Username",
          key: "userName",
        },
        {
          label: "Created date",
          key: "createdDate",
        },
        {
          label: "Woking status",
          key: "status",
          formatter: (value, key, item) => {
            if (item.status) {
              return "Active";
            }
            return "Inactive";
          },
        },
      ],
      pageOptions: [20, 50, 100, { value: 1000, text: "Show all" }],
      perPage: 20,
      tableStatus: true
    };
  },
  async mounted() {
    await this.$store.dispatch("GET_USER");
    this.tableStatus = false
  },
  methods: {
    async Remove(id) {
      var result = confirm("ARE YOU SURE ?");
      if (result) {
        this.tableStatus = true
        await this.$store.dispatch('REMOVE_USER',id);
        this.tableStatus = false
      }
    },
  },
  components: {
    Table,
  },
  computed: {
    ...mapState({
      users: state => state.user.users
    })
  },
};
</script>
