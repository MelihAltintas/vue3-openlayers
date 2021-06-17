import Overlay from 'ol/Overlay';
import {
    inject,
    ref,
    toRefs,
    watchEffect
} from 'vue'


export default function useOverlay(props, emit) {

    const map = inject('map');

    const htmlContent = ref(null)

    const {
        position,
        offset,
        positioning,
        stopEvent,
        insertFirst,
        autoPan,
        autoPanMargin,
        autoPanAnimation
    } = toRefs(props);

    const overlay = new Overlay({
        position: position.value,
        offset: offset.value,
        positioning: positioning.value,
        stopEvent: stopEvent.value,
        insertFirst: insertFirst.value,
        autoPan: autoPan.value,
        autoPanAnimation: autoPanAnimation.value,
        autoPanMargin: autoPanMargin.value
    });

    map.addOverlay(overlay);

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