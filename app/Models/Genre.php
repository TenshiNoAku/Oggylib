<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $hidden = ['pivot']; // hide relationship info
    protected $guarded =[];
    public $timestamps = false;
    use HasFactory;
}
