<template>
  <div>
    <div v-for="(field, key) in config" :key="key">
        <label>{{field.label}}</label>
        <component :is="field.type"
        :name="field.name"
        :params="field.params"
        @input="updateField(field.name, $event)">

        </component>
    </div>
    <div>
        <button type="submit" :disabled="disable">Submit</button>
    </div>
    {{formValues}}
  </div>
</template>
<script>
import Vue from "vue";
import Input from '@/FormElement/Input'
import CheckBox from '@/FormElement/CheckBox'
import Radio from '@/FormElement/Radio'
export default {
  props: ["config"],
  data() {
    return {
      formValues: {},
    };
  },
  computed:{
      disable() {
          return true
      }
  },
  created() {
    this.config.map((f) => {
      Vue.set(this.formValues, f.name, null);
    });
  },
  methods:{
      updateField(field, value){
          this.formValues[field] = value
      }
  },
  components:{
      Input, Radio, CheckBox
  }
};
</script>
<style lang=""></style>
