import AssertCompatible from '../assert/compatible';
import CompatibleError from '../assert/throwable/compatible-parameters';

export default function CompatibleParameters(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError
) : globalThis.Date|string|number  {

    AssertCompatible(value, error);

    return value;
}
