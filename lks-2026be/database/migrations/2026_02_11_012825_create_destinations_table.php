<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->text('deskripsi');
            $table->string('lokasi');
            $table->string('lat');
            $table->string('long');
            $table->string('foto');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('harga_tiket');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
