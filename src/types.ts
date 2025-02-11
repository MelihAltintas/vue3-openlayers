export type Vue3OpenlayersGlobalOptions = {
  debug: boolean;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type TupleToObject<
  T extends readonly any[],
  M extends Record<Exclude<keyof T, keyof any[]>, PropertyKey>,
> = { [K in Exclude<keyof T, keyof any[]> as M[K]]: T[K] };

export type TypedClassArgs<
  T extends abstract new (...args: any) => any,
  M extends Record<
    Exclude<keyof ConstructorParameters<T>, keyof any[]>,
    PropertyKey
  >,
> = TupleToObject<ConstructorParameters<T>, M>;
/* eslint-enable @typescript-eslint/no-explicit-any */

export type KeysMatching<T extends object, V> = {
  [K in keyof T]-?: T[K] extends V ? never : K;
}[keyof T];

export type ObjectToFactory<T> = {
  [Key in keyof T]: T[Key] extends object | undefined ? () => T[Key] : T[Key];
};
