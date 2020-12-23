<template>
    <div>
        <label v-for="(option, key) in options" :key="key">
        <input type="radio" :name="name"
        :value="option.value"
        @imput="$emit('input', $event.target.value)"/>
        {{option.label}}
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