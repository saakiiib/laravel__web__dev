<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
        protected $fillable = [
        'name',
        'email',
        'bio',
        'birthdate',
    ];

    use HasFactory;

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
