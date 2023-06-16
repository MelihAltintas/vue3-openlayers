import type { defineEmits } from "vue";

export default function eventGateway(
  emit: ReturnType<typeof defineEmits>,
  instance: { on: (event: any, ...args: any[]) => unknown },
  events: string[]
) {
  events.forEach((event: string) => {
    instance.on(event, (...args: unknown[]) => {
      console.log(event, args);
      emit(event, ...args);
    });
  });
}
