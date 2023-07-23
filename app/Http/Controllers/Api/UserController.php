<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Http\Resources\UserResource;
use App\Services\BookService;
use App\Services\UserService;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserStoreRequest;

class UserController extends Controller
{

    /**
     * @param Request $request
     * @return UserResource
     */

    public function show(Request $request){
        return new UserResource($request->user());
    }

    /**
     * @param BookService $service
     * @return ResourceCollection
     */

    public function favourites(BookService $service) : ResourceCollection
    {
        $user = Auth::user();
        $data = $service->getFavourite($user);
        return BookResource::collection($data);
    }

    /**
     * @param UserStoreRequest $request
     * @param UserService $service
     * @return UserResource
     */

    public function store(UserStoreRequest $request,UserService $service){
        $user = $service->store($request);
        return new UserResource($user);
    }
}
