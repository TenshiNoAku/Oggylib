<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentStoreRequest;
use App\Http\Requests\UserBookChangeRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\CommentResource;
use App\Models\Book;

use App\Models\Booking;
use Illuminate\Http\Request;
use App\Services\BookService;
use App\Services\UserBookService;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserBookController extends Controller
{
    public function reading()// : ResourceCollection
    {

        return BookResource::collection(auth()->user()->whereBookStatus('reading'));
    }

    /**
     * @return ResourceCollection
     */
    public function read(): ResourceCollection
    {
        return BookResource::collection(auth()->user()->whereBookStatus('read'));
    }

    /**
     * @return ResourceCollection
     */
    public function postponed() : ResourceCollection
    {
        return BookResource::collection(auth()->user()->whereBookStatus('postponed'));
    }

    /**
     * @return ResourceCollection
     */
    public function dropped() :ResourceCollection
    {
        return BookResource::collection(auth()->user()->whereBookStatus('dropped'));
    }

    public function favourites(): ResourceCollection
    {
        return BookResource::collection(auth()->user()->fav_books);
    }

    public function add_comment(Book $book,CommentStoreRequest $request,BookService $bookService,UserBookService $service){
        $request->validated();
        $comment = $service->add_comment($request,$book,$bookService);
        return new CommentResource($comment);
    }

    public function changing(Request $request,Book $book,UserBookService $service){
       //    return $request->only('score');
        return $service->changing($book,$request->only('score','status','is_favourite'));
    }

    public function  return_book(Book $book){
        $booking = Booking::where([
            'user_id'=>auth()->user()->id,
            'book_id'=>$book->id
        ])->firstOrFail();
        $booking->delete();
        return $booking;

    }

    public function take_book(Book $book){
            $booking = Booking::firstOrCreate(
                [
                    'user_id'=>auth()->user()->id,
                    'book_id'=>$book->id
                ]);
            return $booking;

    }
}
