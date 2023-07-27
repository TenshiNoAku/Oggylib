<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Http\Resources\NotificationResource;
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

    public function show(Request $request)
    {
        return new UserResource($request->user());
    }

    public function destroy(User $user){
        $user->delete();
    }

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
        return BookResource::collection(auth()->user()->whereBookStatus('postponned'));
    }

    /**
     * @return ResourceCollection
     */
    public function dropped() :ResourceCollection
    {
        return BookResource::collection(auth()->user()->whereBookStatus('dropped'));
    }

    /**
     * @return ResourceCollection
     */

    public function favourites(): ResourceCollection
    {
        return BookResource::collection(auth()->user()->fav_books);
    }

    /**
     * @return ResourceCollection
     */
    public function notifications(): ResourceCollection
    {
        return NotificationResource::collection(auth()->user()->notifics);
    }

    /**
     * @param UserStoreRequest $request
     * @param UserService $service
     * @return UserResource
     */

    public function store(UserStoreRequest $request, UserService $service)
    {
        $user = $service->store($request);
        return new UserResource($user);
    }
}
