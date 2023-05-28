<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MapController;
use App\Http\Controllers\MuCangChaiController;
use App\Http\Controllers\KhauPhaController;
use App\Http\Controllers\CheTaoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Map

Route::get('/map', [MapController::class, 'index']);

// MuCangChai

Route::get('/mucangchai', [MuCangChaiController::class, 'index']);

Route::post('/mucangchai', [MuCangChaiController::class, 'store']);

Route::get('/mucangchai/{muCangChai}', [MuCangChaiController::class, 'show']);

Route::post('/mucangchai/{muCangChai}', [MuCangChaiController::class, 'update']);

Route::delete('/mucangchai/{muCangChai}', [MuCangChaiController::class, 'destroy']);

Route::get('/mucangchai/search/{key}', [MuCangChaiController::class, 'search']);

// KhauPha

Route::get('/khaupha', [KhauPhaController::class, 'index']);

Route::post('/khaupha', [KhauPhaController::class, 'store']);

Route::get('/khaupha/{KhauPha}', [KhauPhaController::class, 'show']);

Route::post('/khaupha/{KhauPha}', [KhauPhaController::class, 'update']);

Route::delete('/khaupha/{KhauPha}', [KhauPhaController::class, 'destroy']);

Route::get('/khaupha/search/{key}', [KhauPhaController::class, 'search']);

// CheTao

Route::get('/chetao', [CheTaoController::class, 'index']);

Route::post('/chetao', [CheTaoController::class, 'store']);

Route::get('/chetao/{CheTao}', [CheTaoController::class, 'show']);

Route::post('/chetao/{CheTao}', [CheTaoController::class, 'update']);

Route::delete('/chetao/{CheTao}', [CheTaoController::class, 'destroy']);

Route::get('/chetao/search/{key}', [CheTaoController::class, 'search']);