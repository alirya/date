import Value from "@dikac/t-value/value";
export default function CompatibleParameter({ value, error }: Value<unknown> & {
    error: (value: unknown) => Error;
}): globalThis.Date | string | number;
