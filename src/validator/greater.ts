import Validator from '@axiona/validator/validator.js';
import GreaterValidatable from '../validatable/greater.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import GreaterString from '../assert/string/greater.js';
import Validatable from '@axiona/validator/value/validatable.js';
import Message from '@axiona/message/message.js';
import Minimum from "@axiona/number/minimum/minimum.js";
import Inclusive from '@axiona/number/inclusive/inclusive.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import StrictOmit from '@axiona/object/strict-omit.js';
import Unit from '../record/unit.js';
import {CompatibleParameters} from './compatible.js';
import Compatible from '../compatible.js';

export type GreaterArgumentsMessage<MessageT> = ValidatableParameters<number, MessageT, [minimum:number, unit: Unit, inclusive: boolean]>;

export function GreaterParameters(
    minimum : Compatible,
    unit: Unit,
    inclusive : boolean,
) : Validator<Compatible, Compatible, boolean, boolean, string, GreaterValidatable.Context>;

export function GreaterParameters<MessageT>(
    minimum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, GreaterValidatable.Context>;

export function GreaterParameters<MessageT>(
    minimum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT|string> = GreaterString.Parameters
) : Validator<Compatible, Compatible, boolean, boolean, MessageT|string, GreaterValidatable.Context> {

    const compatible = CompatibleParameters();

    return function (value) {

        const validatable = compatible(value);

        if(!validatable.valid) {

            return validatable;
        }

        return new GreaterValidatable.Parameters(value, minimum, unit, inclusive, message);

    } as Validator<Compatible, Compatible, boolean, boolean, MessageT, GreaterValidatable.Context>;

}

export type GreaterArgumentMessage<MessageT> = ValidatableParameter<Compatible, MessageT, Inclusive & Minimum<Compatible> & Validatable<Compatible> & { unit: Unit }>;

export type GreaterArgument<MessageT> =
    Minimum<Compatible> &
    Inclusive &
    Partial<Message<GreaterArgumentMessage<MessageT>>> & {
    unit: Unit
};

export function GreaterParameter<MessageT>(
    {
        minimum,
        unit,
        inclusive,
        message,
    } : Required<GreaterArgument<MessageT>>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, GreaterValidatable.Context>;

export function GreaterParameter<MessageT>(
    {
        minimum,
        unit,
        inclusive,
    } : StrictOmit<GreaterArgument<MessageT>, 'message'>
) : Validator<Compatible, Compatible, boolean, boolean, MessageT, GreaterValidatable.Context>;


export function GreaterParameter<MessageType>(
    {
        minimum,
        inclusive,
        unit,
        message = GreaterString.Parameter,
    } : Required<GreaterArgument<MessageType|string>>
) : Validator<Compatible, Compatible, boolean, boolean, MessageType|string, GreaterValidatable.Context>  {

    return GreaterParameters(
        minimum,
        unit,
        inclusive,
        (value, valid, minimum, unit, inclusive) => message({value, valid, minimum, unit, inclusive})
    );
}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Argument<MessageT> = GreaterArgument<MessageT>;
    export type ArgumentsMessage<MessageT> = GreaterArgumentsMessage<MessageT>;
    export type ArgumentMessage<MessageT> = GreaterArgumentMessage<MessageT>;
}
export default Greater;
