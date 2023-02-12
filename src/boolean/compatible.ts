import Date from './date.js';
import Integer from '@alirya/number/boolean/integer.js';
import Number from '@alirya/number/boolean/number.js';
import String from '@alirya/string/boolean/string.js';
import CompatibleType from '../compatible.js';

export default function Compatible(
    value: unknown,
) : value is CompatibleType {

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
