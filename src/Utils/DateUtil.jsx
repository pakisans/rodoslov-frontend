export const dateAsUTCDate = (date) => {
    if (!date) {
        return null;
    }
    date = new Date(date);
    return new Date(
        Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        )
    );
}