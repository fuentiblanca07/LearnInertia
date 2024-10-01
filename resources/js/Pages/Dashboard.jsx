import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EditUser from './DashboardTable/EditUser'
import { Head } from '@inertiajs/react';

export default function Dashboard({auth, userList}) {
    return (
        <AuthenticatedLayout
            user={auth.name}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                                        {userList.map((userList, index) => {
                                            return (
                                                <tr key={userList.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4">
                                                        {userList.name}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {userList.email}
                                                    </td>
                                                    <td>
                                                        <EditUser user={userList}/>

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
