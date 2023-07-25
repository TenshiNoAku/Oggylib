<?php

namespace App\Services;

use App\Actions\BookAttachAction;
use App\Http\Requests\BookStoreRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Support\Facades\Auth;

class BookService
{

    /**
     * @param BookStoreRequest $request
     * @param BookAttachAction $attachAction
     * @return Book
     */
    public function store(BookStoreRequest $request, BookAttachAction $attachAction): Book
    {
        $author_names = $request->authors;
        $book = Book::create($request->only('name'));

        $attachAction->handle($request->authors, 'authors', $book);

        if ($request->exists('tags')) {
            $attachAction->handle($request->tags, 'tags', $book);
        }

        if ($request->exists('genres')) {
            $attachAction->handle($request->genres, 'genres', $book);
        }
        return $book;
    }

    public function refresh_rating(Book $book)
    {
        $rating = $book->comments()->avg('score');
        if($rating){
            $book->update(['rating'=> $rating]);
        }
    }
}
