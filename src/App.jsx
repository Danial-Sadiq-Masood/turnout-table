import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';
import { Image } from 'primereact/image';

export default function TemplateDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (field) => (product) => {
        return (
            <Image src={`/data-table/images/${product[field]}`} alt="Image" preview width="250px" className="shadow-2 border-round" />
        );
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Anamolies</span>
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '60rem' }}>
                <Column field="constituency" header="Constituency"></Column>
                <Column field="ps" header="Polling Station"></Column>
                <Column header="Candidate Form 45" body={imageBodyTemplate('ps_form45')}></Column>
                <Column header="ECP Form 45" body={imageBodyTemplate('ecp_form45')}></Column>
                <Column field="anamoly" header="Errors/Inconsistency"></Column>
            </DataTable>
        </div>
    );
}
        