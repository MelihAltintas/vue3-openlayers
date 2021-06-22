import {
    toRefs,
    watch,
    reactive
} from 'vue'

export default function usePropsAsObjectProperties(props) {

   
    let options = toRefs(props);
    Object.keys(options).forEach(key => options[key] = options[key].value)
    const properties = reactive({...options})


    watch(props, () => {
       
        options = toRefs(props);
        Object.keys(options).forEach(key => {
            if (properties[key] != options[key].value) {
               
                properties[key] = options[key].value
            }
        })
        

    });

    return {
        properties
    }
}