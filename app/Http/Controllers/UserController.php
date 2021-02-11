<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request){
        $login = $request->input('username');
        $password = $request->input("password");

        $user = User::where('username', $login)->first();
        if(Hash::check($password, $user->password)){
            Auth::login($user);
        }

        return redirect('/newpost');
    }
}
