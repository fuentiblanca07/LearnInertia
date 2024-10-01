<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\DashboardControl;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\List\UserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', DashboardControl::class)->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/userList', UserController::class)->middleware(['auth', 'verified'])->name('userList');

Route::get('/Homepage', DashboardControl::class)->middleware(['auth', 'verified'])->name('Homepage');
// Route::patch('/dashboard', [DashboardControl::class, 'update'])->name('dashboard.update');
Route::middleware('auth')->group(function () {
    Route::put('/dashboard/{id}', [DashboardControl::class, 'update'])->name('dashboard.update');
});

Route::middleware('auth')->group(function () {
    Route::post('userList', [UserController::class, 'create'])->name('user.post');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
