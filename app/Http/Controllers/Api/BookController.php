<?php

namespace App\Http\Controllers\Api;

use App\Actions\BookAttachAction;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookStoreRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\UserResource;

use App\Services\BookService;
use Illuminate\Http\Request;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use App\Models\Book;
use App\Models\User;



class BookController extends Controller
{


    /**
     * @param int $page
     * @return ResourceCollection
     */
    public function allByPage(int $page) : ResourceCollection //Todo: Move to PageController
    {
        $data = Book::all()->chunk(10)[$page-1];
        return BookResource::collection($data);
    }

    /**
     * @param BookStoreRequest $request
     * @param BookService $service
     * @param BookAttachAction $attachAction
     * @return BookResource
     */
    public function store(BookStoreRequest $request,BookService $service,BookAttachAction $attachAction) : BookResource
    {
        $request->validated();
        $book = $service->store($request,$attachAction);
        return new BookResource($book);
    }

    /**
     * @param int $id
     * @return void
     */
    public function destroy(int $id){
         Book::findOrFail($id)->delete();
    }

    /**
     * @param int $id  id of shown book
     * @return BookResource book data
     */
    public function show(int $id) : BookResource  {
        return new BookResource(Book::findOrFail($id));
    }

    /**
     * @return ResourceCollection
     */

    public function index(): ResourceCollection
    {
        return BookResource::collection(Book::all());
    }

    public function update(){

    }
}
