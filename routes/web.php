<?php

use App\Http\Controllers\CalculatorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/articles', function () {
    return Inertia::render('Articles');
});

Route::get('/calc-it', [CalculatorController::class,'index'])->name('cal.index');
Route::post('/calc-it/store', [CalculatorController::class,'store'])->name('cal.store');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});

require __DIR__.'/auth.php';
