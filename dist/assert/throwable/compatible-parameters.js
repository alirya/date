import CompatibleType from "../string/compatible-parameters";
export default function CompatibleParameters(value, subject = '') {
    return new Error(CompatibleType(value, false, subject));
}
//# sourceMappingURL=compatible-parameters.js.map