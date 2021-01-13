<template>
  <div id="create-user">
    <form @submit.prevent="addNew">
      <InputGroup :formLayout="formLayout" :model="model">
        <ButtonGroup :attrs="buttonGroup" />
      </InputGroup>
    </form>
  </div>
</template>
<script>
import InputGroup from "@/elements/InputGroup";
import ButtonGroup from "@/elements/ButtonGroup";
import Create from "./Create.js";
import { mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import mixins from "@/mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {
      formLayout: Create.formLayout,
      buttonGroup: [
        {
          type: "submit",
          class: "mr-3 btn-41b883",
          variant: "success",
          label: "Submit",
        },
        {
          variant: "success",
          label: "Cancel",
          class: 'btn-41b883',
          to: "/user",
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
  methods: {
    ...mapMutations({
      add: "ADD_USER",
    }),

    addNew: function() {
      this.$v.model.$touch();

      if (!this.$v.model.$anyError) {
        this.add(this.newUser);
        this.$router.replace('/user');
        return;
      }
    },
  },
  computed: {
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
    InputGroup,
    ButtonGroup,
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
