<template>
  <div id="create-user">{{model}}
    <form action="" @submit.prevent="update">
      <InputGroup :formLayout="formLayout" :model="model">
        <ButtonGroup :attrs="buttonGroup" />
      </InputGroup>
    </form>
  </div>
</template>
<script>
import InputGroup from "@/elements/InputGroup";
import ButtonGroup from "@/elements/ButtonGroup";
import mixins from "@/mixins/index.js";
import Edit from "./Edit.js";
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["id"],
  mixins: [mixins],
  data() {
    return {
      formLayout: Edit.formLayout,
      buttonGroup: [
        {
          type: "submit",
          class: "mr-3",
          variant: "success",
          label: "Submit",
        },
        {
          class: "mr-3",
          variant: "success",
          label: "Cancel",
          to: "/",
        },
      ],
      model: {},
    };
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
  mounted() {
    // value: {
    //   id: '',
    //   asdas : {
    //     idd: ''
    //   }
    // }
    // onchange(value){
    //   const { id, asdas : { idd } = {}  }=value;
      
    // }
    // a ? b : c

    const { name, ...rest } = JSON.parse(JSON.stringify(this.currentUser));
    let newCurrentUser = {
      ...rest,
      ...name,
    };
    this.model = Object.assign({}, this.model, newCurrentUser);
  },
  methods: {
    ...mapActions(["LOAD_USER"]),
    update() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("UPDATE_USER", this.newUser);
        this.$router.replace("/");
      }
    },
  },
  computed: {
    currentUser() {
      this.LOAD_USER(this.id);
      return this.$store.state.user.currentUser;
    },
    newUser() {
      let newUser = {
        id: this.id,
        name: { first: this.model.first, last: this.model.last },
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
