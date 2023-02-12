import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import ValueDynamic from '@alirya/validator/value/validatable.js';
import Maximum from "@alirya/number/maximum/maximum.js";
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import {LowerParameters as NumberLowerParameters} from '@alirya/number/validatable/lower.js';
import Concat from '../number/concat.js';
import {LowerParameters as LowerMessageParameters} from '@alirya/number/assert/string/lower.js';
import Unit from '../record/unit.js';
import Compatible from '../compatible.js';

export interface LowerContext/*<ValueT extends Compatible, MessageT>*/ extends
    Readonly<Inclusive>,
    // Readonly<Value<ValueT>>,
    // Readonly<Message<MessageT>>,
    // Readonly<Validatable>,
    Readonly<Maximum<Compatible>> {
}
export type LowerArgumentsMessage<ValueT extends Compatible, MessageT> = ValidatableParameters<ValueT, MessageT, [minimum:Compatible, unit : Unit, inclusive: boolean]>;


export class LowerParameters<ValueT extends Compatible, MessageT> implements ValidatorValidatable<ValueT, MessageT>, LowerContext
{
    #message : LowerArgumentsMessage<ValueT, MessageT>;

    #validator : NumberLowerParameters<number, string>;

    constructor(
        readonly value : ValueT,
        readonly maximum : Compatible,
        readonly unit: Unit,
        readonly inclusive : boolean,
        message : LowerArgumentsMessage<ValueT, MessageT>
    ) {

        this.#validator = new NumberLowerParameters<number, string>(
            Concat(value, unit),
            Concat(maximum, unit),
            inclusive,
            LowerMessageParameters
        );
        this.#message = message;
    }

    @MemoizeAccessor()
    get valid () : boolean {

        return this.#validator.valid;
    }

    @MemoizeAccessor()
    get message() : MessageT {

        return this.#message(this.value, this.valid, this.maximum, this.unit, this.inclusive);
    }
}

export type LowerArgument<ValueT extends Compatible, MessageT> =
    Value<ValueT> &
    Maximum<Compatible> &
    Inclusive &
    Message<LowerArgumentMessage<ValueT, MessageT>> & {
    unit: Unit,
};


export type LowerArgumentMessage<ValueT extends Compatible, MessageT> = ValidatableParameter<
    ValueT,
    MessageT,
    Inclusive & Maximum<Compatible> & ValueDynamic<ValueT> & {unit: Unit}>;

export class LowerParameter<ValueT extends Compatible, MessageT> extends LowerParameters<ValueT, MessageT> {

    constructor(
        {
            value,
            maximum,
            unit,
            inclusive,
            message,
        } : LowerArgument<ValueT, MessageT>,
    ) {

        super(
            value,
            maximum,
            unit,
            inclusive,
            (value, valid, minimum, unit, inclusive) =>
                message({value, valid, maximum, unit, inclusive})
        );

    }

}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
    export type Context/*<ValueT extends Compatible, MessageT>*/ = LowerContext;
    export type Argument<ValueT extends Compatible, MessageT> = LowerArgument<ValueT, MessageT>;
}
export default Lower;
