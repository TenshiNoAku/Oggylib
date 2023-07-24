<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only("email", "password"))) {
            return response([
                'message' => 'unauthorized',
                'status' => '401'
            ], Response::HTTP_UNAUTHORIZED);
        }
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);

        return response([
            'message' => 'success',
            'status' => '200'
        ])->withCookie($cookie);
    }

    /**
     * @return UserResource
     */

    public function user()
    {
        return new UserResource(Auth::user());
    }

    public function logout(Response $response)
    {
        $cookie = cookie()->forget('jwt');
        return response([
            'message' => 'success'
        ])->withCookie($cookie);
    }

}
