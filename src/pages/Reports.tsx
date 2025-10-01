import React, { useState } from 'react';
import Button from '../components/Button';
import { RiAddLine } from 'react-icons/ri';

const Reports = () => {
    const handleAddTenant = () => {
        // TODO: Replace with modal or form logic
        alert('Add Tenant button clicked!');
    };

    return (
        <div className='p-4'>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Reports</h1>
                <Button
                    onClick={handleAddTenant}
                    className="mb-4"
                    icon={<RiAddLine />}
                >
                    Generate
                </Button>
            </div>
        </div>
    )
}

export default Reports
