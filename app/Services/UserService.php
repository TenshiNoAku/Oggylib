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
}
