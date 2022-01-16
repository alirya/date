import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import DateMessage from './compatible-parameters';

export default function CompatibleParameter({
   valid,
   value,
} : Readonly<Validatable & Value>) : string {

    return DateMessage(value, valid);
}
