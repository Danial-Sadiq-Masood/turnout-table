import turnoutData from "./128Turnout.json";

const modifiedTurnoutData = turnoutData.map(d => ({
    constituency : 128,
    paTurnout : 500,
    ...d
}))

export const ProductService = {
    getProductsData() {
        return modifiedTurnoutData;
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

