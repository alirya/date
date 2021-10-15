import DateValidatable from "../validatable/date";
export default function Date(message) {
    return function (value) {
        return DateValidatable(value, message);
    };
}
//# sourceMappingURL=date.js.map