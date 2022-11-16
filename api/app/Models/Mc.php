<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mc extends Model
{
    use HasFactory;
    protected $table = 'tr_revistacongreso';

    protected $fillabe=[
        'nombre',
        'id_usuario'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
