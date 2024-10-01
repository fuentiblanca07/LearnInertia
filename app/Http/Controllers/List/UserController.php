<?php

namespace App\Http\Controllers\List;

use App\Models\User;
use Inertia\Inertia;
use App\Models\userTypes;
use Illuminate\Http\Request;
use App\Services\ModelServices;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{

    protected $modelServices;

    public function __construct(ModelServices $modelServices){
        $this->modelServices = $modelServices;
    }

    public function __invoke(){
        return Inertia::render('List/User', [
            'getAllUser' => User::all(),
            'getAllUserTypes' => userTypes::all(),
        ]);
    }

    public function create(Request $request){
        // dd($request);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ], [
            'name.required' => 'Please enter your name.',
            'email.required' => 'A valid email is required.',
            'password.min' => 'Password must be at least 8 characters long.',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }else{
            $this->modelServices->create(new User(), $request);
        }


    }
}
