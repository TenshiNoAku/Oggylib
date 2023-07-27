<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingResource;
use App\Models\Book;
use App\Models\Booking;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

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
}
