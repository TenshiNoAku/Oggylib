<?php

namespace App\Http\Resources;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'email' => $this->email,
            'name' => $this->name,
            'surname' => $this->surname,
            'notifications' => $this->when($request->routeIs('user.show'), function () {
                return NotificationResource::collection($this->notifics);
            }),
            'notifications_count' => count($this->notifics)
        ];
    }
}
