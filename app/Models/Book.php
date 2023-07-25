<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $hidden = ['pivot'];
    protected $guarded = [];
    public $timestamps = false;

    protected $with = ['authors','tags','genres','comments'];
    public function authors(){
        return $this->belongsToMany(Author::class);
    }

    public function tags(){
        return $this->belongsToMany(Tag::class);
    }

    public function genres(){
        return $this->belongsToMany(Genre::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function booked(){
        return $this->hasOne(Booking::class);
    }




}
