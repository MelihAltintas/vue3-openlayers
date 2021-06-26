<template>
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    provide,
    inject,
    watch,
    onUnmounted,
    onMounted,
    computed
} from 'vue'

import Style from 'ol/style/Style';

import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-style',
    setup(props) {

        const styledObj = inject('stylable', null);

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let style = computed(() => new Style(properties));

        const setStyle = (val) => {
            try {
                styledObj.value.setStyle(val)
                styledObj.value.changed()
            } catch (error) {

                styledObj.value.style_ = val
                styledObj.value.values_.style = val

                styledObj.value.changed()

            }
        };

        const styleFunc = computed(() => {
            return (feature) => {
                if (properties.overrideStyleFunction != null) {
                    properties.overrideStyleFunction(feature,style.value)
                }
                return style.value
            }
        });

        watch(properties, () => {

            setStyle(styleFunc.value);
        })

        onMounted(() => {
            setStyle(styleFunc.value);
        });

        onUnmounted(() => {
            setStyle(null);
        });

        provide("style", style)
        provide("styledObj", styledObj)

        return {
            style
        }
    },
    props: {
        zIndex: {
            type: Number
        },
        overrideStyleFunction: {
            type: Function
        },

    }

}
</script>

<style lang="">

</style>
