import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Compatible from './date-parameters';

export default function DateParameter({
    valid,
    value,
} : Readonly<Validatable & Value>) : string {

    return Compatible(value, valid);
}
