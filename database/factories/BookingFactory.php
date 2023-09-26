<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
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
            'book_id'=>$this->faker->unique()->randomElement(Book::all())->id,
            //'booking_date'=>$this->faker->dateTimeBetween('now','now'),


        ];
    }
}
