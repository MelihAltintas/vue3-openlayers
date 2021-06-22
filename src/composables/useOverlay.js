import Overlay from 'ol/Overlay';
import {
    inject,
    ref,
    watchEffect,
    watch,
    onMounted,
    onUnmounted
} from 'vue'

import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
export default function useOverlay(props, emit) {

    const map = inject('map');

    const htmlContent = ref(null)

    const {
        properties
    } = usePropsAsObjectProperties(props);

    let overlay = new Overlay(properties);

    onMounted(() => {
        map.addOverlay(overlay);
    });

    onUnmounted(() => {
        map.removeOverlay(overlay);
    });

    watch(properties, () => {
        map.removeOverlay(overlay);
        overlay = new Overlay(properties);
        map.addOverlay(overlay);

    });

    watchEffect(() => {

        setElement(htmlContent.value)
    }, {
        flush: 'post'
    })

    overlay.on('change:element', () => emit('elementChanged', getElement()));
    overlay.on('change:offset', () => emit('offsetChanged', getOffset()));
    overlay.on('change:position', () => emit('positionChanged', getPosition()));
    overlay.on('change:positioning', () => emit('positioningChanged', getPositioning()));

    const getElement = () => overlay.getElement();
    const getOffset = () => overlay.getOffset();
    const getPosition = () => overlay.getPosition();
    const getPositioning = () => overlay.getPositioning();

    const panIntoView = (opt_panIntoViewOptions) => overlay.panIntoView(opt_panIntoViewOptions);

    const setElement = (element) => overlay.setElement(element);
    const setOffset = (offset) => overlay.setOffset(offset);
    const setPosition = (position) => overlay.setPosition(position);
    const setPositioning = (positioning) => overlay.setPositioning(positioning);

    return {
        overlay,
        htmlContent,
        getOffset,
        getPosition,
        getPositioning,
        panIntoView,
        setElement,
        setOffset,
        setPosition,
        setPositioning
    }
}