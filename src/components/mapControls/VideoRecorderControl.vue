<template lang="">
<div v-if="false">

</div>
</template>

<script>
import VideoRecorder from 'ol-ext/control/VideoRecorder'
import {
    saveAs
} from 'file-saver';
import useControl from '@/composables/useControl'
import {toRefs} from 'vue'
export default {
    name: 'ol-control-videorecorder',
    emits: ['start', 'stop'],
    setup(props, context) {

        const {
            control
        } =
        useControl(VideoRecorder, props,context);

        const{downloadName} = toRefs(props)

        control.value.on("start", (event) => {
            context.emit('start', event)

        })

        control.value.on("stop", (event) => {
            context.emit('stop', event)
            saveAs(event.videoURL, downloadName.value);
        })
        return {
            control
        }

    },
    props: {
        className: {
            type: String,
        },
        framerate: {
            type: Number,
            default: 30
        },
        videoBitsPerSecond: {
            type: Number,
            default: 5000000
        },
        videoTarget: {
            type: String,

        },
        downloadName: {
            type: String,
            default: "mapVideo.mp4"

        },

    }
}
</script>

<style lang="">

</style>
