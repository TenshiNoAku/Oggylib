<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\UserBookController;
use App\Http\Controllers\Api\ExtensionRequestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------

*/
Route::middleware('auth:sanctum')->group(function () {


    Route::prefix('books')
        ->controller(BookController::class)
        ->group(function (){
        Route::get('/{book}','show');
    });
    Route::prefix('user')
        ->controller(UserController::class)
        ->group(function () {

            Route::get('/notifications', 'notifications')->name('user.notifications');
            Route::delete('/notifications','notifications_clear');
            Route::get('/profile', 'show')->name('user.profile');

            Route::prefix('/books')->controller(UserBookController::class)->group(function () {

                Route::get('/reading', 'reading')->name('user.reading');
                Route::get('/dropped', 'dropped')->name('user.dropped');
                Route::get('/read', 'read')->name('user.read');
                Route::get('/postponed', 'postponed')->name('user.postponed');
                Route::get('/favourites', 'favourites')->name('user.favourites');

                Route::prefix('/{book}')->group(function (){
                    Route::get('/return','return_book'); //TODO:
                    Route::get('/take','take_book'); //TODO:
                    Route::post('/add_comment', 'add_comment');
                    Route::put('/changing','changing');
                });
            });


        });


    Route::middleware('can:admin')
        ->prefix('admin')
        ->group(function () {

            Route::prefix('/users')
                ->controller(UserController::class)
                ->group(function () {
                    Route::get('/','index')->name('users.index');
                    Route::post('/', 'store')->name('users.store');
                   //TODO: route -> user.update
                    Route::delete('/{user}', 'destroy')->name('users.destroy');
                });

            Route::prefix('/books')
                ->controller(BookController::class)
                ->group(function () {
                    Route::get('/', 'index')->name('books.index');
                    Route::post('/', 'store')->name('books.store');
                    Route::put('/{book}',  'update')->name('books.update');
                    Route::delete('/{book}', 'destroy')->name('books.destroy');
                });

            Route::prefix('booking')
            ->controller(BookingController::class)
                ->group(function () {
                    Route::get('/all', 'index')->name('booking.index');
                    Route::get('/current', 'current')->name('booking.current');

                });

            Route::prefix('/requests')
                ->controller(ExtensionRequestController::class)
                ->group(function () {

                Route::get('/','index')->name('requests.index');

                Route::prefix('/{request}')->group(function (){
                    Route::get('{/reject','reject')->name('requests.reject');
                    Route::get('{/accept','accept')->name('requests.accept');
                });

            });
        });
});


Route::get('/pages/{page}', [BookController::class, 'allByPage']);
Route::get('/search',[BookController::class,'search']);

Route::prefix('auth')->group(function () {
    Route::post('/login', [LoginController::class, "login"]);
    Route::get('/logout', [LoginController::class, 'logout']);
});


