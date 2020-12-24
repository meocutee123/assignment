<template>
      <b-col :cols="data.cols">
        <b-form-group :label="data.legend">
          <component
            :is="data.type"
            :placeholder="data.placeholder"
            class="form-control"
            :name="data.name"
          >
          </component>
        </b-form-group>
      </b-col>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="scss" scope></style>
