<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('tc_categorias')->insert([
            [
                'categoria' => 'Estructura y estilo',
                'activo' => '1',
            ],
            [
                'categoria' => 'Lenguaje',
                'activo' => '1',
            ],
            [
                'categoria' => 'Referencias y citado',
                'activo' => '1',
            ],
            [
                'categoria' => 'Comentarios y sugerencias',
                'activo' => '1',
            ]
        ]);


       /* Tc_Categorias::truncate();

        $categorias =  [
            [
                'categoria' => 'Estructura y estilo',
                'activo' => '1',
            ],
            [
                'categoria' => 'Lenguaje',
                'activo' => '1',
            ],
            [
                'categoria' => 'Referencias y citado',
                'activo' => '1',
            ],
            [
                'categoria' => 'Comentarios y sugerencias',
                'activo' => '1',
            ]
          ];

          Tc_Categorias::insert($categorias);*/
    }
}
