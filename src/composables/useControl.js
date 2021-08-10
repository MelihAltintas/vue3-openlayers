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
    const controlBar = inject('controlBar', null);

    const parent = controlBar != null ? controlBar.value : map;

    const {
        properties
    } = usePropsAsObjectProperties(props);

    let control = computed(() => new ControlType({
        ...properties
    }));

    watch(control, (newVal, oldVal) => {
        if (parent.removeControl) {
            parent.removeControl(oldVal);
        }
        parent.addControl(newVal);
        map.changed()
    });

    onMounted(() => {
        parent.addControl(control.value);
        map.changed();
    });

    onUnmounted(() => {
        if (parent.removeControl) {
            parent.removeControl(control.value);
        }
        map.changed();
    });

    return {
        map,
        control
    }
}