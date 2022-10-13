import Validator from '@alirya/validator/validator';
import LowerValidatable from '../validatable/lower';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import LowerString from '../assert/string/lower';
import Validatable from '@alirya/validator/value/validatable';
import Message from '@alirya/message/message';
import Maximum from "@alirya/number/maximum/maximum";
import Inclusive from "../../../number/dist/inclusive/inclusive";
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import StrictOmit from '@alirya/object/strict-omit';
import LowerStringParameter from '../assert/string/lower';
import Unit from '../record/unit';
import {CompatibleParameters} from './compatible';
import Compatible from '../compatible';

export function LowerParameters<MessageT> (
    maximum : Compatible,
    unit: Unit,
    inclusive : boolean,
) : Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Compatible, MessageT>>;

export function LowerParameters<MessageT> (
    maximum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : ValidatableParameters<Compatible, MessageT, [maximum:Compatible, unit: Unit, inclusive: boolean]>
) : Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Compatible, MessageT>>;

export function LowerParameters<MessageT> (
    maximum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : ValidatableParameters<Compatible, MessageT|string, [maximum:Compatible, unit: Unit, inclusive: boolean]> = LowerString.Parameters
) : Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Compatible, MessageT>> {

    const compatible = CompatibleParameters();

    return function (value) {

        const validatable = compatible(value);

        if(!validatable.valid) {

            return validatable;
        }

        return new LowerValidatable.Parameters(value, maximum, unit, inclusive, message);

    } as Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Date, MessageT>>;
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
) : Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Compatible, MessageT>>;

export function LowerParameter<MessageT>(
    {
        maximum,
        unit,
        inclusive,
    } : StrictOmit<LowerArgument<MessageT>, 'message'>
) : Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Compatible, MessageT>>;

export function LowerParameter<MessageT>(
    {
        maximum,
        unit,
        inclusive,
        message = LowerStringParameter.Parameter,
    } : LowerArgument<MessageT|string>
) : Validator<Compatible, Compatible, boolean, boolean, LowerValidatable.Type<Compatible, MessageT|string>> {

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
