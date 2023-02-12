import Validator from '@alirya/validator/validator.js';
import LowerValidatable from '../validatable/lower.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import LowerString from '../assert/string/lower.js';
import Validatable from '@alirya/validator/value/validatable.js';
import Message from '@alirya/message/message.js';
import Maximum from "@alirya/number/maximum/maximum.js";
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import LowerStringParameter from '../assert/string/lower.js';
import Unit from '../record/unit.js';
import {CompatibleParameters} from './compatible.js';
import Compatible from '../compatible.js';

export function LowerParameters<MessageT> (
    maximum : Compatible,
    unit: Unit,
    inclusive : boolean,
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, LowerValidatable.Context>;

export function LowerParameters<MessageT> (
    maximum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : ValidatableParameters<Compatible, MessageT, [maximum:Compatible, unit: Unit, inclusive: boolean]>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, LowerValidatable.Context>;

export function LowerParameters<MessageT> (
    maximum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : ValidatableParameters<Compatible, MessageT|string, [maximum:Compatible, unit: Unit, inclusive: boolean]> = LowerString.Parameters
) : Validator<Compatible, Compatible, boolean, boolean, MessageT|string, LowerValidatable.Context> {

    const compatible = CompatibleParameters();

    return function (value) {

        const validatable = compatible(value);

        if(!validatable.valid) {

            return validatable;
        }

        return new LowerValidatable.Parameters(value, maximum, unit, inclusive, message);

    } as Validator<Compatible, Compatible, boolean, boolean, MessageT|string, LowerValidatable.Context>;
}


export type LowerArgument<MessageT> =
    Maximum<Compatible> &
    Inclusive &
    Partial<Message<ValidatableParameter<Compatible, MessageT, Inclusive & Maximum<Compatible> & Validatable<Compatible> & { unit: Unit} >>> & {
    unit: Unit
};

export function LowerParameter<MessageT>(
    {
        maximum,
        unit,
        inclusive,
        message,
    } : Required<LowerArgument<MessageT>>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, LowerValidatable.Context>;

export function LowerParameter<MessageT>(
    {
        maximum,
        unit,
        inclusive,
    } : StrictOmit<LowerArgument<MessageT>, 'message'>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, LowerValidatable.Context>;

export function LowerParameter<MessageT>(
    {
        maximum,
        unit,
        inclusive,
        message = LowerStringParameter.Parameter,
    } : LowerArgument<MessageT|string>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT|string, LowerValidatable.Context> {

    return LowerParameters(
        maximum,
        unit,
        inclusive,
        (value, valid, maximum, unit, inclusive) => message({value, valid, unit, maximum, inclusive}
    ));
}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
}
export default Lower;
