<template>
  <div id="create-user">
    <form @submit.prevent="addUser">
      <Form :layouts="layouts" :model="model" />
    </form>
  </div>
</template>
<script>
import Form from "@/elements/form";
import { mapGetters, mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import mixins from "@/mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {
      layouts: [
        {
          cols: "6",
          type: "input",
          label: "User name",
          attrs: {
            id: "userName",
            class: [],
            placeholder: "Enter your username",
            model: "userName",
            validation: true,
            invalidFeedback:
              "This field is required and must be at least 3 characters",
          },
        },
        {
          cols: "6",
        },
        {
          cols: "6",
          type: "input",
          label: "First name",
          invalidFeedback: "This field is required",
          attrs: {
            id: "first",
            classes: [],
            placeholder: "Enter your first name",
            model: "first",
            validation: true,
          },
        },
        {
          cols: "6",
          type: "input",
          label: "Last name",
          invalidFeedback: "This field is required",
          attrs: {
            id: "last",
            classes: [],
            placeholder: "Enter your last name",
            model: "last",
            validation: true,
          },
        },
        {
          cols: "6",
          type: "checkbox",
          attrs: {
            label: "Status",
            model: "status",
          },
        },
        {
          cols: "6",
          type: "button",
          classes: ["d-flex", "flex-row-reverse"],
          // attrs: [
          //   {
          //     type: 'submit',
          //     variant: "success",
          //     label: "Submit",
          //     class: ["mr-3"],
          //   },
          //   {
          //     variant: "success",
          //     label: "Cancel",
          //     to: { name: "Home" }
          //   },
          // ],
          attrs: {
            type: "submit",
            variant: "success",
            label: "Submit",
            class: ["mr-3"],
            clickable: true,
            click: () => console.log('foo sadfhsdakjf'),
            
          },
        },
      ],
      model: {
        userName: null,
        first: null,
        last: null,
        status: false,
      },
    };
  },
  validations: {
    model: {
      userName: {
        required,
        minLength: minLength(3),
      },
      first: {
        required,
      },
      last: {
        required,
      },
    },
  },
  provide() {
    return {
      $v: this.$v,
    };
  },
  methods: {
    ...mapMutations(["ADD_USER"]),

    addUser: function() {
      this.$v.model.$touch();

      if (!this.$v.model.$anyError) {
        // this.ADD_USER(this.newUser);
        // this.$router.push({ name: "Home" });
        console.log("foo");
        return;
      }
    },
  },
  computed: {
    ...mapGetters(["getAllUsers"]),
    getID() {
      const id = this.getAllUsers.items.length + 1;
      return id;
    },
    newUser() {
      let newUser = {
        id: this.getID,
        userName: this.model.userName,
        name: { first: this.model.first, last: this.model.last },
        createdDate: this.getFormattedDate(),
        status: this.model.status,
      };
      return newUser;
    },
  },
  components: {
    Form,
  },
};
</script>
<style lang="scss" scope>
form {
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
