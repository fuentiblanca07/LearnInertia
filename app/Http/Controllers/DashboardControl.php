<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\ModelServices;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardControl extends Controller
{

    protected $modelServices;


    public function __construct(ModelServices $modelServices){
        $this->modelServices = $modelServices;
    }


    public function __invoke(Request $request){
        // dd(User::all());
        return Inertia::render('Dashboard', [
            'userList' => User::all(),
        ]);
    }


    public function update(Request $request, $id) {
        $user = $this->modelServices->getAll(new User(), $id);
        info('wagi'. $user);
        $this->modelServices->update(new User(), $request, $id);
    }

}
