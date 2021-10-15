import CompatibleValidatable from "../validatable/compatible";
export default function Compatible(message) {
    return function (value) {
        return CompatibleValidatable(value, message);
    };
}
//# sourceMappingURL=compatible.js.map