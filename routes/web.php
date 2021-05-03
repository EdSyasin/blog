<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/login', function (){
    return view('admin');
});

Route::middleware('auth')->get('/newpost', function () {
    return view('new_post');
});


Route::get('/ajaxtest', function () {
    if(Auth::check()){
        return Auth::id();
    } else {
        return "fucked";
    }
});

Route::get('/admin/{any?}', function() {
    return view('admin');
})->where('any', '.*');


Route::get('/post/{id}', [\App\Http\Controllers\PostController::class, "show"]);

Route::get('/csrf', function () {
    return csrf_token();
});



Route::prefix('ajax')->group(function () {
    Route::get('/auth/user', [\App\Http\Controllers\AuthController::class, "user"]);
    Route::post('/auth/login', [\App\Http\Controllers\AuthController::class, "login"]);


    Route::middleware('auth')->post('/editorjs', [\App\Http\Controllers\FileController::class, "uploadFileForEditorJS"]);
    Route::middleware('auth')->post('/files', [\App\Http\Controllers\FileController::class, "upload"]);
    //Posts
    Route::middleware('auth')->post('/posts', [\App\Http\Controllers\PostController::class, "store"]);
    Route::middleware("auth")->delete("posts/{id}", [\App\Http\Controllers\PostController::class, "delete"]);
});

