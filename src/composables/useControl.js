import {
    inject,
    onMounted,
    onUnmounted,
    watch,
    computed

} from 'vue'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default function useControl(ControlType, props) {

    const map = inject('map');

    const {
        properties
    } = usePropsAsObjectProperties(props);

    let control = computed(()=>new ControlType({...properties}));

    watch(control, (newVal,oldVal) => {
        map.removeControl(oldVal);
        map.addControl(newVal);
        map.changed()
    });

    onMounted(() => {

        map.addControl(control.value);
        map.changed();
    });

    onUnmounted(() => {
        map.removeControl(control.value);
        map.changed();
    });

    return {
        control
    }
}