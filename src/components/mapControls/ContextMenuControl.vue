<template lang="">
<div v-if="false">

</div>
</template>

<script>

import ContextMenu from 'ol-contextmenu'

import useControl from '@/composables/useControl'

export default {
    name: 'ol-context-menu',
    setup(props) {
        const {
            control
        } = useControl(ContextMenu, props);
        return {
            control
        }

    },
    props: {
        eventType: {
            type: String,
            default: 'contextmenu'
        },
        defaultItems: {
            type: Boolean,
            default:true
        },
        width: {
            type: Number,
            default:150
        },
        items: {
            type: Array,
            default: ()=>[]
        }
    }
}
</script>

<style lang="">

</style>
