<template lang="">
<SourceXYZ url="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
</template>

<script>
import SourceXYZ from '@/components/sources/SourceXYZ.vue'
export default {
    name: 'ol-source-osm',
    components: {
        SourceXYZ
    }
}
</script>

<style lang="">

</style>
