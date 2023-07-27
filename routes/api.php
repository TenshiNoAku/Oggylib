<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BookingController;
use App\Models\Book;
use App\Http\Controllers\Api\ExtensionRequestController;

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

            Route::prefix('/books')->group(function () {
                Route::get('/reading', 'reading')->name('user.reading');
                Route::get('/dropped', 'dropped')->name('user.reading');
                Route::get('/read', 'read')->name('user.read');
                Route::get('/postponed', 'postponed')->name('user.postponed');
                Route::get('/favourites', 'favourites')->name('user.favourites');
            });


        });
    Route::middleware('can:admin')
        ->prefix('admin')
        ->group(function () {

            Route::prefix('/users')
                ->controller(UserController::class)
                ->group(function () {
                    Route::post('/', 'store')->name('users.store');
                   //TODO: route -> user.update
                    Route::delete('/{user}', 'destroy')->name('users.destroy');
                });

            Route::prefix('/books')
                ->controller(BookController::class)
                ->group(function () {
                    Route::get('/', [BookController::class, 'index'])->name('books.index');
                    Route::post('/', [BookController::class, 'store'])->name('books.store');
                    Route::put('/{book}', [BookController::class, 'update'])->name('books.update');
                    Route::delete('/{book}', [BookController::class, 'destroy'])->name('books.destroy');
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
                Route::get('{request}/reject/','reject')->name('requests.reject');
                Route::get('{request}/accept','accept')->name('requests.accept');
            });
        });
});


Route::get('/pages/{page}', [BookController::class, 'allByPage']);


Route::prefix('auth')->group(function () {
    Route::post('/login', [LoginController::class, "login"]);
    Route::post('/logout', [LoginController::class, 'logout']);
});

Route::get('/delete/{id}',[BookingController::class,'destroy']);

Route::apiResources([
    'books' => BookController::class,
]);


