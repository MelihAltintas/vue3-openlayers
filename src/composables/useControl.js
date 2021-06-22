import {
    inject,
    onMounted,
    onUnmounted,
    watch,

} from 'vue'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default function useControl(ControlType, props) {

    const map = inject('map');

    const {
        properties
    } = usePropsAsObjectProperties(props);

    let control = new ControlType({...properties});

    watch(properties, () => {
        map.removeControl(control);
        control = new ControlType({...properties});
        map.addControl(control)
    });

    onMounted(() => {

        map.addControl(control);
    });

    onUnmounted(() => {
        map.removeControl(control);
    });

    return {
        control
    }
}