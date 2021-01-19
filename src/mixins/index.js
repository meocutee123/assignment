const mixins = {
  data() {
    return {
      disabledBtn: null
    }
  },
  methods: {
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
    cancel() {
      this.$root.$bvToast.toast("Action canceled!", {
        title: `Message`,
        variant: "warning",
        solid: true,
      });
    },
    create(value){
      this.disabledBtn.disabled = false 
      this.$root.$bvToast.toast(`${value} has been added successfully!`, {
        title: `Message`,
        variant: "success",
        solid: true,
      });
    },
    edit(value){
      this.disabledBtn.disabled = false 
      this.$root.$bvToast.toast(`${value} has been edited successfully!`, {
        title: `Message`,
        variant: "success",
        solid: true,
      });
    },
    Exist(value){
      this.$root.$bvToast.toast(`${value} already exist!`, {
        title: `Message`,
        variant: "danger",
        solid: true,
      });
    },
    onDelete(value){
      this.$root.$bvToast.toast(`${value} has been deleted!`, {
        title: `Message`,
        variant: "danger",
        solid: true,
      });
    },
    animation() {
      this.show = !this.show;
      this.disabledBtn.disabled = !this.disabledBtn.disabled;
    },
    search(nameKey, myArray, key) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i][`${key}`] === nameKey) {
          return true;
        }
      }
    },
  },
  provide() {
    return {
      $v: this.$v,
    };
  },
  computed: {
    getID() {
      let str =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
      return str;
    },
  },
};
export default mixins;
