
export const formatDate = (dateString: string, locale: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString(locale, {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
};
