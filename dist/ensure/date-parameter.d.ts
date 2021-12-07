import Value from "@dikac/t-value/value";
export default function DateParameter({ value, error }: Value<unknown> & {
    error: (value: unknown) => Error;
}): globalThis.Date;
