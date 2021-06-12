<template>
<ol-map style="height:400px">
    <View />
    <ol-fullscreen-control />
</ol-map>
</template>

<script>

import View from './components/map/View.vue'

export default {
    name: 'App',
    components: {
        View
        
    }
}
</script>

<style>

</style>
