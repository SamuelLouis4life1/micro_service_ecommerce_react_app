const USER_ROLES = {
    ADMIN: 'admin',
    CUSTOMER: 'customer',
    SELLER: 'seller',
};

const requireAll = (...roles) => {
    return roles.join('|');
};

const splitRoles = (roles) => {
    return roles.split('|');
};

export {
    requireAll,
    splitRoles,
    USER_ROLES
}