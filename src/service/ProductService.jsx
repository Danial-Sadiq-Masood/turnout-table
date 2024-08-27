export const ProductService = {
        getProductsData() {
            return [
                {
                    ecp_form45 : 'na128ps135e.png',
                    ps_form45 : 'na128ps135c.png',
                    constituency : 'NA 128',
                    ps : 'PS-135',
                    anamoly : "In NA 128 polling station 135, Aun Chaudhry’s votes were increased from 203 to 803 by writing over the 2."
                },
                {
                    ecp_form45 : 'na64ps394e.png',
                    ps_form45 : 'na64ps394c.png',
                    constituency : 'NA 64',
                    ps : 'PS-394',
                    anamoly : "In NA 64 Gujarat polling station 394, Chaudhry Salik Hussain’s votes were increased from 260 to 860 by scribbling over the 2"
                },
                {
                    ecp_form45 : 'na238ps112e.jpg',
                    ps_form45 : 'na238ps112e.jpg',
                    constituency : 'NA 238',
                    ps : 'PS-112',
                    anamoly : "Haleem Adil Sheikh’s 450 votes were made 050 and his opponent’s 09 votes were changed to 409."
                },
                {
                    ecp_form45 : 'na130ps6e.png',
                    ps_form45 : 'na130ps6c.png',
                    constituency : 'NA 130',
                    ps : 'PS-6',
                    anamoly : "PML-N’s votes were changed from 235 to 1235."
                },
                {
                    ecp_form45 : 'na232ps9e.png',
                    ps_form45 : 'na232ps9c.png',
                    constituency : 'NA 232',
                    ps : 'PS-9',
                    anamoly : "Adeel Ahmed had 309 votes. MQM’s votes were changed to 2047, and the rest to 0."
                },
                {
                    ecp_form45 : 'na57ps254e.png',
                    ps_form45 : 'na57ps254c.png',
                    constituency : 'NA 57',
                    ps : 'PS-254',
                    anamoly : "Seemabia Tahir’s votes were changed to 80 while PML-N’s votes were changed to 265."
                },
                {
                    ecp_form45 : 'na148ps31e.png',
                    ps_form45 : 'na148ps31c.png',
                    constituency : 'NA 148',
                    ps : 'PS-31',
                    anamoly : "Taimur Malik’s votes were changed from 767 to 67."
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

    