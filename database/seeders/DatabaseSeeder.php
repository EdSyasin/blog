<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            "username" => "admin",
            "first_name" => "Админ",
            "last_name" => "Админов",
            "email" => "admin@test.ru",
            "password" => Hash::make('admin'),
            "role" => 1
        ]);

        User::create([
            "username" => "user",
            "first_name" => "Пользователь",
            "last_name" => "Пользователев",
            "email" => "user@test.ru",
            "password" => Hash::make('user'),
            "role" => 3
        ]);
    }
}
