import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';
import { Image } from 'primereact/image';
import { Chart } from 'primereact/chart';

export default function TemplateDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (data) => {
        const chartData = {
            labels: ['PA Turnout', 'NA Turnout'],
            datasets: [
                {
                    label: 'Turnout',
                    data: [data.paTurnout, data['Total Voters']],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(75, 192, 192, 0.5)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            barThickness : "30",
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins : {
                legend : {
                    display : false
                }
            },
            animation : false,
            borderRadius : 5,
            indexAxis : 'y'
        };
        return (
            <div id={data['PS No']} className='overflow-hidden w-130 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Chart type="bar"
                    data={chartData}
                    options={options} className='h-[140px]'/>
            </div>
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
            <DataTable stripedRows paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} value={products} tableStyle={{ minWidth: '60rem' }}>
                <Column field="constituency" header="Constituency"></Column>
                <Column field="PS No" sortable header="Polling Station"></Column>
                <Column field="Who Won" header="Winner"></Column>
                <Column field="Total Voters" sortable header="National Assembly Turnout"></Column>
                <Column field="paTurnout" sortable header="Provincial Assembly Turnout"></Column>
                <Column header="Comparison Chart" style={{width : '20%'}} body={imageBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
