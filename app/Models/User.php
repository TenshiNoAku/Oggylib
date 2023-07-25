<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable,HasFactory,HasApiTokens;

    //protected $fillable = ['name','surname'];
    protected $guarded=['is_admin'];
    protected $hidden = ['password','image','is_admin'];
    public $timestamps = false;
    protected $withCount = ['notifics'];
    protected $with = ['notifics'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function booked() {
        return $this->belongsToMany(Book::class,'bookings','user_id','book_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function fav_books(){
        return $this->books()->wherePivot('is_favourite',1);
    }

    /**
     * @param string $status
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function whereBookStatus(string $status){
        return $this->books()->wherePivot('status', $status)->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function books(){
        return $this->belongsToMany(Book::class,'user_books','user_id','book_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function notifics()
    {
        return $this->hasMany(Notification::class);
    }

}
