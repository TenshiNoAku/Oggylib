<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExtentsionRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => $this->booking->user->name . ' '.$this->booking->user->surname,
            'book' => $this->booking->book->name,
            'booking_date' => $this->booking->booking_date,
        ];
    }
}
