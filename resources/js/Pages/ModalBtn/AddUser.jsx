import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Select from '@/Components/Select';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';

export default function AddUser({userTypes}){
    const [isModalOpen, setIsModalOpen] = useState(false);


    const {
        data, setData, post, reset, processing, error
    } = useForm ({
        name: "",
        email: "",
        password: "",
        userTypeId: "",
    });

    const ModalOpen = () =>{
        setIsModalOpen(true);
    }

    const CloseModal = () => {
        setIsModalOpen(false);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('user.post'),{
            onSuccess: () => {
                reset();
                alert('aaa');
                setIsModalOpen(false);
            }
        })
    };

    return (
       <div>
         <PrimaryButton onClick={ModalOpen}>Add User</PrimaryButton>
            <Modal show={isModalOpen}>
                <form onSubmit={submit} class="max-w-sm mx-auto">
                    <div className="p-4">
                        <div class="mb-5">
                            {/* <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                            <InputLabel>Name</InputLabel>
                            <TextInput value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full" />
                        </div>
                        <div class="mb-5">
                            {/* <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
                            <InputLabel>Email</InputLabel>
                            <TextInput type="email" value={data.email} className="w-full"  id="password" onChange={(e) => setData('email', e.target.value)}  />
                        </div>
                        <div class="mb-5">
                            <InputLabel>Password</InputLabel>
                            <TextInput type="password" value={data.password} className="w-full" onChange={(e) => setData('password', e.target.value)}  />
                        </div>
                        <div className="mb-5">
                        <InputLabel>User Type</InputLabel>
                        <Select
                        options={userTypes}
                        onChange={(e) => setData('userTypeId', e.target.value)}
                        value={data.userTypeId}
                        placeholder="Select a user type"
                        />
                        </div>

                        <div className="flex items-baseline w-full">
                            <SecondaryButton onClick={CloseModal}>Close</SecondaryButton>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        </div>
                    </div>
                </form>

            </Modal>
       </div>
    );

}
