export const formatDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.toLocaleString("en-US", { month: "short" });
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
};
