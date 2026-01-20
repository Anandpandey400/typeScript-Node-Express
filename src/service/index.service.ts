export const CheckIndex = async () => {
    try {
        return [{ id: 1, name: "Anand", email: "anand@test.com" }];
    } catch (error) {
        console.error("Error fetching inventory:", error);
        throw error;
    }
};
