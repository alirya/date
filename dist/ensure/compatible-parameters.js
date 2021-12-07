import AssertCompatible from "../assert/compatible";
import CompatibleError from "../assert/throwable/compatible-parameters";
export default function CompatibleParameters(value, error = CompatibleError) {
    AssertCompatible(value, error);
    return value;
}
//# sourceMappingURL=compatible-parameters.js.map