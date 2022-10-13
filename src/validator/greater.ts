import Validator from '@alirya/validator/validator';
import GreaterValidatable from '../validatable/greater';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import GreaterString from '../assert/string/greater';
import Validatable from '@alirya/validator/value/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Minimum from "@alirya/number/minimum/minimum";
import Inclusive from "../../../number/dist/inclusive/inclusive";
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import StrictOmit from '@alirya/object/strict-omit';
import Unit from '../record/unit';
import {CompatibleParameters} from './compatible';
import Compatible from '../compatible';

export type GreaterArgumentsMessage<MessageT> = ValidatableParameters<number, MessageT, [minimum:number, unit: Unit, inclusive: boolean]>;

export function GreaterParameters(
    minimum : Compatible,
    unit: Unit,
    inclusive : boolean,
) : Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<Compatible, string>>;

export function GreaterParameters<MessageT>(
    minimum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT>
) : Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<Compatible, MessageT>>;

export function GreaterParameters<MessageT>(
    minimum : Compatible,
    unit: Unit,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT|string> = GreaterString.Parameters
) : Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<Compatible, MessageT|string>> {

    const compatible = CompatibleParameters();

    return function (value) {

        const validatable = compatible(value);

        if(!validatable.valid) {

            return validatable;
        }

        return new GreaterValidatable.Parameters(value, minimum, unit, inclusive, message);

    } as Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<number, MessageT>>;

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
) : Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<Compatible, MessageT>>;

export function GreaterParameter<MessageT>(
    {
        minimum,
        unit,
        inclusive,
    } : StrictOmit<GreaterArgument<MessageT>, 'message'>
) : Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<Compatible, MessageT>>;


export function GreaterParameter<MessageType>(
    {
        minimum,
        inclusive,
        unit,
        message = GreaterString.Parameter,
    } : Required<GreaterArgument<MessageType|string>>
) : Validator<Compatible, Compatible, boolean, boolean, GreaterValidatable.Type<Compatible, MessageType|string>>  {

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
