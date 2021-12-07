import Date from "./date";
import Integer from "@dikac/t-number/boolean/integer";
import Number from "@dikac/t-number/boolean/number";
import String from "@dikac/t-string/boolean/string";

export default function Compatible(
    value: unknown,
) : value is globalThis.Date|string|number {

    if(Date(value)) {

        return true;
    }

    if(Number(value)) {

        // float value
        if(!Integer(value)) {

            return false;
        }

    } else if(!String(value)) {

        return false;
    }

    try {

        if(!Date(new globalThis.Date(value))) {

            return false;
        }

    } catch (e) {

        return false;
    }

    return true;
}
