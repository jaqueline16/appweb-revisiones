<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrArchivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Tr_Archivos', function (Blueprint $table) {
            $table->id('id_archivo');
            $table->string('archivo');
            $table->unsignedBigInteger('id_revision');
            $table->boolean('activo')->default(1);
            $table->timestamps();

            $table->foreign('id_revision')->references('id_revision')->on('Tr_Revisiones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_tr_archivos');
    }
}
