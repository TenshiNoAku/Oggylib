<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\UserController;
use App\Models\Book;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------

*/
Route::middleware('auth:sanctum')->group(function () {


    Route::post('books/{book}/add_comment', [\App\Http\Controllers\Api\CommentController::class, 'store']);

    Route::prefix('user')
        ->controller(UserController::class)
        ->group(function () {

            Route::get('/notifications', 'notifications')->name('user.notifications');
            Route::get('/profile', 'show')->name('user.profile');
            Route::post('/store', 'store')->name('user.store');

            Route::prefix('/books')->group(function () {
                Route::get('/reading', 'reading')->name('user.reading');
                Route::get('/dropped', 'dropped')->name('user.reading');
                Route::get('/read', 'read')->name('user.read');
                Route::get('/postponed', 'postponed')->name('user.postponed');
                Route::get('/favourites', 'favourites')->name('user.favourites');
            });


        });

});

Route::get('/journal', [\App\Http\Controllers\Api\AdminJournalController::class, 'index']);
Route::get('/pages/{page}', [BookController::class, 'allByPage']);


Route::prefix('auth')->group(function () {
    Route::post('/login', [LoginController::class, "login"]);
    Route::post('/logout', [LoginController::class, 'logout']);
});


Route::apiResources([
    'books' => BookController::class,
]);



