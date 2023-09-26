<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use App\Models\Book;

class BookingController extends Controller
{

    public function index(){
        return BookingResource::collection(Booking::withTrashed()->get());
    }

    public function current(){
        return BookingResource::collection(Booking::all());
    }

    public function destroy(int $id){
        Booking::findOrFail($id)->delete();
    }
    public function take(Book $book){
        $booking = Booking::firstOrcreate(
            [
            'user_id'=>auth()->user()->id,
            'book_id'=>$book->id
        ]);
        return $booking;
    }

}
