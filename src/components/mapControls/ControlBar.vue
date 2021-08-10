<template lang="">
<slot></slot>
</template>

<script>

import Bar from 'ol-ext/control/Bar'

import useControl from '@/composables/useControl'
import {provide} from "vue"
export default {
    name: 'ol-control-bar',
    setup(props) {
        const {
            control
        } = useControl(Bar, props);

        provide('controlBar',control)
        return {
            control
        }

    },
    props: {
        toggleOne: {
            type: Boolean,
            default:true
        },
        group: {
             type: Boolean,
            default:true
        },

    }
}
</script>

<style lang="">

</style>
