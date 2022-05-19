<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\TestReactController;

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
Route::get('/about', function () {
    return view('welcome');
});
Route::get('/contact', function () {
    return view('welcome');
});
Route::get('/signup', function () {
    return view('welcome');
});
Route::get('/users', function () {
    return view('welcome');
});
Route::get('/get-data',[TestReactController::class,'getData']);
Route::get('/details/{id}',[TestReactController::class,'getDataDetails']);
Route::post('/book/store',[TestReactController::class,'bookStrore']);
Route::get('/get/users',[TestReactController::class,'getUsers']);
Route::get('/delete/users/{id}',[TestReactController::class,'deleteUsers']);
Route::get('/single/user/{id}',[TestReactController::class,'singleUser']);
Route::post('/edit/user/{id}',[TestReactController::class,'editUser']);