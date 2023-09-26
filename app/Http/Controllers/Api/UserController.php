<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use App\Http\Resources\UserResource;
use App\Services\UserService;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
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

    public function index(){
        return UserResource::collection(User::all());
    }
    public function destroy(User $user){
        $user->delete();
    }


    /**
     * @return ResourceCollection
     */
    public function notifications(): ResourceCollection
    {
        return NotificationResource::collection(auth()->user()->notifics);
    }

    public function notifications_clear(UserService $service){
        $user = $service->clear_notifications();
        return new UserResource($user);
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
