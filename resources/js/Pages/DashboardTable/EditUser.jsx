import Modal from '@/Components/Modal';
import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function EditUser({user}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        data, setData, put, errors, processing, reset
    } = useForm({
        name: user.name,
        email: user.email,
    });
    // const [name, setName] = useState(user.name);  // Track name field
    // const [email, setEmail] = useState(user.email); // Track email field
    // const [errors, setErrors] = useState({}); // Track form errors


    const toggleModal = () => {
        setIsModalOpen(true);
    };

    const CloseModal = () => {
        setIsModalOpen(false);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route('dashboard.update', [user.id]), {
            // name: user.name, // This should be replaced with actual input values
            // email: user.email, // Replace with input values
            onSuccess: () => {
                reset();
                alert('User Update Successfully!');
                CloseModal();
            }
        });
        // console.log(user.id);
        // patch(route('dashboard.update', [user.id]));
        // Inertia.patch(route('dashboard.update', user.id), {
        //     name: user.name,
        //     email: user.email,
        // });
    }

    return (
        <section>
           <div className="py-2">
           <button onClick={toggleModal} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Edit User
            </button>
           </div>


                <Modal show={isModalOpen}>
                    <form onSubmit={submit}>
                        <div className='grid gap-6 p-3 px-3 md:grid-cols-1'>
                            <h2 className='text-white'>Edit User</h2>
                            <div>
                                <InputLabel for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" value="Name"/>
                                <TextInput value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full" />
                            </div>
                            <div>
                                <InputLabel value="Email"/>
                                <TextInput value={data.email} onChange={(e) => setData('email', e.target.value)} className="w-full"/>
                            </div>

                        </div>
                        <SecondaryButton onClick={CloseModal} className='p-3'>
                                Close
                            </SecondaryButton>
                            <div className='mx-auto'>
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>

                    </form>

                </Modal>

        </section>
    );
}
