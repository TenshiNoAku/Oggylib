<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentStoreRequest;
use App\Models\Notification;
use App\Services\BookService;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Book;

class CommentController extends Controller
{
    public function store(Book $book,CommentStoreRequest $request,BookService $service){
        $request->validated();
        $credentials = $request->only(['text','score']);
        $credentials['user_id'] = auth()->user()->id;
        $credentials['book_id'] = $book->id;
        Comment::create($credentials);
        $service->refresh_rating($book);
    }
}
