export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    return password.length >= 6;
};

export const isValidAmount = (amount: number): boolean => {
    return amount > 0;
};

export const isValidType = (type: string): boolean => {
    return ['income', 'expense'].includes(type.toLowerCase());
};

export const isValidCategory = (category: string): boolean => {
    const validCategories = [
        'Food',
        'Transport',
        'Entertainment',
        'Shopping',
        'Bills',
        'Healthcare',
        'Salary',
        'Freelance',
        'Investment',
        'Other',
    ];
    return validCategories.includes(category);
};
