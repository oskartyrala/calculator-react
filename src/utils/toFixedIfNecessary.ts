export default function toFixedIfNecessary(value: number, dp: number) {
    const valueStr = value.toString();
    return +parseFloat(valueStr).toFixed(dp);
}
