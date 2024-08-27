export const ProductService = {
    getProductsData() {
        return [
            {
                ecp_form45: 'na128ps135e.png',
                ps_form45: 'na128ps135c.png',
                constituency: 'NA 128',
                ps: 'PS-135',
                anamoly: "Aun Chaudhry’s votes were changed from 203 to 803 by writing over the 2."
            },
            {
                ecp_form45: 'na64ps394e.png',
                ps_form45: 'na64ps394c.png',
                constituency: 'NA 64',
                ps: 'PS-394',
                anamoly: "Chaudhry Salik Hussain’s votes were changed from 260 to 860 by scribbling over the 2."
            },
            {
                ecp_form45: 'na238ps112e.jpg',
                ps_form45: 'na238ps112e.jpg',
                constituency: 'NA 238',
                ps: 'PS-112',
                anamoly: "Haleem Adil Sheikh’s votes were changed from 450 to 050,and his opponent’s votes were changed from 09 to 409."
            },
            {
                ecp_form45: 'na130ps6e.png',
                ps_form45: 'na130ps6c.png',
                constituency: 'NA 130',
                ps: 'PS-6',
                anamoly: "Nawaz Sharif’s votes were changed from 235 to 1235."
            },
            {
                ecp_form45: 'na232ps9e.png',
                ps_form45: 'na232ps9c.png',
                constituency: 'NA 232',
                ps: 'PS-9',
                anamoly: "Adeel Ahmed’s 309 votes were changed to 0 while his opponent’s votes were changed to 2047. Votes for the rest of the candidates were also changed to 0."
            },
            {
                ecp_form45: 'na57ps254e.png',
                ps_form45: 'na57ps254c.png',
                constituency: 'NA 57',
                ps: 'PS-254',
                anamoly: "Seemabia Tahir’s votes were changed from 265 to 80 while her opponent’s votes were changed from 80 to 265. The results were reversed."
            },
            {
                ecp_form45: 'na148ps31e.png',
                ps_form45: 'na148ps31c.png',
                constituency: 'NA 148',
                ps: 'PS-31',
                anamoly: "Taimur Malik’s votes were changed from 767 to 67."
            }
        ];
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

