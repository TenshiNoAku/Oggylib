<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use App\Http\Resources\BookingResource;
use Illuminate\Http\Resources\Json\ResourceCollection;


class AdminJournalController extends Controller
{
    /**
     * @return ResourceCollection
     */
    public function index() : ResourceCollection{
        return BookingResource::collection(Booking::all());
    }
}
