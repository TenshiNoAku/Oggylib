<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Http\Controllers\Api\UserController;
use App\Models\Author;
use App\Models\Book;
use App\Models\Booking;
use App\Models\Comment;
use App\Models\Genre;
use App\Models\Notification;
use App\Models\Tag;
use App\Models\User;
use App\Models\UserBook;
use App\Services\BookService;
use Illuminate\Database\Seeder;
use function Symfony\Component\Translation\t;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(BookService $service): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $books = Book::factory(100)->create();
        $authors = Author::factory(50)->create();
        $tags = Tag::factory(50)->create();
        $genres = Genre::factory(50)->create();
        $users = User::factory(15)->create();
        $comments = Comment::factory(150)->create();
        Notification::factory(30)->create();
        UserBook::factory(100)->create();
        Booking::factory(20)->create();
        User::create([
            'name'=>'admin',
            'surname'=>'admin',
            'password'=>'$2a$10$y0I.ILAhqweZkontI4zUeeLKFSSW2eoHOx4YvGzHESXb4RvsAfsq.',
            'email'=>'admin@admin.com',
            'is_admin'=>1
        ]);
        foreach ($books as $book){
            $author_id = $authors->random(1)->pluck('id');
            $genre_id = $genres->random(1)->pluck('id');
            $tags_id = $tags->random(3)->pluck('id');
            $book->authors()->attach($author_id);
            $book->genres()->attach($genre_id);
            $book->tags()->attach($tags_id);
            $service->refresh_rating($book);


        }

    }
}
