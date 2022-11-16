<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    //linea que se coloca si el modelo no se llama igual que la tabla
    protected $table = 'tr_revisiones';

    //colocar los datos de la tabla que vamos a manipular desde el controlador 
    protected $fillabe=[
        'nombre_articulo',
        'id_revista_congreso',
        'id_usuario',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
