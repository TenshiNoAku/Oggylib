<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\BookController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------

*/
Route::middleware('auth:sanctum')->group(function(){
    Route::get('/profile', [\App\Http\Controllers\Api\UserController::class,'show']);
    Route::get('favourites',[\App\Http\Controllers\Api\UserController::class,'favourites']);

});

Route::post('users/store',[\App\Http\Controllers\Api\UserController::class,'store']);
Route::get('/journal',[\App\Http\Controllers\Api\AdminJournalController::class,'index']);
Route::get('/pages/{page}',[BookController::class,'allByPage'])->middleware(\App\Http\Middleware\AdminPanelMiddleware::class);

Route::post('/login', [LoginController::class, "login"]);
Route::post('/logout', [LoginController::class, 'logout']);
Route::middleware('auth:sanctum')->group(function () {
    //Route::get('/user', [LoginController::class, 'user']);
    Route::get('/user/books/{status}',[BookController::class,'byStatus']);
    Route::get('/fav',[BookController::class,'favorites']); //

});
Route::get('/pages/{page}',[BookController::class,'allByPage']);

Route::apiResources([
    'books' => BookController::class,
]);



