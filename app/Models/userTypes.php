<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userTypes extends Model
{
    use HasFactory;

    protected $table = 'user_types';
    protected $fillable = [
        'desc'
    ];
}
