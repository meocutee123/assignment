<template>
  <div>
    <b-row>
      <b-col cols="3">
        <Nav />
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="12">
            <User />
          </b-col>
          <b-col cols="12">
            <div class="content">
             <slot/>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Nav from '@/components/common/Nav.vue'
import User from '@/components/common/Header'
export default {
    components:{
        Nav, User
    }
}
</script>
<style lang="scss">
  .content{
    padding-top: 80px;
      .page-item.active .page-link {
    background-color: #42b983 !important ;
    border-color: #42b983 !important;
  }
  }
</style>
