const mixins = {
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
    }
}
export default mixins