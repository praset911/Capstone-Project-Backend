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
        Schema::create('track_calc', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('users_id');
            $table->foreign('users_id')->references('id')->on('users');            
            $table->decimal('weight', 10, 2);
            $table->decimal('height', 10, 2);
            $table->integer('age');
            $table->decimal('bmi', 10, 2);
            $table->decimal('calories', 10, 2);
            $table->decimal('body_weight', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('track_calc');
    }
};
