<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrRevistaCongresoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Tr_revistaCongreso', function (Blueprint $table) {
            $table->id('id_revista_congreso');
            $table->string('nombre');
            $table->unsignedBigInteger('id_usuario');
            $table->boolean('activo')->default(1);
            $table->timestamps();

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
        Schema::dropIfExists('_tr_revista_congreso');
    }
}
