<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserBook>
 */
class UserBookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'=>User::all()->random(1)->pluck('id')[0],
            'book_id'=>Book::all()->random(1)->pluck('id')[0],
            'status'=>$this->faker->randomElement(['reading','postponed','dropped','read']),
            'is_favourite'=>$this->faker->boolean(70),
        ];
    }
}
