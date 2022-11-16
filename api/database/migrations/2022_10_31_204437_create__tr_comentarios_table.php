<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrComentariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Tr_Comentarios', function (Blueprint $table) {
            $table->id('id_comentario');
            $table->string('comentario');
            $table->date('fecha_comentario');
            $table->unsignedBigInteger('id_revision');
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_categoria');
            $table->boolean('activo')->default(1);
            $table->timestamps();

            $table->foreign('id_revision')->references('id_revision')->on('Tr_Revisiones');
            $table->foreign('id_usuario')->references('id_usuario')->on('Tr_Usuarios');
            $table->foreign('id_categoria')->references('id_categoria')->on('Tc_Categorias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_tr_comentarios');
    }
}
