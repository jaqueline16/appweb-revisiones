<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrRevisionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Tr_Revisiones', function (Blueprint $table) {
            $table->id('id_revision');
            $table->date('fecha_revision');
            $table->string('nombre_articulo');
            $table->unsignedBigInteger('id_revista_congreso');
            $table->unsignedBigInteger('id_usuario');
            $table->boolean('activo')->default(1);
            $table->timestamps();

            $table->foreign('id_revista_congreso')->references('id_revista_congreso')->on('Tr_revistaCongreso');
            $table->foreign('id_usuario')->references('id_usuario')->on('Tr_Usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_tr_revisiones');
    }
}
