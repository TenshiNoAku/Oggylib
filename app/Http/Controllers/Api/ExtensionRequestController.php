<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ExtensionRequest;
use Illuminate\Http\Request;
use App\Http\Resources\ExtentsionRequestResource;
use Illuminate\Support\Carbon;

class ExtensionRequestController extends Controller
{
    public function index(){
        return ExtentsionRequestResource::collection(ExtensionRequest::all());
    }

    public function accept(ExtensionRequest $request){

        $date = Carbon::createFromFormat('Y-m-d',$request->booking->return_date);
        $date=$date->addDays(7);
        $request->booking->update(['return_date'=>$date]);
        $request->delete();
    }

    public function reject(ExtensionRequest $request){
        $request->delete();
    }
}
