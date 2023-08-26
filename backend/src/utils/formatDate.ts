const formatDate = (inputDate: string): string => {
    const parts = inputDate.split('-');
    const year = parts[0].substring(2);
    const month = parts[1];
    const day = parts[2];

    return `${day}.${month}.${year}`;
};

export default formatDate;