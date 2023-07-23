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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string("name", 140);
            $table->text("description")->nullable();
            $table->boolean("is_available")->default(1);
            $table->unsignedFloat("rating")->default(0);
            $table->text("image")->nullable();
            $table->text("url")->nullable(); //TODO: сделать генератор url
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
