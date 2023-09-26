<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function store($request){

        $data = $request->validated();
        $data['password'] = bcrypt($request->password) ;
        $user = User::create($data);
        return $user;
    }

    public function clear_notifications(){
        $curr_user = auth()->user();
        foreach ($curr_user->notifics as $notification){
            $notification->delete();
        }
        return $curr_user;
    }
}
