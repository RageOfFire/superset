<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhauPha extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'stationId', 'amount', 'time', 'source'
    ];
    protected $table = 'tram_kp';
}
