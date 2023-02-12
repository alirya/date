import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import ValueDynamic from '@alirya/validator/value/validatable.js';
import Minimum from "@alirya/number/minimum/minimum.js";
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import {GreaterParameters as NumberGreaterParameters} from '@alirya/number/validatable/greater.js';
import Concat from '../number/concat.js';
import {GreaterParameters as GreaterMessageParameters} from '@alirya/number/assert/string/greater.js';
import Unit from '../record/unit.js';
import Compatible from '../compatible.js';

export interface GreaterContext/*<ValueT extends Compatible, MessageT>*/ extends
    Readonly<Inclusive>,
    // Readonly<Value<ValueT>>,
    // Readonly<Message<MessageT>>,
    // Readonly<Validatable>,
    Readonly<Minimum<Compatible>> {
}
export type GreaterArgumentsMessage<ValueT extends Compatible, MessageT> = ValidatableParameters<ValueT, MessageT, [minimum:Compatible, unit : Unit, inclusive: boolean]>;


export class GreaterParameters<ValueT extends Compatible, MessageT> implements ValidatorValidatable<ValueT, MessageT>, GreaterContext
{
    #message : GreaterArgumentsMessage<ValueT, MessageT>;

    #validator : NumberGreaterParameters<number, string>;

    constructor(
        readonly value : ValueT,
        readonly minimum : Compatible,
        readonly unit: Unit,
        readonly inclusive : boolean,
        message : GreaterArgumentsMessage<ValueT, MessageT>
    ) {

        this.#validator = new NumberGreaterParameters<number, string>(
            Concat(value, unit),
            Concat(minimum, unit),
            inclusive,
            GreaterMessageParameters
        );
        this.#message = message;
    }

    @MemoizeAccessor()
    get valid () : boolean {

        return this.#validator.valid;
    }

    @MemoizeAccessor()
    get message() : MessageT {

        return this.#message(this.value, this.valid, this.minimum, this.unit, this.inclusive);
    }
}

export type GreaterArgument<ValueT extends Compatible, MessageT> =
    Value<ValueT> &
    Minimum<Compatible> &
    Inclusive &
    Message<GreaterArgumentMessage<ValueT, MessageT>> & {
    unit: Unit,
};


export type GreaterArgumentMessage<ValueT extends Compatible, MessageT> = ValidatableParameter<ValueT, MessageT, Inclusive & Minimum<Compatible> & ValueDynamic<ValueT> & {unit: Unit}>;

export class GreaterParameter<ValueT extends Compatible, MessageT> extends GreaterParameters<ValueT, MessageT> {

    constructor(
        {
            value,
            minimum,
            unit,
            inclusive,
            message,
        } : GreaterArgument<ValueT, MessageT>,
    ) {

        super(
            value,
            minimum,
            unit,
            inclusive,
            (value, valid, minimum, unit, inclusive) =>
                message({value, valid, minimum, unit, inclusive})
        );

    }

}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Context/*<ValueT extends Compatible, MessageT>*/ = GreaterContext/*<ValueT, MessageT>*/;
    export type Argument<ValueT extends Compatible, MessageT> = GreaterArgument<ValueT, MessageT>;
}
export default Greater;
