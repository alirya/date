import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import ValueDynamic from '@alirya/validator/value/validatable';
import Maximum from "@alirya/number/maximum/maximum";
import Inclusive from '@alirya/number/inclusive/inclusive';
import {LowerParameters as NumberLowerParameters} from '@alirya/number/validatable/lower';
import Concat from '../number/concat';
import {LowerParameters as LowerMessageParameters} from '@alirya/number/assert/string/lower';
import Unit from '../record/unit';
import Compatible from '../compatible';

export interface LowerType<ValueT extends Compatible, MessageT> extends
    Readonly<Inclusive>,
    Readonly<Value<ValueT>>,
    Readonly<Message<MessageT>>,
    Readonly<Validatable>,
    Readonly<Maximum<Compatible>> {
}
export type LowerArgumentsMessage<ValueT extends Compatible, MessageT> = ValidatableParameters<ValueT, MessageT, [minimum:Compatible, unit : Unit, inclusive: boolean]>;


export class LowerParameters<ValueT extends Compatible, MessageT> implements LowerType<ValueT, MessageT>
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


export type LowerArgumentMessage<ValueT extends Compatible, MessageT> = ValidatableParameter<ValueT, MessageT, Inclusive & Maximum<Compatible> & ValueDynamic<ValueT> & {unit: Unit}>;

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
    export type Type<ValueT extends Compatible, MessageT> = LowerType<ValueT, MessageT>;
    export type Argument<ValueT extends Compatible, MessageT> = LowerArgument<ValueT, MessageT>;
}
export default Lower;
