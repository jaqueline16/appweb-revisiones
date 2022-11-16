<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    
    protected $table = 'tr_archivos';

    protected $fillabe=[
        'archivo',
        'id_revision'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
