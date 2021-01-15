<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :items="getAllUsers.items"
      :classes="classes"
      :fields="fields"
      :perPage="perPage"
      :pageOptions="pageOptions"
    >
      <template #cell(id)="data">
        <router-link :to="{ name: 'Edit', params: { id: data.value } }">
          <i
            class="fas fa-edit ml-3"
            style="font-weight: bold; color: #42b983;"
          ></i>
        </router-link>
        <i
          class="fas fa-trash-alt ml-3"
          @click="Remove(data.value, onDelete)"
          style="font-weight: bold; color: red;"
        ></i>
      </template>
    </Table>
  </div>
</template>
<script>
import Table from "@/elements/Table";
import { mapGetters, mapActions } from "vuex";
import mixins from "@/mixins/index.js";
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
    };
  },
  methods: {
    ...mapActions(["REMOVE_USER", "LOAD_USER"]),
    Remove(id, callback) {
      this.LOAD_USER(id);
      var name = this.$store.state.user.currentUser.userName;
      var result = confirm("ARE YOU SURE ?");
      if (result) {
        this.REMOVE_USER(id);
        callback(name);
      }
    },
  },
  components: {
    Table,
  },
  computed: {
    ...mapGetters(["getAllUsers"]),
  },
};
</script>
