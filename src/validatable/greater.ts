import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import ValueDynamic from '@alirya/validator/value/validatable';
import Minimum from "@alirya/number/minimum/minimum";
import Inclusive from "../../../number/dist/inclusive/inclusive";
import {GreaterParameters as NumberGreaterParameters} from '../../../number/dist/validatable/greater';
import Concat from '../number/concat';
import {GreaterParameters as GreaterMessageParameters} from '../../../number/dist/assert/string/greater';
import Unit from '../record/unit';
import Compatible from '../compatible';

export interface GreaterType<ValueT extends Compatible, MessageT> extends
    Readonly<Inclusive>,
    Readonly<Value<ValueT>>,
    Readonly<Message<MessageT>>,
    Readonly<Validatable>,
    Readonly<Minimum<Compatible>> {
}
export type GreaterArgumentsMessage<ValueT extends Compatible, MessageT> = ValidatableParameters<ValueT, MessageT, [minimum:Compatible, unit : Unit, inclusive: boolean]>;


export class GreaterParameters<ValueT extends Compatible, MessageT> implements GreaterType<ValueT, MessageT>
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
    export type Type<ValueT extends Compatible, MessageT> = GreaterType<ValueT, MessageT>;
    export type Argument<ValueT extends Compatible, MessageT> = GreaterArgument<ValueT, MessageT>;
}
export default Greater;
