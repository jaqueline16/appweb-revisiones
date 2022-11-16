<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $table = 'tr_comentarios';

    protected $fillabe=[
        'comentario',
        'id_revision',
        'id_usuario',
        'id_categoria'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
