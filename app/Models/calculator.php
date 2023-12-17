<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calculator extends Model
{
    use HasFactory;

    protected $table = 'track_calc';

    protected $fillable = [
        'users_id', 'weight', 'height', 'age', 'bmi', 'calories', 'body_weight', 'tanggal', 'jam'
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
