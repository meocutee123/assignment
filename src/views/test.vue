<template>
  <div id="create-user">
    {{ newUser }}
    <form @submit.prevent="addUser">
      <b-row>
        <b-col
          v-for="(layout, index) in layouts"
          :key="index"
          :cols="layout.cols"
          :class="layout.classes"
        >
          <b-form-group v-if="layout.type == 'input'" :label="layout.label">
            <b-form-input
              v-for="(attr, index) in layout.attrs"
              :key="index"
              :id="attr.id"
              :class="attr.classes"
              :placeholder="attr.placeholder"
              :disabled="attr.disabled"
              v-model="$v.model[attr.model].$model"
              :state="attr.vadiation ? validateState(`${attr.id}`) : ''"
            ></b-form-input>
            <b-form-invalid-feedback>{{
              layout.invalidFeedback
            }}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group v-if="layout.type == 'checkbox'">
            <b-form-checkbox
              v-for="(attr, index) in layout.attrs"
              :key="index"
              :class="attr.classes"
              v-model="model[attr.model]"
            >
              {{ attr.label }}
            </b-form-checkbox>
          </b-form-group>
          <b-form-group v-if="layout.type == 'button'">
            <b-button
              v-for="(attr, index) in layout.attrs"
              :key="index"
              type="submit"
              :variant="attr.variant"
              :class="attr.classes"
              >{{ attr.label }}</b-button
            >
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      layouts: [
        {
          cols: "6",
          type: "input",
          label: "User name",
          invalidFeedback: "hey hey hey",

          attrs: [
            {
              id: "userName",
              classes: [],
              placeholder: "Enter your username",
              model: "userName",
              vadiation: true,
            },
          ],
        },
        {
          cols: "6",
        },
        {
          cols: "6",
          type: "input",
          label: "First name",
          attrs: [
            {
              id: "first",
              classes: [],
              placeholder: "Enter your first name",
              model: "first",
            },
          ],
        },
        {
          cols: "6",
          type: "input",
          label: "Last name",
          attrs: [
            {
              id: "lastName",
              classes: [],
              placeholder: "Enter your last name",
              model: "last",
            },
          ],
        },
        {
          cols: "6",
          type: "checkbox",
          attrs: [
            {
              label: "Status",
              model: "status",
            },
          ],
        },
        {
          cols: "6",
          type: "button",
          classes: ["d-flex", "flex-row-reverse"],
          attrs: [
            {
              variant: "success",
              label: "Submit",
              classes: ["mr-3"],
            },
            {
              variant: "success",
              label: "Cancel",
            },
          ],
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
  methods: {
    ...mapMutations(["ADD_USER"]),
    validateState(userName) {
      console.log(userName);
      const { $dirty, $error } = this.$v.model[userName];
      console.log($dirty);
      console.log($error);
      return $dirty ? !$error : null;
    },
    addUser: function() {
      this.$v.model.$touch();

      if (!this.$v.model.$anyError) {
        return;
      }
      console.log("You've passed!");
    },
    getFormattedDate() {
      var date = new Date();
      var str =
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        ", " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        `${+date.getHours() > 12 ? " PM" : " AM"}`;
      return str;
    },
  },
  validations: {
    model: {
      userName: {
        required,
      },
      first: {
        required,
      },
      last: {
        required,
      },
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
        userName: this.model.userName,
        name: { first: this.model.first, last: this.model.last },
        status: this.model.status,
      };
      return newUser;
    },
  },
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
form {
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
