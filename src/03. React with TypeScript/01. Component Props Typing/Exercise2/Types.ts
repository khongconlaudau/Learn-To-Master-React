type UserType = {
    id: number,
    name: string,
    email: string,
};

type AdminType = UserType & {
    role: string,
    lastLogin: Date,
};

export { UserType, AdminType}