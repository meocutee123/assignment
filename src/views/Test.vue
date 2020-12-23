<template>
    <div>
        <h1>Dynamic form</h1>
        <Form :config="formConfig"/>
    </div>
</template>
<script>
import Config from "@/config/form.json"
import Form from "@/components/Form"
export default {
    computed:{
        formConfig(){
            return Config
        }
    },
    components:{
        Form
    }
}
</script>
<style lang="">
    
</style>