<?php

namespace App\Http\Controllers\Api;

use App\Actions\BookAttachAction;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookStoreRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookResource;
use App\Services\BookService;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{


    /**
     * @param int $page
     * @return ResourceCollection
     */
    public function allByPage(int $page)// : ResourceCollection //Todo: Move to PageController
    {

        $data = Book::all()->chunk(10)[$page - 1];
        return BookResource::collection($data);
    }

    /**
     * @param BookStoreRequest $request
     * @param BookService $service
     * @param BookAttachAction $attachAction
     * @return BookResource
     */
    public function store(BookStoreRequest $request, BookService $service, BookAttachAction $attachAction): BookResource
    {
        $request->validated();
        $book = $service->store($request, $attachAction);
        return new BookResource($book);
    }

    /**
     * @param int $id
     * @return void
     */
    public function destroy(int $id)
    {
        Book::findOrFail($id)->delete();
    }

    /**
     * @param int $id id of shown book
     * @return BookResource book data
     */
    public function show(int $id): BookResource
    {
        return new BookResource(Book::findOrFail($id));
    }

    /**
     * @return ResourceCollection
     */

    public function index(): ResourceCollection
    {
        return BookResource::collection(Book::all());
    }

    public function update(Book $book, BookUpdateRequest $request, BookService $service, BookAttachAction $attachAction)
    {
        $service->update($book, $request, $attachAction);
    }

    public function search(Request $request){
        $query = Book::query();
        if ($s = $request->input('s')){
            $query->whereRaw("name LIKE '%".$s."%'");
        }
        $booksPerPage = 2;

        $page = $request->input('page',1);
        $totalPages = ceil($query->count()/$booksPerPage);
        $result =  $query->offset(($page-1)*$booksPerPage)->limit($booksPerPage)->get();

        return [
            'data' => $result,
            'page'=>$page,
             'last_page' => $totalPages
        ];
    }
}
