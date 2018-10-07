<template>
    <ul>
        <li v-for="ninja in ninjas" :key="ninja.index">{{ ninja }}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
          ninjas: ['Yoshi', 'Mario', 'Ryu']
        }
    }
}
</script>

<style>
</style>
