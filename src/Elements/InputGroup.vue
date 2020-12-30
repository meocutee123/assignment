<template>
  <b-row>
    <b-col
      v-for="(layout, index) in formLayout"
      :key="index"
      :cols="layout.cols"
      :class="layout.classes"
    >
      <b-form-group v-if="layout.type == 'input'" :label="layout.label">
        <b-form-input
          v-bind="layout.attrs"
          v-model="$v.model[layout.attrs.model].$model"
          :state="
            layout.attrs.validation ? validateState(`${layout.attrs.id}`) : null
          "
        ></b-form-input>
        <b-form-invalid-feedback>{{
          layout.attrs.invalidFeedback
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group v-if="layout.type == 'checkbox'">
        <b-form-checkbox
          v-bind="layout.attrs"
          v-model="model[layout.attrs.model]"
        >
          {{ layout.attrs.label }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group v-if="layout.type == 'radio'">
        <b-form-checkbox
          v-bind="layout.attrs"
          v-model="model[layout.attrs.model]"
        >
          {{ layout.attrs.label }}
        </b-form-checkbox>
      </b-form-group>
    </b-col>
    <slot/>
  </b-row>
</template>
<script>
import { validationMixin } from "vuelidate";
export default {
  mixins: [validationMixin],
  props: ["formLayout", "model"],
  inject: ["$v"],
  methods: {
    validateState(field) {
      const { $dirty, $error } = this.$v.model[field];
      return $dirty ? !$error : null;
    }
  },
};
</script>
