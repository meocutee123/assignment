<template>
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
          v-model="model[attr.model]"
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
          :type="attr.type"
          :to="{ name: attr.to }"
          :variant="attr.variant"
          :class="attr.classes"
          >{{ attr.label }}</b-button
        >
      </b-form-group>
    </b-col>
  </b-row>
</template>
<script>
import { validationMixin } from "vuelidate";
export default {
  mixins: [validationMixin],
  props: {
    layouts: {
      type: Array,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
  },
};
</script>
