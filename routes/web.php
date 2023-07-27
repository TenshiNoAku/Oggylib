<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\BookController;
use PhpParser\Comment\Doc;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/




Route::get('/login', function () {
    return view('welcome');
})->name('login');

Route::middleware('auth:sanctum')->group(function (){

    Route::get(
        '/home',
        function(){
            return view('response');
        });
});

Route::get('/test',function (){
    dd(auth()->user());
})->middleware(['auth:sanctum','admin']);;

