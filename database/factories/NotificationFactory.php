<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'departure_date' => $this->faker->dateTimeBetween('+7 days','+30 days'),
            'text' =>$this->faker->text,
            'user_id'=>User::all()->random(1)->pluck('id')[0],
        ];
    }
}
