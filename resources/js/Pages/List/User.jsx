import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AddUser from '@/Pages/ModalBtn/AddUser';
import { Head } from '@inertiajs/react';

export default function userList({auth, getAllUser, getAllUserTypes}){

    const userTypes = getAllUserTypes.map(type => ({
        value: type.id,
        label: type.desc,
    }));

    return (

        <AuthenticatedLayout
        user={auth.name}
        header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">UserList</h2>}>


<div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <AddUser userTypes={userTypes}/>
                                <table class="w-full mt-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope='col' class="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope='col' class="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getAllUser.map((getAllUser, index) => {
                                            return (
                                                <tr key={getAllUser.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4">
                                                        {getAllUser.name}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {getAllUser.email}
                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>

    );

}
