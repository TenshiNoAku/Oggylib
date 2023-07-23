<?php

namespace App\Actions;
use App\Models\Author;
use App\Models\Genre;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Model;
class BookAttachAction
{
    /**
     * @param $names_array
     * @param string $modelToAttachName
     * @param Model $book
     * @return void
     */
   public function handle($names_array, string $modelToAttachName,Model $book){
       $models = [
           "tags"=>Tag::class,
           "authors"=>Author::class,
           "genres"=>Genre::class
       ];

       $modelToAttach = $models[$modelToAttachName];

       foreach ($names_array as $name){
           $name_id = $modelToAttach::firstOrCreate(['name'=>$name])->id;
           $book->$modelToAttachName()->attach($name_id);
       }
   }
}
