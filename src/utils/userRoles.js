const USER_ROLES = {
	ADMIN: "Admin",
	CUSTOMER: "Customer",
	SELLER: "Seller",
};

const requireAll = (...roles) => {
	return roles.join("|");
};

const splitRoles = (roles) => {
	return roles.split("|");
};

const userHasRole = (role, userRoles) => {
	const splittedRoles = splitRoles(role);
	const res = splittedRoles?.every((r) => userRoles.includes(r));
	return res;
};

const verifyRoles = (requiredRoles, userRoles) => {
	const res = requiredRoles?.every((role) => userHasRole.includes(role, userRoles));
	return res;
};

export { USER_ROLES, requireAll, splitRoles, verifyRoles, userHasRole };