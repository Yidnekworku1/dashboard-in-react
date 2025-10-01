import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { RiAddLine } from 'react-icons/ri';

const Properties = () => {
    const isNight = typeof document !== 'undefined' && document.body.classList.contains('night-mode');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [propertyName, setPropertyName] = useState('');

    const handleAddProperty = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setPropertyName('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add property logic here
        alert(`Property added: ${propertyName}`);
        handleModalClose();
    };

    return (
        <div className='p-4'>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Properties</h1>
                <Button
                    onClick={handleAddProperty}
                    className="mb-4"
                    icon={<RiAddLine />}
                >
                    Add Property
                </Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Add Property">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="border rounded px-3 py-2 bg-inherit"
                        placeholder="Property Name"
                        value={propertyName}
                        onChange={e => setPropertyName(e.target.value)}
                        required
                    />
                    <div className="flex gap-2 justify-end">
                        <Button
                            type="button"
                            onClick={handleModalClose}
                            className={`${isNight ? 'text-[#b3b3b3] hover:text-white bg-transparent' : 'text-black-500 hover:text-white hover:bg-slate-700 bg-slate-500 border-0'}`}

                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            icon={<RiAddLine />}
                            className="bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 border border-blue-600"
                        >
                            Add
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Properties