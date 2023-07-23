<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'book'=>[
                'title'=>$this->book->name,
                'authors'=>$this->book->authors,
                'url'=>$this->book->url
            ],
            'user'=>[
                'name'=>$this->user->name,
                'surname'=>$this->user->surname
            ],
            'booking_date'=>$this->booking_date,
            'return_date'=>$this->return_date,
        ];
    }
}
