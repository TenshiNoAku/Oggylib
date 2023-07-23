<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'image' => $this->image,
            'rating' => $this->rating,
            'url' => $this->url,

            'tags' => $this->when($request->routeIs('books.show'), function () {
                return TagResource::collection($this->tags);
            }),
            'authors' => $this->when($request->routeIs('books.show'), function () {
                return AuthorResource::collection($this->authors);
            }),
            'genres' => $this->when($request->routeIs('books.show'), function () {
                return GenreResource::collection($this->genres);
            }),
            'comments' => $this->when($request->routeIs('books.show'),function () {
                return CommentResource::collection($this->comments);}),
            'is_available' => $this->is_available,

        ];
    }
}
