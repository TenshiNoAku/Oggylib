<?php

namespace App\Services;

use App\Http\Requests\CommentStoreRequest;
use App\Http\Requests\UserBookChangeRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Book;
use App\Models\UserBook;
use Illuminate\Http\Request;

class UserBookService

{
    public function add_comment(CommentStoreRequest $request, Book $book, BookService $service){
        $credentials = $request->only(['text','score']);
        $credentials['user_id'] = auth()->user()->id;
        $credentials['book_id'] = $book->id;
        $comment = Comment::create($credentials);
        $service->refresh_rating($book);
        return new CommentResource($comment);
    }

    private function find_or_create(Book $book){
        $bookId = $book->id;
        $userId = auth()->user()->id;
        $userBook = UserBook::firstOrCreate([
            'user_id'=>$userId,
            'book_id'=>$bookId
        ]);
        return $userBook;
    }

    public function changing(Book $book, $credentials){
        $userBook = $this->find_or_create($book);
        $userBook->update([
            'score'=>intval($credentials['score']),
            'status'=>$credentials['status'],
            'is_favourite'=>intval($credentials['is_favourite'])
        ]);

        return $userBook;
    }


}
