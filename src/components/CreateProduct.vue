<template>
  <div id="create-product">
    <form action="">
      <b-row>
        <b-col cols="6">
          <b-form-group
            id="fieldset-1"
            label="Tên sản phẩm"
            label-for="input-1"
            valid-feedback="Thank you!"
            :invalid-feedback="invalidFeedback"
            :state="state"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập tên sản phẩm"
              v-model="userName"
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6"
          ><b-form-group
            id="fieldset-1"
            label="Giá sản phẩm"
            label-for="input-1"
            valid-feedback="Thank you!"
            :invalid-feedback="invalidFeedback"
            :state="state"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập giá sản phẩm"
              v-model="userName"
              :state="state"
              trim
            ></b-form-input> </b-form-group
        ></b-col>
        
        <b-col cols="12">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Trạng thái
          </b-form-checkbox>
        </b-col>
        <b-col cols="12" class="d-flex">
          <b-form-group class="mr-3 ml-auto">
            <b-button block variant="success">Submit</b-button>
          </b-form-group>
          <b-form-group>
            <b-button block variant="success">Cancel</b-button>
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
form {
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn{
      padding: 5px 40px
  }
}
</style>
