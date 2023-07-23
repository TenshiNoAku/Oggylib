<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'text'=>$this->faker->text,
            'score'=>$this->faker->numberBetween(1,5),
            'user_id'=>User::all()->random(1)->pluck('id')[0],
            'book_id'=>Book::all()->random(1)->pluck('id')[0],

        ];
    }
}
