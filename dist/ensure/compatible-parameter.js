import CompatibleError from "../assert/throwable/compatible-parameters";
import CompatibleParameters from "./compatible-parameters";
export default function CompatibleParameter(
//value : unknown,
//error : (value:unknown)=>Error = CompatibleError,
{ value, error = CompatibleError }) {
    return CompatibleParameters(value, error);
}
//# sourceMappingURL=compatible-parameter.js.map