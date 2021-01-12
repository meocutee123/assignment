<template>
  <b-form-group>
    <b-button v-for="(attr, index) in attrs" :key="index" v-bind="attr" @click="() => attr.function && attr.function()">{{
      attr.label
    }}</b-button>
  </b-form-group>
</template>
<script>
export default {
  props: {
    attrs:{
      type: Array,
      default: ()=>({})
    }
  }
};
</script>
<style lang="scss" scoped>
  .btn {
    padding: 5px 40px;
  }
  .btn-41b883{
  background-color: #41b883;
  border: none;
}
</style>
