<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Author extends Model
{
    use HasFactory;
    protected $hidden = ['pivot']; // hide relationship info
    protected $guarded= [];
    public $timestamps = false;
}
