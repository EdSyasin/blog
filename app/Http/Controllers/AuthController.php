<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function user(){
        if(Auth::user()){
            return response()->json(['user' => Auth::user()]);
        } else {
            return response('Unathorized', 401);
        }
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            "username" => "required",
            'password' => 'required'
        ]);
        if($validator->fails()){
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $login = $request->input('username');
        $password = $request->input("password");

        $user = User::where('username', $login)->first();
        if(!$user){
            return response()->json([
                'login' => 'Wrong login'
            ], 403);
        }

        if(!Hash::check($password, $user->password)){
            return response()->json([
                'password' => 'Wrong password'
            ], 403);
        }

        Auth::login($user);

        return response()->json(["user" => $user]);

    }
}
