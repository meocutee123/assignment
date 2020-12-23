<template>
    <div>
        <input type="checkbox" v-model="model" 
        @change="$emit('input', $event.target.value)"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            model: false
        }
    }
}
</script>
<style lang="">
    
</style>