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
        Schema::table('track_calc', function (Blueprint $table) {
            $table->date('tanggal')->after('body_weight')->nullable();
            $table->time('jam')->after('tanggal')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('track_calc', function (Blueprint $table) {
            $table->dropColumn('tanggal');
            $table->dropColumn('jam');
        });
    }
};
