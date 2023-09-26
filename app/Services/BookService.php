<?php

namespace App\Services;

use App\Actions\BookAttachAction;
use App\Http\Requests\BookStoreRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\UserBook;
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
        $book = Book::create($request->only('name','description'));

        $attachAction->handle($request->authors, 'authors', $book);

        if ($request->exists('tags')) {
            $attachAction->handle($request->tags, 'tags', $book);
        }

        if ($request->exists('genres')) {
            $attachAction->handle($request->genres, 'genres', $book);
        }
        return $book;
    }

    public function update(Book $book,BookUpdateRequest $request,BookAttachAction $attachAction){
        $request->validated();
        $book->update($request->only('name','description'));
        $book->authors()->detach();
        $book->tags()->detach();
        $book->genres()->detach();

        $attachAction->handle($request->authors, 'authors', $book);

        if ($request->exists('tags')) {
            $attachAction->handle($request->tags, 'tags', $book);
        }

        if ($request->exists('genres')) {
            $attachAction->handle($request->genres, 'genres', $book);
        }
    }

    public function refresh_rating(Book $book)
    {
        $rating = UserBook::all()->where('book_id',$book->id)->avg('score');
        if($rating){
            $book->update(['rating'=> $rating]);
        }
    }
}
